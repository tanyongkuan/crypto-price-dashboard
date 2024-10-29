export type CryptoPrice = {
  usd: number
  usd_24h_change: number
}

export type CryptoPriceWithId = CryptoPrice & {
  id: string
}

export type Top5CryptoPriceResponse = {
  bitcoin?: CryptoPrice
  cardano?: CryptoPrice
  dogecoin?: CryptoPrice
  ethereum?: CryptoPrice
  solana?: CryptoPrice
}

export interface CryptoDetail {
  name: string
  current_price: number
  high_24h: number
  low_24h: number
}
