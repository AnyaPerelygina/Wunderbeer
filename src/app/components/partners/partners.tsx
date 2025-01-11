'use client';

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from 'swiper/modules';

import styles from './partners.module.scss';

import Image from "next/image";
import { basePath } from "@/const";
import { Container } from "../container/container";
import Title from '@/ui/title/title';

export default function Partners() {
  const PartnersImgList = [
    {
      id: 1,
      link: 'partner-3@2x.webp',
      width: 149,
      height: 149,
    },
    {
      id: 2,
      link: 'partner-1@2x.webp',
      width: 149,
      height: 149,
    },
    {
      id: 3,
      link: 'partner-2@2x.webp',
      width: 81,
      height: 81,
    },
    {
      id: 4,
      link: 'partner-3@2x.webp',
      width: 149,
      height: 149,
    },
    {
      id: 5,
      link: 'partner-1@2x.webp',
      width: 149,
      height: 149,
    },
    {
      id: 6,
      link: 'partner-2@2x.webp',
      width: 81,
      height: 81,
    }
  ];

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth > 767 && window.innerWidth < 1024);
      setIsMobileScreen(window.innerWidth < 768);
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
      <Container>
        <div className={styles.partnersImg}>
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
          <Title className={styles.partnersTitle} image="wheat-green" title="Наши партнеры"/>
          {!isMobileScreen && !isTabletScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.partnersSwiper}`}
              modules={[Navigation]}
              slidesPerView={3}
              loop={true}
              speed={1000}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            >
              {PartnersImgList.map((item) => (
                <SwiperSlide className={styles.swiperSlide} key={item.link}>
                  <Image
                    src={`${basePath}/partners/${item.link}`}
                    width={item.width}
                    height={item.height}
                    alt={'Логотип партнера.'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isTabletScreen && !isMobileScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.partnersSwiper}`}
              modules={[Navigation]}
              slidesPerView={2}
              loop={true}
              speed={1000}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            >
              {PartnersImgList.map((item) => (
                <SwiperSlide className={styles.swiperSlide} key={item.link}>
                  <Image
                    src={`${basePath}/partners/${item.link}`}
                    width={item.width}
                    height={item.height}
                    alt={'Логотип партнера.'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isMobileScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.partnersSwiper}`}
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              speed={1000}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            >
              {PartnersImgList.map((item) => (
                <SwiperSlide className={styles.swiperSlide} key={item.link}>
                  <Image
                    src={`${basePath}/partners/${item.link}`}
                    width={item.width}
                    height={item.height}
                    alt={'Логотип партнера.'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
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
