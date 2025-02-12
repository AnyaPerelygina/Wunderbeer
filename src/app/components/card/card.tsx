import React from "react";
import Image from "next/image";
import { basePath } from "@/const";

import { CardProps } from './card.types';
import styles from './card.module.scss';

import Button from '@/ui/button/button';

export default function Card({
  image,
  title,
  description,
  price,
  isNew = false,
  isOnSale = false,
  inStock = true
}: CardProps) {

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.badges}>
          {isNew && <span className={`${styles.badge} ${styles.badgeNew}`}>Новинка</span>}
          {isOnSale && <span className={`${styles.badge} ${styles.badgeSale}`}>Скидка</span>}
        </div>
        <Image
        src={`${basePath}/bottles/${image}.webp`}
        width={214}
        height={571}
        alt={'Изображение пивной бутылки.'}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>{price} руб.</span>
      <Button className={styles.button} type={'button'} disabled={!inStock}>{inStock ? 'Купить' : 'Нет в наличии'}</Button>
    </div>
  );
}
