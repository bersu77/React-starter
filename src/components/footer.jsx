import React from 'react'
import { Container } from '../components/grid'
import Logo from './logo'
import Social from './social'

export default function Footer() {
  const menus = [
    {
      name: 'About',
      path: '',
    },
    {
      name: 'Blog',
      path: '',
    },
    {
      name: 'Terms',
      path: '',
    },
  ]
  const links = [
    {
      name: 'Privacy Policy',
      path: '',
    },
    {
      name: 'Terms & Conditions',
      path: '',
    },
    {
      name: 'Help Support',
      path: '',
    },
  ]
  return (
    <div className='footer py-7 md:py-11 lg:py-14'>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col">
            <Logo className='h-10' />
            <Social className="mt-6 md:mt-11 lg:mt-14" />
            <p className='text-sm md:text-base leading-normal text-para mt-4 md:mt-5 lg:mt-6 max-w-90'>Discover useful NFTs, on-chain data and new gamification mechanics</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <span className='uppercase'>menu</span>
            <div className="flex items-center gap-x-3">
              {menus.map((item, index) => (
                <a target='_blank' href={item.path} className='block text-sm md:text-base lg:text-lg uppercase leading-normal text-para hover:text-primary' key={index}>{item.name}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4 md:mt-6 lg:mt-8">
          <strong className='uppercase font-bold text-primary text-[80px] md:text-[180px] lg:text-[240px] xl:text-[315px] leading-[80%] pointer-events-none font-jura'>Pryzen</strong>
        </div>
        <div className="flex items-center flex-wrap gap-3 flex-col-reverse md:flex-row justify-between mt-5 md:mt-8 lg:mt-10">
          <p className='text-base md:text-lg leading-normal text-para'>© {new Date().getFullYear()} Copyright</p>
          <div className="flex items-center gap-4 md:gap-5">
            {links.map((item, index) => (
              <a target='_blank' href={item.path} className='block text-sm md:text-base lg:text-lg leading-normal text-para hover:text-primary' key={index}>{item.name}</a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
