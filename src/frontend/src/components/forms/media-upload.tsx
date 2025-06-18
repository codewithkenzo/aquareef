'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Upload, 
  Image, 
  Video, 
  File, 
  Loader2,
  Eye,
  Download,
  Trash2,
  Grid3X3,
  List,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MediaFile {
  id: string
  name: string
  type: 'image' | 'video' | 'document'
  size: number
  url: string
  uploadedAt: string
  tags: string[]
  thumbnail?: string
}

interface MediaUploadProps {
  onFilesSelected?: (files: MediaFile[]) => void
  acceptedTypes?: string[]
  showLibrary?: boolean
}

const mockMediaFiles: MediaFile[] = [
  {
    id: '1',
    name: 'product-hero.jpg',
    type: 'image',
    size: 2456789,
    url: '/api/placeholder/400/300',
    uploadedAt: '2024-01-15',
    tags: ['product', 'hero', 'marketing'],
    thumbnail: '/api/placeholder/400/300'
  },
  {
    id: '2',
    name: 'demo-video.mp4',
    type: 'video',
    size: 15678901,
    url: '/api/placeholder/video',
    uploadedAt: '2024-01-14',
    tags: ['demo', 'tutorial', 'product'],
    thumbnail: '/api/placeholder/400/300'
  },
  {
    id: '3',
    name: 'brand-assets.zip',
    type: 'document',
    size: 5432109,
    url: '/api/placeholder/file',
    uploadedAt: '2024-01-13',
    tags: ['brand', 'assets', 'design']
  }
]

export function MediaUpload({ 
  onFilesSelected, 
  acceptedTypes = ['image/*', 'video/*'],
  showLibrary = true 
}: MediaUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadingFiles, setUploadingFiles] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const handleFileUpload = useCallback((files: File[]) => {
    files.forEach(file => {
      const fileId = Math.random().toString(36).substring(7)
      setUploadingFiles(prev => [...prev, fileId])

      // Simulate upload process
      setTimeout(() => {
        const newMediaFile: MediaFile = {
          id: fileId,
          name: file.name,
          type: file.type.startsWith('image/') ? 'image' : 
                file.type.startsWith('video/') ? 'video' : 'document',
          size: file.size,
          url: URL.createObjectURL(file),
          uploadedAt: new Date().toISOString().split('T')[0],
          tags: []
        }

        setUploadingFiles(prev => prev.filter(id => id !== fileId))
        
        if (onFilesSelected) {
          onFilesSelected([newMediaFile])
        }
      }, 2000)
    })
  }, [onFilesSelected])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFileUpload(files)
  }, [handleFileUpload])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFileUpload(files)
  }, [handleFileUpload])

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return Image
      case 'video': return Video
      default: return File
    }
  }

  const filteredFiles = mockMediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = selectedType === 'all' || file.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
          isDragOver 
            ? 'border-[#339989] bg-[#7de2d1]/10' 
            : 'border-[#7de2d1]/30 hover:border-[#7de2d1]/50 bg-[#fffafb] dark:bg-[#2b2c28]'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={uploadingFiles.length > 0}
        />
        
        <div className="space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-[#339989] to-[#7de2d1] rounded-full flex items-center justify-center mx-auto">
            <Upload className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#2b2c28] dark:text-[#fffafb] mb-2">
              Drop files here or click to browse
            </h3>
            <p className="text-[#2b2c28]/60 dark:text-[#fffafb]/60 text-sm">
              Support for images, videos, and documents up to 50MB
            </p>
          </div>
          
          <Button className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white">
            Choose Files
          </Button>
        </div>
      </motion.div>

      {/* Upload Progress */}
      <AnimatePresence>
        {uploadingFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            {uploadingFiles.map((fileId) => (
              <div key={fileId} className="flex items-center gap-3 p-4 bg-[#7de2d1]/10 dark:bg-[#339989]/10 rounded-xl">
                <Loader2 className="w-5 h-5 text-[#339989] animate-spin" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-[#2b2c28] dark:text-[#fffafb]">
                    Uploading file...
                  </div>
                  <div className="w-full bg-[#7de2d1]/20 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-[#339989] to-[#7de2d1] h-2 rounded-full animate-pulse" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Library */}
      {showLibrary && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[#2b2c28] dark:text-[#fffafb]">
              Media Library
            </h3>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2b2c28]/40 dark:text-[#fffafb]/40 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-[#7de2d1]/30 rounded-lg bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] placeholder-[#2b2c28]/50 dark:placeholder-[#fffafb]/50 focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-[#7de2d1]/30 rounded-lg bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
              >
                <option value="all">All Types</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
                <option value="document">Documents</option>
              </select>
              
              <div className="flex bg-[#7de2d1]/10 dark:bg-[#339989]/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-[#339989] text-white' 
                      : 'text-[#2b2c28]/60 dark:text-[#fffafb]/60 hover:text-[#339989]'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-[#339989] text-white' 
                      : 'text-[#2b2c28]/60 dark:text-[#fffafb]/60 hover:text-[#339989]'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Media Grid/List */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'space-y-3'}`}>
            {filteredFiles.map((file, index) => {
              const FileIcon = getFileIcon(file.type)
              
              return (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`group bg-[#fffafb] dark:bg-[#2b2c28] border border-[#7de2d1]/20 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'flex items-center p-4' : 'aspect-square'
                  }`}
                >
                  {viewMode === 'grid' ? (
                    <>
                      {/* Thumbnail */}
                      <div className="aspect-square bg-gradient-to-br from-[#7de2d1]/10 to-[#339989]/10 flex items-center justify-center relative">
                        {file.thumbnail ? (
                          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <FileIcon className="w-8 h-8 text-[#339989]" />
                          </div>
                        ) : (
                          <FileIcon className="w-8 h-8 text-[#339989]" />
                        )}
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <button className="p-2 bg-white/90 rounded-lg hover:bg-[#7de2d1]/20 transition-colors duration-300">
                            <Eye className="w-4 h-4 text-[#339989]" />
                          </button>
                          <button className="p-2 bg-white/90 rounded-lg hover:bg-[#7de2d1]/20 transition-colors duration-300">
                            <Download className="w-4 h-4 text-[#339989]" />
                          </button>
                          <button className="p-2 bg-white/90 rounded-lg hover:bg-red-100 transition-colors duration-300">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                      
                      {/* File Info */}
                      <div className="p-3">
                        <h4 className="text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] truncate mb-1">
                          {file.name}
                        </h4>
                        <p className="text-xs text-[#2b2c28]/60 dark:text-[#fffafb]/60">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* List View */}
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#7de2d1]/10 to-[#339989]/10 rounded-lg flex items-center justify-center">
                          <FileIcon className="w-6 h-6 text-[#339989]" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] truncate">
                            {file.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-[#2b2c28]/60 dark:text-[#fffafb]/60">
                            <span>{formatFileSize(file.size)}</span>
                            <span>•</span>
                            <span>{file.uploadedAt}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-2 hover:bg-[#7de2d1]/20 rounded-lg transition-colors duration-300">
                            <Eye className="w-4 h-4 text-[#339989]" />
                          </button>
                          <button className="p-2 hover:bg-[#7de2d1]/20 rounded-lg transition-colors duration-300">
                            <Download className="w-4 h-4 text-[#339989]" />
                          </button>
                          <button className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-300">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
} 