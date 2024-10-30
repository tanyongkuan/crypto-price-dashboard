'use client'

import { useRouter } from 'next/navigation'
import { TCryptoPriceWithId } from '@/types'

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
    <div
      onClick={handleClick}
      className="transform cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-4 text-lg shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md"
    >
      <h3 className="mb-2 font-medium capitalize">{id}</h3>
      <div className="flex items-center gap-2">
        <span className="font-medium">${usd.toLocaleString()}</span>
        <span
          className={`flex items-center font-medium ${isProfit() ? 'text-green-500' : 'text-red-500'}`}
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
    </div>
  )
}

export default CryptoCard
