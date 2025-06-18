'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Video, Users, CheckCircle, ArrowRight } from 'lucide-react'

const demoFeatures = [
  {
    icon: Video,
    title: 'Live Platform Demo',
    description: 'See Aquareef in action with a personalized walkthrough of all features and AI capabilities'
  },
  {
    icon: Users,
    title: 'Strategy Consultation',
    description: 'Get expert advice on optimizing your social media strategy with ocean-deep insights'
  },
  {
    icon: CheckCircle,
    title: 'Custom Setup',
    description: 'Learn how to configure Aquareef for your specific business needs and goals'
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
]

export function DemoSection() {
  const [selectedDate] = useState<string>('')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleScheduleDemo = () => {
    if (!selectedDate || !selectedTimeSlot || !email || !name) {
      alert('Please fill in all fields to schedule your demo.')
      return
    }
    
    // In a real app, this would integrate with a scheduling service like Calendly
    const subject = `Demo Request - ${name}`
    const body = `Hi,

I'd like to schedule a demo of Aquareef for ${selectedDate} at ${selectedTimeSlot}.

Name: ${name}
Email: ${email}

Looking forward to seeing the platform in action!

Best regards,
${name}`

    window.open(`mailto:demo@aquareef.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
  }

  return (
    <section id="demo-section" className="py-24 bg-gradient-to-br from-[#fffafb] via-white to-teal-50 dark:from-[#131515] dark:via-[#2b2c28] dark:to-teal-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-8 -left-4 w-72 h-72 bg-[#7de2d1] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-[#339989] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7de2d1]/20 to-[#339989]/20 dark:from-[#7de2d1]/10 dark:to-[#339989]/10 text-[#339989] dark:text-[#7de2d1] rounded-full text-base font-medium mb-6 border border-[#7de2d1]/30"
          >
            <Calendar className="w-5 h-5" />
            Schedule Your Demo
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#131515] dark:text-[#fffafb] mb-6 leading-tight">
            See Aquareef in
            <span className="block bg-gradient-to-r from-[#339989] via-[#7de2d1] to-teal-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-xl text-[#2b2c28] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Book a personalized demo and discover how Aquareef can transform your social media strategy. 
            See real results, get expert insights, and start your journey to social media success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-[#339989] to-[#7de2d1] rounded-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#131515] dark:text-[#fffafb] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#2b2c28] dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Demo Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white/80 dark:bg-[#2b2c28]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#7de2d1]/20"
            >
              <div className="text-2xl font-bold text-[#339989] dark:text-[#7de2d1]">1-on-1</div>
              <div className="text-[#2b2c28] dark:text-gray-300">Personalized Demo</div>
              <div className="text-sm text-gray-500 mt-1">30 minutes • No commitment required</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/90 dark:bg-[#2b2c28]/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#7de2d1]/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-[#339989]" />
              <h3 className="text-2xl font-bold text-[#131515] dark:text-[#fffafb]">Book Your Demo</h3>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2b2c28] dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#339989] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2b2c28] dark:text-gray-300 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#339989] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2b2c28] dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#339989] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-sm font-medium text-[#2b2c28] dark:text-gray-300 mb-3">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                        selectedTimeSlot === slot
                          ? 'bg-[#339989] text-white border-[#339989]'
                          : 'bg-white dark:bg-gray-700 text-[#2b2c28] dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#339989]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                type="button"
                onClick={handleScheduleDemo}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#339989] to-[#7de2d1] hover:from-[#2d8a7a] hover:to-[#6dd9c6] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Schedule My Demo
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
              No spam, no commitment. Just a friendly conversation about your social media goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 