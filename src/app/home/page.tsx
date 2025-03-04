import React from 'react';
import Hero from '../components/hero/hero';
import Assortment from '../components/assortiment/assortment';
import WhyUsHome from '../components/why-us-home/why-us-home';
import About from '../components/about/about';
import Services from '../components/services/services';
import Novelty from '../components/novelty/novelty';
import Partners from '../components/partners/partners';
import News from '../components/news/news';
import EntrancePopup from '../components/popup/entrance/entrance';

export default function Home() {
  return (
    <React.Fragment>
      <EntrancePopup />
      <h1 className='visually-hidden'>Wunderbeer - интернет-магазин пива.</h1>
      <Hero />
      <Assortment />
      <WhyUsHome />
      <About />
      <Services />
      <Novelty />
      <Partners />
      <News />
    </React.Fragment>
  )
}
