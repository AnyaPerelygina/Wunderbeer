'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavProps = {
  onLinkClick: () => void;
  navLinks: { label: string; url: string }[];
  className?: string;
};

export default function Nav({ onLinkClick, className = '' }: NavProps) {
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

  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className='nav__list'>
        {navLinks.map(({ href, label }) => (
          <li key={href} className='nav__item'>
            <Link onClick={onLinkClick} href={href} className={'nav__link' + (pathname === href ? ' active' : '')}>
              <span data-hover={label}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
