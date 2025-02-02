import React from "react";

import styles from './filter-results.module.scss';
import { FilterResultsProp } from './filter-result.type';

export default function FilterResults({ count }: FilterResultsProp ) {
  return (
    <div className={styles.root}>
      <span className={styles.text}>Найдено результатов поиска: {count}</span>
    </div>
  )
}
