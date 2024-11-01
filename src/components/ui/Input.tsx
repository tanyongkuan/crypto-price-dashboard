'use client'

import { mergeClasses } from '@/lib/utils'
import React from 'react'

type InputProps = {
  icon: React.ReactNode | JSX.Element
  type?: string
  placeholder?: string
  className?: string
  onClick?: () => void
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'>

export const Input: React.FC<InputProps> = ({
  icon,
  type = 'text',
  placeholder,
  className,
  ...props
}) => {
  return (
    <div
      className={mergeClasses(
        'flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:border-blue-500',
        className
      )}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 focus:outline-none"
        {...props}
      />
    </div>
  )
}
