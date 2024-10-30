'use client'

import { useEffect } from 'react'

interface DataRefresherProps {
  onRefresh: () => Promise<void>
  interval?: number // Allow customizable refresh interval
  skipInitialFetch?: boolean // Allow disabling the refresh
  enabled?: boolean
}

const DataRefresher: React.FC<DataRefresherProps> = ({
  onRefresh,
  interval = 300000, // Default to 5 minutes
  skipInitialFetch = false,
  enabled = false
}) => {
  useEffect(() => {
    if (!enabled) {
      return
    }

    if (!skipInitialFetch) {
      // Perform initial fetch if not skipping
      onRefresh()
    }

    // Set up interval
    const intervalId = setInterval(onRefresh, interval)

    // Cleanup on unmount
    return () => clearInterval(intervalId)
  }, [onRefresh, interval, skipInitialFetch, enabled])

  return null
}

export default DataRefresher
