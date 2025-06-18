'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
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
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev)
  }, [])

  // Memoize margin calculation to prevent unnecessary re-renders
  const mainMargin = useMemo(() => 
    isDesktop ? (sidebarOpen ? 280 : 80) : 0, 
    [isDesktop, sidebarOpen]
  )

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism Background System */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-snow/98 via-tiffany_blue/3 to-persian_green/8 dark:from-night/98 dark:via-jet/90 dark:to-persian_green/15" />
        
        {/* Floating glass orbs for depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-persian_green/8 to-tiffany_blue/12 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-tiffany_blue/10 to-persian_green/6 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-jet/8 to-persian_green/5 rounded-full blur-2xl opacity-30" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-15 mix-blend-soft-light bg-glass-primary" />
      </div>

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        {/* Main Content Area */}
        <motion.main
          animate={{
            marginLeft: mainMargin
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="flex-1 min-h-screen lg:ml-0"
          style={{
            marginLeft: mainMargin
          }}
        >
          {/* Top Header with Glass Effect */}
          <header className="sticky top-0 z-30 border-b border-persian_green/20 shadow-sm bg-brand-light-85 backdrop-blur-xl">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-persian_green hover:bg-persian_green/10 dark:hover:bg-persian_green/20 transition-colors duration-300 lg:hidden"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Desktop Toggle */}
                <button
                  onClick={toggleSidebar}
                  className="hidden lg:flex p-2 rounded-lg text-persian_green hover:bg-brand-secondary-10 dark:hover:bg-brand-primary-20 transition-colors duration-300"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Title Section */}
                {(title || subtitle) && (
                  <div>
                    {title && (
                      <h1 className="text-2xl font-bold text-jet dark:text-snow">
                        {title}
                      </h1>
                    )}
                    {subtitle && (
                      <p className="text-sm text-jet/70 dark:text-snow/70">
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
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-jet/50 dark:text-snow/50" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 w-64 bg-snow dark:bg-jet border border-tiffany_blue/30 rounded-lg text-jet dark:text-snow placeholder-jet/50 dark:placeholder-snow/50 focus:outline-none focus:ring-2 focus:ring-persian_green focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Notifications */}
                <button
                  className="relative p-2 rounded-lg text-persian_green hover:bg-persian_green/10 dark:hover:bg-persian_green/20 transition-colors duration-300"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></span>
                </button>

                {/* User Menu */}
                <button
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-persian_green/10 dark:hover:bg-persian_green/20 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-persian_green to-tiffany_blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-jet dark:text-snow">
                      John Doe
                    </p>
                    <p className="text-xs text-jet/70 dark:text-snow/70">
                      john@example.com
                    </p>
                  </div>
                </button>
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