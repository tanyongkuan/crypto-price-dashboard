'use client'

import { useRouter } from 'next/navigation'
import { TCryptoPriceWithId } from '@/types'
import { formatCryptoCurrency } from '@/lib/formatting'
import { Card } from '@/components/ui/Card'
import { ExternalLink } from 'lucide-react'

interface CryptoCardProps {
  data: TCryptoPriceWithId
}

const CryptoCard: React.FC<CryptoCardProps> = ({ data }) => {
  const router = useRouter()
  const { id, usd, usd_24h_change } = data

  const isProfit = () => usd_24h_change && usd_24h_change > 0

  const handleClick = () => {
    router.push(`/coins/${id}`)
  }

  return (
    <Card className="group relative" onClick={handleClick}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold capitalize">{id}</h2>
        <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold">
          {formatCryptoCurrency(usd)}
        </span>
        <span
          className={`flex items-center font-medium ${isProfit() ? 'text-positive' : 'text-negative'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`h-5 w-5 ${isProfit() ? 'rotate-180' : ''}`}
          >
            <path d="M18.0566 8H5.94336C5.10459 8 4.68455 9.02183 5.27763 9.61943L11.3343 15.7222C11.7019 16.0926 12.2981 16.0926 12.6657 15.7222L18.7223 9.61943C19.3155 9.02183 18.8954 8 18.0566 8Z"></path>
          </svg>
          {Math.abs(usd_24h_change ?? 0).toFixed(2)}%
        </span>
      </div>
    </Card>
  )
}

export default CryptoCard
