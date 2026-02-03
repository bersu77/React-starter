import { motion } from 'framer-motion'
import { duration, y, once } from '../utilities/animation'
import CommonTitle from './common-title'
import { Container } from './grid'
import img from "../assets/img/howto/how-to.png"

export default function HowItWorks() {
    const howToCards = [
        {
            title: "Follow Your Sports",
            des: "Select your favorite sports, leagues and teams to personalize  your feed"
        },
        {
            title: "Post and Predict",
            des: "Share your predictions, earn NFT badges based on your performance"
        },
        {
            title: "Enable betting",
            des: "If eligible in your country, play transparently via Azure"
        },
    ]
    return (
        <div id="how-it-works" className='common-padding'>
            <Container>
                <CommonTitle
                    sub_title={'HOW IT WORKS'}
                    title="Start in shorts step and see the real time"
                    des="In 3 simple steps to an enhanced sports experience"
                />
                <div className="flex flex-wrap md:flex-nowrap gap-4 lg:gap-5 xl:gap-6">
                    <div className="w-full md:w-1/2 lg:w-8/12">
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: 0 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="h-auto xl:h-100 w-full rounded-lg lg:rounded-xl "><img src={img} className='rounded-lg lg:rounded-xl size-full object-cover' alt="" />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 space-y-3.5 lg:space-y-5 last:space-y-0">
                        {howToCards.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: y, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: duration, delay: idx * 0.1 }}
                                viewport={{ once: once, amount: 0.2 }}
                            >
                                <div className="py-3 lg:py-4 xl:py-5 px-1 border-t border-t-[#2D291D]">
                                    <h4 className='text-[#F5F5F5] text-lg lg:text-xl leading-[1.4]! tracking-[-0.2px] uppercase mb-2 lg:mb-3'>{item.title}</h4>
                                    <p className='text-[#F5F5F5] text-sm md:text-base leading-normal!'>{item.des}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
