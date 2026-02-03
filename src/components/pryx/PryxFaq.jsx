import React from 'react'
import { Container, Row, Col } from '../grid'
import CommonTitle from '../common-title'
import Accordion from '../accordion'
import faqImg from '../../assets/img/howto/faq-img.png'
import { motion } from 'framer-motion'
import { duration, y, once } from '../../utilities/animation'

export default function PryxFaq() {
  const faqItems = [
    {
      title: 'Who is Pryx?',
      body: `<p>Pryx is the official Pryzen mascot — a wolf that represents instinct, strategy, and the strength of the pack.</p>`,
    },
    {
      title: 'Why a wolf?',
      body: `<p>Because sports and predictions are about:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>Timing</li>
               <li>Instinct</li>
               <li>Collective intelligence</li>
             </ul>
             <p class="mt-2">The wolf embodies all three.</p>`,
    },
    {
      title: 'Is Pryx just a character?',
      body: `<p>No. Pryx is the face of:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>Pryzen collectibles</li>
               <li>NFT drops</li>
               <li>Stickers and reactions</li>
               <li>Community identity</li>
             </ul>`,
    },
    {
      title: 'Will Pryx have NFTs?',
      body: `<p>Yes. Pryx exists as a trait-based NFT collection with:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>Sports outfits</li>
               <li>Props (balls, gloves, gear)</li>
               <li>Backgrounds & FX</li>
               <li>Rarity tiers</li>
             </ul>
             <p class="mt-2">Some editions may include perks.</p>`,
    },
    {
      title: 'Can Pryx be used as a meme?',
      body: `<p>Absolutely. Pryx is designed to be meme-friendly, expressive, and shareable across social platforms.</p>`,
    },
  ]

  return (
    <section className="pryx-faq py-16 md:py-20 lg:py-24">
      <Container>
        <Row className="items-start">
          <Col className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <CommonTitle
              className="mb-8 md:mb-10 text-start!"
              sub_title="FAQ"
              title="Meet Pryx, the Wolf"
              title_class=""
            />
            <Accordion items={faqItems} activeItem={0} />
          </Col>
          <Col className="w-full lg:w-1/2 px-4">
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0.2 }}
              viewport={{ once: once, amount: 0.2 }}
              className="lg:pl-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#FEB413]/20 rounded-3xl blur-xl" />
                <img 
                  src={faqImg} 
                  alt="PRYX FAQ" 
                  className="relative rounded-3xl w-full"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-sm rounded-xl border border-[#FEB413]/30">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    <div>
                      <p className="text-[#FEB413] font-semibold text-sm">Still have questions?</p>
                      <p className="text-para text-xs">Join our community channels for support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
