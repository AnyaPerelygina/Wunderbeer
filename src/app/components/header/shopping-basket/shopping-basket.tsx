import { useCart } from "@/context/cart-context";
import Link from 'next/link';

import Icon from "@/ui/icon/icon";

import styles from './shopping-basket.module.scss';
import { ToggleMenuType } from './shopping-basket.types';

import ShoppingBasketIcon from '@/assets/shopping-basket.svg';

export default function ShoppingBasket({ toggleMenu, isMobile, onLinkClick, className }: ToggleMenuType) {
  const { totalItems } = useCart();

  const handleClick = () => {
    if (isMobile) {
      toggleMenu();
    }
  };

  return (
    <div className={`${styles.root} ${className}`} onClick={handleClick}>
      <Link href={'/shopping-cart'} onClick={onLinkClick} target={'_blank'}>
        <Icon path={ShoppingBasketIcon} />
        {totalItems > 0 && <span className={styles.count}>{totalItems}</span>}
      </Link>
    </div>
  )
}
