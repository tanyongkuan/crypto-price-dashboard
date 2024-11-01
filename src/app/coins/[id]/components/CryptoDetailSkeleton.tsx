import Card from '@/components/ui/Card'

export default function CryptoDetailSkeleton() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {/* Name skeleton */}
          <div className="bg-gray h-7 w-32 animate-pulse rounded-md" />
          {/* Price skeleton */}
          <div className="bg-gray mt-1 h-8 w-48 animate-pulse rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          {/* Statistics label skeleton */}
          <div className="bg-gray h-6 w-40 animate-pulse rounded-md" />
          {/* MinMaxBar skeleton */}
          <div className="space-y-2">
            <div className="bg-gray h-4 w-24 animate-pulse rounded-md" />
            <div className="bg-gray h-8 w-full max-w-3xl animate-pulse rounded-md" />
          </div>
        </div>
      </div>
    </Card>
  )
}
