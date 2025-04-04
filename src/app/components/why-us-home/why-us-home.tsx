import Image from 'next/image';

import { basePath } from '@/const';
import Title from '@/ui/title/title';
import { Container } from "@/ui/container/container";

import Reasons from '@/app/components/reasons/reasons';

import styles from './why-us-home.module.scss';

import Wheat from '@/assets/wheat.svg';
import HopWithBranches from '@/assets/hops-with-branches.svg';
import Barell from '@/assets/barell.svg';
import ModernBrewery from '@/assets/modern-brewery.svg';

export default function WhyUsHome() {
  const ReasonsList = [
    {
      key: 'wheat',
      link: Wheat,
      title: 'Отборный солод',
    },
    {
      key: 'hops-with-branches',
      link: HopWithBranches,
      title: 'Качественный хмель',
    },
    {
      key: 'barell',
      link: Barell,
      title: 'Специальная вода',
    },
    {
      key: 'modern-brewery',
      link: ModernBrewery,
      title: 'Современное оборудование',
    }
  ];

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.img}>
          <picture>
            <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
            <Image
              src={`${basePath}/background-img/paper-background.png`}
              width={1920}
              height={604}
              alt="Фоновое изображение."
            />
          </picture>
        </div>
        <Title className={styles.title} iconColor="green" title="Почему мы"/>
        <Reasons reasonsList={ReasonsList} className={styles.reasonsList} />
      </Container>
    </section>
  )
}
