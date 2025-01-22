import Image from 'next/image';
import { basePath } from '@/const';

import { Container } from '../container/container';
import styles from './distribution-block.module.scss';
import FormForMessages from '../forms/form-for-messages/form-for-messages';

export default function DistributionBlock() {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <span>Поставляем пенные напитки для торговых точек и заведений общепита!</span>
          <p>Если вы – владелец магазина, отдела, бара, ресторана или иного заведения общественного питания, вам необходимо составить лучшее меню для своих клиентов, и напитки играют в нём немаловажную роль.</p>
          <p>Пенное, ароматное, освежающее пиво привлечёт новых посетителей, а мы обеспечим вас им в любых необходимых объёмах – можете купить мелким оптом в Москве или заказать большие партии, мы в любом случае быстро и профессионально выполним ваш заказ!</p>
          <p>Мы можем гарантировать безупречное качество всей продукции и полное соответствие современным стандартам безопасности:</p>
          <p>Изготовление пива и других напитков происходит из лучшего отечественного и иностранного сырья;</p>
          <p>Наши технологи регулярно посещают производства партнёров для контроля соблюдения технологического процесса и качества продукции;</p>
          <p>Мы помогаем заказчикам в комплектации и оформлении мест продаж</p>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <picture>
              <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/shops/shops-3.webp`} />
              <Image
                src={`${basePath}//shops/shops-3.png`}
                width={540}
                height={359}
                alt="Изображение пивных бочек."
              />
            </picture>
          </div>
          <div className={styles.image}>
            <picture>
              <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/shops/shops-4.webp`} />
              <Image
                src={`${basePath}//shops/shops-4.png`}
                width={540}
                height={359}
                alt="Изображение пивных кег."
              />
            </picture>
          </div>
        </div>
        <div className={styles.wrapperForm}>
          <FormForMessages mod='white' />
          <div className={styles.background}>
            <Image
              src={`${basePath}/shops/hop-shops.webp`}
              width={1920}
              height={658}
              alt="Фоновое изображение."
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
