'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, Crown, ArrowRight, Sparkles } from 'lucide-react'
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
    badgeColor: 'from-persian_green to-tiffany_blue',
    cardGradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
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
    badgeColor: 'from-tiffany_blue to-persian_green',
    cardGradient: 'from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20',
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
    <section className="py-24 relative overflow-hidden">
      {/* Glassmorphism Background System */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-snow/96 via-tiffany_blue/8 to-persian_green/12 dark:from-night/96 dark:via-jet/85 dark:to-persian_green/18" />
        
        {/* Floating glass orbs for depth */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-tiffany_blue/15 to-persian_green/8 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-persian_green/12 to-tiffany_blue/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-br from-jet/10 to-persian_green/6 rounded-full blur-2xl opacity-35" />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-glass-pricing" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium mb-6 bg-brand-secondary-15 backdrop-blur-sm border border-brand-secondary-30 text-persian_green"
          >
            <Sparkles className="w-6 h-6" />
            Fair & Transparent Pricing
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-night dark:text-snow mb-6">
            <FadeInText>Choose Your</FadeInText>
            <div className="block">
              <GradientText 
                className="text-4xl sm:text-5xl font-bold"
                gradientClass="from-persian_green via-tiffany_blue to-persian_green"
              >
                Perfect Plan
              </GradientText>
            </div>
          </h2>
          
          <p className="text-xl text-jet-600 dark:text-jet-300 max-w-3xl mx-auto mb-8">
            API-cost-aware pricing that makes sense. No hidden fees, no surprises. 
            Start free, scale as you grow.
          </p>

          {/* Period Toggle with Glass Effect */}
          <div className="inline-flex items-center rounded-full p-1 shadow-lg bg-brand-light-60 backdrop-blur-sm border border-brand-white-30">
            <button
              onClick={() => setSelectedPeriod('monthly')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-persian_green to-tiffany_blue text-white shadow-lg'
                  : 'text-jet-600 dark:text-jet-400 hover:text-night dark:hover:text-snow'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPeriod('yearly')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-persian_green to-tiffany_blue text-white shadow-lg'
                  : 'text-jet-600 dark:text-jet-400 hover:text-night dark:hover:text-snow'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-persian_green/20 text-persian_green text-xs rounded-full">
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

              {/* Card with Glassmorphism */}
              <motion.div
                className={`relative h-full rounded-3xl p-8 shadow-2xl transition-all duration-500 backdrop-blur-xl ${
                  hoveredCard === plan.id ? 'scale-105 shadow-3xl' : ''
                } ${plan.popular ? 'ring-2 ring-persian_green/50 bg-brand-light-80 border border-brand-primary-30' : 'bg-brand-light-60 border border-brand-white-20'}`}
                style={{
                  boxShadow: plan.popular 
                    ? '0 8px 32px 0 #33998926, inset 0 1px 0 0 #ffffff33' 
                    : '0 8px 32px 0 #0000001a, inset 0 1px 0 0 #ffffff1a',
                }}
                whileHover={{ y: -5 }}
              >
                {/* Spotlight Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {plan.id === 'starter' && <Star className="w-8 h-8 text-persian_green" />}
                    {plan.id === 'professional' && <Crown className="w-8 h-8 text-tiffany_blue" />}
                    {plan.id === 'enterprise' && <Crown className="w-8 h-8 text-yellow-500" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-night dark:text-snow mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-jet-600 dark:text-jet-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    {plan.price ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-night dark:text-snow">
                          ${getDiscountedPrice(plan.price)}
                        </span>
                        <div className="text-left">
                          <div className="text-jet-600 dark:text-jet-400">
                            /{selectedPeriod === 'yearly' ? 'year' : plan.period}
                          </div>
                          {selectedPeriod === 'yearly' && (
                            <div className="text-sm text-jet-500 line-through">
                              ${plan.price * 12}/year
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-night dark:text-snow">
                        Custom
                      </div>
                    )}
                  </div>

                  {/* Supported Platforms */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-jet-700 dark:text-jet-300 mb-3">
                      Supported Platforms
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {plan.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="flex items-center px-3 py-1 rounded-full text-sm text-jet-700 dark:text-jet-300 bg-brand-white-40 backdrop-blur-sm border border-brand-white-30"
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
                      <Check className="w-5 h-5 text-persian_green flex-shrink-0 mt-0.5" />
                      <span className="text-jet-700 dark:text-jet-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-jet-500 dark:text-jet-500 text-sm">
                        {limitation}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-4 text-lg font-semibold rounded-full transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-persian_green to-tiffany_blue hover:from-persian_green/90 hover:to-tiffany_blue/90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-brand-light-60 backdrop-blur-sm border-2 border-brand-white-30 hover:border-persian_green dark:hover:border-tiffany_blue text-night dark:text-snow hover:bg-persian_green/5 dark:hover:bg-persian_green/10'
                  }`}
                  onClick={() => {
                    if (plan.id === 'enterprise') {
                      window.open('mailto:sales@aquareef.com?subject=Enterprise Plan Inquiry', '_blank')
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
          <p className="text-jet-600 dark:text-jet-400 max-w-2xl mx-auto">
            <strong className="text-night dark:text-snow">Why no X/Twitter in Starter?</strong> X&apos;s API costs $100/month minimum, 
            making it unsustainable for budget-friendly plans. We believe in transparent, 
            fair pricing that reflects real costs.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-jet-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-persian_green" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-persian_green" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-persian_green" />
              No setup fees
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 