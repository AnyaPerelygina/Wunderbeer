import React from 'react';
import Banner from '../../ui/banner/banner';
import ShoppingCartBlock from '@/app/components/shopping-cart-block/shopping-cart-block'

export default function ShoppingCart() {
  return (
    <React.Fragment>
      <Banner image={'banner-3.webp'} title={'Корзина'}/>
      <ShoppingCartBlock />
    </React.Fragment>
  )
}
