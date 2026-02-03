import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import { duration, once, y } from '../../utilities/animation'
import CommonTitle from '../common-title'
import { FaCheckCircle, FaExchangeAlt, FaShieldAlt, FaStar } from 'react-icons/fa'

export default function BettingNFT() {
  const nftCards = [
    {
      team1: 'PSG',
      team2: 'OM',
      odds: '2.45',
      stake: '50 USDC',
      status: 'Active',
      gradient: 'from-blue-600 to-red-500'
    },
    {
      team1: 'Lakers',
      team2: 'Celtics',
      odds: '1.85',
      stake: '100 USDC',
      status: 'Won',
      gradient: 'from-purple-600 to-green-500'
    },
    {
      team1: 'Man City',
      team2: 'Real Madrid',
      odds: '3.10',
      stake: '75 USDC',
      status: 'Active',
      gradient: 'from-sky-500 to-white'
    }
  ]

  const features = [
    { 
      icon: <FaCheckCircle />, 
      title: 'True Ownership', 
      desc: 'Your bets are yours forever. No platform can freeze, delete, or modify your tickets—full control in your wallet.',
      highlight: '100% yours'
    },
    { 
      icon: <FaExchangeAlt />, 
      title: 'Freely Tradeable', 
      desc: 'Sell your winning positions before the game ends, or buy into promising tickets from other bettors.',
      highlight: 'Buy & Sell'
    },
    { 
      icon: <FaShieldAlt />, 
      title: 'Fully Provable', 
      desc: 'Every bet is recorded on-chain. Verify odds, stakes, and outcomes with complete transparency.',
      highlight: 'On-chain proof'
    },
    { 
      icon: <FaStar />, 
      title: 'Collectible Wins', 
      desc: 'Build your trophy case of winning tickets. Show off your best calls and track your betting history.',
      highlight: 'Your legacy'
    },
  ]

  return (
    <section className="betting-nft-section py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#FEB413]/10 rounded-full blur-[150px] -z-10" />
      
      <Container>
        <CommonTitle 
          sub_title="NFT Technology"
          title="Every Bet is an NFT"
          des="Chaque pari que vous placez devient un NFT unique, traçable sur la blockchain. Propriété vérifiable, échangeable, et collectionnable."
        />

        {/* NFT Cards Display */}
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.1 }}
          viewport={{ once: once, amount: 0.2 }}
          className="mb-16"
        >
          <Row className="justify-center">
            {nftCards.map((card, index) => (
              <Col md={6} lg={4} key={index} className="mb-6 lg:mb-0">
                <motion.div
                  initial={{ y: y, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: duration, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: once, amount: 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] rounded-2xl p-6 border border-white/10 hover:border-[#A035DD]/50 transition-all duration-300 overflow-hidden">
                    {/* NFT Header */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-mono text-white/40">#{1000 + index}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${card.status === 'Won' ? 'bg-green-500/20 text-green-400' : 'bg-[#FEB413]/20 text-[#FEB413]'}`}>
                        {card.status}
                      </span>
                    </div>

                    {/* Teams */}
                    <div className={`h-20 rounded-xl bg-gradient-to-r ${card.gradient} opacity-20 absolute top-0 left-0 right-0`} />
                    <div className="relative flex items-center justify-center gap-4 py-6">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 mx-auto">
                          <span className="text-lg font-bold">{card.team1.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{card.team1}</span>
                      </div>
                      <span className="text-white/30 text-xl">VS</span>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 mx-auto">
                          <span className="text-lg font-bold">{card.team2.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{card.team2}</span>
                      </div>
                    </div>

                    {/* Bet Details */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div>
                        <p className="text-xs text-white/40 mb-1">Cote</p>
                        <p className="text-lg font-bold text-[#FEB413]">{card.odds}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/40 mb-1">Mise</p>
                        <p className="text-lg font-bold text-white">{card.stake}</p>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A035DD]/0 via-[#A035DD]/5 to-[#FEB413]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Features Grid */}
        <Row>
          {features.map((feature, index) => (
            <Col sm={6} lg={3} key={index} className="mb-6 lg:mb-0">
              <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0.3 + index * 0.1 }}
                viewport={{ once: once, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative text-center p-6 pt-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#FEB413]/50 transition-all duration-300 h-full overflow-hidden"
              >
                {/* Highlight badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#A035DD] to-[#FEB413] rounded-b-lg">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{feature.highlight}</span>
                </div>

                {/* Icon with glow effect */}
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A035DD] to-[#FEB413] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-r from-[#A035DD] to-[#FEB413] flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-jura font-bold text-white text-lg mb-3 group-hover:text-[#FEB413] transition-colors duration-300">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FEB413]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
