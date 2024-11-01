import Card from '@/components/ui/Card'

export default function CryptoDetailSkeleton() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {/* Name skeleton */}
          <div className="h-7 w-32 animate-pulse rounded-md bg-gray-200" />
          {/* Price skeleton */}
          <div className="mt-1 h-8 w-48 animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col gap-2">
          {/* Statistics label skeleton */}
          <div className="h-6 w-40 animate-pulse rounded-md bg-gray-200" />
          {/* MinMaxBar skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200" />
            <div className="h-8 w-full max-w-3xl animate-pulse rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </Card>
  )
}
