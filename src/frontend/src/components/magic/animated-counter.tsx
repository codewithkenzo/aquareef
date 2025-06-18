'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
  delay?: number
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
  delay = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime - delay * 1000

        const elapsed = (currentTime - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentCount = value * easeOut

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [inView, value, duration, delay])

  const formatNumber = (num: number) => {
    if (decimals === 0) {
      return Math.floor(num).toLocaleString()
    }
    return num.toFixed(decimals)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <motion.span
        className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#339989] to-[#7de2d1]"
        animate={inView ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 0.3, delay: delay + duration * 0.8 }}
      >
        {prefix}{formatNumber(count)}{suffix}
      </motion.span>
    </motion.div>
  )
}

// Preset configurations for common use cases
export const CounterPresets = {
  currency: (value: number, delay?: number) => (
    <AnimatedCounter
      value={value}
      prefix="$"
      decimals={0}
      duration={2.5}
      delay={delay}
      className="text-3xl font-bold"
    />
  ),
  
  percentage: (value: number, delay?: number) => (
    <AnimatedCounter
      value={value}
      suffix="%"
      decimals={1}
      duration={2}
      delay={delay}
      className="text-2xl font-semibold"
    />
  ),
  
  followers: (value: number, delay?: number) => (
    <AnimatedCounter
      value={value}
      decimals={0}
      duration={3}
      delay={delay}
      className="text-4xl font-bold"
    />
  ),
  
  engagement: (value: number, delay?: number) => (
    <AnimatedCounter
      value={value}
      decimals={0}
      duration={2}
      delay={delay}
      className="text-xl font-medium"
    />
  )
} 