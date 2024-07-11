'use client';

import { basePath } from '@/const';
import Image from 'next/image';
import Link from 'next/link';

export default function ShoppingBasket() {
  return (
    <div className='shopping-basket'>
      <Link href={'#'}>
        <Image src={`${basePath}/svg/shopping-basket.svg`} width={28} height={30} alt={'Корзина с товарами.'} />
      </Link>
    </div>
  )
}
