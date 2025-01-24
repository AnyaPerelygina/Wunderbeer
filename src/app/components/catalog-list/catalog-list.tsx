import Image from 'next/image';
import { basePath } from '@/const';

import Card from '@/app/components/card/card';

import styles from './catalog-list.module.scss';

import mockCatalogCards from '@/app/data/data';

export default function CatalogList() {
  const firstRow = mockCatalogCards.slice(0, 6);
  const secondRow = mockCatalogCards.slice(6, 12);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {firstRow.map((card) => (
            <Card
              key={card.key}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
              isNew={card.new}
              isOnSale={card.discount}
            />
          ))}
        </ul>

        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <span>
              <Image
                src={`${basePath}/svg/wheat-yellow.svg`}
                width={37}
                height={14}
                alt="Изображение колосьев."
                />
              Скидки 50%
              <Image
                src={`${basePath}/svg/wheat-yellow.svg`}
                width={37}
                height={14}
                alt="Изображение колосьев."
              />
            </span>
            <p>На весь лимонад при покупки оптом</p>
          </div>
          <div className={styles.bannerImg}>
            <Image
              src={`${basePath}/catalog/banner-catalog.webp`}
              width={825}
              height={141}
              alt={'Фоновое изображение пивного крана.'}
            />
          </div>
        </div>

        <ul className={styles.list}>
          {secondRow.map((card) => (
            <Card
              key={card.key}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
              isNew={card.new}
              isOnSale={card.discount}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
