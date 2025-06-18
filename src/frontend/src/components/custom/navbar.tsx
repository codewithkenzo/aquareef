'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Waves, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Demo', href: '#demo' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fffafb]/95 dark:bg-[#131515]/95 backdrop-blur-lg shadow-lg border-b border-[#7de2d1]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#339989] to-[#7de2d1] rounded-xl flex items-center justify-center shadow-lg">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-[#2b2c28] dark:text-[#fffafb] tracking-tight">
              Aquareef
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#2b2c28] dark:text-[#fffafb] hover:text-[#339989] dark:hover:text-[#7de2d1] font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#339989] to-[#7de2d1] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[#2b2c28] dark:text-[#fffafb] hover:text-[#339989] dark:hover:text-[#7de2d1] font-medium transition-colors duration-300">
              Sign In
            </button>
            <a href="/dashboard">
              <Button className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 group">
                Dashboard
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2b2c28] dark:text-[#fffafb] hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-[#fffafb]/95 dark:bg-[#131515]/95 backdrop-blur-lg border-t border-[#7de2d1]/20"
        >
          <div className="py-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-[#2b2c28] dark:text-[#fffafb] hover:text-[#339989] dark:hover:text-[#7de2d1] hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 font-medium transition-all duration-300 rounded-lg"
              >
                {item.name}
              </button>
            ))}
            
            <div className="px-4 pt-4 space-y-3 border-t border-[#7de2d1]/20">
              <button className="block w-full text-left py-3 text-[#2b2c28] dark:text-[#fffafb] hover:text-[#339989] dark:hover:text-[#7de2d1] font-medium transition-colors duration-300">
                Sign In
              </button>
              <a href="/dashboard">
                <Button className="w-full bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white py-3 rounded-full font-semibold transition-all duration-300">
                  Dashboard
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 