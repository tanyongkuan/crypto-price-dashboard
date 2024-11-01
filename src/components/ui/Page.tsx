'use client'

type PageProps = {
  children: React.ReactNode
  error: string | null
  header?: string
  description?: string
}

const Page: React.FC<PageProps> = ({
  children,
  error,
  header,
  description
}) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          {header && (
            <span className="text-2xl font-semibold sm:text-3xl">{header}</span>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        {error && (
          <div className="mt-2 rounded-lg bg-red-50 p-4 text-sm text-red-500 dark:bg-red-100 dark:text-red-600">
            {error}
          </div>
        )}
        <div>{children}</div>
      </div>
    </>
  )
}

export default Page
