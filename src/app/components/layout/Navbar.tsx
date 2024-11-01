'use client'

import { Input } from '@/components/ui/Input'
import { Menu, Bell, Search } from 'lucide-react'
import Image from 'next/image'

interface NavbarProps {
  toggleSidebar: () => void
}

const SEARCH_ICON = <Search className="h-6 w-6 text-gray-600" />
const BELL_ICON = <Bell className="h-6 w-6 text-gray-600" />

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => (
  <header className="sticky top-0 z-10 bg-white shadow-md">
    <div className="flex h-16 items-center justify-between gap-4 px-4 md:justify-end">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="text-gray-600 focus:outline-none md:hidden"
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="flex flex-1 items-center justify-end gap-4">
        {/* Search Input */}
        <Input
          icon={SEARCH_ICON}
          placeholder="Search..."
          className="max-w-80"
        />
        {/* Notification Button */}

        <button
          className="rounded-full hover:bg-gray-100"
          aria-label="Notifications"
        >
          {BELL_ICON}
        </button>
        {/* Avatar Menu */}
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
          width={50}
          height={50}
        />
      </div>
    </div>
  </header>
)

export default Navbar
