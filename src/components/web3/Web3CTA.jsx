import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../grid'
import { duration, once, y } from '../../utilities/animation'
import Button from '../button'

export default function Web3CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="web3-cta-section py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#A035DD]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FEB413]/15 rounded-full blur-[150px]" />
      </div>
      
      <Container>
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0 }}
          viewport={{ once: once, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FEB413]/30 bg-[#FEB413]/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FEB413] animate-pulse" />
            <span className="text-sm font-medium text-[#FEB413]">Early Access</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
            Be the First to Access
            <br />
            <span className="bg-gradient-to-r from-[#A035DD] to-[#FEB413] bg-clip-text text-transparent">
              Web3 Features
            </span>
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Inscrivez-vous à notre liste d'attente pour être parmi les premiers à découvrir 
            les fonctionnalités Web3 de Pryzen.
          </p>

          {/* Email Form */}
          <motion.form
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FEB413]/50 transition-colors"
                required
              />
            </div>
            <Button className="min-w-40 sm:min-w-auto whitespace-nowrap">
              Join Waitlist
            </Button>
          </motion.form>

          {/* Success message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-400 font-medium"
            >
              ✓ Merci ! Vous serez notifié lors du lancement.
            </motion.div>
          )}

          {/* Trust indicators */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.3 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Données sécurisées
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Pas de spam
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Notifications exclusives
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
