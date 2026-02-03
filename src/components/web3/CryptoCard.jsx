import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import { duration, once, y } from '../../utilities/animation'
import CommonTitle from '../common-title'
import { FaLock, FaGift, FaTrophy, FaCreditCard } from 'react-icons/fa'

export default function CryptoCard() {
  const features = [
    { icon: <FaTrophy />, title: 'Play & Win', desc: 'Gagnez des récompenses à chaque pari placé' },
    { icon: <FaGift />, title: 'Cashback Crypto', desc: 'Recevez du cashback en crypto sur vos paris' },
    { icon: <FaCreditCard />, title: 'Paiements Faciles', desc: 'Payez et retirez directement en crypto' },
  ]

  return (
    <section className="crypto-card-section py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A035DD]/10 rounded-full blur-[150px] -z-10" />
      
      <Container>
        <CommonTitle 
          sub_title="Exclusive Card"
          title="Pryzen Crypto Card"
          des="Utilisez votre carte crypto Pryzen pour participer aux paris et gagner des récompenses exclusives."
        />

        <Row className="items-center">
          <Col lg={6} className="mb-10 lg:mb-0">
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0.1 }}
              viewport={{ once: once, amount: 0.2 }}
              className="relative"
            >
              {/* Card Visual */}
              <div className="relative w-full max-w-md mx-auto perspective-1000">
                <motion.div 
                  className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] rounded-2xl p-6 border border-[#A035DD]/30 shadow-2xl"
                  whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card chip */}
                  <div className="w-12 h-10 rounded bg-gradient-to-br from-[#FEB413] to-[#f59e0b] mb-6" />
                  
                  {/* Card number placeholder */}
                  <div className="flex gap-4 mb-6">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div key={i} className="flex gap-1">
                        {[1, 2, 3, 4].map((_, j) => (
                          <span key={j} className="w-2 h-2 rounded-full bg-white/30" />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Card holder */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/50 mb-1">CARD HOLDER</p>
                      <p className="text-white font-medium tracking-wider">PRYZEN MEMBER</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/50 mb-1">VALID THRU</p>
                      <p className="text-white font-medium">12/28</p>
                    </div>
                  </div>

                  {/* Logo */}
                  <div className="absolute top-6 right-6">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#A035DD] to-[#FEB413] bg-clip-text text-transparent">
                      PRYZEN
                    </span>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A035DD]/20 to-[#FEB413]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>

                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-[#FEB413]/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#A035DD]/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0.2 }}
              viewport={{ once: once, amount: 0.2 }}
            >
              {/* Limited Access Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                <FaLock className="text-red-400 text-sm" />
                <span className="text-sm font-medium text-red-400">Accès Limité • Utilisateurs Éligibles Uniquement</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Play & Win avec chaque pari
              </h3>
              <p className="text-white/70 mb-8">
                La carte crypto Pryzen vous donne accès à des fonctionnalités exclusives. 
                Cumulez des récompenses, recevez du cashback et profitez d'avantages réservés aux membres.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FEB413]/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#A035DD] to-[#FEB413] flex items-center justify-center text-white shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
