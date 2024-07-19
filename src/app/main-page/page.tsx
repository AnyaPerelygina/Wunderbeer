'use client'

import React from 'react';
import Hero from '../components/hero/hero';

export default function MainPage() {
  return (
    <React.Fragment>
      <h1 className='visually-hidden'>Wunderbeer - интернет-магазин пива.</h1>
      <Hero />
    </React.Fragment>
  )
}
