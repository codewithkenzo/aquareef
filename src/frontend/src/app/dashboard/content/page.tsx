'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter,
  Grid3X3,
  List,
  Calendar,
  Eye,
  Edit,
  Copy,
  Share2,
  Image,
  Video,
  FileText,
  MoreHorizontal,
  Download,
  Heart,
  MessageCircle,
  Repeat2,
  BarChart3
} from 'lucide-react'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Button } from '@/components/ui/button'

interface ContentItem {
  id: number
  title: string
  type: 'image' | 'video' | 'carousel' | 'text'
  platforms: string[]
  status: 'draft' | 'scheduled' | 'published'
  scheduledDate?: string
  engagement?: {
    likes: number
    comments: number
    shares: number
    views?: number
  }
  thumbnail?: string
  content: string
  createdAt: string
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    title: 'Product Launch Announcement',
    type: 'image',
    platforms: ['Instagram', 'Facebook', 'Twitter'],
    status: 'scheduled',
    scheduledDate: '2024-01-20 14:00',
    content: 'Exciting news! Our new AI-powered features are launching soon. Get ready to revolutionize your social media strategy! 🚀 #ProductLaunch #AI #SocialMedia',
    createdAt: '2024-01-15',
    thumbnail: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Behind the Scenes Video',
    type: 'video',
    platforms: ['TikTok', 'Instagram', 'YouTube'],
    status: 'draft',
    content: 'Take a peek behind the scenes at our development process. See how we build features that make your life easier!',
    createdAt: '2024-01-14',
    thumbnail: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Customer Success Story',
    type: 'carousel',
    platforms: ['LinkedIn', 'Instagram'],
    status: 'published',
    engagement: {
      likes: 234,
      comments: 18,
      shares: 45,
      views: 1200
    },
    content: 'Meet Sarah, who increased her engagement by 300% using Aquareef! Read her full story and tips.',
    createdAt: '2024-01-10',
    thumbnail: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Weekly Tips Thread',
    type: 'text',
    platforms: ['Twitter', 'Threads'],
    status: 'scheduled',
    scheduledDate: '2024-01-18 10:00',
    content: '🧵 5 proven strategies to boost your social media engagement:\n\n1. Post consistently\n2. Engage with your audience\n3. Use relevant hashtags\n4. Share valuable content\n5. Analyze your performance',
    createdAt: '2024-01-16'
  }
]

