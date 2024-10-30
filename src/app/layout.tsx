import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Price Dashboard',
  description: 'Summary of top cryptos price'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="container mx-auto p-4">
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
              </div>
            }
          >
            <h1 className="mb-6 text-3xl font-bold">
              Cryptocurrency Dashboard
            </h1>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  )
}
