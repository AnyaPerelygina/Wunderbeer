import React from 'react';
import Hero from '../components/hero/hero';
import Assortment from '../components/assortiment/assortment';

export default function Home() {
  return (
    <React.Fragment>
      <h1 className='visually-hidden'>Wunderbeer - интернет-магазин пива.</h1>
      <Hero />
      <Assortment />
    </React.Fragment>
  )
}
