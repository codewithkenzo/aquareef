'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Share2, 
  BarChart3, 
  Clock, 
  Target, 
  TrendingUp,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Create engaging posts, captions, and hashtags with advanced AI that understands your brand voice and audience preferences.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.1
  },
  {
    icon: Share2,
    title: 'Multi-Platform Publishing',
    description: 'Publish simultaneously to Instagram, Twitter, LinkedIn, Facebook, Threads, TikTok, and YouTube with platform-optimized formatting.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track engagement, reach, and ROI with comprehensive analytics that provide actionable insights for growth.',
    color: 'from-green-500 to-emerald-500',
    delay: 0.3
  },
  {
    icon: Clock,
    title: 'Intelligent Scheduling',
    description: 'AI-powered optimal posting times based on your audience activity patterns and platform algorithms.',
    color: 'from-orange-500 to-red-500',
    delay: 0.4
  },
  {
    icon: Target,
    title: 'Campaign Management',
    description: 'Organize and track your marketing campaigns with advanced workflow management and team collaboration tools.',
    color: 'from-indigo-500 to-purple-500',
    delay: 0.5
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuous AI-driven optimization of your content strategy based on real-time performance data and trends.',
    color: 'from-teal-500 to-blue-500',
    delay: 0.6
  }
]

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Powerful Features
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Dominate Social Media
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI with intuitive design 
            to streamline your entire social media marketing workflow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to transform your social media strategy?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 