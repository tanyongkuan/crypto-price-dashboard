import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development')
  },
  server: {
    ALLOWED_CRYPTOS: z.string().refine((val) => val.split(',').length > 0, {
      message:
        'NEXT_PUBLIC_ALLOWED_CRYPTOS must contain at least one cryptocurrency'
    }),
    COIN_GECKO_API: z.string().url(),
    COIN_GECKO_API_KEY: z.string()
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url()
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1)
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    ALLOWED_CRYPTOS: process.env.ALLOWED_CRYPTOS,
    COIN_GECKO_API: process.env.COIN_GECKO_API,
    COIN_GECKO_API_KEY: process.env.COIN_GECKO_API_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  }
})
