import { basePath } from "@/const";
import Image from "next/image";
import Link from 'next/link';

type SocialItems = {
  link: string;
  text: string;
  icon: string;
  width: number;
  height: number;
};
export default function Social({ SocialLinks, onLinkClick }: { SocialLinks: SocialItems[], onLinkClick: () => void }) {

  return (
    <div className='social'>
      <ul className='social__list'>
        {SocialLinks.map(({ link, text, icon, width, height, }) => (
          <li key={link} className='social__item'>
            <Link onClick={onLinkClick} href={link} className='social__link'>
              <div className='social__icon'>
                <Image src={`${basePath}/${icon}`} width={width} height={height} alt={text} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
