import React from 'react';
import Banner from '../../ui/banner/banner';

import History from '../components/history/history';

export default function AboutUs() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'О компании'}/>
      <History />
    </React.Fragment>
  )
}
