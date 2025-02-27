import React from 'react';

import mockCatalogCards from "@/app/data/data";

import Banner from '@/ui/banner/banner';
import Product from "@/app/components/product/[id]";

export async function generateStaticParams() {
  return mockCatalogCards.map((product) => ({
    id: product.key,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <React.Fragment>
      <Banner image={'banner-2.webp'} title={'Пиво'}/>
      <Product params={params} />
    </React.Fragment>
  );
}
