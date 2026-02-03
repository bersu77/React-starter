import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../grid'
import Button from '../button'
import { duration, y, once } from '../../utilities/animation'

export default function PryxHero() {
  const bullets = [
    { emoji: '🏟️', text: 'Sports-first meme coin culture' },
    { emoji: '🎟️', text: 'Buy stickers + unlock perks' },
    { emoji: '🏆', text: 'Limited NFT drops + match-based utilities' },
    { emoji: '⚡', text: 'Built on Base (fast + low fees)' },
  ]

  return (
    <section className="pryx-hero relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/10 via-[#FEB413]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FEB413]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FF6B35]/15 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-1">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FEB413]/20 border border-[#FEB413]/30 mb-6"
          >
            <span className="text-2xl">🔥</span>
            <span className="text-[#FEB413] font-semibold uppercase text-sm tracking-wider">The Sports Meme Coin</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.1 }}
            viewport={{ once: once, amount: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[110%] mb-6"
          >
            The meme coin for{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#FEB413] to-[#FFD93D] bg-clip-text text-transparent">
              sports culture.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            className="text-lg md:text-xl text-para max-w-2xl mx-auto mb-8"
          >
            $PRYX powers stickers, drops, and perks inside Pryzen — built for fans who live the game and love the hype.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.3 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button href="#" className="min-w-44">Get $PRYX</Button>
            <a 
              href="#community" 
              className="px-6 py-3 border border-[#FEB413]/50 rounded-lg text-[#FEB413] hover:bg-[#FEB413]/10 transition-colors font-medium"
            >
              Join the Community
            </a>
          </motion.div>

          {/* Bullets */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.4 }}
            viewport={{ once: once, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-8"
          >
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <span className="text-xl">{bullet.emoji}</span>
                <span className="text-sm md:text-base text-white/80">{bullet.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Disclaimer Banner */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.5 }}
            viewport={{ once: once, amount: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF6B35]/15 to-[#FEB413]/15 border border-[#FEB413]/40 backdrop-blur-sm"
          >
            <span className="text-xl">⚠️</span>
            <p className="text-sm md:text-base font-medium text-white/90">
              <span className="text-[#FEB413]">$PRYX</span> is a meme token for community + utility. 
              <span className="text-[#FF6B35] ml-1">Not investment advice.</span>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
