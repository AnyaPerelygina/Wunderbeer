import { basePath } from '@/shared/const';
import Link from 'next/link';

import styles from './basket.module.scss';

export default function ShoppingBasket() {
  return (
    <div className={styles.basket}>
      <Link href={'#'}>
        <img src={`${basePath}/icons/shopping-basket.svg`} width={28} height={30} alt={'Корзина с товарами.'} />
      </Link>
    </div>
  )
}
