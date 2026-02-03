import React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from '../grid'
import CommonTitle from '../common-title'
import { duration, y, once } from '../../utilities/animation'
import { FaSmile, FaGem, FaStar } from 'react-icons/fa'

export default function WhatIsPryx() {
  const features = [
    {
      icon: <FaSmile className="text-3xl text-[#FEB413]" />,
      title: 'Stickers & Reactions',
      description: 'Buy premium sticker packs and animated reactions for chats and social posts.',
    },
    {
      icon: <FaGem className="text-3xl text-[#FF6B35]" />,
      title: 'Drops & Collectibles',
      description: 'Limited NFT drops tied to sports culture, rivalries, and big moments.',
    },
    {
      icon: <FaStar className="text-3xl text-[#FFD93D]" />,
      title: 'Perks & Match Utilities',
      description: 'Some collectibles unlock discounts/boosts on selected match experiences (limited availability).',
    },
  ]

  return (
    <section className="what-is-pryx py-16 md:py-20 lg:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FEB413]/30 to-transparent" />
      
      <Container>
        <CommonTitle
          sub_title="What is $PRYX?"
          title="The community token for sports vibes"
        />

        {/* Description */}
        <motion.p
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.1 }}
          viewport={{ once: once, amount: 0.2 }}
          className="text-center text-para text-base md:text-lg max-w-3xl mx-auto mb-12 md:mb-16"
        >
          $PRYX is the community token for sports vibes — made to fuel engagement, memes, and micro-utilities inside Pryzen. It's not trying to be "the next finance revolution." It's designed to be fun, viral, and useful in a sports ecosystem.
        </motion.p>

        {/* Feature Cards */}
        <Row className="justify-center">
          {features.map((feature, index) => (
            <Col key={index} className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: index * 0.1 }}
                viewport={{ once: once, amount: 0.2 }}
                className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#FEB413]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-[#FEB413]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-para text-sm md:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
