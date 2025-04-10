'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import Image from 'next/image';

import Icon from '@/ui/icon/icon';
import LinkNew from '@/ui/link/link';

import { basePath } from '@/const';
import MouseButton from './mouse-button/mouse-button';
import { Container } from '@/ui/container/container';

import styles from './hero.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import ArrowShort from '@/assets/arrow-short.svg';

export default function Hero() {
  const HeroImgList = [
    {
      link: 'hero-bottles@2x.webp',
      width: 1920,
      height: 1007,
      alt: 'Изображение пивных бутылок.'
    },
    {
      link: 'hero-hops@2x.webp',
      width: 1920,
      height: 1007,
      alt: 'Изображение хмеля в ладонях человека.'
    },
    {
      link: 'hero-beer@2x.webp',
      width: 1920,
      height: 1007,
      alt: 'Изображение бокала пива на столе.'
    }
  ];

  const [currentSlide] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

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

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.title}>
              <p>В&nbsp;стремлении<span>&nbsp;к совершенству.</span></p>
            </div>
            <div className={styles.description}>
              <p>В&nbsp;ассортименте в&nbsp;большом разнообразии представлены хмельные напитки собственного изготовления, а&nbsp;также от&nbsp;проверенных и&nbsp;надёжных партнёров – приобрести пиво оптом Москве и&nbsp;Московской области можно на&nbsp;выгодных условиях, а&nbsp;главное, будучи уверенным в&nbsp;отличных вкусовых характеристиках!</p>
            </div>
            <LinkNew className={styles.button} href={'/catalog'} target={'_blank'}>Перейти в&nbsp;каталог</LinkNew>
          </div>
          {!isMobileScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.heroSwiper}`}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              speed={1500}
              loop={true}
              effect={'fade'}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{ clickable: true }}
            >
              {HeroImgList.map((img, index) => (
                <SwiperSlide className={`${styles.swiperSlide} ${index === currentSlide ? 'active' : ''}`} key={index}>
                  <Image
                    src={`${basePath}/hero/${img.link}`}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          )}
          {isMobileScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.heroSwiper}`}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              speed={1500}
              loop={true}
              effect={'fade'}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{ clickable: true }}
            >
              {HeroImgList.map((img, index) => (
                <SwiperSlide className={`${styles.swiperSlide} ${index === currentSlide ? 'active' : ''}`} key={index}>
                  <Image
                    src={`${basePath}/hero/${img.link}`}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className={styles.navigation}>
            <div ref={navigationPrevRef} className={styles.navigationPrev}>
              <Icon path={ArrowShort} width={22} height={22} />
            </div>
            <div ref={navigationNextRef} className={styles.navigationNext}>
              <Icon path={ArrowShort} width={22} height={22} />
            </div>
            </div>
          <MouseButton />
        </div>
      </Container>
    </section>
  );
}
