'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, Zap, Crown, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeInText, GradientText } from '@/components/animations/text-animations'
import { SocialIcon, SocialIconSizes } from '@/components/ui/social-icons'

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small businesses',
    price: 39,
    originalPrice: 59,
    period: 'month',
    badge: 'Most Popular',
    badgeColor: 'from-blue-500 to-cyan-500',
    cardGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    platforms: ['Instagram', 'Facebook', 'LinkedIn', 'Threads'],
    features: [
      'Up to 3 social media accounts',
      '50 posts per month',
      'AI content generation',
      'Basic analytics',
      'Scheduled posting',
      'Hashtag optimization',
      'Email support'
    ],
    limitations: [
      'No X/Twitter (high API costs)',
      'No TikTok integration',
      'Limited analytics'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses and marketing teams',
    price: 99,
    originalPrice: 149,
    period: 'month',
    badge: 'Best Value',
    badgeColor: 'from-purple-500 to-pink-500',
    cardGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    platforms: ['Instagram', 'Facebook', 'LinkedIn', 'Threads', 'X/Twitter', 'TikTok'],
    features: [
      'Up to 10 social media accounts',
      '200 posts per month',
      'Advanced AI content generation',
      'Comprehensive analytics',
      'Advanced scheduling',
      'Hashtag & trend analysis',
      'A/B testing',
      'Priority support',
      'Team collaboration'
    ],
    limitations: [],
    cta: 'Upgrade to Pro',
    popular: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: null,
    originalPrice: null,
    period: 'Custom',
    badge: 'Custom Solution',
    badgeColor: 'from-gold-500 to-yellow-500',
    cardGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
    platforms: ['All Platforms', 'Custom Integrations', 'API Access'],
    features: [
      'Unlimited social media accounts',
      'Unlimited posts',
      'Custom AI models',
      'Advanced analytics & reporting',
      'White-label solutions',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'SLA guarantees',
      'On-premise deployment'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false
  }
]

const PlatformIcon = ({ platform }: { platform: string }) => {
  // Handle special cases for platform names
  const getPlatformName = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'x/twitter':
        return 'twitter'
      case 'all platforms':
        return 'instagram' // Use Instagram as default for "All Platforms"
      case 'custom integrations':
        return 'instagram' // Use Instagram as default for custom
      case 'api access':
        return 'instagram' // Use Instagram as default for API
      default:
        return platform.toLowerCase()
    }
  }

  return (
    <SocialIcon 
      platform={getPlatformName(platform)} 
      size={SocialIconSizes.sm} 
      className="mr-2 text-gray-600 dark:text-gray-400" 
    />
  )
}

export function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const getDiscountedPrice = (price: number | null) => {
    if (price === null) return null
    if (selectedPeriod === 'yearly') {
      // Yearly price: monthly * 12 * 0.8 (20% discount)
      return Math.round(price * 12 * 0.8)
    }
    return price
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -left-4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
          className="absolute -bottom-8 -right-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-base font-medium mb-6"
          >
            <Sparkles className="w-6 h-6" />
            Fair & Transparent Pricing
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <FadeInText>Choose Your</FadeInText>
            <div className="block">
              <GradientText 
                className="text-4xl sm:text-5xl font-bold"
                gradientClass="from-purple-600 via-pink-600 to-blue-600"
              >
                Perfect Plan
              </GradientText>
            </div>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            API-cost-aware pricing that makes sense. No hidden fees, no surprises. 
            Start free, scale as you grow.
          </p>

          {/* Period Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setSelectedPeriod('monthly')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPeriod('yearly')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-4 py-2 bg-gradient-to-r ${plan.badgeColor} text-white text-sm font-bold rounded-full shadow-lg`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <motion.div
                className={`relative h-full bg-gradient-to-br ${plan.cardGradient} backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
                  hoveredCard === plan.id ? 'scale-105 shadow-3xl' : ''
                } ${plan.popular ? 'ring-2 ring-purple-500/50' : ''}`}
                whileHover={{ y: -5 }}
              >
                {/* Spotlight Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {plan.id === 'starter' && <Star className="w-8 h-8 text-blue-500" />}
                    {plan.id === 'professional' && <Zap className="w-8 h-8 text-purple-500" />}
                    {plan.id === 'enterprise' && <Crown className="w-8 h-8 text-yellow-500" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    {plan.price ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          ${getDiscountedPrice(plan.price)}
                        </span>
                        <div className="text-left">
                          <div className="text-gray-600 dark:text-gray-400">
                            /{selectedPeriod === 'yearly' ? 'year' : plan.period}
                          </div>
                          {selectedPeriod === 'yearly' && (
                            <div className="text-sm text-gray-500 line-through">
                              ${plan.price * 12}/year
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        Custom
                      </div>
                    )}
                  </div>

                  {/* Supported Platforms */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Supported Platforms
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {plan.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="flex items-center px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-sm"
                        >
                          <PlatformIcon platform={platform} />
                          {platform}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 dark:text-gray-500 text-sm">
                        {limitation}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-4 text-lg font-semibold rounded-full transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 text-gray-900 dark:text-white hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  }`}
                  onClick={() => {
                    if (plan.id === 'enterprise') {
                      window.open('mailto:sales@blaze.com?subject=Enterprise Plan Inquiry', '_blank')
                    } else {
                      // Handle subscription flow
                      console.log(`Selected plan: ${plan.id}`)
                    }
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            <strong>Why no X/Twitter in Starter?</strong> X's API costs $100/month minimum, 
            making it unsustainable for budget-friendly plans. We believe in transparent, 
            fair pricing that reflects real costs.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              No setup fees
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 