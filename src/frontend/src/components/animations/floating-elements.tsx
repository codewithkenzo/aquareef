'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, TrendingUp, Share2, Brain, Target } from 'lucide-react'

const floatingElements = [
  {
    icon: Sparkles,
    color: 'text-[#339989]',
    size: 'w-8 h-8',
    position: { top: '10%', left: '10%' },
    animation: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      rotate: [0, 10, 0],
    },
    duration: 6,
  },
  {
    icon: Zap,
    color: 'text-[#7de2d1]',
    size: 'w-6 h-6',
    position: { top: '20%', right: '15%' },
    animation: {
      y: [0, 25, 0],
      x: [0, -15, 0],
      rotate: [0, -8, 0],
    },
    duration: 8,
  },
  {
    icon: TrendingUp,
    color: 'text-green-500',
    size: 'w-10 h-10',
    position: { bottom: '25%', left: '8%' },
    animation: {
      y: [0, -20, 0],
      x: [0, 25, 0],
      rotate: [0, 15, 0],
    },
    duration: 7,
  },
  {
    icon: Share2,
    color: 'text-teal-500',
    size: 'w-7 h-7',
    position: { top: '60%', right: '10%' },
    animation: {
      y: [0, 30, 0],
      x: [0, -20, 0],
      rotate: [0, -12, 0],
    },
    duration: 9,
  },
  {
    icon: Brain,
    color: 'text-cyan-500',
    size: 'w-9 h-9',
    position: { bottom: '40%', right: '20%' },
    animation: {
      y: [0, -25, 0],
      x: [0, 15, 0],
      rotate: [0, 8, 0],
    },
    duration: 5,
  },
  {
    icon: Target,
    color: 'text-orange-500',
    size: 'w-6 h-6',
    position: { top: '40%', left: '5%' },
    animation: {
      y: [0, 20, 0],
      x: [0, -10, 0],
      rotate: [0, -15, 0],
    },
    duration: 10,
  },
]

interface FloatingElementsProps {
  className?: string
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} opacity-20 hover:opacity-40 transition-opacity duration-300`}
          style={element.position}
          animate={element.animation}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2, opacity: 0.6 }}
        >
          <element.icon className={element.size} />
        </motion.div>
      ))}
    </div>
  )
} 