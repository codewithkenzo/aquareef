'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Bell, Search, User } from 'lucide-react'
import { Sidebar } from './sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffafb] via-[#fffafb] to-[#7de2d1]/5 dark:from-[#131515] dark:via-[#131515] dark:to-[#339989]/5">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        {/* Main Content */}
        <motion.main
          animate={{
            marginLeft: sidebarOpen ? 280 : 80
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="flex-1 lg:ml-0"
        >
          {/* Top Header */}
          <header className="sticky top-0 z-30 bg-[#fffafb]/80 dark:bg-[#131515]/80 backdrop-blur-xl border-b border-[#7de2d1]/20 shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-[#339989] hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 transition-colors duration-300 lg:hidden"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Desktop Toggle */}
                <button
                  onClick={toggleSidebar}
                  className="hidden lg:flex p-2 rounded-lg text-[#339989] hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 transition-colors duration-300"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Title Section */}
                {(title || subtitle) && (
                  <div>
                    {title && (
                      <h1 className="text-2xl font-bold text-[#2b2c28] dark:text-[#fffafb]">
                        {title}
                      </h1>
                    )}
                    {subtitle && (
                      <p className="text-sm text-[#2b2c28]/70 dark:text-[#fffafb]/70">
                        {subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#2b2c28]/50 dark:text-[#fffafb]/50" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 w-64 bg-[#fffafb] dark:bg-[#2b2c28] border border-[#7de2d1]/30 rounded-lg text-[#2b2c28] dark:text-[#fffafb] placeholder-[#2b2c28]/50 dark:placeholder-[#fffafb]/50 focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Notifications */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-lg text-[#339989] hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 transition-colors duration-300"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></span>
                </motion.button>

                {/* User Menu */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#339989] to-[#7de2d1] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-[#2b2c28] dark:text-[#fffafb]">
                      John Doe
                    </p>
                    <p className="text-xs text-[#2b2c28]/70 dark:text-[#fffafb]/70">
                      john@example.com
                    </p>
                  </div>
                </motion.button>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  )
} 