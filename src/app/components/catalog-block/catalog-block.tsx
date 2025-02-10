'use client'

import { useState } from 'react';
import Image from 'next/image';
import { basePath } from '@/const';

import { Container } from '../container/container';
import FilterResults from '@/app/components/filter/filter-results/filter-results';
import Filter from '@/app/components/filter/filter';
import FormForQuestions from '../forms/form-for-questions/form-for-questions';
import CatalogList from '@/app/components/catalog-list/catalog-list';

import styles from './catalog-block.module.scss';

import mockCatalogCards from '@/app/data/data';

export default function CatalogBlock() {
  const [filteredCards, setFilteredCards] = useState(mockCatalogCards);

  const applyFilters = (selectedCategories: string[], minPrice: number, maxPrice: number) => {
    const filtered = mockCatalogCards.filter(card => {
      // Фильтрация по категориям
      const inCategory = selectedCategories.length === 0 || selectedCategories.some(category => {
        return card.tags
          .split(',') // Разделяем теги на массив
          .map(tag => tag.trim().toLowerCase()) // Убираем пробелы и приводим к нижнему регистру
          .includes(category.trim().toLowerCase()); // Сравниваем с категорией
      });

      // Фильтрация по цене
      const inPriceRange = card.price >= minPrice && card.price <= maxPrice;

      return inCategory && inPriceRange;
    });


    setFilteredCards(filtered);
  };

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <FilterResults count={filteredCards.length} />
          <Filter applyFilters={applyFilters} />
          <div className={styles.wrapperForm}>
            <div className={styles.background}>
              <Image
                src={`${basePath}/delivery/background-hops-mini.webp`}
                width={255}
                height={364}
                alt="Фоновое изображение."
              />
            </div>
            <FormForQuestions />
          </div>
          <CatalogList filteredCards={filteredCards} />
        </div>
      </Container>
    </section>
  )
}
