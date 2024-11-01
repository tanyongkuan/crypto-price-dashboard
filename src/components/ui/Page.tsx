'use client'

type PageProps = {
  children: React.ReactNode
  header?: string
  description?: string
}

const Page: React.FC<PageProps> = ({ children, header, description }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          {header && (
            <span className="text-2xl font-semibold sm:text-3xl">{header}</span>
          )}
          {description && (
            <p className="dark:text-gray text-gray-light text-sm">
              {description}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Page
