import React from 'react';
import Banner from '../../ui/banner/banner';
import PrivacyPolicyDoc from '@/app/components/privacy-policy-doc/privacy-policy-doc';

export default function PrivacyPolicy() {
  return (
    <React.Fragment>
      <Banner image={'banner-1.webp'} title={'Политика конфиденциальности'}/>
      <PrivacyPolicyDoc />
    </React.Fragment>
  )
}
