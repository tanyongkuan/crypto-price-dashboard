'use client'

import Link from 'next/link'
import {
  Home,
  BarChart2,
  Newspaper,
  Briefcase,
  Layout,
  ChevronRight
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SidebarProps {
  isMobileSidebarOpen: boolean
  setIsMobileSidebarOpen: (val: boolean) => void
  isCollapsed: boolean
  setIsCollapsed: (val: boolean) => void
}

const navItems = [
  { icon: <Home className="h-6 w-6" />, label: 'Home', href: '/' },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    label: 'Market',
    href: '/#'
  },
  { icon: <Newspaper className="h-6 w-6" />, label: 'News', href: '/#' },
  {
    icon: <Briefcase className="h-6 w-6" />,
    label: 'Portfolio',
    href: '/#'
  }
]

const Sidebar: React.FC<SidebarProps> = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  isCollapsed,
  setIsCollapsed
}) => {
  const pathname = usePathname()

  // State to track when the component has mounted
  const [isMounted, setIsMounted] = useState(false)

  // Close sidebar on mobile after refresh
  useEffect(() => {
    setIsMounted(true)
    setIsMobileSidebarOpen(false)
  }, [setIsMobileSidebarOpen])

  // Handle link click to close the sidebar on mobile view
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(false)
    }
  }

  return (
    <>
      <aside
        className={`bg-gray-dark fixed inset-y-0 left-0 z-20 flex flex-col text-white transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-16' : 'w-64'
        } ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${
          isMounted ? 'block' : 'hidden'
        } md:translate-x-0`}
      >
        <div
          className={`flex h-16 items-center justify-between p-4 ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Layout className="h-6 w-6" />
              <span className="text-xl font-bold">Blockchain.com</span>
            </div>
          )}
          {isCollapsed && <Layout className="h-6 w-6" />}
        </div>
        {/* Toggle Button */}
        <div className="absolute bottom-36 right-[-1rem]">
          <button
            aria-label="Collapse"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="bg-gray-dark hover:bg-gray-dark/90 hidden rounded-lg p-1.5 md:block"
          >
            <ChevronRight
              className={`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        <nav className="mt-6 flex flex-1 flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick} // Close sidebar on link click for mobile
                className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${
                  isActive
                    ? 'bg-gray-dark text-white'
                    : 'hover:bg-gray-dark text-gray-300 hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
