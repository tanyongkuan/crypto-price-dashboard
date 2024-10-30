'use client'

import { Suspense, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen)

  return (
    <>
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <div
        className={`transition-margin flex-1 ${
          isCollapsed ? 'md:ml-16' : 'md:ml-64'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />

        <div className="p-8">
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
              </div>
            }
          >
            {/* Children content here */}
            {/* <h1 className="mb-4 text-2xl font-semibold">Dashboard</h1>
            <p>Welcome to your responsive dashboard!</p> */}
            {children}
          </Suspense>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </>
  )
}
