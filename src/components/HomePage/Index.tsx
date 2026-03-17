import React from 'react'
import dynamic from 'next/dynamic'
import Hero from './Hero'

// Dynamically import below-the-fold components to reduce initial JS bundle
const WhyChoose = dynamic(() => import('./WhyChoose'), {
  loading: () => <div className="min-h-[400px]" />,
})
const MissionVision = dynamic(() => import('./Mission&Vision'), {
  loading: () => <div className="min-h-[400px]" />,
})
const ProductsOverview = dynamic(() => import('./ProductsOverview'), {
  loading: () => <div className="min-h-[400px]" />,
})
const SustainabilityCommitment = dynamic(() => import('./SustainabilityCommitment'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Industries = dynamic(() => import('./Industries'), {
  loading: () => <div className="min-h-[400px]" />,
})
const TeamSection = dynamic(() => import('./TeamSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const DirectorMessage = dynamic(() => import('./DirectorMessage'), {
  loading: () => <div className="min-h-[400px]" />,
})
const FAQSection = dynamic(() => import('./FAQSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const BlogSection = dynamic(() => import('./BlogSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const CTA = dynamic(() => import('../CTA'), {
  loading: () => <div className="min-h-[200px]" />,
})

function Index() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <MissionVision />
      <ProductsOverview />
      <SustainabilityCommitment />
      <Industries />
      <TeamSection />
      <DirectorMessage />
      <BlogSection />
      <FAQSection />
      <CTA />
    </div>
  )
}

export default Index