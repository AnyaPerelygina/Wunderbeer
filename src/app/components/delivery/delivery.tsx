import Link from 'next/link';

import { Container } from '@/ui/container/container';
import FormForQuestions from '@/app/components/forms/form-for-questions/form-for-questions';

import styles from './delivery.module.scss';

export default function Delivery() {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Доставка</h2>
          <p>В&nbsp;день доставки с&nbsp;вами&nbsp;предварительно свяжутся по&nbsp;телефону указанному в&nbsp;заказе. Доставка осуществляется курьерской машиной, как&nbsp;правило, на&nbsp;следующий день после&nbsp;заказа. Товар оплачивается наличными, либо&nbsp;пластиковой картой при&nbsp;получении. В&nbsp;случае отказа, вы&nbsp;оплачиваете сумму за&nbsp;использование транспорта — 200&nbsp;руб.</p>
          <p>Мы&nbsp;доставляем товар до&nbsp;подъезда, водитель-экспедитор не&nbsp;имеет права отдаляться от&nbsp;машины, так&nbsp;как&nbsp;несет ответственность за&nbsp;груз и&nbsp;автомобиль, по&nbsp;этой&nbsp;причине он&nbsp;не&nbsp;заносит товар внутрь вашего помещения. Наши&nbsp;водители-экспедиторы заинтересованы в&nbsp;том, чтобы&nbsp;доставить ваш&nbsp;товар как&nbsp;можно ближе к&nbsp;зданию. Однако, иногда, в&nbsp;силу некоторых причин (ремонтно-дорожные работы, ограничения остановки и&nbsp;движения дорожными знаками), не&nbsp;позволяют этого&nbsp;сделать.</p>
          <p>Мы&nbsp;всегда рады предложить самые удобные способы доставки для&nbsp;наших&nbsp;клиентов. Если&nbsp;вы&nbsp;не&nbsp;нашли удобный для&nbsp;вас способ доставки — вы&nbsp;всегда&nbsp;можете связаться с&nbsp;нашими&nbsp;менеджерами по&nbsp;телефону: <Link className={styles.link} href={'tel:+7 (800) 775-10-50'} target={'_blank'}>8&nbsp;800&nbsp;775-10-50</Link> (звонок бесплатный) и&nbsp;обсудить любые иные&nbsp;варианты доставки вашего&nbsp;заказа.</p>
        </div>
        <div className={styles.wrapperForm}>
          <FormForQuestions />
        </div>
      </Container>
    </section>
  )
}
