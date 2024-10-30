import { env } from '@/env.mjs'

/**
 * Get the predefined list in cryptos
 * @returns
 */
export const getAllowedCryptos = (): Array<string> => {
  return (
    env.ALLOWED_CRYPTOS.split(',').map((crypto) => crypto.toLowerCase()) || []
  )
}

/**
 * Check whether crypto id is in the predefined list (.env)
 * @param id crypto id
 * @returns true when id is in the list
 * @returns false when id is not in the list
 *
 */
export const isCryptoAllowed = (id: string): boolean =>
  getAllowedCryptos().includes(id.toLowerCase())
