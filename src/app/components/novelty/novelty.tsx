'use client';

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import styles from './novelty.module.scss';

import Image from "next/image";
import { basePath } from "@/const";
import { Container } from "../container/container";
import Title from '@/ui/title/title';

export default function Novelty() {
  const NoveltyImgList = [
    {
      link: 'beer-1@2x.webp',
      title: 'Mild lager beer',
      description: '4,6%, Светлое, Фильрованное'
    },
    {
      link: 'beer-2@2x.webp',
      title: 'Golden beer',
      description: '8,5%, Светлое, Фильрованное'
    },
    {
      link: 'beer-3@2x.webp',
      title: 'Premium beer',
      description: '4,6%, Светлое, Нефильрованное'
    },
    {
      link: 'beer-2@2x.webp',
      title: 'Golden beer',
      description: '8,5%, Светлое, Фильрованное'
    },
    {
      link: 'beer-3@2x.webp',
      title: 'Premium beer',
      description: '4,6%, Светлое, Нефильрованное'
    }
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (navigationPrevRef.current && navigationNextRef.current) {
      navigationPrevRef.current.addEventListener('click', () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
      });
      navigationNextRef.current.addEventListener('click', () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
      });
    }
  }, []);

  const swiperRef = useRef(null);

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.noveltyImg}>
          <picture>
            <source type="image/webp" media="(min-width: 360px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
            <Image
              src={`${basePath}/background-img/paper-background.png`}
              width={1920}
              height={604}
              alt="Фоновое изображение."
            />
          </picture>
        </div>
        <div className={styles.wrapper}>
          <Title className={styles.noveltyTitle} image="wheat-green" title="Новинки"/>
          <p>Откройте для себя наше пиво</p>
          <Swiper
            ref={swiperRef}
            className={`${styles.swiper} ${styles.noveltySwiper}`}
            modules={[Navigation]}
            slidesPerView={4}
            loop={true}
            speed={1000}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
          >
            {NoveltyImgList.map((item) => (
              <SwiperSlide className={styles.swiperSlide} key={item.link}>
                <Image
                  src={`${basePath}/bottles/${item.link}`}
                  width={214}
                  height={71}
                  alt={'Пивная бутылка.'}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={navigationPrevRef} className={styles.navigationPrev}>
            <Image
              src={`${basePath}/svg/arrow-short-green.svg`}
              width={23}
              height={20}
              alt={'Назад.'} />
          </div>
          <div ref={navigationNextRef} className={styles.navigationNext}>
            <Image
              src={`${basePath}/svg/arrow-short-green.svg`}
              width={23}
              height={20}
              alt={'Вперед.'} />
          </div>
        </div>
      </Container>
    </section>
  )
}