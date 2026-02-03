import React, { useEffect, useState } from 'react';
import { Container } from './grid'
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from './logo';
import shape from '../assets/img/header-shape.svg'

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isWeb3Page = location.pathname === '/web3';
  const isPryxPage = location.pathname === '/pryx';

  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart = () => {
    setIsMenu(!isMenu);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);


  useEffect(() => {
    if (isMenu) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenu])

  return (
    <>
      <header className={`heading bg-transparent top-0 left-0 z-10 w-full ${scrolled ? 'fixed' : 'absolute'}`}>
        <Container>
          <div className='heading-wrap flex items-center justify-between'>
            <Logo />
            <nav className={`heading-menu ${isMenu ? 'show-menu' : ''}`}>
              <div className="title flex items-center justify-between lg:hidden mb-4 md:mb-6">
                <Logo />
                <button className="heading-toggler text-white" onClick={() => setIsMenu(!isMenu)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="lg:flex items-center">
                <li className='block'>
                  <RouterLink 
                    className={`group heading-link inline-block min-h-10 px-3 relative cursor-pointer text-lg font-medium font-manrope transition-colors duration-300 ${isHomePage ? 'text-[#FEB413]' : 'text-white/72 hover:text-[#FEB413]'}`}
                    to="/"
                    onClick={() => window.innerWidth <= 991 && setIsMenu(false)}
                  >
                    Home
                    <span className={`w-full absolute bottom-0 left-0 transition-all duration-300 ${isHomePage ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                      <img className='w-full' src={shape} alt="" />
                    </span>
                  </RouterLink>
                </li>
                <li className='block'>
                  <RouterLink 
                    className={`group heading-link inline-block min-h-10 px-3 relative cursor-pointer text-lg font-medium font-manrope transition-colors duration-300 ${isWeb3Page ? 'text-[#FEB413]' : 'text-white/72 hover:text-[#FEB413]'}`}
                    to="/web3"
                    onClick={() => window.innerWidth <= 991 && setIsMenu(false)}
                  >
                    Web3
                    <span className={`w-full absolute bottom-0 left-0 transition-all duration-300 ${isWeb3Page ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                      <img className='w-full' src={shape} alt="" />
                    </span>
                  </RouterLink>
                </li>
                <li className='block'>
                  <RouterLink 
                    className={`group heading-link inline-block min-h-10 px-3 relative cursor-pointer text-lg font-medium font-manrope transition-colors duration-300 ${isPryxPage ? 'text-[#FEB413]' : 'text-white/72 hover:text-[#FEB413]'}`}
                    to="/pryx"
                    onClick={() => window.innerWidth <= 991 && setIsMenu(false)}
                  >
                    $PRYX
                    <span className={`w-full absolute bottom-0 left-0 transition-all duration-300 ${isPryxPage ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                      <img className='w-full' src={shape} alt="" />
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </nav>
            <button className="heading-toggler lg:hidden! text-white" onClick={() => setIsMenu(!isMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </Container>
      </header>
    </>
  )
}
