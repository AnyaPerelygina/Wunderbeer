import React from 'react';

import Error404 from '@/app/components/404/404';
import Banner from '@/ui/banner/banner';

export default function Error() {
  return (
    <React.Fragment>
      <Banner />
      <Error404 />
    </React.Fragment>
  )
}
