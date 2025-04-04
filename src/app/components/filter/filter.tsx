'use client'

import React, { useState, useEffect, useRef } from 'react';

import Icon from '@/ui/icon/icon';
import FilterBlock from '@/app/components/filter/filter-block/filter-block';

import styles from './filter.module.scss';
import { FilterProps } from './filter.types';

import WheatYellow from '@/assets/wheat-yellow.svg';

export default function Filter({ applyFilters }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterRef]);

  return (
    <div className={`${styles.root} ${isOpen ? styles['is-opened'] : ''}`}>
      <div ref={filterRef} className={`${styles.wrapper} ${isOpen ? styles['is-opened'] : ''}`}>
        <button className={`${styles.toggle} ${isOpen ? styles['is-opened'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.toggleOpened}>
            <Icon path={WheatYellow} width={47} height={18} />
              Фильтр
            <Icon path={WheatYellow} width={47} height={18} />
          </span>
          <span className={styles.toggleClosed}>Закрыть</span>
        </button>
        <div className={`${styles.filterMenu} ${isOpen ? styles['is-opened'] : ''}`}>
          <FilterBlock applyFilters={applyFilters} />
        </div>
      </div>
    </div>
  )
}
