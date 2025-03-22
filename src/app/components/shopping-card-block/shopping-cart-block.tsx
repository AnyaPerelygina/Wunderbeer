'use client'

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

  const handleDelete = (productKey: string) => {
    removeItemCompletely(productKey); // Удаляем товар полностью из корзины
  };

  const handleIncrement = (productKey: string) => {
    updateItemQuantity(productKey, 1); // Увеличиваем количество товара на 1
  };

  const handleDecrement = (productKey: string) => {
    updateItemQuantity(productKey, -1); // Уменьшаем количество товара на 1
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
                      <span>{item.size}</span>
                    </td>
                    <td className={styles.productQuantity}>
                      <button onClick={() => handleDecrement(item.productKey)}>-</button>
                      <span className={styles.counterNumber}>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.productKey)}>+</button>
                    </td>
                    <td className={styles.productPrice}>{item.price * item.quantity} ₽</td>
                    <td className={styles.productСalculation}>{item.price} ₽ * {item.quantity}</td>
                    <td className={styles.btnDeleteProduct}>
                      <button onClick={() => handleDelete(item.productKey)}>
                        <Icon Icon={Trash} width={16} height={16} />
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
                <LinkNew href={"#"}>Оформить заказ</LinkNew>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
