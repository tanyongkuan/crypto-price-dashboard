import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import DashboardLayout from './components/layout/DashboardLayout'

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
        <main className="bg-gray text-gray-dark dark:bg-gray-dark dark:text-gray flex min-h-screen">
          <DashboardLayout>{children}</DashboardLayout>
        </main>
      </body>
    </html>
  )
}
