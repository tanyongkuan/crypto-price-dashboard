'use client'

import Card from '@/components/ui/Card'

const CryptoCardSkeleton = () => {
  return (
    <Card className="group relative animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-6 w-24 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-4 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-8 w-32 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="flex items-center gap-1">
          <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-5 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </Card>
  )
}

const CryptoGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {Array.from({ length: 8 }).map((_, index) => (
        <CryptoCardSkeleton key={index} />
      ))}
    </div>
  )
}

export default CryptoGridSkeleton
