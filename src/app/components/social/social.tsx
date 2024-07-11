import { basePath } from "@/const";
import Image from "next/image";
import Link from 'next/link';

type SocialProps = {
  onLinkClick: () => void;
  SocialLinks: { label: string; url: string }[];
  className?: string;
};

export default function Social({ onLinkClick, className = '' }: SocialProps) {
  const SocialLinks = [
    {
      link: '#',
      text: 'instagram',
      icon: `instagram.svg`,
      width: 30,
      height: 30,
    },
    {
      link: '#',
      text: 'vk',
      icon: `vk.svg`,
      width: 30,
      height: 30,
    },
    {
      link: '#',
      text: 'facebook',
      icon: `facebook.svg`,
      width: 30,
      height: 30,
    }
  ];

  return (
    <div className={className}>
      <ul className='social__list'>
        {SocialLinks.map(({ link, text, icon, width, height, }) => (
          <li key={link} className='social__item'>
            <Link onClick={onLinkClick} href={link} className='social__link'>
              <div className='social__icon'>
                <Image src={`${basePath}/svg/${icon}`} width={width} height={height} alt={text} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
