'use client'

import { useState, useCallback } from 'react'
import CryptoCard from '@/app/components/CryptoCard'
import { TCryptoPriceWithId } from '@/types'
import DataRefresher from '@/components/DataRefresher'
import { fetchCryptoList } from '@/lib/fetchCryptoData'
import ErrorMessage from '@/components/ui/ErrorMessage'

type CryptoPageClientProps = {
  initialData: Array<TCryptoPriceWithId>
  errorMessage: string
}

const CryptoPageClient: React.FC<CryptoPageClientProps> = ({
  initialData,
  errorMessage
}) => {
  const [cryptoData, setCryptoData] = useState(initialData)
  const [error, setError] = useState<string | null>(errorMessage || null)

  const handleRefresh = useCallback(async () => {
    try {
      const newData = await fetchCryptoList()

      setCryptoData((prev) => {
        if (JSON.stringify(prev) === JSON.stringify(newData)) {
          return prev // No change, prevent unnecessary rerender
        }

        return newData
      })

      setError(null)
    } catch (error) {
      setError('Failed to fetch cryptocurrency data')
      console.error('Failed to refresh crypto data:', error)
      console.error(`[CryptoPageClient] Failed to refresh crypto data:`, error)
    }
  }, [])

  return (
    <>
      <ErrorMessage errorMessage={error} />
      {cryptoData.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {cryptoData.map((crypto, index) => (
            <CryptoCard key={index} data={crypto} />
          ))}
        </div>
      )}
      <DataRefresher
        onRefresh={handleRefresh}
        skipInitialFetch
        enabled={!error}
      />
    </>
  )
}

export default CryptoPageClient
