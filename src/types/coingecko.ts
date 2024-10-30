import { z } from 'zod'

//#region CryptoData /simple/price
export const CryptoPrice = z.object({
  usd: z.number(),
  usd_24h_change: z.number()
})

export const CryptoPriceWithId = CryptoPrice.extend({
  id: z.string()
})

export const CryptoPriceResponse = z.record(CryptoPrice)

export type TCryptoPriceWithId = z.infer<typeof CryptoPriceWithId>
export type TCryptoPriceResponse = z.infer<typeof CryptoPriceResponse>
//#endregion

//#region CryptoData /coin/id
export const CryptoMarketPrice = z.object({
  btc: z.number(),
  eur: z.number(),
  usd: z.number()
})

export const MarketData = z.object({
  current_price: CryptoMarketPrice,
  high_24h: CryptoMarketPrice,
  low_24h: CryptoMarketPrice
  //Can include other types in the future
})

export const CryptoData = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  market_data: MarketData
})

export const CryptoDetail = CryptoData.pick({
  id: true,
  name: true
}).extend({
  current_price: z.number(),
  high_24h: z.number(),
  low_24h: z.number()
})

export type TCryptoMarketPrice = z.infer<typeof CryptoMarketPrice>
export type TMarketData = z.infer<typeof MarketData>
export type TCryptoData = z.infer<typeof CryptoData>
export type TCryptoDetail = z.infer<typeof CryptoDetail>
//#endregion
