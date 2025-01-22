import Image from 'next/image';
import { basePath } from '@/const';

import styles from './why-us-home.module.scss';
import Title from '@/ui/title/title';
import { Container } from "../container/container";
import Reasons from '../reasons/reasons';

export default function WhyUsHome() {
  const ReasonsList = [
    {
      link: 'wheat.svg',
      width: 106,
      height: 185,
      alt: 'Изображение колосьев.',
      title: 'Отборный солод',
    },
    {
      link: 'hops-with-branches.svg',
      width: 138,
      height: 172,
      alt: 'Изображение хмеля.',
      title: 'Качественный хмель',
    },
    {
      link: 'barell.svg',
      width: 159,
      height: 187,
      alt: 'Изображение барелли.',
      title: 'Специальная вода',
    },
    {
      link: 'modern-brewery.svg',
      width: 285,
      height: 181,
      alt: 'Изображение пивоварни.',
      title: 'Современное оборудование',
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
        <Title className={styles.title} image="wheat-green" title="Почему мы"/>
        <Reasons reasonsList={ReasonsList} />
      </Container>
    </section>
  )
}
