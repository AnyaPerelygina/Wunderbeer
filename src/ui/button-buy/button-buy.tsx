import { useState } from 'react';
import { useCart } from "@/context/cart-context";
import { ButtonProps } from './button-buy.types';

import styles from './button-buy.module.scss';

export default function ButtonBuy({ className = '', type='button', availability = true, disabled = false }: ButtonProps) {
  const [count, setCount] = useState(0);
  const { addItem, removeItem } = useCart();

  if(!availability) {
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
    addItem();
  }

  const handleDecreament = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setCount((prev) => prev - 1);
    removeItem();
  }

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setCount(1);
    addItem();
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={count === 0 ? handleClick : undefined}
      disabled={disabled}
    >
      {
        count === 0 ? (
          'Купить'
        ) : (
          <div className={styles.counter}>
            <button onClick={handleDecreament}>-</button>
            {count}
            <button onClick={handleIncreament}>+</button>
          </div>
        )
      }
    </button>
  );
}
