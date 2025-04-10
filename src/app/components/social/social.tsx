import Link from 'next/link';

import Icon from "@/ui/icon/icon";

import { SocialProps } from "./social.types";
import styles from './social.module.scss';

import InstagramIcon from '@/assets/instagram.svg';
import FacebookIcon from '@/assets/facebook.svg';
import VkIcon from '@/assets/vk.svg';

export default function Social({ onLinkClick, className }: SocialProps) {
  const SocialLinks = [
    {
      href: 'https://www.instagram.com/wunder.beer/',
      text: 'instagram',
      icon: InstagramIcon,
    },
    {
      href: 'https://vk.com/wunderbeer?ysclid=lyiltfdom7544979718',
      text: 'vk',
      icon: FacebookIcon,
    },
    {
      href: '#',
      text: 'facebook',
      icon: VkIcon,
    }
  ];

  return (
    <div className={`${styles.root} ${className}`}>
      <ul className={styles.list}>
        {SocialLinks.map(({ href, icon, text }) => (
          <li key={href} className={styles.item}>
            <Link onClick={onLinkClick} href={href} className={styles.link}>
              <div className={styles.icon}>
                <Icon path={icon} width={30} height={30} />
                <span className={styles.visuallyHidden}>{text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
