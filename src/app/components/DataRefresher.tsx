'use client'

import { useEffect } from 'react'

interface DataRefresherProps {
  onRefresh: () => Promise<void>
  interval?: number // Allow customizable refresh interval
  enabled?: boolean // Allow disabling the refresh
}

const DataRefresher: React.FC<DataRefresherProps> = ({
  onRefresh,
  interval = 300000, // Default to 5 minutes
  enabled = true
}) => {
  useEffect(() => {
    if (!enabled) return

    // Initial refresh
    onRefresh()

    // Set up interval
    const intervalId = setInterval(onRefresh, interval)

    // Cleanup on unmount
    return () => clearInterval(intervalId)
  }, [onRefresh, interval, enabled])

  return null
}

export default DataRefresher
