'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { OverviewCards } from '@/components/dashboard/overview-cards'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Zap,
  Plus,
  MoreHorizontal,
  ArrowUpRight
} from 'lucide-react'

export default function DashboardPage() {
  const recentCampaigns = [
    {
      id: 1,
      name: 'Summer Product Launch',
      status: 'Active',
      engagement: '12.5K',
      platforms: ['Instagram', 'Twitter', 'LinkedIn'],
      color: 'from-[#339989] to-[#7de2d1]'
    },
    {
      id: 2,
      name: 'Brand Awareness Campaign',
      status: 'Scheduled',
      engagement: '8.2K',
      platforms: ['Facebook', 'Instagram'],
      color: 'from-[#7de2d1] to-teal-500'
    },
    {
      id: 3,
      name: 'Holiday Promotion',
      status: 'Draft',
      engagement: '0',
      platforms: ['Twitter', 'TikTok'],
      color: 'from-[#339989] to-[#7de2d1]'
    }
  ]

  const upcomingPosts = [
    {
      id: 1,
      content: 'Exciting product announcement coming soon! 🚀',
      platform: 'Instagram',
      scheduledTime: '2:00 PM Today',
      engagement: 'High potential'
    },
    {
      id: 2,
      content: 'Join our webinar on digital marketing trends',
      platform: 'LinkedIn',
      scheduledTime: '10:00 AM Tomorrow',
      engagement: 'Medium potential'
    },
    {
      id: 3,
      content: 'Behind the scenes of our latest campaign',
      platform: 'Twitter',
      scheduledTime: '6:00 PM Tomorrow',
      engagement: 'High potential'
    }
  ]

  return (
    <DashboardLayout 
      title="Dashboard" 
      subtitle="Welcome back! Here's what's happening with your campaigns."
    >
      {/* Overview Cards */}
      <OverviewCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="lg:col-span-2 bg-[#fffafb] dark:bg-[#2b2c28] rounded-2xl p-6 shadow-lg border border-[#7de2d1]/20"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#2b2c28] dark:text-[#fffafb]">Recent Campaigns</h3>
              <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70">Manage your active and upcoming campaigns</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339989] to-[#7de2d1] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Plus className="w-4 h-4" />
              New Campaign
            </motion.button>
          </div>

          <div className="space-y-4">
            {recentCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="p-4 rounded-xl border border-[#7de2d1]/20 hover:bg-[#7de2d1]/5 dark:hover:bg-[#339989]/10 transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${campaign.color}`} />
                    <div>
                      <h4 className="font-semibold text-[#2b2c28] dark:text-[#fffafb] group-hover:text-[#339989] dark:group-hover:text-[#7de2d1] transition-colors duration-300">
                        {campaign.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          campaign.status === 'Active' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : campaign.status === 'Scheduled'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                            : 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400'
                        }`}>
                          {campaign.status}
                        </span>
                        <span className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 text-sm">
                          {campaign.platforms.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-[#2b2c28] dark:text-[#fffafb]">{campaign.engagement}</p>
                      <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 text-sm">Engagement</p>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 transition-colors duration-300">
                      <MoreHorizontal className="w-4 h-4 text-[#2b2c28]/70 dark:text-[#fffafb]/70" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-[#fffafb] dark:bg-[#2b2c28] rounded-2xl p-6 shadow-lg border border-[#7de2d1]/20"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#2b2c28] dark:text-[#fffafb]">Upcoming Posts</h3>
              <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 text-sm">Next scheduled content</p>
            </div>
            <Calendar className="w-5 h-5 text-[#339989]" />
          </div>

          <div className="space-y-4">
            {upcomingPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
                className="p-4 rounded-xl border border-[#7de2d1]/20 hover:bg-[#7de2d1]/5 dark:hover:bg-[#339989]/10 transition-colors duration-300 group cursor-pointer"
              >
                <div className="space-y-3">
                  <p className="text-[#2b2c28] dark:text-[#fffafb] text-sm font-medium line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#339989] font-medium text-sm">{post.platform}</p>
                      <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 text-xs">{post.scheduledTime}</p>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-1 text-xs ${
                        post.engagement === 'High potential' 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        <TrendingUp className="w-3 h-3" />
                        {post.engagement}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="w-full mt-4 p-3 border-2 border-dashed border-[#7de2d1]/30 rounded-xl text-[#339989] hover:bg-[#7de2d1]/5 dark:hover:bg-[#339989]/10 transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
          >
            <Plus className="w-4 h-4" />
            Schedule New Post
          </motion.button>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            title: 'Create Campaign',
            description: 'Launch a new marketing campaign',
            icon: Zap,
            color: 'from-[#339989] to-[#7de2d1]'
          },
          {
            title: 'View Analytics',
            description: 'Check performance metrics',
            icon: TrendingUp,
            color: 'from-[#7de2d1] to-teal-500'
          },
          {
            title: 'Manage Audience',
            description: 'Grow and engage your audience',
            icon: Users,
            color: 'from-[#339989] to-[#7de2d1]'
          }
        ].map((action, index) => (
          <motion.button
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-[#fffafb] dark:bg-[#2b2c28] rounded-2xl shadow-lg border border-[#7de2d1]/20 hover:shadow-xl transition-all duration-300 text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#2b2c28]/50 dark:text-[#fffafb]/50 group-hover:text-[#339989] dark:group-hover:text-[#7de2d1] transition-colors duration-300" />
            </div>
            <h4 className="font-bold text-[#2b2c28] dark:text-[#fffafb] mb-2">{action.title}</h4>
            <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 text-sm">{action.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </DashboardLayout>
  )
} 