'use client'

import React, { useState, useEffect, useRef } from 'react';

import styles from './filter.module.scss';
import { FilterProps } from './filter.types';

import FilterBlock from '@/app/components/filter/filter-block/filter-block';
import Icon from '@/ui/icon/icon';
import WheatYellow from '@/assets/wheat-yellow.svg';

export default function Filter({ applyFilters }: FilterProps) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.root} ${isOpen ? styles['is-opened'] : ''}`}>
      {!isMobileScreen && (
        <div className={styles.wrapper}>
          <FilterBlock applyFilters={applyFilters} />
        </div>
      )}
      {isMobileScreen && (
        <div ref={filterRef} className={`${styles.wrapper} ${isOpen ? styles['is-opened'] : ''}`}>
          <button className={`${styles.toggle} ${isOpen ? styles['is-opened'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.toggle__opened}>
              <Icon link={WheatYellow} width={47} height={18} />
                Фильтр
              <Icon link={WheatYellow} width={47} height={18} />
            </span>
            <span className={styles.toggle__closed}>Закрыть</span>
          </button>
          <div className={`${styles.filterMenu} ${isOpen ? styles['is-opened'] : ''}`}>
            <FilterBlock applyFilters={applyFilters} />
          </div>
        </div>
      )}
    </div>
  )
}
