import CryptoDetailClient from './components/CryptoDetailClient'
import { fetchCryptoDetail } from '@/lib/fetchCryptoData'
import { isCryptoAllowed } from '@/lib/cryptoUtils'
import { TCryptoDetail } from '@/types'
import Page from '@/components/ui/Page'
import { Suspense } from 'react'
import CryptoDetailSkeleton from './components/CryptoDetailSkeleton'

export default async function CryptoCoinPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <Page header="Summary">
      <Suspense fallback={<CryptoDetailSkeleton />}>
        <CryptoDetailContent id={id} />
      </Suspense>
    </Page>
  )
}

export async function CryptoDetailContent({ id }: { id: string }) {
  let initialData = {} as TCryptoDetail
  let errorMessage = ''

  if (!isCryptoAllowed(id)) {
    errorMessage = `Cryptocurrency ${id} is not supported.`
  } else {
    try {
      initialData = await fetchCryptoDetail(id)
    } catch (err) {
      console.error(err)
      errorMessage = `Data for ${id} could not be retrieved.`
    }
  }

  return (
    <CryptoDetailClient
      id={id}
      initialData={initialData}
      errorMessage={errorMessage}
    />
  )
}
