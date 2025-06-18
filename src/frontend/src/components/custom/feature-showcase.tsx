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
          color: 'from-brand-primary to-brand-secondary',
    delay: 0.1
  },
  {
    icon: Share2,
    title: 'Multi-Platform Publishing',
    description: 'Publish simultaneously to Instagram, Twitter, LinkedIn, Facebook, Threads, TikTok, and YouTube with platform-optimized formatting.',
          color: 'from-brand-secondary to-brand-primary',
    delay: 0.2
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track engagement, reach, and ROI with comprehensive analytics that provide actionable insights for growth.',
          color: 'from-teal-500 to-brand-primary',
    delay: 0.3
  },
  {
    icon: Clock,
    title: 'Intelligent Scheduling',
    description: 'AI-powered optimal posting times based on your audience activity patterns and platform algorithms.',
          color: 'from-cyan-500 to-brand-secondary',
    delay: 0.4
  },
  {
    icon: Target,
    title: 'Campaign Management',
    description: 'Organize and track your marketing campaigns with advanced workflow management and team collaboration tools.',
          color: 'from-brand-primary to-teal-600',
    delay: 0.5
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuous AI-driven optimization of your content strategy based on real-time performance data and trends.',
          color: 'from-brand-secondary to-cyan-500',
    delay: 0.6
  }
]

export function FeatureShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Clean Natural Background */}
      <div className="absolute inset-0">
        {/* Base clean gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/20 to-cyan-50/30 dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-700/60" />
        
        {/* Subtle organic shapes */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-tiffany_blue/8 to-persian_green/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-persian_green/6 to-tiffany_blue/8 rounded-full blur-3xl opacity-30" />
      </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-secondary-20 to-brand-primary-20 dark:from-brand-secondary-10 dark:to-brand-primary-10 text-brand-primary dark:text-brand-secondary rounded-full text-base font-medium mb-6 border border-brand-secondary-30"
          >
            <TrendingUp className="w-5 h-5" />
            Powerful Features
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark dark:text-brand-light mb-6 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-brand-primary via-brand-secondary to-teal-600 bg-clip-text text-transparent">
              Dominate Social Media
            </span>
          </h2>
          
          <p className="text-xl text-brand-darker dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform combines cutting-edge AI with intuitive design 
            to streamline your entire social media marketing workflow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/80 dark:bg-brand-darker/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-secondary-20 dark:border-brand-primary-20 h-full overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-brand-darker dark:text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-brand-primary dark:text-brand-secondary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative Elements */}
                          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-brand-secondary-20 to-brand-primary-20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-brand-primary-20 to-teal-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
          <p className="text-lg text-brand-darker dark:text-gray-300 mb-8">
            Ready to transform your social media strategy?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-hover hover:to-brand-secondary-hover text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Get Started Today
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 