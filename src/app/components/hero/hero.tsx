'use client';

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { basePath } from "@/const";
import MouseButton from "./mouse-button/mouse-button";
import { Container } from "../container/container";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Image from "next/image";
import Button from "../../../ui/button/btn";

import styles from './hero.module.scss';

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
            <Button className={styles.button} href={'/catalog'}>Перейти в&nbsp;каталог</Button>
          </div>
          {!isMobileScreen && (
            <Swiper
              className={styles.swiper}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              speed={1500}
              loop={true}
              effect={'fade'}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation
              pagination={{ clickable: true }}
            >
            <ul className={styles.swiperWrapper}>
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
            </ul>
          </Swiper>
          )}
          {isMobileScreen && (
            <Swiper
              className={styles.swiper}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              speed={1500}
              loop={true}
              effect={'fade'}
              navigation
              pagination={{ clickable: true }}
            >
              <ul className={styles.swiper__wrapper}>
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
              </ul>
            </Swiper>
          )}
          <MouseButton />
        </div>
      </Container>
    </section>
  );
}
