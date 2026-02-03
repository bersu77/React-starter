import React, { useState } from 'react'
import { Container, Row, Col } from './grid'
import CommonTitle from './common-title'
import img from '../assets/img/banner-img.png'
import bg from '../assets/img/banner-bg.png'
import Button from './button'
import { motion } from 'framer-motion'
import { duration, once, y } from '../utilities/animation'
import PWAInstallModal from './PWAInstallModal'

export default function Banner() {
  const [showPWAInfo, setShowPWAInfo] = useState(false)

  const handleDownload = () => {
    setShowPWAInfo(true)
  }

  return (
    <div id="banner" className='banner pt-28 md:pt-35 overflow-hidden relative z-1'>
      <Container>
        <div className="text-center max-w-210 mx-auto flex flex-col items-center gap-3 md:gap-5 xl:gap-6 mb-5 md:mb-8 lg:mb-16 xl:mb-25">
          <motion.span
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2 }}
            className='text-sm md:text-base text-white tracking-[1px] font-geist'>Private Beta - Limited Spots</motion.span>
          <motion.h1
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            className='text-3xl md:text-4xl lg:text-5xl 2xl:text-[64px] leading-[110%] uppercase'>The Social Network for sports. Powered by Predictions.</motion.h1>
          <motion.p
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.4 }}
            viewport={{ once: once, amount: 0.2 }}
            className='text-base md:text-lg text-[#F5F5F5] max-w-135'>Follow your leagues, engage on the feed, share your predictions, Collect NFTs, and (in beta) place bets via Azuro</motion.p>
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.6 }}
            viewport={{ once: once, amount: 0.2 }}
            className="flex items-center justify-center">
            <Button onClick={handleDownload} className="min-w-52 flex items-center justify-center gap-3">
              <span>Download for</span>
              <span className="flex items-center gap-1.5">iOS
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              <span className="flex items-center gap-1.5">Android
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.7 }}
          viewport={{ once: once, amount: 0.2 }}
          className="flex items-center justify-center">
          <img src={img} alt="" className='max-w-80 lg:max-w-113' />
        </motion.div>
      </Container>
      <img src={bg} className='absolute top-0 left-0 w-full h-full overflow-hidden object-cover object-center -z-1 select-none pointer-events-none' alt="" />
      <PWAInstallModal open={showPWAInfo} onClose={() => setShowPWAInfo(false)} />
      <div className='absolute -bottom-30 left-1/2 -translate-x-1/2 w-[140%] md:w-[120%] h-50 md:h-64 bg-[#161104] blur-[30px]' />
    </div>
  )
}
