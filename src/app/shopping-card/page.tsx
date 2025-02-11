import React from 'react';
import Banner from '../../ui/banner/banner';
import ShoppingCardBlock from '@/app/components/shopping-card-block/shopping-card-block';

export default function ShoppingCard() {
  return (
    <React.Fragment>
      <Banner image={'banner-3.webp'} title={'Корзина'}/>
      <ShoppingCardBlock />
    </React.Fragment>
  )
}
