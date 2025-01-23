import React from 'react';
import Banner from '@/ui/banner/banner';

import CatalogBlock from '@/app/components/catalog-block/catalog-block';

export default function Catalog() {
  return (
    <React.Fragment>
      <Banner image={'banner-2.webp'} title={'Каталог'}/>
      <CatalogBlock />
    </React.Fragment>
  )
}
