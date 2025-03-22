'use client'

import { useCart } from "@/context/cart-context";
import { Container } from '../../../ui/container/container';
import LinkNew from '@/ui/link/link';
import styles from './shopping-cart-block.module.scss';

import Image from "next/image";
import { basePath } from "@/const";

export default function ShoppingCartBlock() {
  const { items } = useCart();

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        {items.length === 0 ? (
          <div className={styles.wrapper}>
            <span className={styles.bigText}>Пустая корзина</span>
            <p>В вашей корзине пока нет товаров.</p>
            <p>Легко добавляйте в корзину понравившиеся товары кликнув по кнопке.</p>
            <LinkNew className={styles.btn} href={'/catalog'}>Перейти в каталог</LinkNew>
          </div>
        ) : (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.productKey} className={styles.item}>
                <Image
                  src={`${basePath}/bottles/${item.image}.webp`}
                  width={214}
                  height={571}
                  alt={'Изображение пивной бутылки.'}
                />
                <h2>{item.name}</h2>
                <span>{item.productType} {item.name}</span>
                <span>{item.description}</span>
                <span>{item.size}</span>
                <span>Цена: {item.price} ₽</span>
                <span>Количество: {item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
