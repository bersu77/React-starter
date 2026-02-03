import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import CommonTitle from '../common-title'
import { duration, y, once } from '../../utilities/animation'

export default function PryxUseCases() {
  const useCases = [
    {
      number: '01',
      title: 'Stickers that feel like sports',
      description: 'Spam "LET\'S GO", "BAD BEAT", "LOCKED IN" and more — but in Pryzen style. Earn or buy sticker packs using $PRYX, and flex them in community chats.',
      visual: (
        <div className="grid grid-cols-3 gap-2">
          {['🔥', '💪', '🏆', '⚡', '🎯', '🚀'].map((emoji, i) => (
            <div key={i} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer">
              {emoji}
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '02',
      title: 'NFT drops with real personality',
      description: 'A sports mascot universe: outfits, props, backgrounds, FX, rarity tiers. Some drops are just art. Some are perks.',
      visual: (
        <div className="flex gap-3 justify-center">
          {['Common', 'Rare', 'Epic'].map((rarity, i) => (
            <div 
              key={i} 
              className={`w-20 h-28 rounded-lg flex flex-col items-center justify-center text-xs font-medium ${
                i === 0 ? 'bg-gray-500/20 border border-gray-500/30' :
                i === 1 ? 'bg-blue-500/20 border border-blue-500/30' :
                'bg-purple-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/20'
              }`}
            >
              <span className="text-2xl mb-1">🦁</span>
              <span className={`${
                i === 0 ? 'text-gray-400' :
                i === 1 ? 'text-blue-400' :
                'text-purple-400'
              }`}>{rarity}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '03',
      title: 'Perks (limited, curated)',
      description: 'Holders may unlock occasional perks like early access to drops or special match promos inside Pryzen. No promises — perks depend on campaigns and availability.',
      visual: (
        <div className="relative">
          <div className="bg-gradient-to-r from-[#FF6B35]/20 to-[#FEB413]/20 rounded-xl p-4 border border-[#FEB413]/30">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">🎫</span>
              <span className="font-semibold text-[#FEB413]">PERK PASS</span>
            </div>
            <p className="text-xs text-para">Early access to exclusive drops</p>
          </div>
          <div className="absolute -top-2 -right-2 px-2 py-1 bg-[#FF6B35] rounded-full text-xs font-bold">
            LIMITED
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="pryx-use-cases py-16 md:py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FEB413]/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-1">
        <CommonTitle
          sub_title="Use Cases"
          title="What can you do with $PRYX?"
        />

        <div className="space-y-12 md:space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0.1 }}
              viewport={{ once: once, amount: 0.2 }}
            >
              <Row className={`items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <Col className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-[#FEB413]/20 font-jura">{useCase.number}</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{useCase.title}</h3>
                      <p className="text-para text-base md:text-lg leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </Col>
                <Col className="w-full lg:w-1/2 px-4">
                  <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-white/10">
                    {useCase.visual}
                  </div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
