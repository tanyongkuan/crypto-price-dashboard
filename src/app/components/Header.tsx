// import { Bell, User } from 'lucide-react'

// const Topbar = () => {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 shadow-md">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-1/2 rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//       />
//       <div className="flex items-center gap-4">
//         <Bell className="h-6 w-6 text-gray-600" />
//         <User className="h-8 w-8 text-gray-600" />
//       </div>
//     </div>
//   )
// }

// export default Topbar
// components/Navbar.js
import { Menu, Bell } from 'lucide-react'
// import { useState } from 'react'
import Image from 'next/image'

interface NavbarProps {
  toggleSidebar: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => (
  <header className="sticky top-0 z-10 bg-white shadow-md">
    <div className="flex h-16 items-center justify-between px-4 md:justify-end">
      <button
        onClick={toggleSidebar}
        className="text-gray-600 focus:outline-none md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden w-64 rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none md:block"
        />
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-6 w-6 text-gray-600" />
        </button>
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
  // <div className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-white px-4 py-2 shadow-md md:justify-end">
  //   <button
  //     onClick={toggleSidebar}
  //     className="block text-gray-600 focus:outline-none md:hidden"
  //   >
  //     <Menu size={24} />
  //   </button>
  //   <div className="flex items-center space-x-4">
  //     <input
  //       type="text"
  //       placeholder="Search..."
  //       className="hidden w-64 rounded border px-3 py-1 focus:outline-none md:block"
  //     />
  //     {/* Notifications and profile */}
  //     <div className="flex items-center space-x-4">
  //       <button className="p-2">
  //         {/* <Image src="/notification-icon.svg" alt="Notifications" /> */}
  //         <BellRing size={24} />
  //       </button>
  //       <Image
  //         src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
  //         alt="User Avatar"
  //         className="h-8 w-8 rounded-full"
  //         width={50}
  //         height={50}
  //       />
  //     </div>
  //   </div>
  // </div>
)

export default Navbar
