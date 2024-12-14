import Image from 'next/image';
import { basePath } from '@/const';

import styles from './reasons.module.scss';
import Title from '@/ui/title/title';
import { Container } from "../container/container";

export default function Reasons() {
  const ReasonsList = [
    {
      link: 'wheat.svg',
      width: 106,
      height: 185,
      alt: 'Изображение колосьев.',
      text: 'Отборный солод',
    },
    {
      link: 'hops-with-branches.svg',
      width: 138,
      height: 172,
      alt: 'Изображение хмеля.',
      text: 'Качественный хмель',
    },
    {
      link: 'barell.svg',
      width: 159,
      height: 187,
      alt: 'Изображение барелли.',
      text: 'Специальная вода',
    },
    {
      link: 'modern-brewery.svg',
      width: 285,
      height: 181,
      alt: 'Изображение пивоварни.',
      text: 'Современное оборудование',
    }
  ];

  return (
    <section className={styles.reasons}>
      <Container className={styles.container}>
        <div className={styles.reasonsImg}>
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
        <Title className={styles.reasonsTitle} image="wheat-green" title="Почему мы"/>
        <ul className={styles.list}>
          {ReasonsList.map((img) => (
            <li className={styles.item} key={img.link}>
              <div className={styles.image}>
                <Image
                    src={`${basePath}/svg/${img.link}`}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                  />
              </div>
              <span>{img.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
