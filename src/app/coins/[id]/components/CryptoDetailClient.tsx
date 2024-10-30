'use client'

import { useState, useCallback } from 'react'
import { TCryptoDetail } from '@/types'
import DataRefresher from '@/app/components/DataRefresher'
import { fetchCryptoDetail } from '@/lib/fetchCryptoData'

export default function CryptoDetailClient({
  id,
  initialData,
  errorMessage = ''
}: {
  id: string
  initialData: TCryptoDetail
  errorMessage: string
}) {
  const [cryptoDetails, setCryptoDetails] = useState(initialData)
  const [error, setError] = useState<string | null>(errorMessage)

  console.log(cryptoDetails)

  const handleRefresh = useCallback(async () => {
    try {
      const newData = await fetchCryptoDetail(id) // Internal API endpoint for server fetch
      setCryptoDetails(newData)
    } catch (error) {
      setError('Failed to fetch cryptocurrency data')
      console.error('Failed to refresh crypto data:', error)
    }
  }, [id])

  return (
    <>
      {error && <div className="text-red-500">{error}</div>}
      <div className="mx-auto max-w-md rounded-lg bg-gray-900 p-6 text-white shadow-lg">
        {!cryptoDetails && !error && <div className="p-4">Loading...</div>}

        {Object.keys(cryptoDetails).length > 0 && (
          <>
            <h1 className="mb-4 text-3xl font-bold">{cryptoDetails.name}</h1>
            <p className="text-xl">
              Current Price: ${cryptoDetails.current_price.toFixed(2)}
            </p>
            <p className="text-lg">
              24h High: ${cryptoDetails.high_24h.toFixed(2)}
            </p>
            <p className="text-lg">
              24h Low: ${cryptoDetails.low_24h.toFixed(2)}
            </p>
          </>
        )}

        {/* Use DataRefresher to auto-refresh every 2 minutes */}
        <DataRefresher
          onRefresh={handleRefresh}
          interval={120000}
          skipInitialFetch
          enabled={!error}
        />
      </div>
    </>
  )
}
