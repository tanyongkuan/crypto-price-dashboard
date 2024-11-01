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

interface SidebarProps {
  isMobileSidebarOpen: boolean
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
  isCollapsed,
  setIsCollapsed
}) => {
  const pathname = usePathname()

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex flex-col bg-gray-800 text-white transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'} ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div
          className={`flex h-16 items-center justify-between p-4 ${isCollapsed ? 'justify-center' : ''}`}
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
            className="hidden rounded-lg bg-gray-700 p-1.5 hover:bg-gray-700/90 md:block"
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
                className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} ${isCollapsed ? 'justify-center' : ''}`}
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
