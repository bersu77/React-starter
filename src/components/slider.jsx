import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import img from '../assets/img/slider-img.png'
import cardBg from '../assets/img/slider-bg.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';
import { duration, once, y } from '../utilities/animation';

import { motion } from "framer-motion"


export default function Slider() {


    const [isPrevSlide, setIsPrevSlide] = useState(true);
    const [isNextSlide, setIsNextSlide] = useState(false);
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsPrevSlide(swiperInstance.isBeginning);
            setIsNextSlide(swiperInstance.isEnd);
        }
    }, []);
    const prevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const nextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsPrevSlide(swiperInstance.isBeginning);
            setIsNextSlide(swiperInstance.isEnd);
        }
    };


    const card = [
        {
            subTitle: 'Social Layer',
            title: 'Real-time Sports Feed',
            des: 'Post takes and predictions, react with likes/comments, and follow what the community is betting on—fast, simple, and shareable.',
            img: img,
        },
        {
            subTitle: 'Sports Betting',
            title: 'Multi-Match Bet Tickets',
            des: 'Create tickets with multiple matches, clear odds, stake, and potential payout—built for quick picks and easy sharing.',
            img: img,
        },
        {
            subTitle: 'Web3 Rewards',
            title: 'Wins Become Collectibles',
            des: 'Turn winning tickets into on-chain rewards (NFT proof + perks) and build a public track record of your best calls.',
            img: img,
        },
    ]

    // Dupliquer les slides pour le mode loop (6 slides au lieu de 3)
    const slidesData = [...card, ...card];

    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: 0.4 }}
            viewport={{ once: once, amount: 0.2 }}
        >
            <Swiper
                className='overflow-visible!'
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    481: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 12,
                    },
                    992: {
                        slidesPerView: 1.2,
                        spaceBetween: 2,
                    }
                }}
                centeredSlides={true}
                pagination={false}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
            >
                {slidesData.map((item, index) => (
                    <SwiperSlide key={index} className=''>
                        <div

                            className="slider-inner relative z-1 overflow-hidden min-h-70 lg:min-h-90 xl:min-h-105 bg-[#161104] flex flex-col justify-center py-4 px-5 md:px-6  lg:px-8 rounded-xl border border-white/10" style={{ background: `url(${cardBg})`, backgroundSize: "cover" }}>
                            <div className="max-w-80 lg:max-w-107">
                                <span className='inline-flex uppercase text-sm md:text-base leading-normal text-white font-manrope px-3 relative z-1'>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <svg className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${index === 0 ? 'left-0' : 'right-0 -scale-x-100'}`} width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.307678 6.30762V0.307617H6.30768" stroke="white" stroke-width="0.615385" />
                                            <path d="M6.30768 26.3076L0.307678 26.3076L0.307678 20.3076" stroke="white" stroke-width="0.615385" />
                                        </svg>
                                    ))}
                                    {item.subTitle}
                                </span>
                                <h4 className='text-xl md:text-2xl xl:text-[26px] uppercase font-geist leading-[120%] -tracking-[0.26px] text-[#F5F5F5] my-3 lg:my-4'>{item.title} </h4>
                                <p className='text-base text-[#F5F5F5]'>{item.des} </p>
                            </div>
                            <div className="md:absolute bottom-0 right-0 xl:right-10 -z-1">
                                <img src={item.img} className='-mb-8 md:mb-0 md:max-w-80 lg:max-w-100 xl:max-w-136' alt="" />
                            </div>
                            <div className='absolute top-full left-0 -mt-20 w-full bg-[#A035DD] h-100 rounded-[100%] blur-[100px] -z-1' />
                        </div>
                    </SwiperSlide >
                ))}
            </Swiper>
            {/* <div className="swiper-nav flex items-center justify-center gap-3">
                <button className="flex items-center justify-center p-0" title='previous' onClick={prevSlide}>
                    <FaArrowLeft />
                </button>
                <button className="flex items-center justify-center p-0" title='previous' onClick={nextSlide}>
                    <FaArrowRight />
                </button>
            </div> */}
        </motion.div>
    )
}
