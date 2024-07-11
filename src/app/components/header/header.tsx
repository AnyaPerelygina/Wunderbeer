'use client';

import React, { useState, useEffect, useRef } from 'react';
import { basePath } from '@/const';
import Image from 'next/image';
import Link from 'next/link';
import Social from "../social/social";
import Logo from "../logo/logo";
import Nav from './nav';

export default function Header() {
  const SocialLinks = [
    {
      link: '#',
      text: 'instagram',
      icon: './svg/instagram.svg',
      width: 30,
      height: 30,
    },
    {
      link: '#',
      text: 'vk',
      icon: './svg/vk.svg',
      width: 30,
      height: 30,
    },
    {
      link: 'facebook',
      text: 'facebook',
      icon: './svg/facebook.svg',
      width: 30,
      height: 30,
    }
  ];

  const navLinks = [
    {
      href: '#',
      label: 'Каталог',
    },
    {
      href: '#',
      label: 'Дистрибуция',
    },
    {
      href: '#',
      label: 'Комплектация магазинов',
    },
    {
      href: '#',
      label: 'О компании',
    },
    {
      href: '#',
      label: 'Контакты',
    },
  ]

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Social { ...{ SocialLinks }} onLinkClick={handleLinkClick}/>
          <Logo />
          <div className='shopping-backet'>
            <Link href={'/#'}>
              <Image src={`${basePath}/svg/shopping-backet.svg`} width={28} height={30} alt={'Корзина с товарами.'} />
            </Link>
          </div>
          <Nav { ...{ navLinks }} onLinkClick={handleLinkClick}/>
        </div>
      </div>
    </header>
  )
}
