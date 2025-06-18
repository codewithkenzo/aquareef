'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Video, Users, CheckCircle, ArrowRight } from 'lucide-react'

export function DemoSection() {
  const [selectedDate] = useState<string>('')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleBookDemo = () => {
    console.log('Demo booked:', { selectedDate, selectedTimeSlot, email, name })
  }

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const benefits = [
    {
      icon: Video,
      title: 'Live Product Demo',
      description: 'See Aquareef in action with real campaigns and results'
    },
    {
      icon: Users,
      title: 'Personalized Strategy',
      description: 'Get tailored recommendations for your specific needs'
    },
    {
      icon: CheckCircle,
      title: 'Implementation Plan',
      description: 'Walk away with a clear roadmap to success'
    }
  ]

  return (
    <section id="demo-section" className="py-24 bg-gradient-to-br from-snow via-white to-teal-50 dark:from-night dark:via-jet dark:to-teal-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute -top-8 -left-4 w-72 h-72 bg-tiffany_blue rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-persian_green/30 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        style={{
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-64 h-64 bg-persian_green rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{
          animation: 'float 10s ease-in-out infinite'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-secondary-20 to-brand-primary-20 dark:from-brand-secondary-10 dark:to-brand-primary-10 text-persian_green dark:text-tiffany_blue rounded-full text-base font-medium mb-6 border border-brand-secondary-30"
          >
            <Calendar className="w-5 h-5" />
            Book Your Demo
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-night dark:text-snow mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-persian_green via-tiffany_blue to-teal-600 bg-clip-text text-transparent">
              See Aquareef in Action
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-jet dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get a personalized demo and see how Aquareef can transform your social media strategy. 
            Our experts will show you exactly how to achieve your marketing goals.
          </motion.p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 p-2 bg-gradient-to-br from-persian_green to-tiffany_blue rounded-lg">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-night dark:text-snow mb-2">
                  {benefit.title}
                </h3>
                <p className="text-jet dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Booking Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Demo Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 dark:bg-jet/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-secondary-20"
          >
            <div className="text-2xl font-bold text-persian_green dark:text-tiffany_blue">1-on-1</div>
            <div className="text-jet dark:text-gray-300">Personalized Demo</div>
            <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• 30-minute session</div>
              <div>• Live product walkthrough</div>
              <div>• Custom strategy discussion</div>
              <div>• Q&A with our experts</div>
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 dark:bg-jet/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-brand-secondary-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-persian_green" />
              <h3 className="text-2xl font-bold text-night dark:text-snow">Book Your Demo</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-jet dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-persian_green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-jet dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-persian_green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-jet dark:text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-persian_green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-jet dark:text-gray-300 mb-3">
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedTimeSlot === slot
                          ? 'bg-persian_green text-white border-persian_green'
                          : 'bg-white dark:bg-gray-700 text-jet dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-persian_green'
                      } border`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleBookDemo}
                disabled={!name || !email || !selectedTimeSlot}
                className="w-full py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-persian_green to-tiffany_blue hover:from-brand-primary-hover hover:to-brand-secondary-hover text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Demo Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 