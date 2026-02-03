import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import PryxHero from '../components/pryx/PryxHero'
import WhatIsPryx from '../components/pryx/WhatIsPryx'
import PryxUseCases from '../components/pryx/PryxUseCases'
import WhyPryx from '../components/pryx/WhyPryx'
import TokenOverview from '../components/pryx/TokenOverview'
import HowToGetPryx from '../components/pryx/HowToGetPryx'
import PryxRoadmap from '../components/pryx/PryxRoadmap'
import PryxCommunity from '../components/pryx/PryxCommunity'
import PryxFaq from '../components/pryx/PryxFaq'
import PryxDisclaimer from '../components/pryx/PryxDisclaimer'

export default function PryxPage() {
  return (
    <div className="pryx-page bg-bg min-h-screen">
      <Header />
      <main>
        <PryxHero />
        <WhatIsPryx />
        <PryxUseCases />
        <WhyPryx />
        <TokenOverview />
        <HowToGetPryx />
        <PryxRoadmap />
        <PryxCommunity />
        <PryxFaq />
        <PryxDisclaimer />
      </main>
      <Footer />
    </div>
  )
}
