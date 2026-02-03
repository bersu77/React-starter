import React from 'react'
import { Container } from '../grid'
import { motion } from 'framer-motion'
import { duration, y, once } from '../../utilities/animation'

export default function PryxDisclaimer() {
  return (
    <section className="pryx-disclaimer py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Container>
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0 }}
          viewport={{ once: once, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xl">⚖️</span>
              <span className="text-xs uppercase tracking-wider text-para font-semibold">Legal Disclaimer</span>
            </div>
            <p className="text-para text-xs md:text-sm leading-relaxed">
              $PRYX is a meme token with community and digital-item utility. Nothing on this site is financial advice. 
              Crypto assets are volatile and may lose value. Always do your own research and verify the official contract address. 
              Past performance does not indicate future results. Only invest what you can afford to lose.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
