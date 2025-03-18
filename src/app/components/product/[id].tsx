'use client';

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from 'swiper/modules';

import Image from "next/image";
import WheatYellow from '@/assets/wheat-yellow.svg';
import Link from "next/link";
import { basePath } from "@/const";

import FormForQuestions from "../forms/form-for-questions/form-for-questions";
import { Container } from "@/ui/container/container";
import ButtonBuy from "@/ui/button-buy/button-buy";
import Button from "@/ui/button/button";
import Icon from "@/ui/icon/icon";
import Card from "../card/card";
import Arrow from "@/assets/arrow-long-black.svg";

import styles from "./product.module.scss";
import "swiper/css";
import "swiper/css/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mockCatalogCards from "@/app/data/data";
import { ProductProps } from "./product.type";

gsap.registerPlugin(ScrollTrigger);

export default function Product({ params }: ProductProps) {
  const product = mockCatalogCards.find((card) => card.productKey === params.id);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const moreImgRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutImg1Ref = useRef<HTMLDivElement>(null);
  const aboutImg2Ref = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'description' | 'characteristics'>('description');

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
    if (aboutImg1Ref.current) {
      gsap.fromTo(
        aboutImg1Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(aboutImg1Ref.current, { x: 0, opacity: 1, duration: 1 });
            },
          },
        }
      );
    }

    if (aboutImg2Ref.current) {
      gsap.fromTo(
        aboutImg2Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(aboutImg2Ref.current, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
            },
          },
        }
      );
    }
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

  useEffect(() => {
    if (moreImgRef.current) {
      gsap.fromTo(
        moreImgRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: moreRef.current,
            start: "top center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(moreImgRef.current, { x: 0, opacity: 1, duration: 1 });
            },
          },
        }
      );
    }
  }, []);

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
        <div className={styles.about} ref={aboutRef}>
          <div className={styles.aboutAnimation}>
            <div className={styles.img1} ref={aboutImg1Ref}>
              <Image
                  src={`${basePath}/svg/mug-of-beer.svg`}
                  width={245}
                  height={364}
                  alt="Изображение кружки пива."
                />
            </div>
            <div className={styles.img2} ref={aboutImg2Ref}>
              <Image
                src={`${basePath}/svg/hops.svg`}
                width={220}
                height={266}
                alt="Изображение хмеля."
              />
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.bottleImg}>
              <Image
                src={`${basePath}/bottles/${product.image}.webp`}
                width={255}
                height={643}
                alt="Изображение пивной бутылки"
              />
            </div>
            <div className={styles.characteristics}>
              <h3 className={styles.title}>{product.type} {product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <h4 className={styles.strength}>
                Крепость: <span>{product.strength} %</span>
              </h4>
              <h4 className={styles.size}>
                Объем: <span>{product.size} л</span>
              </h4>
              <h4 className={styles.price}>
                {product.price} руб. <span>шт.</span>
              </h4>
              <ButtonBuy type="button" availability={product.availability} productKey={product.productKey} name={product.title} image={product.image} price={product.price} />
              </div>
            <div className={styles.wrapperForm}>
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
                {activeTab === 'description' && <WheatYellow />}
                Описание
                {activeTab === 'description' && <WheatYellow />}
              </Button>
              <Button
                className={styles.button}
                type={'button'}
                onClick={() => handleTabChange('characteristics')}
                disabled={activeTab === 'characteristics'}
              >
                {activeTab === 'characteristics' && <WheatYellow />}
                Характеристики
                {activeTab === 'characteristics' && <WheatYellow />}
              </Button>
            </div>
            <div className={styles.contents}>
              {activeTab === 'description' && (
                <div className={styles.content}>{product.text}</div>
              )}
              {activeTab === 'characteristics' && (
                <div className={styles.content}>
                  <ul className={styles.contentList}>
                    <li className={styles.contentItem}>Экстрактивность начального сусла: {product.wort}%</li>
                    <li className={styles.contentItem}>Объемная доля спирта: {product.strength}%</li>
                    <li className={styles.contentItem}>Состав: {product.composition}</li>
                    <li className={styles.contentItem}>Энергетическая ценность: {product.value}ккал</li>
                    <li className={styles.contentItem}>Продукт {product.gluten}</li>
                    <li className={styles.contentItem}>Объем: {product.size} л</li>
                    <li className={styles.contentItem}>Хранить в холодном сухом месте при температуре +5 - +20&apos;С.</li>
                    <li className={styles.contentItem}>Чрезмерное употребление алкогольной продукции вредит вашему здоровью.</li>
                    <li className={styles.contentItem}>Срок годности 9 месяцев.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.more} ref={moreRef}>
          <div className={styles.moreAnimation}>
            <div className={styles.img} ref={moreImgRef}>
              <Image
                src={`${basePath}/svg/glass-of-beer.svg`}
                width={224}
                height={342}
                alt="Изображение кружки пива."
              />
            </div>
          </div>
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
                      <SwiperSlide key={card.productKey} className={styles.swiperSlide}>
                        <Card
                          id={card.productKey}
                          key={card.productKey}
                          productKey={card.productKey}
                          image={card.image}
                          title={card.title}
                          strength={card.strength}
                          description={card.description}
                          price={card.price}
                          isNew={card.new}
                          isOnSale={card.discount}
                          availability={card.availability}
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
                      id={card.productKey}
                      key={card.productKey}
                      productKey={card.productKey}
                      image={card.image}
                      title={card.title}
                      strength={card.strength}
                      description={card.description}
                      price={card.price}
                      isNew={card.new}
                      isOnSale={card.discount}
                      availability={card.availability}
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
