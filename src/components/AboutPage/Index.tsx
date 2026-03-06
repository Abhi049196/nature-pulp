'use client'
import React from 'react'
import HeroBanner from './HeroBanner'
import BrandStory from './BrandStory'
import Manifesto from './Manifesto'
import CoreValues from './CoreValues'
import ImpactNumbers from './ImpactNumbers'
import CTA from '../CTA'

function Index() {
  return (
    <div>
        <HeroBanner />
        <BrandStory />
        <Manifesto />
        <CoreValues />
        <ImpactNumbers />
        <CTA />
    </div>
  )
}

export default Index