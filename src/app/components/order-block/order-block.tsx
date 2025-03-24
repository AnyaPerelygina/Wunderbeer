'use client'

import { useState } from 'react';
import Image from 'next/image';

import { useCart } from "@/context/cart-context";
import { basePath } from '@/const';
import { Container } from '@/ui/container/container';
import FormOrders from '../forms/form-orders/form-orders';

import styles from './order-block.module.scss';

export default function OrderBlock() {
  const { items } = useCart();
  const [selectedDelivery, setSelectedDelivery] = useState<'delivery' | 'pickup'>('delivery');

  const totalOrderPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const deliveryCost = totalOrderPrice > 1000 ? 0 : 144;

  const totalPriceWithDelivery = totalOrderPrice + deliveryCost;

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Ваши контакты</h2>
        <FormOrders setSelectedDelivery={setSelectedDelivery} />
        <div className={styles.shoppingCart}>
          <h3 className={styles.subTitle}>Выбранные товары</h3>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.productKey} className={styles.item}>
                <div className={styles.productImg}>
                  <Image
                    src={`${basePath}/bottles/${item.image}.webp`}
                    width={66}
                    height={173}
                    alt={'Изображение пивной бутылки.'}
                  />
                </div>
                <div className={styles.productInfo}>
                  <span>{item.name}</span>
                  <span>{item.productType} {item.name}</span>
                  <span>{item.description}</span>
                  <span>{item.size} л</span>
                  <span className={styles.quantity}>{item.quantity} шт.</span>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.allInfo}>
            <div className={styles.allQuantity}>
              <span>Всего товаров:</span>
              <span>{items.reduce((total, item) => total + item.quantity, 0)} шт.</span>
            </div>
            <div className={styles.deliveryInfo}>
              <span>Доставка:</span>
              <span>{selectedDelivery === 'delivery' ? (deliveryCost === 0 ? 'Бесплатно' : '144₽') : 'Самовывоз'}</span>
            </div>
          </div>
          <div className={styles.total}>
            <span>Итого:</span>
            <span>{totalPriceWithDelivery} ₽</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
