import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import { duration, once, y } from '../../utilities/animation'
import CommonTitle from '../common-title'
import { FaStore, FaUsers, FaChartLine, FaClock } from 'react-icons/fa'

export default function Marketplace() {
  const upcomingFeatures = [
    { icon: <FaStore />, title: 'Marketplace Décentralisée', desc: 'Achetez et vendez vos tickets librement' },
    { icon: <FaUsers />, title: 'Peer-to-Peer Trading', desc: 'Échangez directement avec d\'autres utilisateurs' },
    { icon: <FaChartLine />, title: 'Prix en Temps Réel', desc: 'Suivez les cotes et la valeur de vos NFT' },
  ]

  return (
    <section className="marketplace-section py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#A035DD]/10 to-[#FEB413]/10 rounded-full blur-[180px] -z-10" />
      
      <Container>
        <div className="text-center mb-12">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FEB413]/20 to-[#A035DD]/20 border border-[#FEB413]/40 mb-8"
          >
            <FaClock className="text-[#FEB413] animate-pulse" />
            <span className="text-lg font-semibold bg-gradient-to-r from-[#FEB413] to-[#A035DD] bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.div>

          <CommonTitle 
            sub_title="Future Feature"
            title="Ticket Marketplace"
            des="Une marketplace décentralisée pour acheter et vendre vos tickets de paris NFT. Le futur du trading sportif."
            className="mb-10"
          />
        </div>

        {/* Marketplace Preview */}
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* Placeholder marketplace visual */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Mock marketplace interface */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] p-8 rounded-2xl border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#A035DD] to-[#FEB413] flex items-center justify-center">
                    <FaStore className="text-white" />
                  </div>
                  <span className="font-bold text-white text-lg">Pryzen Marketplace</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-24 h-8 rounded-lg bg-white/10 blur-[1px]" />
                  <div className="w-24 h-8 rounded-lg bg-white/10 blur-[1px]" />
                </div>
              </div>

              {/* Mock listings */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    viewport={{ once: once }}
                    className="relative"
                  >
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-colors">
                      <div className="h-20 rounded-lg bg-gradient-to-r from-white/5 to-white/10 mb-3 flex items-center justify-center">
                        <span className="text-3xl opacity-20">🎫</span>
                      </div>
                      <div className="w-full h-3 rounded bg-white/10 mb-2" />
                      <div className="w-2/3 h-3 rounded bg-white/5" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Overlay blur effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* "Coming Soon" overlay */}
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-black/60 border-2 border-[#FEB413]/50 backdrop-blur-sm">
                  <span className="text-2xl md:text-3xl font-bold text-white">Bientôt Disponible</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <Row>
          {upcomingFeatures.map((feature, index) => (
            <Col md={4} key={index} className="mb-6 md:mb-0">
              <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0.4 + index * 0.1 }}
                viewport={{ once: once, amount: 0.2 }}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A035DD]/30 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#A035DD]/20 to-[#FEB413]/20 flex items-center justify-center text-2xl text-[#FEB413] mx-auto mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-white/60">{feature.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
