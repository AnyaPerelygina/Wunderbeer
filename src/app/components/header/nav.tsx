'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavItem = {
  href: string;
  label: string;
};

export default function Nav({ navLinks, onLinkClick }: { navLinks: NavItem[], onLinkClick: () => void }) {
  const pathname = usePathname();
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navLinks.map(({ href, label }) => (
          <li key={href} className='nav__item'>
            <Link onClick={onLinkClick} href={href} className={'nav__link' + (pathname === href ? ' active' : '')}><span data-hover={label}>{label}</span></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
