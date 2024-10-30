import { env } from '@/env.mjs'
import { NextResponse } from 'next/server'
import { TCryptoData, TCryptoDetail } from '@/types'

const baseUrl = env.COIN_GECKO_API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': process.env.COIN_GECKO_API_KEY ?? ''
  }
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const response = await fetch(
    `${baseUrl}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`,
    options
  )

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  const data: TCryptoData = await response.json()
  const cryptoDetail: TCryptoDetail = {
    id: data.id,
    name: data.name,
    current_price: data.market_data.current_price.usd,
    high_24h: data.market_data.high_24h.usd,
    low_24h: data.market_data.low_24h.usd
  }

  return NextResponse.json(cryptoDetail)
}
