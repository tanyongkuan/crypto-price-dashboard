'use client'

import { Suspense, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

type DashboardLayout = {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen)

  return (
    <>
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />
      <div
        className={`transition-margin flex-1 ${
          isCollapsed ? 'md:ml-16' : 'md:ml-64'
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="p-4 md:p-8">
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
              </div>
            }
          >
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

export default DashboardLayout
