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
    gradient: 'from-blue-500 to-cyan-500'
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
    gradient: 'from-purple-500 to-pink-500'
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
    gradient: 'from-green-500 to-emerald-500'
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
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-300 rounded-full text-base font-medium mb-8"
          >
            <Star className="w-5 h-5 fill-current" />
            Customer Success Stories
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              50,000+ Marketers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-800 relative"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5`} />
                
                {/* Content Container */}
                <div className="relative p-12 lg:p-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Quote Section */}
                    <div className="lg:col-span-8 space-y-8">
                      {/* Quote Icon */}
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${currentTestimonial.gradient} shadow-lg`}>
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        "{currentTestimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-xl font-bold text-white">
                            {currentTestimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {currentTestimonial.role}
                          </p>
                          <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {currentTestimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics Section */}
                    <div className="lg:col-span-4">
                      <div className="space-y-6">
                        <div className={`p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/30 shadow-lg`}>
                          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                            {currentTestimonial.metrics.engagement}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 font-medium">
                            Engagement Increase
                          </div>
                        </div>
                        
                        <div className={`p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/30 shadow-lg`}>
                          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            {currentTestimonial.metrics.timeSaved}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 font-medium">
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

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-800 shadow-xl rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-800 shadow-xl rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400 w-12'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Average Rating</div>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Customers</div>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Posts Created</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 