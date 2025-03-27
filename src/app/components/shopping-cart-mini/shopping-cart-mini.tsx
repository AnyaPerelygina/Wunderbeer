import Image from 'next/image';

import { useCart } from "@/context/cart-context";
import { basePath } from '@/const';

import styles from './shopping-cart-mini.module.scss';
import { ShoppingCartMiniProps } from './shopping-cart-mini.types';

export default function ShoppingCartMini({ selectedDelivery }: ShoppingCartMiniProps) {
  const { items } = useCart();

  const totalOrderPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const deliveryCost = selectedDelivery === 'delivery' && totalOrderPrice < 999 ? 144 : 0;

  const totalPriceWithDelivery = totalOrderPrice + deliveryCost;

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Выбранные товары</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.productKey} className={styles.item}>
            <div className={styles.productImg}>
              <Image
                src={`${basePath}/bottles/${item.image}.webp`}
                width={36}
                height={95}
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
          <span>{items.reduce((total, item) => total + item.quantity, 0)}</span>
        </div>
        <div className={styles.deliveryInfo}>
          <span>Доставка:</span>
          <span>{selectedDelivery === 'delivery' ? (deliveryCost === 0 ? 'Бесплатно' : '144₽') : 'Самовывоз'}</span>
        </div>
      </div>
      <div className={styles.total}>
        <span>Итого:</span>
        <span>{totalPriceWithDelivery}₽</span>
      </div>
    </div>
  )
}
