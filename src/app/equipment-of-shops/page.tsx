import React from 'react';
import Banner from '@/ui/banner/banner';
import Shops from '@/app/components/shops/shops';

export default function EquipmentOfShops() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'Комплектация магазинов'}/>
      <Shops />
    </React.Fragment>
  )
}
