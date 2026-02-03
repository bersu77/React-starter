import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import CommonTitle from '../common-title'
import { duration, y, once } from '../../utilities/animation'
import { FaWallet, FaNetworkWired, FaExchangeAlt, FaRocket } from 'react-icons/fa'

export default function HowToGetPryx() {
  const steps = [
    {
      icon: <FaWallet className="text-2xl" />,
      step: '01',
      title: 'Get a Wallet',
      description: 'Use MetaMask, Coinbase Wallet, or Pryzen embedded wallet',
    },
    {
      icon: <FaNetworkWired className="text-2xl" />,
      step: '02',
      title: 'Add Base Network',
      description: 'Add the Base network to your wallet for low fees',
    },
    {
      icon: <FaExchangeAlt className="text-2xl" />,
      step: '03',
      title: 'Swap on DEX',
      description: 'Use the official contract address on Uniswap or any Base DEX',
    },
    {
      icon: <FaRocket className="text-2xl" />,
      step: '04',
      title: 'Use in Pryzen',
      description: 'Buy stickers, collect NFT drops, unlock perks',
    },
  ]

  return (
    <section className="how-to-get-pryx py-16 md:py-20 lg:py-24 relative">
      <Container>
        <CommonTitle
          sub_title="How to Buy"
          title="Get $PRYX in 4 simple steps"
        />

        <Row className="justify-center mb-12">
          {steps.map((step, index) => (
            <Col key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6 lg:mb-0">
              <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: index * 0.1 }}
                viewport={{ once: once, amount: 0.2 }}
                className="relative h-full"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#FEB413]/50 to-transparent" />
                )}
                
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 h-full hover:border-[#FEB413]/30 transition-colors">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FEB413] flex items-center justify-center text-black mb-4">
                    {step.icon}
                  </div>
                  <span className="text-[#FEB413] font-mono text-sm">Step {step.step}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2 text-white">{step.title}</h3>
                  <p className="text-para text-sm">{step.description}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Safety Warning */}
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.5 }}
          viewport={{ once: once, amount: 0.2 }}
          className="max-w-2xl mx-auto p-5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-4"
        >
          <span className="text-3xl">🚨</span>
          <div>
            <h4 className="text-red-400 font-bold mb-1">Safety First</h4>
            <p className="text-red-400/80 text-sm">
              Never trust DMs. We never ask for your seed phrase. Always verify the official contract address before swapping.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
