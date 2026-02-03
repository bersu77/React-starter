import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../grid'
import CommonTitle from '../common-title'
import { duration, y, once } from '../../utilities/animation'
import { FaCopy, FaCheck, FaLock, FaShieldAlt } from 'react-icons/fa'

export default function TokenOverview() {
  const [copied, setCopied] = useState(false)
  
  const contractAddress = '0x...' // Placeholder
  
  const tokenInfo = [
    { label: 'Token Name', value: 'PRYX' },
    { label: 'Ticker', value: '$PRYX', highlight: true },
    { label: 'Chain', value: 'Base', badge: true },
    { label: 'Contract', value: contractAddress, copyable: true },
    { label: 'Total Supply', value: 'X,XXX,XXX,XXX' },
    { label: 'Buy/Sell Tax', value: '0% / 0%', success: true },
    { label: 'Liquidity', value: 'Locked', icon: <FaLock className="text-sm" /> },
    { label: 'Ownership', value: 'Renounced', icon: <FaShieldAlt className="text-sm" /> },
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="token-overview py-16 md:py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FEB413]/5 via-transparent to-transparent pointer-events-none" />
      
      <Container className="relative z-1">
        <CommonTitle
          sub_title="Token Overview"
          title="$PRYX at a glance"
        />

        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.1 }}
          viewport={{ once: once, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden">
            {tokenInfo.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-4 md:p-5 ${
                  index !== tokenInfo.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <span className="text-para text-sm md:text-base">{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.icon && <span className="text-[#FEB413]">{item.icon}</span>}
                  {item.badge ? (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {item.value}
                    </span>
                  ) : item.success ? (
                    <span className="text-green-400 font-medium">{item.value}</span>
                  ) : item.highlight ? (
                    <span className="text-[#FEB413] font-bold text-lg">{item.value}</span>
                  ) : item.copyable ? (
                    <button 
                      onClick={handleCopy}
                      className="flex items-center gap-2 text-white/80 hover:text-[#FEB413] transition-colors font-mono text-sm"
                    >
                      <span>{item.value}</span>
                      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    </button>
                  ) : (
                    <span className="text-white font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Security Note */}
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-3"
          >
            <span className="text-2xl">⚠️</span>
            <p className="text-yellow-500/90 text-sm">
              Always verify the contract address before buying. Scammers copy everything.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
