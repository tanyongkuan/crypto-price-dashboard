'use client'

import { useState, useCallback } from 'react'
import CryptoCard from '@/app/components/CryptoCard'
import { TCryptoPriceWithId } from '@/types'
import DataRefresher from '@/components/DataRefresher'
import { fetchCryptoList } from '@/lib/fetchCryptoData'
import Page from '@/components/ui/Page'

export default function CryptoPageClient({
  initialData
}: {
  initialData: Array<TCryptoPriceWithId>
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
      <Page
        header="Tracked Cryptocurrencies"
        description="A predefined list of popular cryptocurrencies with 24-hour data."
        error={error}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {cryptoData.map((crypto, index) => (
            <CryptoCard key={index} data={crypto} />
          ))}
        </div>
      </Page>
      <DataRefresher
        onRefresh={handleRefresh}
        interval={120000}
        skipInitialFetch
        enabled={!error}
      />
    </>
  )
}
