import React from 'react'
import { motion } from 'framer-motion'
import { duration, y, once } from '../utilities/animation'

export default function CommonTitle({ sub_title, title, title_class = "max-w-150 lg:max-w-180", des, className = 'mb-10 md:mb-13 lg:mb-16' }) {
  return (
    <div className={`${className} text-center mx-auto`}>
      {sub_title &&
        <motion.span
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0 }}
          viewport={{ once: once, amount: 0.2 }}
          className='inline-flex mb-4 uppercase text-sm md:text-base leading-normal text-white font-manrope px-3 relative z-1'>
          {Array.from({ length: 2 }).map((_, index) => (
            <svg className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${index === 0 ? 'left-0' : 'right-0 -scale-x-100'}`} width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.307678 6.30762V0.307617H6.30768" stroke="white" stroke-width="0.615385" />
              <path d="M6.30768 26.3076L0.307678 26.3076L0.307678 20.3076" stroke="white" stroke-width="0.615385" />
            </svg>
          ))}
          {sub_title}
        </motion.span>}
      <motion.h2
        initial={{ y: y, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: duration, delay: 0.1 }}
        viewport={{ once: once, amount: 0.2 }}
        className={`uppercase font-bold leading-[110%] text-3xl md:text-4xl lg:text-5xl xl:text-[54px] mx-auto mb-3 md:mb-4 ${title_class}`}>{title}</motion.h2>
      {des &&
        <motion.p
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2 }}
          className='text-para text-sm md:text-base leading-normal font-medium'>{des}</motion.p>
      }
    </div>
  )
}
