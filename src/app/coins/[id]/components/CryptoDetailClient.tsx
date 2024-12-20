'use client'

import { useState, useCallback } from 'react'
import { TCryptoDetail } from '@/types'
import DataRefresher from '@/components/DataRefresher'
import { fetchCryptoDetail } from '@/lib/fetchCryptoData'
import MinMaxBar from '@/components/ui/MinMaxBar'
import { formatCryptoCurrency } from '@/lib/formatting'
import Card from '@/components/ui/Card'
import ErrorMessage from '@/components/ui/ErrorMessage'

type CryptoDetailClientProps = {
  id: string
  initialData: TCryptoDetail
  errorMessage: string
}

const CryptoDetailClient: React.FC<CryptoDetailClientProps> = ({
  id,
  initialData,
  errorMessage = ''
}) => {
  const [cryptoDetails, setCryptoDetails] = useState(initialData)
  const [error, setError] = useState<string | null>(errorMessage)

  const handleRefresh = useCallback(async () => {
    try {
      const newData = await fetchCryptoDetail(id)

      setCryptoDetails((prev) => {
        if (JSON.stringify(prev) === JSON.stringify(newData)) {
          return prev // No change, prevent unnecessary rerender
        }

        return newData
      })

      setError(null)
    } catch (error) {
      setError('Failed to fetch cryptocurrency data')
      console.error(
        `[CryptoDetailClient] Failed to refresh data for ${id}:`,
        error
      )
    }
  }, [id])

  return (
    <>
      <ErrorMessage errorMessage={error} />
      {cryptoDetails && cryptoDetails.name && (
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold capitalize">
                {cryptoDetails.name} /{' '}
                <span className="text-gray-light">USD</span>
              </h2>
              <span className="text-2xl font-semibold">
                {formatCryptoCurrency(cryptoDetails.current_price)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium capitalize">
                {cryptoDetails.name} statistics
              </span>
              <MinMaxBar
                className="max-w-3xl"
                min={cryptoDetails.low_24h}
                max={cryptoDetails.high_24h}
                current={cryptoDetails.current_price}
                label="24h Range"
                formatter={formatCryptoCurrency}
              />
            </div>
          </div>
        </Card>
      )}
      {/* Use DataRefresher to auto-refresh every 2 minutes */}
      <DataRefresher
        onRefresh={handleRefresh}
        skipInitialFetch
        enabled={!error}
      />
    </>
  )
}
export default CryptoDetailClient
