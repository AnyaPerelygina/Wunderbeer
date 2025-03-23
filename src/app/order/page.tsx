import React from 'react';
import Banner from '../../ui/banner/banner';
import OrderBlock from '../components/order-block/order-block';

export default function Order() {
  return (
    <React.Fragment>
      <Banner image={'banner-3.webp'} title={'Оформить заказ'}/>
      <OrderBlock />
    </React.Fragment>
  )
}
