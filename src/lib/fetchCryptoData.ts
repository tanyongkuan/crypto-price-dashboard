import { CryptoPriceWithId } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' // Adjust to your actual base URL

export async function fetchCryptoList(): Promise<Array<CryptoPriceWithId>> {
  const response = await fetch(`${baseUrl}/api/cryptoData`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch cryptocurrency data')
  }

  return response.json()
}

export async function fetchCryptoDetail(id: string) {
  const response = await fetch(`${baseUrl}/api/cryptoDetails/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
