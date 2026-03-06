import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import MissionVision from './Mission&Vision'
import ProductsOverview from './ProductsOverview'
import SustainabilityCommitment from './SustainabilityCommitment'
import Industries from './Industries'
import CTA from '../CTA'

function Index() {
  return (
    <div>
        <Hero />
        <WhyChoose />
        <MissionVision />
        <ProductsOverview />
        <SustainabilityCommitment />
        <Industries />
        <CTA />
    </div>
  )
}

export default Index