import { basePath } from '@/const';
import Image from 'next/image';

import styles from './services.module.scss';
import Title from '@/ui/title/title';
import Button from '@/ui/button/btn';
import { Container } from "../container/container";

export default function Services() {
  return (
    <section className={styles.services}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Title className={styles.servicesTitle} image="wheat-yellow" title="Услуги" />
          <div className={styles.distribution}>
            <div className={styles.img}>
              <picture>
                <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/services/kegs-mobile.webp, ${basePath}/services/kegs-mobile@2x.webp 2x`} />
                <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/services/kegs.webp, ${basePath}/services/kegs@2x.webp 2x`} />
                <Image
                  src={`${basePath}/services/kegs.png`}
                  width={960}
                  height={447}
                  alt="Пивные кеги."
                />
              </picture>
            </div>
            <div className={styles.text}>
              <h3 className={styles.subtitle}>Дистрибуция</h3>
              <p>Предоставляем услуги по комплектации магазинов разливного пива &quot;под ключ&quot;</p>
              <Button className={styles.btn} href={'/distribution'}>Подробнее</Button>
            </div>
          </div>
          <div className={styles.equipment}>
            <div className={styles.img}>
              <picture>
                <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/services/beer-bar-mobile.webp, ${basePath}/services/beer-bar-mobile@2x.webp 2x`} />
                <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/services/beer-bar.webp, ${basePath}/services/beer-bar@2x.webp 2x`} />
                <Image
                  src={`${basePath}/services/beer-bar.png`}
                  width={960}
                  height={447}
                  alt="Пивной кран и бокал пива."
                />
              </picture>
            </div>
            <div className={styles.text}>
              <h3 className={styles.subtitle}>Комплектация магазинов</h3>
              <p>Дистрибьюция по Москве и Москвоской области региональных производителей пива, пивных напитков</p>
              <Button className={styles.btn} href={'/distribution'}>Подробнее</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
