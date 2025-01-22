import Image from 'next/image';
import { basePath } from '@/const';

import styles from './why-us.module.scss';

import { Container } from "../container/container";
import Reasons from '../reasons/reasons';

export default function WhyUs() {
  const ReasonsList = [
    {
      link: 'wheats.svg',
      width: 130,
      height: 130,
      alt: 'Изображение колосьев.',
      title: 'Солод',
      description: 'Отборный солод придаёт нашему пиву тот самый насыщенный вкус.'
    },
    {
      link: 'hops-simple.svg',
      width: 133,
      height: 132,
      alt: 'Изображение хмеля.',
      title: 'Качественные материалы',
      description: 'Каждое зерно и каждый листок хмеля проходят тщательный отбор, чтобы обеспечить непревзойдённое качество.'
    },
    {
      link: 'molecules.svg',
      width: 128,
      height: 135,
      alt: 'Изображение химического элемента.',
      title: 'Технологии',
      description: 'Современные технологии пивоварения позволяют нам сохранять традиции, улучшая рецепты.'
    },
    {
      link: 'brewery.svg',
      width: 127,
      height: 126,
      alt: 'Изображение пивоварни.',
      title: 'Оборудование',
      description: 'Передовое оборудование помогает нам воплощать в жизнь самые амбициозные идеи.'
    }
  ];

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.img}>
          <picture>
            <source type="image/webp" media="(min-width: 360px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
            <Image
              src={`${basePath}/background-img/paper-background.png`}
              width={1920}
              height={604}
              alt="Фоновое изображение."
            />
          </picture>
        </div>
        <h2 className={styles.title}>Почему мы</h2>
        <Reasons reasonsList={ReasonsList} />
      </Container>
    </section>
  )
}
