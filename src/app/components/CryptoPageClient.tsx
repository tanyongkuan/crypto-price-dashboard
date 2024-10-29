'use client'

import { useState, useCallback } from 'react'
import CryptoCard from '@/app/components/CryptoCard'
import { CryptoPriceWithId } from '@/types'
import DataRefresher from './DataRefresher'
import { fetchCryptoList } from '@/lib/fetchCryptoData'

export default function CryptoPageClient({
  initialData
}: {
  initialData: CryptoPriceWithId[]
}) {
  const [cryptoData, setCryptoData] = useState(initialData)
  const [error, setError] = useState<string | null>(null)

  const handleRefresh = useCallback(async () => {
    try {
      const newData = await fetchCryptoList() // Internal API endpoint for server fetch
      setCryptoData(newData)
    } catch (error) {
      setError('Failed to fetch cryptocurrency data')
      console.error('Failed to refresh crypto data:', error)
    }
  }, [])

  return (
    <>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {cryptoData.map((crypto, index) => (
          <CryptoCard key={index} data={crypto} />
        ))}
        <DataRefresher onRefresh={handleRefresh} interval={120000} />
      </div>
    </>
  )
}
