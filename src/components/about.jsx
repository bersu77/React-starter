import { Container, } from './grid'
import CommonTitle from './common-title'
import img from '../assets/img/about-img.png'
import img1 from '../assets/img/about-img-1.png'
import img2 from '../assets/img/about-img-2.png'
import { motion } from 'framer-motion'
import { duration, once, y } from '../utilities/animation'

export default function About() {

  const card = [
    {
      title: 'Collect and Play',
      des: 'Challenges, leaderboards, performance NFTs- gamify your passion',
      img: img1,
    }, {
      title: 'Share and Predict',
      des: 'Opinions, predictions, discussions in a rich and vibrant social feed',
      img: img2,
    },
  ]

  return (
    <div id="about" className='about common-padding xl:pb-12 xl:-mt-8'>
      <Container className='relative z-1 md:px-13'>
        <CommonTitle
          sub_title={'about'}
          title={'What is Pryzen for prediciton'}
          des="Your entire sports + predictions universe and all in one place"
        />
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 md:gap-5">
          {card.map((item, index) => (
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: `0.${index + 1}` }}
              viewport={{ once: once, amount: 0.2 }}
              className={`relative z-1 rounded-xl overflow-hidden  min-h-80 xl:min-h-100 bg-[#161104] border border-white/10 ${index === 0 ? "lg:col-span-4 flex flex-col justify-end" : "lg:col-span-7"}`} key={index}>
              <div className={`p-4 md:p-5 xl:p-8 max-w-100`}>
                <h4 className='text-xl xl:text-2xl uppercase font-AeonikFono font-medium text-white mb-1 md:mb-3'>{item.title} </h4>
                <p className='text-base font-manrope text-[#F5F5F5]'>{item.des} </p>
              </div>
              <img src={item.img} className='absolute top-0 left-0 w-full h-full object-cover -z-1 select-none pointer-events-none' alt="" />
            </motion.div>
          ))}
        </div>
        <motion.img
          initial={{ x: -y, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: duration, delay: 0 }}
          viewport={{ once: once, amount: 0.2 }}
          src={img} className='hidden md:block absolute top-[19%] -translate-y-1/2 left-0 lg:-left-24 -z-1 pointer-events-none max-w-60 lg:max-w-max ' alt="" />
      </Container>
    </div>
  )
}
