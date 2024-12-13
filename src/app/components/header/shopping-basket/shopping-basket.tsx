import { basePath } from '@/const';
import Image from 'next/image';
import Link from 'next/link';

import styles from './shopping-basket.module.scss';

export default function ShoppingBasket() {
  return (
    <div className={styles.shoppingBasket}>
      <Link href={'#'}>
        <Image
          src={`${basePath}/svg/shopping-basket.svg`}
          width={28}
          height={30}
          alt={'Корзина с товарами.'} />
      </Link>
    </div>
  )
}
