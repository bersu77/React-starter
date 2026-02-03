import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { y, duration, once } from '../../utilities/animation';

export default function Accordion({ className = "", items, activeItem = null }) {
  const [activeIndex, setActiveIndex] = useState(activeItem);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: index * 0.1 }}
          viewport={{ once: once, amount: 0.2 }}
          className={`accordion-item border-b border-solid border-white/10 overflow-hidden bg-[#373737]/40 not-last:mb-4`}>
          <button onClick={() => toggleAccordion(index)} className={`accordion-button transition-none p-4 md:p-5 text-white text-start flex items-center w-full gap-x-3 bg-transparent border-0 text-baes leading-normal font-medium ${activeIndex === index ? "pb-2!" : ""}`}>
            <span className='flex-none text-white [&>svg]:size-5'>
              {activeIndex != index ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37501 9.37516L9.37501 3.3335L10.625 3.3335L10.625 9.37516L16.6667 9.37516V10.6252L10.625 10.6252L10.625 16.6668H9.37501L9.37501 10.6252L3.33334 10.6252L3.33334 9.37516L9.37501 9.37516Z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33335 9.375L16.6667 9.375V10.625L3.33335 10.625V9.375Z" fill="currentColor" />
                </svg>
              )}
            </span>
            <span>{item.title}</span>
          </button>
          <AnimatePresence initial={false} mode="wait">
            {activeIndex === index &&
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden">
                <div
                  className={`pl-13 pb-4 md:pb-5 text-sm md:text-base leading-normal text-para font-normal`}
                  dangerouslySetInnerHTML={{ __html: item.body }} />
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}