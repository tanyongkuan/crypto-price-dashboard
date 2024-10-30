'use client'

import { useState, useCallback } from 'react'
import { TCryptoDetail } from '@/types'
import DataRefresher from '@/app/components/DataRefresher'
import { fetchCryptoDetail } from '@/lib/fetchCryptoData'
import StatsCard from './StatsCard'
import CryptoMinMaxBar from './MinMaxBar'

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

      {!cryptoDetails && !error && <div className="p-4">Loading...</div>}
      {Object.keys(cryptoDetails).length > 0 && (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-xl font-semibold">
                {cryptoDetails.name}
              </span>
              <span className="text-3xl font-bold">
                ${cryptoDetails.current_price.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold capitalize">
                {cryptoDetails.name} statistics
              </span>
              <CryptoMinMaxBar
                min={+cryptoDetails.low_24h.toFixed(2)}
                max={+cryptoDetails.high_24h.toFixed(2)}
                current={+cryptoDetails.current_price.toFixed(2)}
              />
              <div className="flex flex-col gap-4 md:flex-row">
                <StatsCard
                  title="24h High"
                  content={`$${cryptoDetails.high_24h.toFixed(2)}`}
                />
                <StatsCard
                  title="24h Low"
                  content={`$${cryptoDetails.low_24h.toFixed(2)}`}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Use DataRefresher to auto-refresh every 2 minutes */}
      <DataRefresher
        onRefresh={handleRefresh}
        interval={120000}
        skipInitialFetch
        enabled={!error}
      />
    </>
  )
}
