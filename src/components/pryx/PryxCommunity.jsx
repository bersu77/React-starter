import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../grid'
import { duration, y, once } from '../../utilities/animation'

export default function PryxCommunity() {
  return (
    <section id="community" className="pryx-community py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FEB413]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FEB413]/10 rounded-full blur-[200px] pointer-events-none" />
      
      <Container className="relative z-1">
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0 }}
          viewport={{ once: once, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-4xl mb-4 block">🤝</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built by the community.{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FEB413] bg-clip-text text-transparent">
              Powered by memes.
            </span>
          </h2>
          <p className="text-para text-base md:text-lg">
            Join the squad: drops, meme contests, match reactions, and early access. We're building in public — and the community shapes the vibe.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
