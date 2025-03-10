'use client'

import { useState, useEffect } from 'react';

import Image from 'next/image';
import { basePath } from '@/const';

import Card from '@/app/components/card/card';
import Pagination from '../pagination/pagination';

import styles from './catalog-list.module.scss';

import mockCatalogCards from '@/app/data/data';
import { CatalogListProps } from './catalog-list.types';

export default function CatalogList({ filteredCards }: CatalogListProps) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [firstRow, setFirstRow] = useState(mockCatalogCards.slice(0, 6));
  const [secondRow, setSecondRow] = useState(mockCatalogCards.slice(6, 12));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobileScreen ? 6 : 12;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentItems = filteredCards.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    if (isMobileScreen) {
      setFirstRow(currentItems.slice(0, 3));
      setSecondRow(currentItems.slice(3, 6));
    } else {
      setFirstRow(currentItems.slice(0, 6));
      setSecondRow(currentItems.slice(6, 12));
    }
  }, [filteredCards, currentPage, isMobileScreen, itemsPerPage]);

  useEffect(() => {
    if (isMobileScreen) {
      setFirstRow(mockCatalogCards.slice(0, 3));
      setSecondRow(mockCatalogCards.slice(3, 6));
    } else {
      setFirstRow(mockCatalogCards.slice(0, 6));
      setSecondRow(mockCatalogCards.slice(6, 12));
    }
  }, [isMobileScreen]);

  useEffect(() => {
    const currentItems = mockCatalogCards.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    if (isMobileScreen) {
      setFirstRow(currentItems.slice(0, 3));
      setSecondRow(currentItems.slice(3, 6));
    } else {
      setFirstRow(currentItems.slice(0, 6));
      setSecondRow(currentItems.slice(6, 12));
    }
  }, [currentPage, isMobileScreen, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {firstRow.map((card) => (
            <Card
              key={card.key}
              id={card.key}
              image={card.image}
              title={card.title}
              strength={card.strength}
              description={card.description}
              price={card.price}
              isNew={card.new}
              isOnSale={card.discount}
              inStock={card.availability}
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
              id={card.key}
              image={card.image}
              title={card.title}
              strength={card.strength}
              description={card.description}
              price={card.price}
              isNew={card.new}
              isOnSale={card.discount}
              inStock={card.availability}
            />
          ))}
        </ul>

        <Pagination
          totalCardsCount={filteredCards.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
