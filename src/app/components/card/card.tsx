"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/const";

import { CardProps } from './card.types';
import styles from './card.module.scss';

import ButtonBuy from "@/ui/button-buy/button-buy";

export default function Card({
  id,
  image,
  title,
  strength,
  description,
  price,
  isNew = false,
  isOnSale = false,
  availability = true,
}: CardProps) {

  return (
    <Link className={styles.root} href={`/product-page/${id}`} passHref>
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
      <p className={styles.description}>%{strength} {description}</p>
      <span className={styles.price}>{price} руб.</span>
      <ButtonBuy className={styles.counterButton} type="button" availability={availability} />
    </Link>
  );
}
