import React from 'react';
import Banner from '@/ui/banner/banner';
import Product from '@/app/components/product/product';

export default function Distribution() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'Пиво'}/>
      <Product />
    </React.Fragment>
  )
}