const statusConfig = {
  draft: { color: 'text-gray-600', bg: 'bg-gray-100 dark:bg-gray-800', label: 'Draft' },
  scheduled: { color: 'text-[#339989]', bg: 'bg-[#7de2d1]/20 dark:bg-[#339989]/20', label: 'Scheduled' },
  published: { color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30', label: 'Published' }
}

const typeIcons = {
  image: Image,
  video: Video,
  carousel: Grid3X3,
  text: FileText
}

export default function ContentStudioPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedContent, setSelectedContent] = useState<number | null>(null)

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || item.type === selectedType
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const ContentCard = ({ item, index }: { item: ContentItem; index: number }) => {
    const TypeIcon = typeIcons[item.type]
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-[#fffafb] dark:bg-[#2b2c28] rounded-2xl border border-[#7de2d1]/20 hover:shadow-lg transition-all duration-300 group overflow-hidden"
        onMouseEnter={() => setSelectedContent(item.id)}
        onMouseLeave={() => setSelectedContent(null)}
      >
        {/* Thumbnail/Preview */}
        <div className="relative aspect-video bg-gradient-to-br from-[#7de2d1]/10 to-[#339989]/10 flex items-center justify-center">
          {item.thumbnail ? (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <TypeIcon className="w-12 h-12 text-[#339989]" />
            </div>
          ) : (
            <TypeIcon className="w-12 h-12 text-[#339989]" />
          )}
          
          {/* Status Badge */}
          <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${statusConfig[item.status].bg} ${statusConfig[item.status].color}`}>
            {statusConfig[item.status].label}
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-3 right-3 flex gap-2 transition-opacity duration-300 ${selectedContent === item.id ? 'opacity-100' : 'opacity-0'}`}>
            <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-[#7de2d1]/20 transition-colors duration-300">
              <Eye className="w-4 h-4 text-[#339989]" />
            </button>
            <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-[#7de2d1]/20 transition-colors duration-300">
              <Edit className="w-4 h-4 text-[#339989]" />
            </button>
            <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-[#7de2d1]/20 transition-colors duration-300">
              <MoreHorizontal className="w-4 h-4 text-[#339989]" />
            </button>
          </div>
        </div>

        {/* Content Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-[#2b2c28] dark:text-[#fffafb] group-hover:text-[#339989] dark:group-hover:text-[#7de2d1] transition-colors duration-300">
              {item.title}
            </h3>
            <div className="flex items-center gap-1">
              <TypeIcon className="w-4 h-4 text-[#339989]" />
            </div>
          </div>

          {/* Platforms */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.platforms.map((platform) => (
              <span
                key={platform}
                className="px-2 py-1 bg-[#7de2d1]/20 dark:bg-[#339989]/20 text-[#339989] dark:text-[#7de2d1] text-xs rounded-lg font-medium"
              >
                {platform}
              </span>
            ))}
          </div>

          {/* Content Preview */}
          <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 text-sm line-clamp-2 mb-4">
            {item.content}
          </p>

          {/* Engagement Stats (if published) */}
          {item.engagement && (
            <div className="grid grid-cols-4 gap-4 mb-4 p-3 bg-[#7de2d1]/10 dark:bg-[#339989]/10 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Heart className="w-3 h-3 text-red-500" />
                  <span className="text-xs font-medium text-[#2b2c28] dark:text-[#fffafb]">
                    {item.engagement.likes}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MessageCircle className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-medium text-[#2b2c28] dark:text-[#fffafb]">
                    {item.engagement.comments}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Repeat2 className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-medium text-[#2b2c28] dark:text-[#fffafb]">
                    {item.engagement.shares}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 className="w-3 h-3 text-[#339989]" />
                  <span className="text-xs font-medium text-[#2b2c28] dark:text-[#fffafb]">
                    {item.engagement.views || 0}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Schedule Info */}
          {item.scheduledDate && (
            <div className="flex items-center gap-2 text-sm text-[#339989] dark:text-[#7de2d1]">
              <Calendar className="w-4 h-4" />
              <span>Scheduled for {item.scheduledDate}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <Button size="sm" variant="outline" className="flex-1 border-[#7de2d1]/30 hover:bg-[#7de2d1]/10">
              <Copy className="w-4 h-4 mr-2" />
              Duplicate
            </Button>
            <Button size="sm" className="flex-1 bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2d8a7a] hover:to-[#6dd9c6] text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <DashboardLayout 
      title="Content Studio" 
      subtitle="Create, manage, and publish your social media content across all platforms."
    >
      {/* Header Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
      >
        <div className="flex items-center gap-4">
          <Button className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2d8a7a] hover:to-[#6dd9c6] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group">
            <Plus className="w-5 h-5 mr-2" />
            Create Content
          </Button>
          <Button variant="outline" className="border-[#7de2d1]/30 hover:bg-[#7de2d1]/10">
            <Download className="w-5 h-5 mr-2" />
            Export
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#fffafb] dark:bg-[#2b2c28] border border-[#7de2d1]/20 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-l-lg transition-colors duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-[#339989] text-white' 
                  : 'text-[#2b2c28] dark:text-[#fffafb] hover:bg-[#7de2d1]/10'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-r-lg transition-colors duration-300 ${
                viewMode === 'list' 
                  ? 'bg-[#339989] text-white' 
                  : 'text-[#2b2c28] dark:text-[#fffafb] hover:bg-[#7de2d1]/10'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-[#7de2d1]/20 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <div className="flex gap-3">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 border border-[#7de2d1]/20 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
          >
            <option value="all">All Types</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
            <option value="carousel">Carousels</option>
            <option value="text">Text</option>
          </select>
          
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 border border-[#7de2d1]/20 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="published">Published</option>
          </select>
          
          <Button variant="outline" className="px-4 py-3 border-[#7de2d1]/20">
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredContent.map((item, index) => (
          <ContentCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 bg-[#7de2d1]/20 dark:bg-[#339989]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-[#339989]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2b2c28] dark:text-[#fffafb] mb-2">
            No content found
          </h3>
          <p className="text-[#2b2c28]/70 dark:text-[#fffafb]/70 mb-6">
            Try adjusting your search criteria or create your first piece of content.
          </p>
          <Button className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2d8a7a] hover:to-[#6dd9c6] text-white">
            <Plus className="w-5 h-5 mr-2" />
            Create Content
          </Button>
        </motion.div>
      )}
    </DashboardLayout>
  )
} 