import React from 'react';

import Error404 from '../components/error404/error404';

export default function Error() {
  return (
    <React.Fragment>
      <h1 className='visually-hidden'>Ошибка загрузки страницы.</h1>
      <Error404 />
    </React.Fragment>
  )
}
