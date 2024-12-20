import type { NextConfig } from 'next'
import { fileURLToPath } from 'url'
import { createJiti } from 'jiti'

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url)).import('./src/env.mjs')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**' // This allows all paths from Unsplash
      }
    ]
  }
}

export default nextConfig
