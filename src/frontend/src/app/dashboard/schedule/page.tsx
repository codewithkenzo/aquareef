'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  Plus, 
  Filter, 
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Edit3,
  Trash2,
  Eye
} from 'lucide-react'

interface ScheduledPost {
  id: string
  content: string
  platforms: string[]
  scheduledTime: string
  status: 'scheduled' | 'published' | 'failed'
}

const mockPosts: ScheduledPost[] = [
  {
    id: '1',
    content: 'Exciting new product launch coming soon! 🚀',
    platforms: ['instagram', 'twitter', 'linkedin'],
    scheduledTime: '2024-01-20T10:00:00Z',
    status: 'scheduled'
  },
  {
    id: '2',
    content: 'Behind the scenes of our development process.',
    platforms: ['linkedin', 'twitter'],
    scheduledTime: '2024-01-20T14:30:00Z',
    status: 'scheduled'
  }
]

const platformIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook
}

export default function SchedulePage() {
  const [posts] = useState<ScheduledPost[]>(mockPosts)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-yellow-100 text-yellow-800'
      case 'published': return 'bg-emerald-100 text-emerald-800'
      case 'failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
            <p className="text-gray-600 mt-1">Manage your content calendar</p>
          </div>
          
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Post
          </Button>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Scheduled Today', value: '8', icon: Clock },
            { label: 'This Week', value: '24', icon: Calendar },
            { label: 'Published', value: '156', icon: Eye },
            { label: 'Platforms', value: '5', icon: Plus }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 text-teal-600">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Scheduled Posts</span>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-teal-200 transition-all"
                >
                  {/* Time */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-sm font-medium text-gray-900">
                      {formatTime(post.scheduledTime)}
                    </div>
                    <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(post.status)}`}>
                      {post.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 text-sm leading-relaxed mb-3">
                      {post.content}
                    </p>
                    
                    {/* Platforms */}
                    <div className="flex items-center gap-2">
                      {post.platforms.map((platform) => {
                        const Icon = platformIcons[platform as keyof typeof platformIcons]
                        return (
                          <div key={platform} className="text-teal-500">
                            <Icon className="h-4 w-4" />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit3 className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 