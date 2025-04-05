'use client'

import Link from 'next/link';
import Image from 'next/image';

import { basePath } from "@/const";
import { Container } from '@/ui/container/container';
import Icon from '@/ui/icon/icon';
import FormForMessages from '@/app/components/forms/form-for-messages/form-for-messages';

import styles from './contacts-full.module.scss';

import Phone from '@/assets/phone-green.svg';
import Mail from '@/assets/mail-green.svg';

export default function ContactsFull() {
  return (
    <section className={styles.root}>
      <div className={styles.background}>
        <picture>
          <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
          <Image
            src={`${basePath}/background-img/paper-background@2x.png`}
            width={1920}
            height={604}
            alt="Фоновое изображение."
          />
        </picture>
      </div>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.adress}>
              <h2 className={styles.title}>Где нас найти</h2>
              <Link className={styles.link} href={'https://www.google.com/maps/search/?api=1&query=Москва,+Рязанский+проспект+22,+к2'} target={'_blank'}>
                <span>Россия, Москва, Рязанский проспект 22, к2</span>
              </Link>
            </div>
            <div className={styles.phones}>
              <h2 className={styles.title}>Свяжитесь с нами</h2>
              <Link className={styles.link} href={'tel:+7 (495) 740-40-51'} target={'_blank'}>
                <div className={styles.icon}>
                  <Icon path={Phone} width={20} height={21} />
                </div>
                <span>+7 (495) 740-40-51</span>
              </Link>
              <Link className={styles.link} href={'tel:+7 (925) 924-07-00'} target={'_blank'}>
                <div className={styles.icon}>
                  <Icon path={Phone} width={20} height={21} />
                </div>
                <span>+7 (925) 924-07-00</span>
              </Link>
              <Link className={styles.link} href={'mailto:wunderbeer@mail.ru'} target={'_blank'}>
                <div className={styles.icon}>
                  <Icon path={Mail} width={20} height={16} />
                </div>
                <span>wunderbeer@mail.ru</span>
              </Link>
            </div>
          </div>
          <FormForMessages mod="black" />
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.7815522479177!2d37.77388844114266!3d55.72006174330065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab57122d00001%3A0x3b1d50f0756b38ab!2sRyazanskiy%20Prospekt%2C%2022%2C%20%D0%BA.2%2C%20Moskva%2C%20Russia%2C%20109428!5e0!3m2!1sen!2srs!4v1736885048818!5m2!1sen!2srs"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className={styles.img}>
              <Image
                src={`${basePath}/contacts/map.webp`}
                width={1100}
                height={391}
                alt='Карта.'
              />
          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
