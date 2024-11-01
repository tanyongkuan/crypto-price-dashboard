import Page from '@/components/ui/Page'
import CryptoPageClient from './components/CryptoPageClient'
import { fetchCryptoList } from '@/lib/fetchCryptoData'
import { Suspense } from 'react'
import { TCryptoPriceWithId } from '@/types'
import CryptoGridSkeleton from './components/CryptoGridSkeleton'

export default async function CryptoPage() {
  return (
    <Page
      header="Tracked Cryptocurrencies"
      description="A predefined list of popular cryptocurrencies with 24-hour data."
    >
      <Suspense fallback={<CryptoGridSkeleton />}>
        <CryptoDashboardContent />
      </Suspense>
    </Page>
  )
}

async function CryptoDashboardContent() {
  let initialData = {} as Array<TCryptoPriceWithId>
  let errorMessage = ''

  try {
    initialData = await fetchCryptoList()
  } catch (err) {
    console.error(err)
    errorMessage = 'Error retrieving crypto dashboard'
  }

  return (
    <CryptoPageClient initialData={initialData} errorMessage={errorMessage} />
  )
}
