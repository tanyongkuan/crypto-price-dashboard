import CryptoDetailClient from './components/CryptoDetailClient'
import { fetchCryptoDetail } from '@/lib/fetchCryptoData'

export default async function CryptoCoinPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const initialData = await fetchCryptoDetail(id)

  return <CryptoDetailClient id={id} initialData={initialData} />
}
