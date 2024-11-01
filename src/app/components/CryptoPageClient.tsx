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
  const [error, setError] = useState(errorMessage)

  const handleRefresh = useCallback(async () => {
    try {
      const newData = await fetchCryptoList() // Internal API endpoint for server fetch
      setCryptoData(newData)
      setError('')
    } catch (error) {
      setError('Failed to fetch cryptocurrency data')
      console.error('Failed to refresh crypto data:', error)
    }
  }, [])

  return (
    <>
      <ErrorMessage errorMessage={error} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {cryptoData.map((crypto, index) => (
          <CryptoCard key={index} data={crypto} />
        ))}
      </div>
      <DataRefresher
        onRefresh={handleRefresh}
        interval={120000}
        skipInitialFetch
        enabled={!error}
      />
    </>
  )
}

export default CryptoPageClient
