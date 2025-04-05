'use client'

import { useState } from 'react';

import { Container } from '@/ui/container/container';
import FilterResults from '@/app/components/filter/filter-results/filter-results';
import Filter from '@/app/components/filter/filter';
import FormForQuestions from '@/app/components/forms/form-for-questions/form-for-questions';
import CatalogList from '@/app/components/catalog-list/catalog-list';

import styles from './catalog-block.module.scss';

import mockCatalogCards from '@/app/data/data';

export default function CatalogBlock() {
  const [filteredCards, setFilteredCards] = useState(mockCatalogCards);

  const applyFilters = (selectedCategories: string[], minPrice: number, maxPrice: number) => {
    const filtered = mockCatalogCards.filter(card => {
      const cardTags = card.tags
        .split(',')
        .map(tag => tag.trim().toLowerCase());

      // Фильтрация по категориям и подкатегориям
      const inCategory = selectedCategories.length === 0 || selectedCategories.every(category => {
        // Проверяем, что тег карточки содержит выбранную категорию и подкатегорию
        return cardTags.some(tag => tag.includes(category.trim().toLowerCase()));
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
            <FormForQuestions />
          </div>
          <CatalogList filteredCards={filteredCards} />
        </div>
      </Container>
    </section>
  )
}
