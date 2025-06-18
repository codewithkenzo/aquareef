'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Video, Users, CheckCircle, ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const demoFeatures = [
  {
    icon: Video,
    title: 'Live Platform Demo',
    description: 'See Blaze in action with a personalized walkthrough of all features'
  },
  {
    icon: Users,
    title: 'Strategy Consultation',
    description: 'Get expert advice on optimizing your social media strategy'
  },
  {
    icon: CheckCircle,
    title: 'Custom Setup',
    description: 'Learn how to configure Blaze for your specific business needs'
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
]

export function DemoSection() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleScheduleDemo = () => {
    if (!selectedDate || !selectedTime || !email || !name) {
      alert('Please fill in all fields to schedule your demo.')
      return
    }
    
    // In a real app, this would integrate with a scheduling service like Calendly
    const subject = `Demo Request - ${name}`
    const body = `Hi,

I'd like to schedule a demo of Blaze for ${selectedDate} at ${selectedTime}.

Name: ${name}
Email: ${email}

Looking forward to seeing the platform in action!

Best regards,
${name}`

    window.open(`mailto:demo@blaze.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
  }

  return (
    <section id="demo-section" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-base font-medium mb-6"
          >
            <Play className="w-6 h-6" />
            Live Demo
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            See Blaze in
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Book a personalized demo and discover how Blaze can transform your social media strategy. 
            Our experts will show you exactly how to maximize your ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What You'll Learn
              </h3>
              
              <div className="space-y-6">
                {demoFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15 min</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Demo Duration</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1-on-1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Personalized</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Schedule Your Demo
              </h3>
            </div>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Button */}
              <Button
                onClick={handleScheduleDemo}
                className="w-full py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                We'll send you a calendar invite with the meeting link
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 