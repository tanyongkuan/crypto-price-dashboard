import CryptoDetailClient from './components/CryptoDetailClient'
import { fetchCryptoDetail } from '@/lib/fetchCryptoData'
import { isCryptoAllowed } from '@/lib/cryptoUtils'
import { TCryptoDetail } from '@/types'

export default async function CryptoCoinPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let initialData = {} as TCryptoDetail
  let errorMessage = ''

  // Validate cryptocurrency ID
  if (!isCryptoAllowed(id)) {
    errorMessage = `Cryptocurrency ${id} is not supported.`
  } else {
    try {
      initialData = await fetchCryptoDetail(id)
    } catch (err) {
      console.log(err)
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
