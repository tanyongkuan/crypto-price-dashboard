'use client'
import { mergeClasses } from '@/lib/utils'
import React, { useMemo } from 'react'

interface MinMaxBarProps {
  className?: string
  min: number
  max: number
  current: number
  label?: string // Custom label for the middle text
  formatter?: (value: number) => string // Optional formatter function
}

const MinMaxBar: React.FC<MinMaxBarProps> = ({
  min,
  max,
  current,
  label,
  formatter,
  className
}) => {
  const positionPercentage = useMemo(() => {
    if (max === min) return 0 // Avoid division by zero
    return ((current - min) / (max - min)) * 100
  }, [min, max, current])

  return (
    <div className={mergeClasses('space-y-1', className)}>
      <div className="bg-gray relative h-2 w-full rounded-full">
        <div className="from-negative to-positive via-warning absolute h-full w-full rounded-full bg-gradient-to-r" />
        <div
          className="bg-gray-dark absolute h-4 w-2 -translate-y-1 transform rounded-full"
          style={{
            left: `${positionPercentage}%`
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{formatter ? formatter(min) : min}</span>
        <span>{label}</span>
        <span>{formatter ? formatter(max) : max}</span>
      </div>
    </div>
  )
}

export default MinMaxBar
