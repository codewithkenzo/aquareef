'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface RippleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  rippleColor?: string
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export function RippleButton({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled = false,
  className = '',
  rippleColor = '#ffffff99'
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      size
    }

    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
  }

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) return
    
    createRipple(event)
    onClick?.()
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-2 border-persian_green text-persian_green bg-transparent hover:bg-brand-secondary-10'
      case 'ghost':
        return 'text-persian_green bg-transparent hover:bg-brand-secondary-10'
      default:
        return 'bg-gradient-to-r from-persian_green to-tiffany_blue hover:from-jet hover:to-persian_green text-white'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3'
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative overflow-hidden rounded-xl font-semibold transition-all duration-300
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['100%', '100%', '-100%', '-100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear'
        }}
      />
    </motion.button>
  )
}

// Preset configurations
export const RippleButtonPresets = {
  primary: (children: React.ReactNode, onClick?: () => void) => (
    <RippleButton onClick={onClick} variant="default" size="md">
      {children}
    </RippleButton>
  ),
  
  secondary: (children: React.ReactNode, onClick?: () => void) => (
    <RippleButton 
      onClick={onClick} 
      variant="outline" 
      size="md"
      rippleColor="#3399894d"
    >
      {children}
    </RippleButton>
  ),
  
  large: (children: React.ReactNode, onClick?: () => void) => (
    <RippleButton onClick={onClick} variant="default" size="lg">
      {children}
    </RippleButton>
  ),
  
  ghost: (children: React.ReactNode, onClick?: () => void) => (
    <RippleButton 
      onClick={onClick} 
      variant="ghost" 
      size="md"
      rippleColor="#7de2d166"
    >
      {children}
    </RippleButton>
  )
} 