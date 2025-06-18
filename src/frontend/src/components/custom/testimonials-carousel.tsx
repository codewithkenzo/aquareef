'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { FadeInText } from '@/components/animations/text-animations'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    company: 'TechStart Inc.',
    role: 'Marketing Director',
    image: '/api/placeholder/64/64',
    quote: 'Blaze transformed our social media presence completely. Our engagement increased by 400% in just 3 months, and the AI-generated content feels authentic to our brand.',
    rating: 5,
    metrics: {
      engagement: '+400%',
      timeSaved: '20 hrs/week'
    }
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    company: 'Digital Ventures',
    role: 'CEO',
    image: '/api/placeholder/64/64',
    quote: 'The multi-platform scheduling feature is a game-changer. We went from spending hours on social media to having everything automated while maintaining quality.',
    rating: 5,
    metrics: {
      engagement: '+250%',
      timeSaved: '15 hrs/week'
    }
  },
  {
    id: 3,
    name: 'Emily Watson',
    company: 'Creative Studio',
    role: 'Social Media Manager',
    image: '/api/placeholder/64/64',
    quote: 'The analytics insights helped us understand our audience better than ever. We now post at optimal times and our content performs consistently.',
    rating: 5,
    metrics: {
      engagement: '+320%',
      timeSaved: '12 hrs/week'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'E-commerce Plus',
    role: 'Growth Manager',
    image: '/api/placeholder/64/64',
    quote: 'ROI tracking and campaign management features helped us scale our social media marketing efficiently. Best investment we made this year.',
    rating: 5,
    metrics: {
      engagement: '+180%',
      timeSaved: '18 hrs/week'
    }
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    company: 'Brand Builders',
    role: 'Founder',
    image: '/api/placeholder/64/64',
    quote: 'Content generation AI understands our brand voice perfectly. Our followers can\'t tell the difference between AI and human-written posts.',
    rating: 5,
    metrics: {
      engagement: '+290%',
      timeSaved: '25 hrs/week'
    }
  },
  {
    id: 6,
    name: 'Alex Johnson',
    company: 'SaaS Solutions',
    role: 'Product Manager',
    image: '/api/placeholder/64/64',
    quote: 'The platform\'s intelligence in optimizing posting schedules and content types has made our social media strategy incredibly effective.',
    rating: 5,
    metrics: {
      engagement: '+350%',
      timeSaved: '22 hrs/week'
    }
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
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

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-current" />
            Customer Success Stories
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-800 p-12 md:p-20 shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-16">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0 self-start">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                      <Quote className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left space-y-6">
                    {/* Stars */}
                    <div className="flex justify-start">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex-shrink-0 lg:self-start">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl shadow-sm border border-green-100 dark:border-green-800/30">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {testimonials[currentIndex].metrics.engagement}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Engagement
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-800/30">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {testimonials[currentIndex].metrics.timeSaved}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Time Saved
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Posts Created</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 