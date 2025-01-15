import Image from 'next/image';
import { basePath } from '@/const';
import { Container } from '@/app/components/container/container';

import styles from './banner.module.scss';
import { BannerProps } from './banner.types';

export default function Banner({image, title}: BannerProps) {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
      </Container>
      <div className={styles.background}>
        <Image
          src={`${basePath}/banner/${image}`}
          width={1920}
          height={390}
          alt={'Фоновое изображение.'}
        />
      </div>
    </section>
  )
}
