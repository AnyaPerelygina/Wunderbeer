'use client';

import gsap from "gsap";

import { Container } from "../container/container";
import Image from "next/image";
import Title from '@/ui/title/title';
import styles from './assortment.module.scss';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { basePath } from "@/const";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Assortment() {
  const AssortmentList = [
    {
      link: 'beers.svg',
      width: 115,
      height: 129,
      alt: 'Изображение пивных кружек.',
      text: 'Пиво',
    },
    {
      link: 'beer.svg',
      width: 77,
      height: 133,
      alt: 'Изображение пивной кружки.',
      text: 'Пивные напитки',
    },
    {
      link: 'cider.svg',
      width: 99,
      height: 135,
      alt: 'Изображение сидра.',
      text: 'Сидр',
    },
    {
      link: 'beer-bottle-and-glass.svg',
      width: 120,
      height: 129,
      alt: 'Изображение кваса.',
      text: 'Квас',
    },
    {
      link: 'lemonade.svg',
      width: 100,
      height: 143,
      alt: 'Изображение лимонада.',
      text: 'Лимонад',
    }
  ];

  const assortmentRef = useRef<HTMLDivElement>(null);
  const assortmentImg1Ref = useRef<HTMLDivElement>(null);
  const assortmentImg2Ref = useRef<HTMLDivElement>(null);
  const assortmentImg3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (assortmentImg1Ref.current) {
      gsap.fromTo(
        assortmentImg1Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: assortmentRef.current,
            start: "top center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(assortmentImg1Ref.current, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
            },
          },
        }
      );
    }

    if (assortmentImg2Ref.current) {
      gsap.fromTo(
        assortmentImg2Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: assortmentRef.current,
            start: "top center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(assortmentImg2Ref.current, { x: 0, opacity: 1, duration: 1 });
            },
          },
        }
      );
    }
    if (assortmentImg3Ref.current) {
      gsap.fromTo(
        assortmentImg3Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: assortmentRef.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.root} ref={assortmentRef}>
      <Container className={styles.container}>
        <div className={styles.backgroundImg}>
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/assortment/wood-mobile.webp, ${basePath}/assortment/wood-mobile@2x.webp 2x`} />
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/wood.webp, ${basePath}/assortment/wood@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/wood-mobile.png`}
              width={1920}
              height={604}
              alt="Изображение древесной доски."
            />
          </picture>
        </div>
        <Title image="wheat-yellow" title="Наш ассортимент"/>
        <ul className={styles.list}>
          {AssortmentList.map((img) => (
            <li className={styles.item} key={img.link}>
              <Image
                src={`${basePath}/svg/${img.link}`}
                width={img.width}
                height={img.height}
                alt={img.alt}
              />
              <span>{img.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.img1} ref={assortmentImg1Ref}>
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/leaf.webp, ${basePath}/assortment/leaf@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/leaf.png`}
              width={516}
              height={458}
              alt="Изображение колосьев хмеля."
            />
          </picture>
        </div>
        <div className={styles.img2} ref={assortmentImg2Ref}>
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/wheat.webp, ${basePath}/assortment/wheat@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/wheat.png`}
              width={516}
              height={458}
              alt="Изображение колосьев пшеницы."
            />
          </picture>
        </div>
        <div className={styles.img3} ref={assortmentImg3Ref}>
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/beer.webp, ${basePath}/assortment/beer@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/beer.png`}
              width={585}
              height={541}
              alt="Изображение кружки пива."
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}
