// pages/api/cryptoData.js
import { CryptoPriceWithId, Top5CryptoPriceResponse } from '@/types'
import { NextResponse } from 'next/server'

const CURRENCY = 'usd'
const COINIDS = ['bitcoin', 'ethereum', 'dogecoin', 'cardano', 'solana']
const coinsQuery = COINIDS.join(',')
const PRECISION = '2'

const baseUrl = process.env.COIN_GECKO_API?.toString()
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': process.env.COIN_GECKO_API_KEY ?? ''
  }
}

export async function GET() {
  if (baseUrl === '') {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  console.log(
    `${baseUrl}/simple/price?ids=${coinsQuery}&vs_currencies=${CURRENCY}&precision=${PRECISION}&include_24hr_change=true&include_last_updated_at=true`
  )
  const response = await fetch(
    `${baseUrl}/simple/price?ids=${coinsQuery}&vs_currencies=${CURRENCY}&precision=${PRECISION}&include_24hr_change=true&include_last_updated_at=true`,
    options
  )

  console.log(response)

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  const data: Top5CryptoPriceResponse = await response.json()
  const cryptoArray: Array<CryptoPriceWithId> = Object.entries(data).map(
    ([id, details]) => ({
      id,
      ...details
    })
  )

  return NextResponse.json(cryptoArray)
}
