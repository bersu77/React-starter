import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import CommonTitle from '../common-title'
import { duration, y, once } from '../../utilities/animation'
import { FaUsers, FaTrophy, FaCoins, FaHeart } from 'react-icons/fa'

export default function WhyPryx() {
  const reasons = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'Drive community participation',
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      title: 'Reward active fans (challenges, engagement, drops)',
    },
    {
      icon: <FaCoins className="text-2xl" />,
      title: 'Create a fun currency for digital items (stickers/NFTs)',
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: 'Keep it simple: culture first, utility second, hype always',
    },
  ]

  return (
    <section className="why-pryx py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <Container className="relative z-1">
        <Row className="items-center">
          <Col className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0 }}
              viewport={{ once: once, amount: 0.2 }}
            >
              <span className='inline-flex mb-4 uppercase text-sm md:text-base leading-normal text-white font-manrope px-3 relative z-1'>
                {Array.from({ length: 2 }).map((_, index) => (
                  <svg key={index} className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${index === 0 ? 'left-0' : 'right-0 -scale-x-100'}`} width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.307678 6.30762V0.307617H6.30768" stroke="white" strokeWidth="0.615385" />
                    <path d="M6.30768 26.3076L0.307678 26.3076L0.307678 20.3076" stroke="white" strokeWidth="0.615385" />
                  </svg>
                ))}
                Why $PRYX?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[110%] mb-6">
                Because sports is emotional — and{' '}
                <span className="text-[#FEB413]">memes travel faster than ads.</span>
              </h2>
              <p className="text-para text-base md:text-lg leading-relaxed">
                $PRYX is built to power community growth, create viral moments, and make Pryzen feel alive.
              </p>
            </motion.div>
          </Col>
          
          <Col className="w-full lg:w-1/2 px-4">
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ y: y, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: duration, delay: index * 0.1 }}
                  viewport={{ once: once, amount: 0.2 }}
                  className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FEB413]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FEB413]/10 flex items-center justify-center text-[#FEB413] flex-shrink-0">
                    {reason.icon}
                  </div>
                  <span className="text-white font-medium text-base md:text-lg">{reason.title}</span>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
