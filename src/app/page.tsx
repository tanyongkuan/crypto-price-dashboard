import CryptoPageClient from './components/CryptoPageClient'
import { fetchCryptoList } from '@/lib/fetchCryptoData'

export default async function CryptoPage() {
  const initialData = await fetchCryptoList()

  return <CryptoPageClient initialData={initialData} />
}
