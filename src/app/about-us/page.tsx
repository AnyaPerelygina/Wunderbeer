import React from 'react';
import Banner from '../../ui/banner/banner';

import History from '../components/history/history';
import HowBuy from '../components/how-buy/how-buy';
import Delivery from '../components/delivery/delivery';
import WhyUs from '../components/why-us/why-us';

export default function AboutUs() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'О компании'}/>
      <History />
      <WhyUs />
      <Delivery />
      <HowBuy />
    </React.Fragment>
  )
}
