'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Button } from '@/components/ui/button'
import { 
  Bell, 
  BellRing, 
  Filter, 
  Heart,
  UserPlus,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  Archive
} from 'lucide-react'

interface Notification {
  id: string
  type: 'engagement' | 'follower' | 'performance' | 'alert' | 'system'
  title: string
  description: string
  timestamp: string
  read: boolean
  actionRequired?: boolean
  platform?: string
  data?: {
    count?: number
    percentage?: number
    postId?: string
  }
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'engagement',
    title: 'High Engagement Alert',
    description: 'Your latest Instagram post is performing 300% above average with 1.2K likes in the first hour!',
    timestamp: '2024-01-20T09:30:00Z',
    read: false,
    platform: 'instagram',
    data: { count: 1200, percentage: 300 }
  },
  {
    id: '2',
    type: 'follower',
    title: 'New Followers',
    description: 'You gained 47 new followers across all platforms today.',
    timestamp: '2024-01-20T08:15:00Z',
    read: false,
    data: { count: 47 }
  },
  {
    id: '3',
    type: 'alert',
    title: 'Scheduled Post Failed',
    description: 'Your LinkedIn post scheduled for 2:00 PM failed to publish. Please check your connection.',
    timestamp: '2024-01-20T14:05:00Z',
    read: false,
    actionRequired: true,
    platform: 'linkedin'
  },
  {
    id: '4',
    type: 'performance',
    title: 'Weekly Performance Summary',
    description: 'Your content reached 15.3K people this week, up 23% from last week.',
    timestamp: '2024-01-19T18:00:00Z',
    read: true,
    data: { count: 15300, percentage: 23 }
  },
  {
    id: '5',
    type: 'system',
    title: 'Account Connected',
    description: 'Successfully connected your TikTok account. You can now schedule posts to TikTok.',
    timestamp: '2024-01-19T16:45:00Z',
    read: true,
    platform: 'tiktok'
  }
]

const notificationIcons = {
  engagement: Heart,
  follower: UserPlus,
  performance: TrendingUp,
  alert: AlertTriangle,
  system: CheckCircle
}

const notificationColors = {
  engagement: 'text-pink-500 bg-pink-50',
  follower: 'text-blue-500 bg-blue-50',
  performance: 'text-emerald-500 bg-emerald-50',
  alert: 'text-red-500 bg-red-50',
  system: 'text-gray-500 bg-gray-50'
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [filter, setFilter] = useState<'all' | 'unread' | 'engagement' | 'alerts'>('all')

  const unreadCount = notifications.filter(n => !n.read).length
  const alertCount = notifications.filter(n => n.actionRequired).length

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const filteredNotifications = notifications.filter(notification => {
    switch (filter) {
      case 'unread': return !notification.read
      case 'engagement': return notification.type === 'engagement'
      case 'alerts': return notification.actionRequired
      default: return true
    }
  })

  const formatTime = (dateString: string) => {
    const now = new Date()
    const notificationTime = new Date(dateString)
    const diffInHours = Math.floor((now.getTime() - notificationTime.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    return notificationTime.toLocaleDateString()
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Bell className="h-8 w-8 text-teal-500" />
              Notifications
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </h1>
            <p className="text-gray-600 mt-1">Stay updated with your social media performance and alerts</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              Mark All Read
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: 'Unread', value: unreadCount.toString(), icon: BellRing, color: 'text-red-600' },
            { label: 'Action Required', value: alertCount.toString(), icon: AlertTriangle, color: 'text-orange-600' },
            { label: 'This Week', value: '23', icon: TrendingUp, color: 'text-emerald-600' },
            { label: 'Engagement', value: '156', icon: Heart, color: 'text-pink-600' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="bg-white rounded-xl border border-gray-200 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filter notifications:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Notifications', count: notifications.length },
              { key: 'unread', label: 'Unread', count: unreadCount },
              { key: 'engagement', label: 'Engagement', count: notifications.filter(n => n.type === 'engagement').length },
              { key: 'alerts', label: 'Alerts', count: alertCount }
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as 'all' | 'unread' | 'engagement' | 'alerts')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === filterOption.key
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterOption.label} ({filterOption.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notifications List */}
        <motion.div 
          className="bg-white rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="divide-y divide-gray-200">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => {
                const Icon = notificationIcons[notification.type]
                const colorClasses = notificationColors[notification.type]
                
                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0 * 0.05 }}
                    className={`p-6 hover:bg-gray-50 transition-colors group ${
                      !notification.read ? 'bg-blue-50/30 border-l-4 border-l-teal-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-2 rounded-full ${colorClasses} flex-shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                              {notification.actionRequired && (
                                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Action Required
                                </span>
                              )}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                              {notification.description}
                            </p>
                            
                            {/* Platform & Data */}
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span>{formatTime(notification.timestamp)}</span>
                              {notification.platform && (
                                <span className="capitalize">{notification.platform}</span>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {!notification.read && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-8 px-3 text-xs"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark Read
                              </Button>
                            )}
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-8 w-8 p-0"
                            >
                              <Archive className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-500">You&apos;re all caught up! New notifications will appear here.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
} 