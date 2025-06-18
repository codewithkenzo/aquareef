'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Heart, 
  MessageCircle,
  Share2,
  Eye,
  BarChart3,
  Download,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react'

interface MetricData {
  label: string
  value: string
  change: number
  trend: 'up' | 'down'
  icon: React.ComponentType<{ className?: string }>
}

const metricsData: MetricData[] = [
  {
    label: 'Total Reach',
    value: '2.4M',
    change: 12.5,
    trend: 'up',
    icon: Eye
  },
  {
    label: 'Engagement Rate',
    value: '4.8%',
    change: 8.2,
    trend: 'up',
    icon: Heart
  },
  {
    label: 'New Followers',
    value: '18.2K',
    change: -2.1,
    trend: 'down',
    icon: Users
  },
  {
    label: 'Posts Published',
    value: '156',
    change: 15.3,
    trend: 'up',
    icon: BarChart3
  }
]

const platformData = [
  { platform: 'Instagram', followers: '125K', engagement: '5.2%', posts: 45, icon: Instagram, color: 'text-pink-500' },
  { platform: 'LinkedIn', followers: '89K', engagement: '3.8%', posts: 32, icon: Linkedin, color: 'text-blue-600' },
  { platform: 'Twitter', followers: '67K', engagement: '4.1%', posts: 78, icon: Twitter, color: 'text-blue-400' },
  { platform: 'Facebook', followers: '43K', engagement: '2.9%', posts: 28, icon: Facebook, color: 'text-blue-500' }
]

const topPosts = [
  {
    id: '1',
    content: 'Our latest product update is here! 🚀 Check out the new features that will transform your workflow.',
    platform: 'Instagram',
    engagement: 1250,
    reach: 15400,
    date: '2024-01-18'
  },
  {
    id: '2',
    content: 'Behind the scenes: How we built our AI-powered social media automation platform.',
    platform: 'LinkedIn',
    engagement: 890,
    reach: 12300,
    date: '2024-01-17'
  },
  {
    id: '3',
    content: 'Customer success story: @company increased engagement by 300% using our platform.',
    platform: 'Twitter',
    engagement: 675,
    reach: 8900,
    date: '2024-01-16'
  }
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">Track your social media performance and insights</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
              {[
                { key: '7d', label: '7 Days' },
                { key: '30d', label: '30 Days' },
                { key: '90d', label: '90 Days' }
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setTimeRange(option.key as '7d' | '30d' | '90d')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    timeRange === option.key 
                      ? 'bg-teal-500 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-teal-50 text-teal-600">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  metric.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {Math.abs(metric.change)}%
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-600 mt-1">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Performance */}
        <motion.div 
          className="bg-white rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Platform Performance</h3>
            <p className="text-sm text-gray-600 mt-1">Compare performance across social media platforms</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {platformData.map((platform, index) => (
                <motion.div
                  key={platform.platform}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-teal-200 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-gray-50 ${platform.color}`}>
                      <platform.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{platform.platform}</h4>
                      <p className="text-sm text-gray-600">{platform.followers} followers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-gray-900">{platform.engagement}</p>
                      <p className="text-gray-600">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">{platform.posts}</p>
                      <p className="text-gray-600">Posts</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Performing Posts */}
        <motion.div 
          className="bg-white rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Posts</h3>
            <p className="text-sm text-gray-600 mt-1">Your most engaging content from the past 30 days</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-gray-200 hover:border-teal-200 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm leading-relaxed mb-3">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="capitalize">{post.platform}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-pink-600 mb-1">
                          <Heart className="h-4 w-4" />
                          <span className="font-medium">{post.engagement}</span>
                        </div>
                        <p className="text-gray-600">Engagement</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-teal-600 mb-1">
                          <Eye className="h-4 w-4" />
                          <span className="font-medium">{post.reach.toLocaleString()}</span>
                        </div>
                        <p className="text-gray-600">Reach</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Engagement Overview */}
        <motion.div 
          className="bg-white rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Breakdown</h3>
            <p className="text-sm text-gray-600 mt-1">Types of engagement across all platforms</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Likes', count: '24.5K', icon: Heart, color: 'text-pink-500 bg-pink-50' },
                { type: 'Comments', count: '3.2K', icon: MessageCircle, color: 'text-blue-500 bg-blue-50' },
                { type: 'Shares', count: '1.8K', icon: Share2, color: 'text-emerald-500 bg-emerald-50' }
              ].map((engagement, index) => (
                <motion.div
                  key={engagement.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg border border-gray-200"
                >
                  <div className={`inline-flex p-4 rounded-full ${engagement.color} mb-4`}>
                    <engagement.icon className="h-8 w-8" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{engagement.count}</p>
                  <p className="text-gray-600 mt-1">{engagement.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
} 