import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '@/const';

import styles from './contacts.module.scss';
import { ContactsProps } from './contacts.types';

export default function Contacts({ onLinkClick }: ContactsProps) {
  const ContactsLinks = [
    {
      href: 'https://www.google.com/maps/search/?api=1&query=Москва,+Рязанский+проспект+22,+к2',
      text: 'Россия, Москва, Рязанский проспект 22, к2',
      icon: 'map-marker.svg',
      width: 14,
      height: 21,
    },
    {
      href: 'tel:+7 (495) 740-40-51',
      text: '+7 (495) 740-40-51',
      icon: 'phone.svg',
      width: 20,
      height: 21,
    },
    {
      href: 'tel:+7 (925) 924-07-00',
      text: '+7 (925) 924-07-00',
      icon: 'phone.svg',
      width: 20,
      height: 21,
    },
    {
      href: 'mailto:wunderbeer@mail.ru',
      text: 'wunderbeer@mail.ru',
      icon: 'mail.svg',
      width: 20,
      height: 17,
    },
  ];

  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>Контактная информация</h2>
      <ul className={styles.contacts__list}>
        {ContactsLinks.map(({ href, text, icon, width, height, }) => (
          <li key={href} className={styles.contacts__item}>
            <Link onClick={onLinkClick} href={href} className={styles.contacts__link}>
              <div className={styles.contacts__icon}>
                <Image
                  src={`${basePath}/svg/${icon}`}
                  width={width}
                  height={height}
                  alt={text}/>
              </div>
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
