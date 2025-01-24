'use client'

import { useState, useEffect } from 'react';

import Image from 'next/image';
import { basePath } from '@/const';

import Card from '@/app/components/card/card';

import styles from './catalog-list.module.scss';

import mockCatalogCards from '@/app/data/data';

export default function CatalogList() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [firstRow, setFirstRow] = useState(mockCatalogCards.slice(0, 6));
  const [secondRow, setSecondRow] = useState(mockCatalogCards.slice(6, 12));

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (isMobileScreen) {
      setFirstRow(mockCatalogCards.slice(0, 3));
      setSecondRow(mockCatalogCards.slice(3, 6));
    } else {
      setFirstRow(mockCatalogCards.slice(0, 6));
      setSecondRow(mockCatalogCards.slice(6, 12));
    }
  }, [isMobileScreen]);

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
            <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/news/news-1.webp`} />
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/catalog/banner-catalog.webp`} ></source>
            <Image
                src={`${basePath}/catalog/banner-catalog.png`}
                width={825}
                height={141}
                alt={'Фоновое изображение пивного крана.'}
              />
            </picture>
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
