import React from 'react';
import Banner from '../../ui/banner/banner';
import ContactsFull from '@/app/components/contacts-full/contacts-full';

export default function Contacts() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'Контакты'}/>
      <ContactsFull />
    </React.Fragment>
  )
}
