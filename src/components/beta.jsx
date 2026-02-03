import { motion } from 'framer-motion'
import { duration, y, once } from '../utilities/animation'
import { Container } from './grid'
import CommonTitle from './common-title'
import cta from "../assets/img/cta.png"
import cta2 from "../assets/img/cta2.png"
import Button from './button'
import { useState } from 'react'
import PWAInstallModal from './PWAInstallModal'

export default function Beta() {
    const [showPWAInfo, setShowPWAInfo] = useState(false)

    const handleDownload = () => {
        setShowPWAInfo(true)
    }

    return (
        <div id="beta" className='beta pt-10 md:pt-14 lg:pt-18 xl:pt-25 pb-15 md:pb-20 lg:pb-30 xl:pb-46 relative z-1'>
            <img src={cta} className='w-full h-106 left-0 top-0 absolute -z-1 object-cover' alt="" />
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: duration, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: once, amount: 0.2 }}
                className="w-75 md:w-130 lg:w-200 xl:w-245 h-30 md:h-50 lg:h-90 xl:h-107 right-0 xl:right-[10%] bottom-4 md:-bottom-[5%] lg:-bottom-[12%] absolute -z-1">
                <div className="absolute right-2 -bottom-[40%] md:-bottom-[65%] lg:-bottom-[28%] h-10 md:h-30 lg:h-35.5 w-75 md:w-100 bg-[#161104] blur-[5px] md:blur-[15px]"></div>
                <img src={cta2} className=' object-cover' alt="" />
            </motion.div>
            <Container className='relative z-1'>
                <CommonTitle
                    className='mb-10'
                    sub_title={'Private Beta - Limited Spots'}
                    title="Enter the Locker room before everyone else"
                />
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.2 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className="flex items-center justify-center mx-auto">
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
            </Container>
            <PWAInstallModal open={showPWAInfo} onClose={() => setShowPWAInfo(false)} />
        </div>
    )
}
