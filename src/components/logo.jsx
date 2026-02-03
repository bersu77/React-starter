import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/img/logo.png'

export default function Logo({ className = "h-8" }) {
  return (
    <Link className={`logo block cursor-pointer ${className}`} to="banner" spy={true} smooth={true} duration={600} offset={0}>
      <img src={logo} className='max-h-full' alt="site-logo" />
    </Link>
  )
}
