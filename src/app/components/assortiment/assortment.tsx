'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { basePath } from "@/const";
import { Container } from "@/ui/container/container";
import Title from '@/ui/title/title';
import Icon from '@/ui/icon/icon';

import Beers from '@/assets/beers.svg';
import Beer from '@/assets/beer.svg';
import Cider  from '@/assets/cider.svg';
import BeerBottleAndGlass from '@/assets/beer-bottle-and-glass.svg';
import Lemonade from '@/assets/lemonade.svg';

import styles from './assortment.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Assortment() {
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
              src={`${basePath}/assortment/wood-mobile@2x.png`}
              width={1920}
              height={604}
              alt="Изображение древесной доски."
            />
          </picture>
        </div>
        <Title iconColor="yellow" title="Наш ассортимент"/>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Icon path={Beers} />
            <span>Пиво</span>
          </li>
          <li className={styles.item}>
            <Icon path={Beer} />
            <span>Пивные напитки</span>
          </li>
          <li className={styles.item}>
            <Icon path={Cider} />
            <span>Сидр</span>
          </li>
          <li className={styles.item}>
            <Icon path={BeerBottleAndGlass} />
            <span>Квас</span>
          </li>
          <li className={styles.item}>
            <Icon path={Lemonade} />
            <span>Лимонад</span>
          </li>
        </ul>
        <div className={styles.img1} ref={assortmentImg1Ref}>
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/leaf.webp, ${basePath}/assortment/leaf@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/leaf@2x.png`}
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
              src={`${basePath}/assortment/wheat@2x.png`}
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
              src={`${basePath}/assortment/beer@2x.png`}
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
