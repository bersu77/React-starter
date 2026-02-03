import React from 'react'
import Marquee from "react-fast-marquee"
import img_1 from '../assets/img/partner/1.png'
import img_2 from '../assets/img/partner/2.png'
import img_3 from '../assets/img/partner/3.png'
import img_4 from '../assets/img/partner/4.png'
import img_5 from '../assets/img/partner/5.png'
import img_6 from '../assets/img/partner/6.png'
import img_7 from '../assets/img/partner/7.png'

export default function PageMarquee() {
  const items = [img_1, img_2, img_3, img_4, img_5, img_6, img_7]

  return (
    <div className="">
      <p className='text-center text-sm md:text-base leading-normal font-jura mb-8 md:mb-10 lg:mb-13'>Trusted by Leading Teams</p>
      <div className="relative z-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className={`absolute top-1/2 -translate-y-1/2 h-full w-46 bg-linear-90 from-[#161104] to-[#161104]/0 z-2 ${index === 0 ? 'left-0' : 'right-0 -scale-x-100'}`} key={index} />
        ))}
        <Marquee className='relative z-1' autoFill={true} speed={60} pauseOnHover>
          {items.map((item, index) => (
            <div className="mr-10 md:mr-14 lg:mr-18" key={index}>
              <img src={item} key={index} alt='' />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
