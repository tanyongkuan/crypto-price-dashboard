import { useState, useEffect } from 'react'

export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // This runs after hydration is complete
    setIsHydrated(true)
  }, [])

  return isHydrated
}
