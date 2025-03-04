'use client';

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from 'swiper/modules';

import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/const";

import FormForQuestions from "../forms/form-for-questions/form-for-questions";
import { Container } from "@/ui/container/container";
import Button from "@/ui/button/button";
import Icon from "@/ui/icon/icon";
import Card from "../card/card";
import Arrow from "@/assets/arrow-long-black.svg";

import styles from "./product.module.scss";
import "swiper/css";
import "swiper/css/navigation";

import mockCatalogCards from "@/app/data/data";

export default function Product({ params }: { params: { id: string } }) {
  const product = mockCatalogCards.find((card) => card.key === params.id);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'description' | 'characteristics'>('description');

  // Функция для переключения вкладок
  const handleTabChange = (tab: 'description' | 'characteristics') => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSlidesToShow(1);
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      };
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, [swiperRef]);

  if (!product) return <p>Товар не найден</p>;

  const availableCards = mockCatalogCards
    .filter((card) => card.availability)
    .slice(0, 4);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Link href="/catalog" className={styles.linkReturn}>
          <Icon Icon={Arrow} width={44} height={8} />
          Вернуться в каталог
        </Link>
        <div className={styles.about}>
          <div className={styles.aboutWrapper}>
            <Image
              src={`${basePath}/bottles/${product.image}.webp`}
              width={244}
              height={643}
              alt="Изображение пивной бутылки"
            />
            <div className={styles.characteristics}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <h4 className={styles.strength}>
                Крепость: <span>{product.strength} %</span>
              </h4>
              <h4 className={styles.size}>
                Объем: <span>{product.size} л</span>
              </h4>
              <h4 className={styles.price}>
                {product.price} руб. <span>/шт.</span>
              </h4>
              <Button type="button" disabled={!product.availability}>
                {product.availability ? "Купить" : "Нет в наличии"}
              </Button>
            </div>
            <div className={styles.wrapperForm}>
              <div className={styles.backgroundForm}>
                <Image
                  src={`${basePath}/delivery/background-hops-mini.webp`}
                  width={255}
                  height={364}
                  alt="Фоновое изображение."
                />
              </div>
              <FormForQuestions />
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.background}>
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
          <div className={styles.infoWrapper}>
            <div className={styles.controls}>
              <Button
                className={styles.button}
                type={'button'}
                onClick={() => handleTabChange('description')}
                disabled={activeTab === 'description'}
              >
                Описание
              </Button>
              <Button
                className={styles.button}
                type={'button'}
                onClick={() => handleTabChange('characteristics')}
                disabled={activeTab === 'characteristics'}
              >
                Характеристики
              </Button>
            </div>
            <div className={styles.contents}>
              {activeTab === 'description' && (
                <div className={styles.content}>{product.text}</div>
              )}
              {activeTab === 'characteristics' && (
                <div className={styles.content}>
                  <ul className={styles.contentList}>
                    <li className={styles.contentItem}>Крепость: {product.strength} %</li>
                    <li className={styles.contentItem}>Объем: {product.size} л</li>
                    <li className={styles.contentItem}>Цена: {product.price} руб.</li>
                    <li className={styles.contentItem}>Теги: {product.tags}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.more}>
          <div className={styles.moreWrapper}>
            <h3 className={styles.subtitle}>
              Вам понравится
            </h3>
              {isMobileScreen ? (
                <div className={styles.moreList}>
                  <Swiper
                    className={`${styles.swiper} ${styles.moreSwiper}`}
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={slidesToShow}
                    speed={1000}
                    loop={true}
                    navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                  >
                    {availableCards.map((card) => (
                      <SwiperSlide key={card.key} className={styles.swiperSlide}>
                        <Card
                          id={card.key}
                          key={card.key}
                          image={card.image}
                          title={card.title}
                          description={card.description}
                          price={card.price}
                          inStock={card.availability}
                        />
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
              ) : (
                <div className={styles.moreList}>
                  {availableCards.map((card) => (
                    <Card
                      id={card.key}
                      key={card.key}
                      image={card.image}
                      title={card.title}
                      description={card.description}
                      price={card.price}
                      inStock={card.availability}
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
      </Container>
    </section>
  );
}
