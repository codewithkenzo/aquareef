'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Filter, MoreHorizontal, Play, Pause, Edit, Calendar, Target, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CampaignWizard } from '@/components/forms/campaign-wizard'

// MOCK DATA - Replace with real API calls in Phase 1
const campaigns = [
  {
    id: 1,
    name: "Summer Product Launch",
    status: "active",
    platforms: ["Instagram", "LinkedIn", "Facebook"],
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    budget: 2500,
    spent: 1850,
    reach: 45000,
    engagement: 3200,
    conversions: 89,
    posts: 24,
    color: "from-[#339989] to-[#7de2d1]"
  },
  {
    id: 2,
    name: "Brand Awareness Q1",
    status: "scheduled",
    platforms: ["Instagram", "TikTok", "Threads"],
    startDate: "2024-02-01",
    endDate: "2024-03-31",
    budget: 3000,
    spent: 0,
    reach: 0,
    engagement: 0,
    conversions: 0,
    posts: 18,
    color: "from-[#7de2d1] to-teal-500"
  },
  {
    id: 3,
    name: "Product Demo Series",
    status: "paused",
    platforms: ["LinkedIn", "YouTube"],
    startDate: "2024-01-10",
    endDate: "2024-01-25",
    budget: 1500,
    spent: 890,
    reach: 12000,
    engagement: 850,
    conversions: 23,
    posts: 8,
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: 4,
    name: "Holiday Promotions",
    status: "completed",
    platforms: ["Instagram", "Facebook", "Pinterest"],
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    budget: 5000,
    spent: 4850,
    reach: 125000,
    engagement: 8900,
    conversions: 234,
    posts: 45,
    color: "from-[#339989] to-teal-600"
  }
]

const statusConfig = {
  active: { color: "text-persian_green", bg: "bg-persian_green-100", label: "Active" },
  scheduled: { color: "text-tiffany_blue", bg: "bg-tiffany_blue-100", label: "Scheduled" },
  paused: { color: "text-jet-700", bg: "bg-jet-200", label: "Paused" },
  completed: { color: "text-jet-800", bg: "bg-jet-100", label: "Completed" }
}

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showWizard, setShowWizard] = useState(false)

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || campaign.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-night dark:text-snow">
            Campaigns
          </h1>
          <p className="text-jet-700 dark:text-jet-900 mt-2">
            Manage your social media campaigns across all platforms
          </p>
        </div>
        
        <Button 
          onClick={() => setShowWizard(true)}
          className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Campaign
        </Button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jet-700 w-5 h-5" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-jet-200 dark:border-jet-600 rounded-xl bg-snow dark:bg-jet text-night dark:text-snow placeholder-jet-700 focus:outline-none focus:ring-2 focus:ring-persian_green focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <div className="flex gap-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 border border-jet-200 dark:border-jet-600 rounded-xl bg-snow dark:bg-jet text-night dark:text-snow focus:outline-none focus:ring-2 focus:ring-persian_green focus:border-transparent transition-all duration-300"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="scheduled">Scheduled</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
          </select>
          
          <Button variant="outline" className="px-4 py-3 border-jet-200 dark:border-jet-600">
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCampaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-snow dark:bg-jet rounded-2xl border border-jet-200 dark:border-jet-600 p-6 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Campaign Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-night dark:text-snow mb-2">
                  {campaign.name}
                </h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig[campaign.status as keyof typeof statusConfig].bg} ${statusConfig[campaign.status as keyof typeof statusConfig].color}`}>
                  {statusConfig[campaign.status as keyof typeof statusConfig].label}
                </div>
              </div>
              
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Platforms */}
            <div className="flex flex-wrap gap-2 mb-4">
              {campaign.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-1 bg-jet-100 dark:bg-jet-700 text-jet-700 dark:text-jet-300 text-xs rounded-lg"
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-persian_green" />
                  <span className="text-sm text-jet-700 dark:text-jet-300">Reach</span>
                </div>
                <p className="text-lg font-semibold text-night dark:text-snow">
                  {campaign.reach.toLocaleString()}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-tiffany_blue" />
                  <span className="text-sm text-jet-700 dark:text-jet-300">Engagement</span>
                </div>
                <p className="text-lg font-semibold text-night dark:text-snow">
                  {campaign.engagement.toLocaleString()}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-persian_green" />
                  <span className="text-sm text-jet-700 dark:text-jet-300">Conversions</span>
                </div>
                <p className="text-lg font-semibold text-night dark:text-snow">
                  {campaign.conversions}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-tiffany_blue" />
                  <span className="text-sm text-jet-700 dark:text-jet-300">Posts</span>
                </div>
                <p className="text-lg font-semibold text-night dark:text-snow">
                  {campaign.posts}
                </p>
              </div>
            </div>

            {/* Budget Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-jet-700 dark:text-jet-300">Budget</span>
                <span className="text-sm font-medium text-night dark:text-snow">
                  ${campaign.spent} / ${campaign.budget}
                </span>
              </div>
              <div className="w-full bg-jet-200 dark:bg-jet-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${campaign.color} transition-all duration-500`}
                  style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {campaign.status === 'active' && (
                <Button size="sm" variant="outline" className="flex-1">
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </Button>
              )}
              {campaign.status === 'paused' && (
                <Button size="sm" className="flex-1 bg-persian_green hover:bg-persian_green/90">
                  <Play className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              )}
              {campaign.status === 'scheduled' && (
                <Button size="sm" className="flex-1 bg-tiffany_blue hover:bg-tiffany_blue/90">
                  <Play className="w-4 h-4 mr-2" />
                  Start Now
                </Button>
              )}
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCampaigns.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-jet-100 dark:bg-jet-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-jet-400" />
          </div>
          <h3 className="text-lg font-semibold text-night dark:text-snow mb-2">
            No campaigns found
          </h3>
          <p className="text-jet-700 dark:text-jet-300 mb-6">
            {searchTerm ? "Try adjusting your search terms" : "Create your first campaign to get started"}
          </p>
          <Button className="bg-gradient-to-r from-persian_green to-tiffany_blue hover:from-jet hover:to-persian_green text-white">
            <Plus className="w-5 h-5 mr-2" />
            Create Campaign
          </Button>
        </motion.div>
      )}

      {/* Campaign Creation Wizard */}
      <CampaignWizard
        isOpen={showWizard}
        onClose={() => setShowWizard(false)}
        onComplete={(data) => {
          console.log('Campaign created:', data)
          // TODO: Add campaign to list and send to API in Phase 1
          setShowWizard(false)
        }}
      />
    </div>
  )
} 