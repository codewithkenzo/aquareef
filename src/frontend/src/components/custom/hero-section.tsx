'use client'

import { motion } from 'framer-motion'
import { Waves, Play, ArrowRight, Sparkles, TrendingUp, Users, Zap as Lightning } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FloatingElements } from '@/components/animations/floating-elements'
import { ParticleSystem } from '@/components/animations/particle-system'
import { FadeInText, GradientText, TypewriterText } from '@/components/animations/text-animations'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fffafb] via-[#7de2d1]/10 to-[#339989]/20 dark:from-[#131515] dark:via-[#2b2c28] dark:to-[#339989]/20">
      {/* Enhanced Animation Layers */}
      <ParticleSystem count={15} className="opacity-30" />
      <FloatingElements />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -left-4 w-72 h-72 bg-[#7de2d1] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-8 -right-4 w-72 h-72 bg-[#339989] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#2b2c28] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-blue-500"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-32 text-purple-500"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Lightning className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 text-green-500"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <TrendingUp className="w-11 h-11" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7de2d1]/20 dark:bg-[#339989]/30 text-[#339989] dark:text-[#7de2d1] rounded-full text-base font-medium border border-[#7de2d1]/30"
          >
            <Sparkles className="w-6 h-6" />
            AI-Powered Social Media Automation
          </motion.div>

          {/* Headline */}
          <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-tight max-w-5xl mx-auto tracking-tight">
            <FadeInText delay={0.4}>
              <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Automate Your
              </span>
            </FadeInText>
            <div className="block overflow-hidden">
              <GradientText 
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black block tracking-tight"
                gradientClass="from-[#339989] via-[#7de2d1] to-[#339989]"
              >
                <TypewriterText text="Social Empire" delay={0.8} speed={0.1} />
              </GradientText>
            </div>
            <FadeInText delay={1.5}>
              <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                with AI Magic
              </span>
            </FadeInText>
          </div>

          {/* Subtitle */}
          <FadeInText 
            delay={2.0}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Build a thriving social media empire across 8+ platforms. AI creates your content, 
            schedules strategically, and optimizes for maximum engagement—all while you sleep.
          </FadeInText>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2b2c28] hover:to-[#339989] text-white px-10 py-5 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <button
              className="inline-flex items-center justify-center gap-3 border-2 border-[#7de2d1] dark:border-[#339989] hover:border-[#339989] dark:hover:border-[#7de2d1] bg-white dark:bg-[#2b2c28] text-[#2b2c28] dark:text-[#fffafb] hover:bg-[#7de2d1]/10 dark:hover:bg-[#339989]/20 px-10 py-5 text-xl font-semibold rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
              onClick={() => {
                // Scroll to demo section or open modal
                const demoSection = document.getElementById('demo-section');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback: open a demo scheduling modal or redirect
                  window.open('https://calendly.com/blaze-demo', '_blank');
                }
              }}
            >
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Schedule Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Posts Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">300%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Engagement Boost</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            className="w-16 h-16 bg-gradient-to-br from-[#339989] to-[#7de2d1] rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto"
          >
            <Waves className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  )
} 