'use client'

import { useEffect, useCallback, useState } from 'react'
import { useHydration } from '@/hooks/useHydration'

interface DataRefresherProps {
  onRefresh: () => Promise<void>
  interval?: number // Allow customizable refresh interval
  skipInitialFetch?: boolean // Allow disabling the refresh
  enabled?: boolean
}

const DataRefresher: React.FC<DataRefresherProps> = ({
  onRefresh,
  interval = 120000, // Default to 2 minutes
  skipInitialFetch = false,
  enabled = false
}) => {
  const isHydrated = useHydration()
  const [retryCount, setRetryCount] = useState(0)

  const safeRefresh = useCallback(async () => {
    if (!isHydrated || !enabled) return
    try {
      await onRefresh()
      setRetryCount(0) // Reset retry count on success
    } catch (error) {
      console.error('Refresh failed:', error)
      setRetryCount((prev) => (prev < 3 ? prev + 1 : prev))
    }
  }, [isHydrated, enabled, onRefresh])

  // Retry effect
  useEffect(() => {
    if (retryCount === 0 || retryCount >= 3) return // Only retry if count is between 1 and 2

    const retryTimeout = setTimeout(() => {
      safeRefresh()
    }, 5000)

    return () => clearTimeout(retryTimeout)
  }, [retryCount, safeRefresh])

  useEffect(() => {
    if (!isHydrated || !enabled) return

    let mounted = true
    let timeoutId: NodeJS.Timeout | null = null

    const executeRefresh = async () => {
      if (!mounted) return

      await safeRefresh()

      if (mounted) {
        timeoutId = setTimeout(executeRefresh, interval)
      }
    }

    if (!skipInitialFetch) {
      executeRefresh()
    } else {
      timeoutId = setTimeout(executeRefresh, interval)
    }

    return () => {
      mounted = false
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [safeRefresh, interval, skipInitialFetch, enabled, isHydrated])

  return null
}

export default DataRefresher
