'use client'

import { useState, useCallback } from 'react'
import CryptoCard from '@/app/components/CryptoCard'
import { TCryptoPriceWithId } from '@/types'
import DataRefresher from './DataRefresher'
import { fetchCryptoList } from '@/lib/fetchCryptoData'

export default function CryptoPageClient({
  initialData
}: {
  initialData: TCryptoPriceWithId[]
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
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-500">
          {error}
        </div>
      )}
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
