import Link from 'next/link';

import Icon from '@/ui/icon/icon';

import styles from './contacts.module.scss';
import { ContactsProps } from '@/app/components/contacts/contacts.types';

import MapMarker from '@/assets/map-marker.svg';
import Phone from '@/assets/phone.svg';
import Mail from '@/assets/mail.svg';

export default function Contacts({ onLinkClick }: ContactsProps) {
  const ContactsLinks = [
    {
      href: 'https://www.google.com/maps/search/?api=1&query=Москва,+Рязанский+проспект+22,+к2',
      text: 'Россия, Москва, Рязанский проспект 22, к2',
      icon: MapMarker,
      width: 14,
      height: 21,
    },
    {
      href: 'tel:+7 (495) 740-40-51',
      text: '+7 (495) 740-40-51',
      icon: Phone,
      width: 20,
      height: 21,
    },
    {
      href: 'tel:+7 (925) 924-07-00',
      text: '+7 (925) 924-07-00',
      icon: Phone,
      width: 20,
      height: 21,
    },
    {
      href: 'mailto:wunderbeer@mail.ru',
      text: 'wunderbeer@mail.ru',
      icon: Mail,
      width: 20,
      height: 16,
    },
  ];

  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>Контактная информация</h2>
      <ul className={styles.contacts__list}>
        {ContactsLinks.map(({ href, text, icon, width, height }) => (
          <li key={href} className={styles.contacts__item}>
            <Link onClick={onLinkClick} href={href} className={styles.contacts__link}>
              <div className={styles.contacts__icon}>
                <Icon path={icon} width={width} height={height} />
              </div>
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
