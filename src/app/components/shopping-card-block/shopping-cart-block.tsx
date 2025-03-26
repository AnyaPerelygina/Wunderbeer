'use client'

import { useState, useEffect } from 'react';
import { useCart } from "@/context/cart-context";
import { Container } from '../../../ui/container/container';
import LinkNew from '@/ui/link/link';
import styles from './shopping-cart-block.module.scss';

import Image from "next/image";
import { basePath } from "@/const";
import Icon from "@/ui/icon/icon";
import Trash from '@/assets/trash.svg';

export default function ShoppingCartBlock() {
  const { items, removeItemCompletely, updateItemQuantity } = useCart();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
        setIsMobileScreen(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const handleDelete = (productKey: string) => {
    removeItemCompletely(productKey);
  };

  const handleIncrement = (productKey: string) => {
    updateItemQuantity(productKey, 1);
  };

  const handleDecrement = (productKey: string) => {
    updateItemQuantity(productKey, -1);
  };

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        {items.length === 0 ? (
          <div className={styles.emptyWrapper}>
            <span className={styles.bigText}>Пустая корзина</span>
            <p>В вашей корзине пока нет товаров.</p>
            <p>Легко добавляйте в корзину понравившиеся товары кликнув по кнопке.</p>
            <LinkNew className={styles.btn} href={'/catalog'}>Перейти в каталог</LinkNew>
          </div>
        ) : (
          <div className={styles.fullWrapper}>
            {isMobileScreen ? (
              <div className={styles.wrapper}>
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
                      </div>
                      <div className={styles.productQuantity}>
                        <div className={styles.productQuantityWrapper}>
                          <button onClick={() => handleDecrement(item.productKey)}></button>
                          <span className={styles.counterNumber}>{item.quantity}</span>
                          <button onClick={() => handleIncrement(item.productKey)}></button>
                        </div>
                      </div>
                      <div className={styles.productPrice}>{item.price * item.quantity} ₽</div>
                      <div className={styles.productСalculation}>{item.price} ₽ * {item.quantity}</div>
                      <div className={styles.btnDeleteProduct}>
                        <button onClick={() => handleDelete(item.productKey)}>
                          <Icon link={Trash} width={16} height={16} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={styles.result}>
                  <div className={styles.totalPrice}>
                    <span>Итого:</span>
                    <span>{items.reduce((total, item) => total + item.price * item.quantity, 0)} ₽</span>
                  </div>
                  <div className={styles.btnOrder}>
                    <LinkNew href={"/order"}>Перейти к оформлению</LinkNew>
                  </div>
                </div>
              </div>
            ) : (
            <div className={styles.wrapper}>
              <table className={styles.table}>
                <thead className={styles.tabWrapper}>
                  <tr className={styles.tabListTitle}>
                    <th className={styles.visuallyHidden}>Изображение</th>
                    <th className={styles.tabTitle}>Наименование товара</th>
                    <th className={styles.tabTitle}>Кол-во</th>
                    <th className={styles.tabTitle}>Стоимость</th>
                    <th className={styles.visuallyHidden}>Расчет стоимости товара</th>
                    <th className={styles.visuallyHidden}>Удаление товара</th>
                  </tr>
                </thead>
                <tbody className={styles.tabWrapper}>
                  {items.map((item) => (
                    <tr key={item.productKey} className={styles.tabItem}>
                      <td className={styles.productImg}>
                        <Image
                          src={`${basePath}/bottles/${item.image}.webp`}
                          width={66}
                          height={173}
                          alt={'Изображение пивной бутылки.'}
                        />
                      </td>
                      <td className={styles.productInfo}>
                        <span>{item.name}</span>
                        <span>{item.productType} {item.name}</span>
                        <span>{item.description}</span>
                        <span>{item.size} л</span>
                      </td>
                      <td className={styles.productQuantity}>
                        <div className={styles.productQuantityWrapper}>
                          <button onClick={() => handleDecrement(item.productKey)}></button>
                          <span className={styles.counterNumber}>{item.quantity}</span>
                          <button onClick={() => handleIncrement(item.productKey)}></button>
                        </div>
                      </td>
                      <td className={styles.productPrice}>{item.price * item.quantity} ₽</td>
                      <td className={styles.productСalculation}>{item.price} ₽ * {item.quantity}</td>
                      <td className={styles.btnDeleteProduct}>
                        <button onClick={() => handleDelete(item.productKey)}>
                          <Icon link={Trash} width={16} height={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.result}>
                <div className={styles.totalPrice}>
                  <span>Итого:</span>
                  <span>{items.reduce((total, item) => total + item.price * item.quantity, 0)} ₽</span>
                </div>
                <div className={styles.btnOrder}>
                  <LinkNew href={"/order"}>Перейти к оформлению</LinkNew>
                </div>
              </div>
            </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
