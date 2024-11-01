'use client'

import { mergeClasses } from '@/lib/utils'
import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'>

const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      className={mergeClasses(
        'rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900',
        onClick
          ? 'dark:hover:bg-gray-dark transform cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md'
          : '',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}
export default Card
