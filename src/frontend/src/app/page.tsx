import { Navbar } from '@/components/custom/navbar'
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureShowcase } from '@/components/custom/feature-showcase'
import { TestimonialsCarouselV2 as TestimonialsCarousel } from '@/components/custom/testimonials-carousel-v2'
import { PricingSection } from '@/components/custom/pricing-section'
import { DemoSection } from '@/components/custom/demo-section'
import { CTASection } from '@/components/custom/cta-section'
import { Footer } from '@/components/custom/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section id="features">
        <FeatureShowcase />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="demo">
        <DemoSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  )
}
