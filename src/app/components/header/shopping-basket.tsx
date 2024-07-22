'use client';

// import { basePath } from '@/const';
import Image from 'next/image';
import Link from 'next/link';
import basket from '../../../../public/svg/shopping-basket.svg';

export default function ShoppingBasket() {
  return (
    <div className='shopping-basket'>
      <Link href={'#'}>
        <Image
          src={basket}
          width={28}
          height={30}
          alt={'Корзина с товарами.'} />
      </Link>
    </div>
  )
}
