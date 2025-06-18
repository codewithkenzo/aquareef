'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Calendar,
  Target,
  Palette,
  Rocket,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CampaignWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: CampaignData) => void
}

interface CampaignData {
  name: string
  objective: string
  platforms: string[]
  budget: number
  duration: {
    startDate: string
    endDate: string
  }
  targetAudience: {
    ageRange: string
    interests: string[]
    location: string
  }
  contentType: string[]
}

const steps = [
  { id: 1, title: 'Campaign Basics', icon: Rocket },
  { id: 2, title: 'Platforms & Audience', icon: Target },
  { id: 3, title: 'Budget & Schedule', icon: Calendar },
  { id: 4, title: 'Content Strategy', icon: Palette }
]

const platforms = [
  { name: 'Instagram', icon: Instagram, color: 'from-purple-500 to-pink-500' },
  { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
  { name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-blue-600' },
  { name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-500' },
  { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
  { name: 'Threads', icon: MessageCircle, color: 'from-gray-800 to-black' }
]

const objectives = [
  'Brand Awareness',
  'Lead Generation',
  'Sales Conversion',
  'Engagement',
  'Website Traffic',
  'App Downloads'
]

const contentTypes = [
  'Images & Graphics',
  'Videos & Reels',
  'Carousels',
  'Stories',
  'Text Posts',
  'User Generated Content'
]

export function CampaignWizard({ isOpen, onClose, onComplete }: CampaignWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<Partial<CampaignData>>({
    platforms: [],
    targetAudience: { 
      ageRange: '',
      interests: [],
      location: ''
    },
    contentType: []
  })

  const updateFormData = (field: string, value: string | string[] | number | object) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    onComplete(formData as CampaignData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#fffafb] dark:bg-[#2b2c28] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#7de2d1]/20">
          <div>
            <h2 className="text-2xl font-bold text-[#2b2c28] dark:text-[#fffafb]">
              Create New Campaign
            </h2>
            <p className="text-[#2b2c28]/60 dark:text-[#fffafb]/60 mt-1">
              Step {currentStep} of {steps.length}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[#2b2c28]/60 hover:text-[#2b2c28] dark:text-[#fffafb]/60 dark:hover:text-[#fffafb]"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center px-6 py-4 bg-[#7de2d1]/5 dark:bg-[#339989]/5">
          {steps.map((step, index) => {
            const StepIcon = step.icon
            const isActive = step.id === currentStep
            const isCompleted = step.id < currentStep
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-[#339989] border-[#339989] text-white' 
                    : isActive 
                      ? 'border-[#339989] text-[#339989] bg-[#7de2d1]/20' 
                      : 'border-[#2b2c28]/20 text-[#2b2c28]/40 dark:border-[#fffafb]/20 dark:text-[#fffafb]/40'
                }`}>
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <StepIcon className="w-5 h-5" />
                  )}
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 transition-colors duration-300 ${
                    isCompleted ? 'bg-[#339989]' : 'bg-[#2b2c28]/20 dark:bg-[#fffafb]/20'
                  }`} />
                )}
              </div>
            )
          })}
        </div>

        {/* Step Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-2">
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter campaign name..."
                    value={formData.name || ''}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-4 py-3 border border-[#7de2d1]/30 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] placeholder-[#2b2c28]/50 dark:placeholder-[#fffafb]/50 focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-3">
                    Campaign Objective
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {objectives.map((objective) => (
                      <button
                        key={objective}
                        onClick={() => updateFormData('objective', objective)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          formData.objective === objective
                            ? 'border-[#339989] bg-[#7de2d1]/10 text-[#339989]'
                            : 'border-[#7de2d1]/20 hover:border-[#7de2d1]/40 text-[#2b2c28] dark:text-[#fffafb]'
                        }`}
                      >
                        <div className="font-medium">{objective}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-3">
                    Select Platforms
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {platforms.map((platform) => {
                      const PlatformIcon = platform.icon
                      const isSelected = formData.platforms?.includes(platform.name)
                      
                      return (
                        <button
                          key={platform.name}
                          onClick={() => {
                            const currentPlatforms = formData.platforms || []
                            const newPlatforms = isSelected
                              ? currentPlatforms.filter(p => p !== platform.name)
                              : [...currentPlatforms, platform.name]
                            updateFormData('platforms', newPlatforms)
                          }}
                          className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all duration-300 ${
                            isSelected
                              ? 'border-[#339989] bg-[#7de2d1]/10'
                              : 'border-[#7de2d1]/20 hover:border-[#7de2d1]/40'
                          }`}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${platform.color}`}>
                            <PlatformIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-[#2b2c28] dark:text-[#fffafb]">
                            {platform.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-2">
                    Target Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., United States, Global, etc."
                    value={formData.targetAudience?.location || ''}
                    onChange={(e) => updateFormData('targetAudience', {
                      ...formData.targetAudience,
                      location: e.target.value
                    })}
                    className="w-full px-4 py-3 border border-[#7de2d1]/30 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] placeholder-[#2b2c28]/50 dark:placeholder-[#fffafb]/50 focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-2">
                    Campaign Budget ($)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter budget amount..."
                    value={formData.budget || ''}
                    onChange={(e) => updateFormData('budget', Number(e.target.value))}
                    className="w-full px-4 py-3 border border-[#7de2d1]/30 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] placeholder-[#2b2c28]/50 dark:placeholder-[#fffafb]/50 focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={formData.duration?.startDate || ''}
                      onChange={(e) => updateFormData('duration', {
                        ...formData.duration,
                        startDate: e.target.value
                      })}
                      className="w-full px-4 py-3 border border-[#7de2d1]/30 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={formData.duration?.endDate || ''}
                      onChange={(e) => updateFormData('duration', {
                        ...formData.duration,
                        endDate: e.target.value
                      })}
                      className="w-full px-4 py-3 border border-[#7de2d1]/30 rounded-xl bg-[#fffafb] dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] focus:outline-none focus:ring-2 focus:ring-[#339989] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-[#2b2c28] dark:text-[#fffafb] mb-3">
                    Content Types
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contentTypes.map((type) => {
                      const isSelected = formData.contentType?.includes(type)
                      
                      return (
                        <button
                          key={type}
                          onClick={() => {
                            const currentTypes = formData.contentType || []
                            const newTypes = isSelected
                              ? currentTypes.filter(t => t !== type)
                              : [...currentTypes, type]
                            updateFormData('contentType', newTypes)
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                            isSelected
                              ? 'border-[#339989] bg-[#7de2d1]/10 text-[#339989]'
                              : 'border-[#7de2d1]/20 hover:border-[#7de2d1]/40 text-[#2b2c28] dark:text-[#fffafb]'
                          }`}
                        >
                          <div className="font-medium">{type}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-[#7de2d1]/20 bg-[#7de2d1]/5 dark:bg-[#339989]/5">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-[#7de2d1]/30 text-[#2b2c28] dark:text-[#fffafb] hover:bg-[#7de2d1]/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep === steps.length ? (
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white px-8"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Launch Campaign
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white px-8"
            >
              Next Step
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
} 