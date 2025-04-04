import React, { useState, useMemo, ChangeEvent } from 'react';

import Button from '@/ui/button/button';
import Icon from '@/ui/icon/icon';

import styles from './filter-block.module.scss';
import { Category, FilterBlockProps } from './filter-block.types';

import WheatYellow from '@/assets/wheat-yellow.svg';
import WheatGreenMini from '@/assets/wheat-green-mini.svg';

const categories: Category[] = [
  { label: 'Пиво', options: ['Темное', 'Светлое', 'Фильтрованное', 'Нефильтрованное', 'Пшеничное'] },
  { label: 'Квас' },
  { label: 'Лимонады' },
  { label: 'Соки, вода' }
];

export default function FilterBlock({ applyFilters }: FilterBlockProps) {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const minPos = (minPrice / 500) * 100;
  const maxPos = (maxPrice / 500) * 100;

  const rangeTrackStyle = useMemo(() => ({
    left: `${minPos}%`,
    width: `${maxPos - minPos}%`
  }), [minPos, maxPos]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        const filteredCategories = prevSelectedCategories.filter((c) => {
          return c !== category &&
                 !categories.find(cat => cat.label === category)?.options?.includes(c);
        });
        return filteredCategories;
      }

      return [...prevSelectedCategories, category];
    });
  };

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  const handleApplyFilters = () => {
    applyFilters(selectedCategories, minPrice, maxPrice);
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        <Icon path={WheatYellow} width={47} height={18} />
        Категории
        <Icon path={WheatYellow} width={47} height={18} />
      </h3>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <div key={cat.label} className={styles.category}>
            <label onClick={() => handleCategoryChange(cat.label)}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.label)}
                onChange={() => handleCategoryChange(cat.label)}
                id={`checkbox-${cat.label}`}
              />
              {selectedCategories.includes(cat.label) && (
                <Icon path={WheatGreenMini} width={29} height={11} />
              )}
              <h4>{cat.label}</h4>
            </label>
            {cat.options && (
              <div className={styles.subcategories}>
                {cat.options.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(option)}
                      onChange={() => handleCategoryChange(option)}
                      id={`checkbox-${option}`}
                    />
                    {selectedCategories.includes(cat.label) && (
                      <Icon path={WheatGreenMini} width={29} height={11} />
                    )}
                    <span className={styles.checkboxCustom}>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className={styles.title}>
        <Icon path={WheatYellow} width={47} height={18} />
        Цена
        <Icon path={WheatYellow} width={47} height={18} />
      </h3>
      <div className={styles.priceFilter}>
        <input
          type="number"
          min="0"
          max="500"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="number"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className={styles.rangeWrapper}>
          <div
            className={styles.rangeTrack}
            style={rangeTrackStyle}
          />
          <input
            type="range"
            min="0"
            max="500"
            value={minPrice}
            onChange={handleMinChange}
            className={styles.range}
          />
          <input
            type="range"
            min="0"
            max="500"
            value={maxPrice}
            onChange={handleMaxChange}
            className={styles.range}
          />
        </div>
      </div>
      <Button type={'submit'} onClick={handleApplyFilters}>Подобрать</Button>
    </div>
  );
}
