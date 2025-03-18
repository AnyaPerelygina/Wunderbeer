import React from 'react';

import mockCatalogCards from "@/app/data/data";

import Banner from '@/ui/banner/banner';
import Product from "@/app/components/product/[id]";

export async function generateStaticParams() {
  return mockCatalogCards.map((product) => ({
    id: product.productKey,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockCatalogCards.find((item) => item.productKey === params.id);

  if (!product) {
    return <p>Продукт не найден</p>;
  }

  return (
    <React.Fragment>
      <Banner image={'banner-2.webp'} title={product.type}/>
      <Product params={params} />
    </React.Fragment>
  );
}
