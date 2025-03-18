import { useState } from 'react';
import { useCart } from "@/context/cart-context";
import { ButtonProps } from './button-buy.types';

import styles from './button-buy.module.scss';

export default function ButtonBuy({
  className = '',
  type = 'button',
  availability = true,
  disabled = false,
  productKey,
  name,
  price,
  image,
}: ButtonProps) {
  const [count, setCount] = useState(0);
  const { addItem, removeItem } = useCart();

  if (!availability) {
    return (
      <button type={type} className={`${styles.button} ${className}`} disabled>
        Нет в наличии
      </button>
    );
  }

  const handleIncreament = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setCount((prev) => prev + 1);

    addItem({ productKey: productKey, name, price, image });
  };

  const handleDecreament = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setCount((prev) => prev - 1);
    removeItem(productKey);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setCount(1);

    console.log('Добавляем в корзину:', productKey);
    addItem({ productKey: productKey, name, price, image });
  };

  return (
    <div className={styles.buttonWrapper}>
      {
        count === 0 ? (
          <button
            type={type}
            className={`${styles.button} ${className}`}
            onClick={handleClick}
            disabled={disabled}
          >
            Купить
          </button>
        ) : (
          <div className={`${styles.counter} ${className ? className : ''}`}>
            <button onClick={handleDecreament}></button>
            <span className={styles.counterNumber}>{count}</span>
            <button onClick={handleIncreament}></button>
          </div>
        )
      }
    </div>
  );
}
