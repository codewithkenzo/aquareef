'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  animated?: boolean
}

const sizes = {
  sm: { icon: 'w-6 h-6', text: 'text-lg', container: 'gap-2' },
  md: { icon: 'w-8 h-8', text: 'text-xl', container: 'gap-2' },
  lg: { icon: 'w-10 h-10', text: 'text-2xl', container: 'gap-3' },
  xl: { icon: 'w-12 h-12', text: 'text-3xl', container: 'gap-3' }
}

export function Logo({ 
  className = '', 
  size = 'md', 
  showText = true, 
  animated = true 
}: LogoProps) {
  const sizeClasses = sizes[size]
  
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 200, 
        damping: 20,
        duration: 0.6 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const iconVariants = {
    initial: { rotate: 0 },
    animate: { 
      rotate: [0, -10, 10, 0],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut" as const
      }
    },
    hover: {
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.5 }
    }
  }

  const textVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { delay: 0.2, duration: 0.4 }
    }
  }

  const LogoContent = () => (
    <div className={`flex items-center ${sizeClasses.container} ${className}`}>
      {/* Icon Container */}
      <motion.div
        variants={animated ? logoVariants : {}}
        initial={animated ? "initial" : false}
        animate={animated ? "animate" : false}
        whileHover={animated ? "hover" : undefined}
        className="relative"
      >
        <div className={`${sizeClasses.icon} bg-gradient-to-br from-[#339989] to-[#7de2d1] rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#339989]/20 to-[#7de2d1]/20 blur-xl" />
          
          {/* Icon */}
          <motion.div
            variants={animated ? iconVariants : {}}
            className="relative z-10"
          >
            <Zap className={`${sizeClasses.icon.replace('w-', 'w-').replace('h-', 'h-').split(' ')[0].replace('w-', 'w-').replace('10', '6').replace('8', '5').replace('6', '4').replace('12', '7')} text-white`} />
          </motion.div>
        </div>
        
        {/* Subtle pulse effect */}
        {animated && (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute inset-0 ${sizeClasses.icon} bg-gradient-to-br from-[#339989] to-[#7de2d1] rounded-xl -z-10 blur-sm`}
          />
        )}
      </motion.div>

      {/* Text */}
      {showText && (
        <motion.span
          variants={animated ? textVariants : {}}
          initial={animated ? "initial" : false}
          animate={animated ? "animate" : false}
          className={`${sizeClasses.text} font-black text-[#2b2c28] dark:text-[#fffafb] tracking-tight`}
        >
          Blaze
        </motion.span>
      )}
    </div>
  )

  return animated ? (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="cursor-pointer"
    >
      <LogoContent />
    </motion.div>
  ) : (
    <LogoContent />
  )
} 