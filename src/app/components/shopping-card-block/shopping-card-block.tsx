'use client'

import { useState } from 'react';

import { Container } from '../container/container';
import LinkNew from '@/ui/link/link';
import styles from './shopping-card-block.module.scss';

export default function ShoppingCardBlock() {
  const [isEmptyCard] = useState(true);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        {isEmptyCard && (
        <div className={styles.wrapper}>
          <span className={styles.bigText}>Пустая корзина</span>
          <p>В&nbsp;вашей корзине пока нет товаров.</p>
          <p>Легко добавляйте в&nbsp;корзину понравившиеся&nbsp;товары кликнув по&nbsp;кнопке.</p>
          <LinkNew className={styles.btn} href={'/catalog'}>Перейти в&nbsp;каталог</LinkNew>
        </div>
      )}
      </Container>
    </section>
  )
}
