'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Rodriguez',
    role: 'CEO',
    company: 'Digital Ventures',
    avatar: 'MR',
    rating: 5,
    quote: 'The multi-platform scheduling feature is a game-changer. We went from spending hours on social media to having everything automated while maintaining quality.',
    metrics: {
      engagement: '+250%',
      timeSaved: '15 hrs/week'
    },
    gradient: 'from-persian_green to-tiffany_blue'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow',
    avatar: 'SC',
    rating: 5,
    quote: 'Blaze transformed our social media strategy. The AI content generation is incredibly accurate to our brand voice, and the analytics provide insights we never had before.',
    metrics: {
      engagement: '+180%',
      timeSaved: '12 hrs/week'
    },
    gradient: 'from-tiffany_blue to-persian_green'
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'Founder',
    company: 'StartupHub',
    avatar: 'DK',
    rating: 5,
    quote: 'As a startup, we needed to maximize our social media impact with limited resources. Blaze delivered exactly that - professional results without the overhead.',
    metrics: {
      engagement: '+320%',
      timeSaved: '20 hrs/week'
    },
    gradient: 'from-persian_green to-teal-600'
  }
]

export function TestimonialsCarouselV2() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Minimal depth enhancement - no background override */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Very subtle orbs for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-tiffany_blue/4 to-persian_green/3 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-persian_green/3 to-tiffany_blue/4 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium mb-8 bg-brand-primary-10 backdrop-blur-sm border border-brand-primary-20 text-persian_green"
          >
            <Star className="w-5 h-5 fill-current" />
            Customer Success Stories
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-night dark:text-snow mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-persian_green via-tiffany_blue to-persian_green bg-clip-text text-transparent">
              50,000+ Marketers
            </span>
          </h2>
          
          <p className="text-xl text-jet-600 dark:text-jet-300 max-w-3xl mx-auto">
            See how businesses like yours are transforming their social media presence 
            and achieving remarkable results with Blaze.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-brand-light-60 backdrop-blur-xl border border-brand-white-20 shadow-2xl"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 rounded-3xl`} />
                
                {/* Content Container */}
                <div className="relative p-12 lg:p-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Quote Section */}
                    <div className="lg:col-span-8 space-y-8">
                      {/* Quote Icon */}
                      <div className="inline-flex p-4 rounded-2xl shadow-lg bg-gradient-to-br from-persian_green to-tiffany_blue">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-2xl lg:text-3xl text-night dark:text-snow leading-relaxed font-medium">
                        &quot;{currentTestimonial.quote}&quot;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-persian_green to-tiffany_blue">
                          <span className="text-xl font-bold text-white">
                            {currentTestimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-night dark:text-snow">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-jet-600 dark:text-jet-400">
                            {currentTestimonial.role}
                          </p>
                          <p className="text-sm font-semibold bg-gradient-to-r from-persian_green to-tiffany_blue bg-clip-text text-transparent">
                            {currentTestimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics Section */}
                    <div className="lg:col-span-4">
                      <div className="space-y-6">
                        <div className="p-8 rounded-2xl shadow-lg bg-brand-secondary-10 backdrop-blur-sm border border-brand-secondary-30">
                          <div className="text-4xl font-bold text-persian_green mb-2">
                            {currentTestimonial.metrics.engagement}
                          </div>
                          <div className="text-jet-600 dark:text-jet-400 font-medium">
                            Engagement Increase
                          </div>
                        </div>
                        
                        <div className="p-8 rounded-2xl shadow-lg bg-brand-primary-10 backdrop-blur-sm border border-brand-primary-30">
                          <div className="text-4xl font-bold text-tiffany_blue mb-2">
                            {currentTestimonial.metrics.timeSaved}
                          </div>
                          <div className="text-jet-600 dark:text-jet-400 font-medium">
                            Time Saved Weekly
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-white/80 dark:bg-jet/80 backdrop-blur-sm border border-brand-secondary-30 hover:bg-brand-secondary-10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 text-persian_green" />
            </button>

            {/* Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-persian_green shadow-lg'
                      : 'bg-brand-primary-30 hover:bg-brand-primary-40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-white/80 dark:bg-jet/80 backdrop-blur-sm border border-brand-secondary-30 hover:bg-brand-secondary-10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6 text-persian_green" />
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Average Engagement Increase', value: '240%', icon: '📈' },
            { label: 'Time Saved Per Week', value: '15+ hrs', icon: '⏰' },
            { label: 'Customer Satisfaction', value: '4.9/5', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="text-center p-8 rounded-2xl bg-white/60 dark:bg-jet/60 backdrop-blur-sm border border-brand-secondary-20 shadow-lg"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-persian_green mb-2">{stat.value}</div>
              <div className="text-jet-600 dark:text-jet-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 