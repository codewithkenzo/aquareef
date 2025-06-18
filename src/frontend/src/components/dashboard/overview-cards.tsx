'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ElementType
  color: string
  index: number
}

const MetricCard = ({ title, value, change, trend, icon: Icon, color, index }: MetricCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-[#fffafb] dark:bg-[#2b2c28] rounded-2xl p-6 shadow-lg border border-[#7de2d1]/20 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            trend === 'up' 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          }`}>
            {trend === 'up' ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : (
              <ArrowDownRight className="w-3 h-3" />
            )}
            {change}
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            className="text-3xl font-bold text-[#2b2c28] dark:text-[#fffafb]"
          >
            {value}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 font-medium"
          >
            {title}
          </motion.p>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </motion.div>
  )
}

export function OverviewCards() {
  const metrics = [
    {
      title: 'Total Engagement',
      value: '2.4M',
      change: '+12.5%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'from-[#339989] to-[#7de2d1]'
    },
    {
      title: 'Active Campaigns',
      value: '24',
      change: '+3',
      trend: 'up' as const,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Audience Growth',
      value: '18.2K',
      change: '+8.1%',
      trend: 'up' as const,
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Posts Scheduled',
      value: '156',
      change: '+23',
      trend: 'up' as const,
      icon: Calendar,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.title}
          {...metric}
          index={index}
        />
      ))}
    </motion.div>
  )
} 