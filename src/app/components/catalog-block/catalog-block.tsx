'use client'

import { useState } from 'react';

import { Container } from '@/ui/container/container';
import FilterResults from '@/app/components/filter/filter-results/filter-results';
import Filter from '@/app/components/filter/filter';
import FormForQuestions from '@/app/components/forms/form-for-questions/form-for-questions';
import CatalogList from '@/app/components/catalog-list/catalog-list';

import styles from './catalog-block.module.scss';

import mockCatalogCards from '@/app/data/data';
import { categories } from '@/app/components/filter/filter-block/filter-block';

export default function CatalogBlock() {
  const [filteredCards, setFilteredCards] = useState(mockCatalogCards);

  const getEffectiveCategories = (selectedCategories: string[]) => {
    const effective = new Set(selectedCategories);

    categories.forEach(cat => {
      if (cat.options) {
        const hasSubSelected = cat.options.some(opt => selectedCategories.includes(opt));
        if (hasSubSelected) {
          effective.delete(cat.label);
        }
      }
    });

    return Array.from(effective);
  };

  const applyFilters = (selectedCategories: string[], minPrice: number, maxPrice: number) => {
    const effectiveCategories = getEffectiveCategories(selectedCategories);

    const filtered = mockCatalogCards.filter(card => {
      const cardTags = card.tags
        .split(',')
        .map(tag => tag.trim().toLowerCase());

      const inCategory = effectiveCategories.length === 0 || effectiveCategories.some(category =>
        cardTags.some(tag => tag.includes(category.trim().toLowerCase()))
      );

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
