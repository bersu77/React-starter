import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../grid'
import CommonTitle from '../common-title'
import { duration, y, once } from '../../utilities/animation'

export default function PryxRoadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Launch & Culture',
      status: 'current',
      items: [
        'Launch token + community channels',
        'Meme kits, templates, sticker previews',
        'Early supporter roles + OG list',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Pryzen Utilities',
      status: 'upcoming',
      items: [
        'Sticker store live (buy with $PRYX)',
        'First mascot NFT drop',
        'Weekly community challenges + leaderboards',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Perks & Expansions',
      status: 'future',
      items: [
        'Limited perks tied to campaigns',
        'Collabs with creators + sports communities',
        'Bigger drops around major sports events',
      ],
    },
  ]

  const getStatusStyles = (status) => {
    switch (status) {
      case 'current':
        return 'border-[#FEB413] bg-[#FEB413]/10'
      case 'upcoming':
        return 'border-[#FF6B35]/50 bg-[#FF6B35]/5'
      default:
        return 'border-white/20 bg-white/5'
    }
  }

  const getDotStyles = (status) => {
    switch (status) {
      case 'current':
        return 'bg-[#FEB413] shadow-lg shadow-[#FEB413]/50'
      case 'upcoming':
        return 'bg-[#FF6B35]'
      default:
        return 'bg-white/30'
    }
  }

  return (
    <section className="pryx-roadmap py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FEB413]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <Container className="relative z-1">
        <CommonTitle
          sub_title="Roadmap"
          title="Where we're heading"
          des="Meme coin realistic — no moon promises, just culture + utility"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FEB413] via-[#FF6B35] to-white/20 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: index * 0.15 }}
                viewport={{ once: once, amount: 0.2 }}
                className={`relative pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
                }`}
              >
                {/* Dot */}
                <div className={`absolute left-2 md:left-1/2 top-6 w-5 h-5 rounded-full ${getDotStyles(phase.status)} md:-translate-x-1/2 z-10`}>
                  {phase.status === 'current' && (
                    <div className="absolute inset-0 rounded-full bg-[#FEB413] animate-ping opacity-50" />
                  )}
                </div>

                {/* Card */}
                <div className={`p-6 rounded-2xl border ${getStatusStyles(phase.status)} transition-all hover:scale-[1.02]`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      phase.status === 'current' ? 'bg-[#FEB413] text-black' : 
                      phase.status === 'upcoming' ? 'bg-[#FF6B35]/20 text-[#FF6B35]' : 
                      'bg-white/10 text-white/60'
                    }`}>
                      {phase.phase}
                    </span>
                    {phase.status === 'current' && (
                      <span className="text-xs text-[#FEB413]">● Active</span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-para text-sm md:text-base">
                        <span className="text-[#FEB413] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
