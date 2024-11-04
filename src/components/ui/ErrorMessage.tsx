type ErrorMessageProps = {
  errorMessage: string | null
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <div className="mt-2 rounded-lg bg-red-50 p-4 text-sm text-red-500 dark:bg-red-100 dark:text-red-600">
          {errorMessage}
        </div>
      )}
    </>
  )
}

export default ErrorMessage
