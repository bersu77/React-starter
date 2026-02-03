import React from 'react'
import { Container, Row, Col } from '../grid'
import CommonTitle from '../common-title'
import Accordion from '../accordion'
import faqImg from '../../assets/img/howto/faq-img.png'
import { motion } from 'framer-motion'
import { duration, y, once } from '../../utilities/animation'

export default function Web3Faq() {
  const faqItems = [
    {
      title: 'What assets does Pryzen support?',
      body: `<p>Pryzen supports multiple onchain assets depending on the feature:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li><strong>USDT on Polygon</strong> for sports-related transactions</li>
               <li><strong>WETH on Base</strong> for collectibles, drops, and ecosystem interactions</li>
               <li><strong>CHZ (Chiliz)</strong> for sports-native integrations</li>
               <li><strong>Gnosis ecosystem assets</strong> for payments and spending</li>
             </ul>
             <p class="mt-2">Supported assets are clearly displayed in-app before any action.</p>`,
    },
    {
      title: 'What blockchains does Pryzen use?',
      body: `<p>Pryzen is multi-chain by design:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li><strong>Polygon (USDT)</strong> — low fees, widely adopted</li>
               <li><strong>Base (WETH)</strong> — fast, creator-friendly ecosystem</li>
               <li><strong>Chiliz Chain</strong> — sports-focused blockchain</li>
               <li><strong>Gnosis Chain</strong> — payments and card infrastructure</li>
             </ul>
             <p class="mt-2">Users interact seamlessly without needing deep technical knowledge.</p>`,
    },
    {
      title: 'Do I need to manage multiple wallets?',
      body: `<p>No. Pryzen provides smart, embedded wallets that abstract complexity. Chains and assets are handled automatically depending on the feature you use.</p>`,
    },
    {
      title: 'How are bet tickets handled on-chain?',
      body: `<p>When enabled, Pryzen can mint bet tickets as onchain collectibles:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>One ticket can include multiple matches</li>
               <li>Tickets are non-editable once issued</li>
               <li>Tickets may be tradable or view-only, depending on the drop</li>
             </ul>
             <p class="mt-2">These tickets act as digital receipts and collectibles, not financial instruments.</p>`,
    },
    {
      title: 'What are Pryzen NFTs?',
      body: `<p>Pryzen NFTs include:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>Bet tickets</li>
               <li>Mascot collectibles (Pryx)</li>
               <li>Stickers and digital items</li>
             </ul>
             <p class="mt-2">Some NFTs are purely cosmetic, while others may unlock limited perks or access.</p>`,
    },
    {
      title: 'What is the Pryzen crypto card?',
      body: `<p>The Pryzen crypto card allows users to spend their onchain balance in the real world. The card is powered by Gnosis Pay and connects eligible onchain balances to everyday payments.</p>`,
    },
    {
      title: 'Do I need KYC to use Pryzen?',
      body: `<p>No KYC is required to use core social features. KYC is required for card issuance and certain regulated services. KYC is handled by third-party providers, not Pryzen directly.</p>`,
    },
    {
      title: 'Is Pryzen non-custodial?',
      body: `<p>Yes. Pryzen does not control user funds. Wallets are user-owned, and assets remain onchain.</p>`,
    },
  ]

  return (
    <section className="web3-faq py-16 md:py-20 lg:py-24">
      <Container>
        <Row className="items-start">
          <Col className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <CommonTitle
              className="mb-8 md:mb-10 text-start!"
              sub_title="FAQ"
              title="Web3 Questions Answered"
              title_class=""
            />
            <Accordion items={faqItems} activeItem={0} />
          </Col>
          <Col className="w-full lg:w-1/2 px-4">
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0.2 }}
              viewport={{ once: once, amount: 0.2 }}
              className="lg:pl-10 sticky top-24"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A035DD]/20 to-[#FEB413]/20 rounded-3xl blur-xl" />
                <img 
                  src={faqImg} 
                  alt="Web3 FAQ" 
                  className="relative rounded-3xl w-full"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-sm rounded-xl border border-[#A035DD]/30">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🔗</span>
                    <div>
                      <p className="text-[#FEB413] font-semibold text-sm">Multi-chain by design</p>
                      <p className="text-para text-xs">Seamless experience across networks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
