'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -left-4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-8 -right-4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-white/20"
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
        <Sparkles className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-32 text-white/20"
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
        <Star className="w-6 h-6" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-yellow-300">
                Social Media Game?
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join 50,000+ marketers who have already revolutionized their social media 
              strategy with AI-powered automation. Start your free trial today and see 
              results in the first week.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'AI-generated content that converts',
                'Multi-platform posting in seconds',
                'Advanced analytics and insights',
                '24/7 customer support',
                'No long-term contracts'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-800" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex items-center gap-6 mt-8 text-sm text-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <div>✓ No credit card required</div>
              <div>✓ 14-day free trial</div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">300%</div>
                <div className="text-white/80 text-sm">Avg. Engagement Boost</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">20hrs</div>
                <div className="text-white/80 text-sm">Time Saved Per Week</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/80 text-sm">Active Users</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-white/80 text-sm">Posts Automated</div>
              </motion.div>
            </div>

            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-white/90 mb-4 leading-relaxed">
                "Blaze transformed our entire social media strategy. We went from 
                spending 30 hours a week to just 5 hours, while our engagement 
                increased by 400%. It's simply incredible."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">SC</span>
                </div>
                <div>
                  <div className="text-white font-medium">Sarah Chen</div>
                  <div className="text-white/70 text-sm">Marketing Director, TechStart</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 