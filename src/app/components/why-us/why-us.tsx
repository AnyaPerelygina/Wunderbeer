import Image from 'next/image';

import { basePath } from '@/const';
import { Container } from "@/ui/container/container";
import Reasons from '@/app/components/reasons/reasons';

import styles from './why-us.module.scss';

import Wheats from '@/assets/wheats.svg';
import HopsSimple from '@/assets/hops-simple.svg';
import Molecules from '@/assets/molecules.svg';
import Brewery from '@/assets/brewery.svg';

export default function WhyUs() {
  const ReasonsList = [
    {
      key: 'wheats',
      link: Wheats,
      title: 'Солод',
      description: 'Отборный солод придаёт нашему пиву тот самый насыщенный вкус, который ценят истинные гурманы.'
    },
    {
      key: 'hops-simple',
      link: HopsSimple,
      title: 'Качественные материалы',
      description: 'Каждое зерно и каждый листок хмеля проходят тщательный отбор, чтобы обеспечить непревзойдённое качество.'
    },
    {
      key: 'molecules',
      link: Molecules,
      title: 'Технологии',
      description: 'Современные технологии пивоварения позволяют нам сохранять традиции, улучшая рецепты.'
    },
    {
      key: 'brewery',
      link: Brewery,
      title: 'Оборудование',
      description: 'Передовое оборудование помогает нам воплощать в жизнь самые амбициозные идеи.'
    }
  ];

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.img}>
          <picture>
            <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
            <Image
              src={`${basePath}/background-img/paper-background@2x.png`}
              width={1920}
              height={604}
              alt="Фоновое изображение."
            />
          </picture>
        </div>
        <h2 className={styles.title}>Почему мы</h2>
        <Reasons reasonsList={ReasonsList} className={styles.reasonsList} />
      </Container>
    </section>
  )
}
