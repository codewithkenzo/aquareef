'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, Sparkles, TrendingUp, Zap, Star } from 'lucide-react'
import { FadeInText, GradientText, TypewriterText } from '@/components/animations/text-animations'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Natural Background System */}
      <div className="absolute inset-0">
        {/* Base clean gradient - more natural colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/30 to-cyan-50/40 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-700/80" />
        
        {/* Subtle organic shapes instead of focus squares */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large organic blob - top left */}
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 bg-gradient-to-r from-brand-secondary-30 via-brand-secondary-10 to-transparent"
            style={{
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          {/* Medium organic blob - bottom right */}
          <motion.div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-25 bg-gradient-to-r from-brand-primary-30 via-brand-primary-10 to-transparent"
            style={{
              filter: 'blur(35px)',
            }}
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          {/* Small accent blob - center right */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15 bg-gradient-to-r from-brand-secondary-40 via-brand-secondary-10 to-transparent"
            style={{
              filter: 'blur(25px)',
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Subtle noise texture for depth */}
        <div 
          className="absolute inset-0 opacity-5 mix-blend-soft-light bg-glass-hero"
        />
      </div>

      {/* Floating Elements - More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 && <Sparkles className="w-4 h-4 text-tiffany_blue" />}
            {i % 3 === 1 && <Zap className="w-3 h-3 text-persian_green" />}
            {i % 3 === 2 && <Star className="w-3 h-3 text-tiffany_blue" />}
          </motion.div>
        ))}
      </div>

      {/* Main Content - Directly on Background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium mb-8 bg-brand-secondary-15 backdrop-blur-sm border border-brand-secondary-20 text-brand-primary"
        >
          <Sparkles className="w-5 h-5" />
          AI-Powered Social Media Automation
        </motion.div>

        {/* Headline */}
        <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-monopoly text-night dark:text-snow leading-tight max-w-5xl mx-auto tracking-tight">
          <FadeInText delay={0.4}>
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Automate Your
            </span>
          </FadeInText>
          <div className="block overflow-hidden">
            <GradientText 
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-monopoly block tracking-tight"
              gradientClass="from-persian_green via-tiffany_blue to-persian_green"
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
          className="text-xl sm:text-2xl font-monopoly text-jet-600 dark:text-jet-300 max-w-3xl mx-auto leading-relaxed font-medium mt-8 mb-12"
        >
          Build a thriving social media empire across 8+ platforms. AI creates your content, 
          schedules strategically, and optimizes for maximum engagement—all while you sleep.
        </FadeInText>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 20px 40px #33998966, 0 10px 20px #7de2d14d, inset 0 1px 0 #ffffff33"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative text-white px-10 py-4 text-lg font-semibold font-monopoly rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 min-w-[200px] h-14 overflow-hidden bg-brand-complex"
            style={{
              boxShadow: '0 8px 25px rgb(var(--tw-color-brand-primary-30)), 0 4px 12px rgb(var(--tw-color-brand-secondary-20)), inset 0 1px 0 rgb(var(--tw-color-brand-white-10))',
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center">
              Start Free Trial
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.03,
              y: -2,
              backgroundColor: "#ffffff26",
              borderColor: "#7de2d166"
            }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-10 py-4 text-lg font-semibold font-monopoly rounded-full border-2 border-brand-white-20 dark:border-brand-primary-20 text-jet-700 dark:text-jet-300 hover:text-persian_green dark:hover:text-tiffany_blue backdrop-blur-sm transition-all duration-300 min-w-[200px] h-14 bg-brand-white-08"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-bold text-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, rgb(${51 + i * 20}, ${153 - i * 10}, ${137 + i * 15}), rgb(${125 - i * 10}, ${226 - i * 20}, ${209 - i * 15}))`,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold font-monopoly text-night dark:text-snow">50K+</div>
              <div className="text-sm font-mono text-jet-600 dark:text-jet-400">Active Users</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-gradient-to-r from-persian_green to-tiffany_blue shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold font-monopoly text-night dark:text-snow">300%</div>
              <div className="text-sm font-mono text-jet-600 dark:text-jet-400">Avg Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 