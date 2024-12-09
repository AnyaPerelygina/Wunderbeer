'use client'

import React, { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import { Wrapper } from '@/ui/wrapper'
import { Logo } from '@ui/logo'
import { Social } from '@modules/social'
import { Nav } from '@modules/nav'
import { ShoppingBasket } from '@components/basket'
import { basePath } from '@/shared/const'

import styles from './header.module.scss'
import { HeaderProps } from './header.types'

const Header: FC<HeaderProps> = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        handleCloseMenu();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    handleCloseMenu();
  };

  const handleCloseMenu = () => {
    if (!isClosing) {
      setIsClosing(true)
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    }
  };

  return (
    <header className={`${styles.header} ${isOpen ? styles['is-opened'] : ''}`}>
      <Wrapper className={styles.wrapper}>
        {!isMobileScreen && (
          <div className={styles.headerContainer}>
            <Social SocialLinks={[]} onLinkClick={handleLinkClick}/>
            <Logo className={styles.headerLogo} />
            <ShoppingBasket />
            <Nav navLinks={[]} onLinkClick={handleLinkClick}/>
          </div>
        )}

        {isMobileScreen && (
          <div ref={headerRef} className={`${styles.headerContainer} ${isOpen ? styles['is-opened'] : ''}`}>
            <Logo className={styles.headerLogo} />
            <button className={`${styles.toggle} ${isOpen ? styles['is-opened'] : ''}`} onClick={() => {
              if (isOpen) {
                handleCloseMenu();
              } else {
                setIsOpen(true);
              }
            }}>
              <Image
                className={styles.toggle__opened}
                src={`${basePath}/icons/burger-open.svg`}
                width={24}
                height={15}
                alt={'Открыть меню.'} />
              <Image
                className={styles.toggle__closed}
                src={`${basePath}/icons/burger-close.svg`}
                width={20}
                height={21}
                alt={'Закрыть меню.'} />
            </button>
            <div className={`${styles.menu} ${isOpen ? styles['is-opened'] : ''} ${isClosing ? styles['is-closing'] : ''}`}>
              <div className={styles.menu__wrapper}>
                <ShoppingBasket />
                <Nav navLinks={[]} onLinkClick={handleLinkClick}/>
              </div>
              <Social SocialLinks={[]} onLinkClick={handleLinkClick} />
            </div>
          </div>
        )}
      </Wrapper>
    </header>
  )
}

export default Header
