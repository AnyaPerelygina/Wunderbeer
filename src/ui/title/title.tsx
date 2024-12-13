import Image from 'next/image';
import { basePath } from '@/const';

import styles from './title.module.scss';
import { TitleProps } from './title.types';

export default function Title( { image, title, className }: TitleProps) {
  return (
    <div className={`${styles.title} ${className}`}>
      <Image
        src={`${basePath}/svg/${image}.svg`}
        width={47}
        height={18}
        alt="Изображение колосьев."
      />
      <Image
        src={`${basePath}/svg/${image}.svg`}
        width={47}
        height={18}
        alt="Изображение колосьев."
      />
      <h2>{title}</h2>
    </div>
  )
}
