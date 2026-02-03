import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../grid'
import { duration, once, y } from '../../utilities/animation'
import Button from '../button'

export default function Web3Hero() {
  return (
    <section className="web3-hero relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A035DD]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FEB413]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#A035DD]/10 to-[#FEB413]/10 rounded-full blur-[150px]" />
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#A035DD]/30 bg-[#A035DD]/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FEB413] animate-pulse" />
            <span className="text-sm font-medium text-white/80">Web3 Powered</span>
          </motion.div>

          <motion.h1
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.1 }}
            viewport={{ once: once, amount: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-[110%] mb-6"
          >
            <span className="text-white">The Future of</span>
            <br />
            <span className="bg-gradient-to-r from-[#A035DD] via-[#FEB413] to-[#FEB413] bg-clip-text text-transparent">
              Sports Betting
            </span>
            <br />
            <span className="text-white">is Here</span>
          </motion.h1>

          <motion.p
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
          >
            Découvrez l'univers Web3 de Pryzen. Des paris transformés en NFT, 
            une carte crypto exclusive et une marketplace décentralisée.
          </motion.p>

          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.3 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button className="min-w-48">Join the Revolution</Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.4 }}
            viewport={{ once: once, amount: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '100K+', label: 'NFT Bets Created' },
              { value: '$2M+', label: 'Trading Volume' },
              { value: '50K+', label: 'Active Users' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#FEB413]">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
