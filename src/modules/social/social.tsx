import { basePath } from "@/shared/const";
import Image from "next/image";
import Link from 'next/link';

import { SocialProps } from "./social.types";
import styles from './social.module.scss';

export default function Social({ onLinkClick, className }: SocialProps) {
  const SocialLinks = [
    {
      href: 'https://www.instagram.com/wunder.beer/',
      text: 'instagram',
      icon: 'instagram.svg'
    },
    {
      href: 'https://vk.com/wunderbeer?ysclid=lyiltfdom7544979718',
      text: 'vk',
      icon: 'vk.svg'
    },
    {
      href: '#',
      text: 'facebook',
      icon: 'facebook.svg'
    }
  ];

  return (
    <div className={`${styles.social} ${className}`}>
      <ul className={styles.social__list}>
        {SocialLinks.map(({ href, text, icon }) => (
          <li key={href} className={styles.social__item}>
            <Link onClick={onLinkClick} href={href} className={styles.social__link}>
              <div className={styles.social__icon}>
                <Image
                  src={`${basePath}/icons/${icon}`}
                  width={30}
                  height={30}
                  alt={text} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
