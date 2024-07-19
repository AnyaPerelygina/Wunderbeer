import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { basePath } from "@/const";
import MouseButton from "./mouse-button";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Image from "next/image";
import Button from "../btn";

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
    <div className='hero'>
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='hero__text'>
            <div className='hero__title'>
              <p>В&nbsp;стремлении<span>&nbsp;к совершенству.</span></p>
            </div>
            <div className='hero__description'>
              <p>В&nbsp;ассортименте в&nbsp;большом разнообразии представлены хмельные напитки собственного изготовления, а&nbsp;также от&nbsp;проверенных и&nbsp;надёжных партнёров – приобрести пиво оптом Москве и&nbsp;Московской области можно на&nbsp;выгодных условиях, а&nbsp;главное, будучи уверенным в&nbsp;отличных вкусовых характеристиках!</p>
            </div>
            <Button className={'hero__button btn'} href={'/catalog'}>Перейти в&nbsp;каталог</Button>
          </div>
          {!isMobileScreen && (
            <Swiper
            className='hero__swiper swiper'
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            speed={1500}
            loop={true}
            effect={'fade'}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
          >
            <ul className='swiper__wrapper'>
              {HeroImgList.map((img, index) => (
                <SwiperSlide className={`swiper__slide ${index === currentSlide ? 'active' : ''}`} key={index}>
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
              className='hero__swiper swiper'
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              speed={1500}
              loop={true}
              effect={'fade'}
              navigation
              pagination={{ clickable: true }}
            >
              <ul className='swiper__wrapper'>
                {HeroImgList.map((img, index) => (
                  <SwiperSlide className={`swiper__slide ${index === currentSlide ? 'active' : ''}`} key={index}>
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
      </div>
    </div>
  );
}
