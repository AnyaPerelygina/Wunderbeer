'use client';

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import { basePath } from '@/const';
import Icon from '@/ui/icon/icon';
import { Container } from '@/ui/container/container';
import Title from '@/ui/title/title';

import styles from './novelty.module.scss';

import mockCatalogCards from '@/app/data/data';
import ArrowShortGreenIcon from '@/assets/arrow-short-green.svg';

export default function Novelty() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);
  const noveltyItems = mockCatalogCards.filter(item => item.new === true);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth > 767 && window.innerWidth < 1024);
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className={styles.noveltyImg}>
          <picture>
            <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
            <Image
              src={`${basePath}/background-img/paper-background.png`}
              width={1920}
              height={604}
              alt="Фоновое изображение."
            />
          </picture>
        </div>
        <div className={styles.wrapper}>
          <Title className={styles.noveltyTitle} iconColor="yellow" title="Новинки"/>
          <p>Откройте для себя наше пиво</p>
          {!isMobileScreen && !isTabletScreen && (
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
              {noveltyItems.map((item) => (
                <SwiperSlide className={styles.swiperSlide} key={item.productKey}>
                  <Image
                    src={`${basePath}/bottles/${item.image}.webp`}
                    width={214}
                    height={71}
                    alt={'Пивная бутылка.'}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isTabletScreen && !isMobileScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.noveltySwiper}`}
              modules={[Navigation]}
              slidesPerView={2}
              loop={true}
              speed={1000}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            >
              {noveltyItems.map((item) => (
                <SwiperSlide className={styles.swiperSlide} key={item.productKey}>
                  <Image
                    src={`${basePath}/bottles/${item.image}.webp`}
                    width={214}
                    height={71}
                    alt={'Пивная бутылка.'}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isMobileScreen && (
            <Swiper
              ref={swiperRef}
              className={`${styles.swiper} ${styles.noveltySwiper}`}
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              speed={1000}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
            >
              {noveltyItems.map((item) => (
                <SwiperSlide className={styles.swiperSlide} key={item.productKey}>
                  <Image
                    src={`${basePath}/bottles/${item.image}.webp`}
                    width={214}
                    height={71}
                    alt={'Пивная бутылка.'}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div ref={navigationPrevRef} className={styles.navigationPrev}>
            <Icon path={ArrowShortGreenIcon} width={23} height={20} />
          </div>
          <div ref={navigationNextRef} className={styles.navigationNext}>
            <Icon path={ArrowShortGreenIcon} width={23} height={20} />
          </div>
        </div>
      </Container>
    </section>
  )
}
