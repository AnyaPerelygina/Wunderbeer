import React from 'react';
import Banner from '@/ui/banner/banner';
import DistributionBlock from '@/app/components/distribution-block/distribution-block';

export default function Distribution() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'Дистрибуция'}/>
      <DistributionBlock />
    </React.Fragment>
  )
}
