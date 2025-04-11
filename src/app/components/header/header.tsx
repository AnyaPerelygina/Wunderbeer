'use client';

import React, { useState, useEffect, useRef } from 'react';

import Logo from '@/ui/logo/logo';
import Icon from '@/ui/icon/icon';
import { Container } from "@/ui/container/container";

import Social from '@/app/components/social/social';
import ShoppingBasket from '@/app/components/header/shopping-basket/shopping-basket';
import Nav from '@/app/components/nav/nav';

import styles from './header.module.scss';

import BurberOpen from '@/assets/burger-open.svg';
import BurberClose from '@/assets/burger-close.svg';

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
    {isOpen && <div className={styles.overlay} />}
    <header className={`${styles.root} ${isOpen ? styles['is-opened'] : ''}`}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Social SocialLinks={[]} onLinkClick={handleLinkClick} className={styles.social}/>
          <Logo className={styles.logo} onLinkClick={handleLinkClick} />
          <ShoppingBasket onLinkClick={handleLinkClick} className={styles.shoppingBasket} />
          <Nav navLinks={navLinks} onLinkClick={handleLinkClick} className={styles.navigation}/>
          <button className={`${styles.toggle} ${isOpen ? styles['is-opened'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.toggleClosed}>
              <Icon path={BurberClose} width={21} height={20} />
            </div>
            <div className={styles.toggleOpened}>
              <Icon path={BurberOpen} width={24} height={15} />
            </div>
          </button>
        </div>
      </Container>
    </header>
    </>
  )
}
