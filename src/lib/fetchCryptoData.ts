import { TCryptoPriceWithId, TCryptoDetail } from '@/types'
import { env } from '@/env.mjs'

const baseUrl =
  env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : env.NEXT_PUBLIC_BASE_URL

export async function fetchCryptoList(): Promise<Array<TCryptoPriceWithId>> {
  const response = await fetch(`${baseUrl}/api/cryptoData`)

  if (!response.ok) {
    throw new Error('Failed to fetch cryptocurrency data')
  }

  return response.json()
}

export async function fetchCryptoDetail(id: string): Promise<TCryptoDetail> {
  const response = await fetch(`${baseUrl}/api/cryptoDetails/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
