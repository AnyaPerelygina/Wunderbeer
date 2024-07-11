'use client';

import React, { useState, useEffect, useRef } from 'react';
import { basePath } from '@/const';
import Image from 'next/image';
import Social from "../social/social";
import Logo from "../logo/logo";
import ShoppingBasket from './shopping-basket';
import Nav from '../nav/nav';

export default function Header() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [headerRef]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className='header'>
      <div className='container'>
        {!isMobileScreen && (
          <div className='header__wrapper'>
            <Social className={'social'} SocialLinks={[]} onLinkClick={handleLinkClick}/>
            <Logo className={'logo'} />
            <ShoppingBasket />
            <Nav className={'nav'} navLinks={[]} onLinkClick={handleLinkClick}/>
          </div>
        )}

        {isMobileScreen && (
          <div ref={headerRef} className={`header__wrapper${isOpen ? ' is-opened' : ''}`}>
            <Logo className={'logo'} />
            <button className={`toggle${isOpen ? ' is-opened' : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <Image className='toggle__opened' src={`${basePath}/svg/burger-open.svg`} width={24} height={15} alt={'Открыть меню.'} />
              <Image className='toggle__closed' src={`${basePath}/svg/burger-close.svg`} width={20} height={21} alt={'Закрыть меню.'} />
            </button>
            <div className={ 'header__menu' + (isOpen ? ' is-opened' : '')}>
              <ShoppingBasket />
              <Nav className={'nav'} navLinks={[]} onLinkClick={handleLinkClick}/>
              <Social className={'social'} SocialLinks={[]} onLinkClick={handleLinkClick} />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
