import { useCart } from "@/context/cart-context";
import { basePath } from '@/const';
import Image from 'next/image';
import Link from 'next/link';

import styles from './shopping-basket.module.scss';
import { ToggleMenuType } from './shopping-basket.types';

export default function ShoppingBasket({ toggleMenu, className }: ToggleMenuType) {
  const { totalItems } = useCart();

  return (
    <div className={`${styles.root} ${className}`} onClick={toggleMenu}>
      <Link href={'/shopping-cart'}>
        <Image
          src={`${basePath}/svg/shopping-basket.svg`}
          width={28}
          height={30}
          alt={'Корзина с товарами.'} />
        {totalItems > 0 && <span className={styles.count}>{totalItems}</span>}
      </Link>
    </div>
  )
}
