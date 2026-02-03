import { motion } from 'framer-motion'
import { duration, y, once } from '../utilities/animation'
import { Container, Row, Col } from './grid'
import Accordion from './accordion'
import CommonTitle from './common-title';
import img from "../assets/img/howto/faq-img.png"

export default function Faq() {
  const item = [
    {
      title: 'What is Pryzen?',
      body: `<p>Pryzen is a social sports platform where fans can follow matches, share picks, collect rewards, and engage with the community around live sports.</p>`,
    },
    {
      title: 'Is Pryzen a betting app?',
      body: `<p>Pryzen focuses on the social and collectible layer of sports predictions. It connects community, content, and rewards around sports events.</p>`,
    },
    {
      title: 'Who is Pryzen for?',
      body: `<p>Pryzen is built for:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>Sports fans</li>
               <li>Data-driven pickers</li>
               <li>Creators & analysts</li>
               <li>Communities who want to engage around matches</li>
             </ul>`,
    },
    {
      title: 'Do I need to be an expert to use Pryzen?',
      body: `<p>No. Pryzen is designed to be simple, intuitive, and accessible—even if you're new to sports predictions or Web3.</p>`,
    },
    {
      title: 'What makes Pryzen different?',
      body: `<p>Unlike traditional platforms, Pryzen combines:</p>
             <ul class="list-disc pl-5 mt-2 space-y-1">
               <li>Social feeds</li>
               <li>Match discussions</li>
               <li>Digital collectibles (tickets, NFTs, stickers)</li>
               <li>Community-driven reputation</li>
             </ul>
             <p class="mt-2">All in one experience.</p>`,
    },
  ]
  return (
    <div id="faq" className="faq common-padding relative z-1">
      <div className="rotate-[-30deg] absolute left-0 top-[60%] blur-[80px] -z-1  w-full h-20 bg-[linear-gradient(180deg,rgba(160,53,221,0.40)_0%,rgba(160,53,221,0.40)_20.67%,rgba(160,53,221,0.14)_40.44%,rgba(160,53,221,0.16)_64.37%,rgba(160,53,221,0.00)_100%)]"></div>
      <Container className='relative z-1'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: duration, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: once, amount: 0.2 }}
          className="w-50 md:w-70 lg:w-80 xl:w-100 h-60 nd:h-80 lg:h-100 xl:h-127 absolute -z-1 -left-4 md:left-0 xl:-left-15 top-25 lg:top-10">
          <img src={img} className=' size-full' alt="" />
          <div className="size-30 md:size-40 lg:size-55 bg-[#161104] blur-[17px] absolute -bottom-[10%] left-0 "></div>
        </motion.div>
        <CommonTitle
          sub_title={'QNA'}
          title="Got Questions? We’ve got You Covered!"
          des="Compliance, NFTs, and platform features"
        />
        <Accordion className="max-w-200 mx-auto" items={item} activeItem={0} />
      </Container>
    </div>
  )
}