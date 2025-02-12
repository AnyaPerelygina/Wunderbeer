import { basePath } from '@/const';
import Image from 'next/image';
import Link from 'next/link';

import styles from './shopping-basket.module.scss';
import { ShoppingBasketProps } from './shopping-basket.types';

export default function ShoppingBasket({ totalItems }: ShoppingBasketProps) {
  return (
    <div className={styles.shoppingBasket}>
      <Link href={'/shopping-card'}>
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
