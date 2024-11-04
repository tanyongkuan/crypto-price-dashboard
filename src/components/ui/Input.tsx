'use client'

import { mergeClasses } from '@/lib/utils'
import React from 'react'

type InputProps = {
  icon: React.ReactNode | JSX.Element
  type?: string
  placeholder?: string
} & React.HTMLAttributes<HTMLInputElement>

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
        'flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:border-blue-500',
        className
      )}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full min-w-0 text-sm focus:outline-none"
        {...props}
      />
    </div>
  )
}
