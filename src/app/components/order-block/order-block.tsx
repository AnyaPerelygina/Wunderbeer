'use client'

import { useState, useEffect } from 'react';

import { useCart } from "@/context/cart-context";
import { Container } from '@/ui/container/container';
import FormOrders from '@/app/components/forms/form-orders/form-orders';
import ShoppingCartMini from '@/app/components/shopping-cart-mini/shopping-cart-mini';

import styles from './order-block.module.scss';

export default function OrderBlock() {
  const { items, removeItemCompletely } = useCart();
  const [selectedDelivery, setSelectedDelivery] = useState<'delivery' | 'pickup'>('delivery');
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
        setIsMobileScreen(window.innerWidth < 1024);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const clearCart = () => {
    items.forEach((item) => removeItemCompletely(item.productKey));
  };

  return (
    <section className={styles.root}>
      {isMobileScreen ? (
        <Container className={styles.container}>
          <h2 className={styles.title}>Ваши контакты</h2>
          <FormOrders setSelectedDelivery={setSelectedDelivery} clearCart={clearCart} />
        </Container>
      ) : (
        <Container className={styles.container}>
          <h2 className={styles.title}>Ваши контакты</h2>
          <FormOrders setSelectedDelivery={setSelectedDelivery} clearCart={clearCart} />
          <ShoppingCartMini selectedDelivery={selectedDelivery} />
        </Container>
      )}
    </section>
  )
}
