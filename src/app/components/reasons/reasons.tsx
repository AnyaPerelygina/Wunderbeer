import Image from 'next/image';
import { basePath } from '@/const';

import styles from './reasons.module.scss';
import { ReasonsProps } from './reasons.type';

export default function Reasons({ reasonsList }: ReasonsProps) {
  return (
    <ul className={styles.list}>
      {reasonsList.map((reasosns) => (
        <li className={styles.item} key={reasosns.link}>
          <div className={styles.image}>
            <Image
              src={`${basePath}/svg/${reasosns.link}`}
              width={reasosns.width}
              height={reasosns.height}
              alt={reasosns.alt}
            />
          </div>
          <span>{reasosns.title}</span>
          {reasosns.description && <p>{reasosns.description}</p>}
        </li>
      ))}
    </ul>
  );
}
