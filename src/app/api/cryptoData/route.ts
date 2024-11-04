import { TCryptoPriceWithId, TCryptoPriceResponse } from '@/types'
import { NextResponse } from 'next/server'
import { env } from '@/env.mjs'

const CURRENCY = 'usd'
// const PRECISION = '2'

const baseUrl = env.COIN_GECKO_API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': env.COIN_GECKO_API_KEY
  }
}

export async function GET() {
  if (baseUrl === '') {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  const response = await fetch(
    `${baseUrl}/simple/price?ids=${env.ALLOWED_CRYPTOS}&vs_currencies=${CURRENCY}&include_24hr_change=true&include_last_updated_at=true`,
    options
  )

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  const data: TCryptoPriceResponse = await response.json()
  console.log(data)
  const cryptoArray: Array<TCryptoPriceWithId> = Object.entries(data).map(
    ([id, details]) => ({
      id,
      ...details
    })
  )

  return NextResponse.json(cryptoArray)
}
