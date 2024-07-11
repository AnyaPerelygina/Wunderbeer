import Link from 'next/link';
import Image from 'next/image';
import {basePath} from '../../../const';

type ContactsProps = {
  onLinkClick: () => void;
  navLinks: { label: string; url: string }[];
  className?: string;
};

export default function Contacts({ onLinkClick, className = '' }: ContactsProps) {
  const ContactsLinks = [
    {
      link: '#',
      text: 'Россия, Москва, Рязанский проспект 22, к2',
      icon: 'map-marker.svg',
      width: 14,
      height: 21,
    },
    {
      link: '#',
      text: '+7 (495) 740-40-51',
      icon: 'phone.svg',
      width: 20,
      height: 21,
    },
    {
      link: '#',
      text: '+7 (925) 924-07-00',
      icon: 'phone.svg',
      width: 20,
      height: 21,
    },
    {
      link: '#',
      text: 'wunderbeer@mail.ru',
      icon: 'mail.svg',
      width: 20,
      height: 17,
    },
  ];

  return (
    <div className={className}>
      <h3 className='contacts__title'>Контактная информация</h3>
      <ul className='contacts__list'>
        {ContactsLinks.map(({ link, text, icon, width, height, }) => (
          <li key={link} className='contacts__item'>
            <Link onClick={onLinkClick} href={link} className='contacts__link'>
              <div className='contacts__icon'>
                <Image src={`${basePath}/svg/${icon}`} width={width} height={height}alt={text}/>
              </div>
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
