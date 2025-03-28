'use client';

import React, { useState, useEffect, useRef } from 'react';
import { basePath } from '@/const';
import Image from 'next/image';

import Social from '../social/social';
import Logo from '../../../ui/logo/logo';
import ShoppingBasket from './shopping-basket/shopping-basket';
import Nav from '../nav/nav';
import { Container } from "../../../ui/container/container";

import styles from './header.module.scss';

export default function Header() {
  const navLinks = [
    {
      href: '/catalog',
      label: 'Каталог',
    },
    {
      href: '/distribution',
      label: 'Дистрибуция',
    },
    {
      href: '/equipment-of-shops',
      label: 'Комплектация магазинов',
    },
    {
      href: '/about-us',
      label: 'О компании',
    },
    {
      href: '/contacts',
      label: 'Контакты',
    }
  ]

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isOpen]);

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
      setIsMobileScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
    {isOpen && <div className={styles.overlay} />}
    <header className={`${styles.header} ${isOpen ? styles['is-opened'] : ''}`}>
      <Container className={styles.container}>
        {!isMobileScreen && (
          <div className={styles.wrapper}>
            <Social SocialLinks={[]} onLinkClick={handleLinkClick}/>
            <Logo />
            <ShoppingBasket />
            <Nav navLinks={navLinks} onLinkClick={handleLinkClick}/>
          </div>
        )}

        {isMobileScreen && (
          <div ref={headerRef} className={`${styles.wrapper} ${isOpen ? styles['is-opened'] : ''}`}>
            <Logo />
            <button className={`${styles.toggle} ${isOpen ? styles['is-opened'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <Image
                className={styles.toggle__opened}
                src={`${basePath}/svg/burger-open.svg`}
                width={24}
                height={15}
                alt={'Открыть меню.'} />
              <Image
                className={styles.toggle__closed}
                src={`${basePath}/svg/burger-close.svg`}
                width={20}
                height={21}
                alt={'Закрыть меню.'} />
            </button>
            <div className={`${styles.menu} ${isOpen ? styles['is-opened'] : ''}`}>
              <ShoppingBasket />
              <Nav navLinks={navLinks} onLinkClick={handleLinkClick}/>
              <Social SocialLinks={[]} onLinkClick={handleLinkClick} />
            </div>
          </div>
        )}
      </Container>
    </header>
    </>
  )
}
