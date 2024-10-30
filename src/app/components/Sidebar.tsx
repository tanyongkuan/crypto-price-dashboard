import Link from 'next/link'
import {
  Home,
  BarChart2,
  Newspaper,
  Briefcase,
  Layout,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isMobileSidebarOpen: boolean
  isCollapsed: boolean
  setIsCollapsed: (val: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobileSidebarOpen,
  isCollapsed,
  setIsCollapsed
}) => {
  const pathname = usePathname()
  const navItems = [
    { icon: <Home className="h-6 w-6" />, label: 'Home', href: '/' },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      label: 'Market',
      href: '/market'
    },
    { icon: <Newspaper className="h-6 w-6" />, label: 'News', href: '/news' },
    {
      icon: <Briefcase className="h-6 w-6" />,
      label: 'Portfolio',
      href: '/portfolio'
    }
  ]

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex flex-col bg-gray-800 text-white transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'} ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* <h1 className="mb-6 text-2xl font-bold">Blockchain.com</h1> */}
        <div
          className={`flex h-16 items-center justify-between p-4 ${isCollapsed ? 'justify-center' : ''}`}
        >
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Layout className="h-6 w-6" />
              <span className="text-xl font-bold">TailAdmin</span>
            </div>
          )}
          {isCollapsed && <Layout className="h-6 w-6" />}

          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden rounded-lg p-1.5 hover:bg-gray-700 md:block"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
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
      {/* <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-gray-800 p-2 text-white md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button> */}
      {/* <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-gray-800 text-white transition-all duration-300 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 ${isCollapsed ? 'md:w-16' : 'md:w-64'}`}
      >
        <div
          className={`flex h-16 items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-4`}
        >
          <div
            className={`flex items-center gap-2 ${isCollapsed ? 'hidden md:flex' : ''}`}
          >
            <Layout className="h-6 w-6" />
            {!isCollapsed && (
              <span className="text-xl font-bold">Dashboard</span>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden rounded-lg p-1.5 hover:bg-gray-700 md:block"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </aside> */}
      {/* <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-gray-800 text-white transition-all duration-300 ${
          isMobileView
            ? isMobileSidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full'
            : 'translate-x-0'
        } ${isCollapsed ? 'md:w-16' : 'md:w-64'}`}
      >
        <div
          className={`flex h-16 items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-4`}
        >
          <div
            className={`flex items-center gap-2 ${isCollapsed ? 'hidden md:flex' : ''}`}
          >
            <Layout className="h-6 w-6" />
            {!isCollapsed && (
              <span className="text-xl font-bold">Dashboard</span>
            )}
          </div>

          <button
            onClick={handleCollapseToggle}
            className="hidden rounded-lg p-1.5 hover:bg-gray-700 md:block"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
                onClick={() => isMobileView && setIsMobileSidebarOpen(false)}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </aside> */}
      {/* <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-gray-800 text-white transition-all duration-300 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div
          className={`flex h-16 items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-4`}
        >
          <div
            className={`flex items-center gap-2 ${isCollapsed ? 'md:flex' : ''}`}
          >
            <Layout className="h-6 w-6" />
            {!isCollapsed && (
              <span className="text-xl font-bold">Dashboard</span>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="hidden rounded-lg p-1.5 hover:bg-gray-700 md:block"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </aside> */}
    </>
  )
}

export default Sidebar
