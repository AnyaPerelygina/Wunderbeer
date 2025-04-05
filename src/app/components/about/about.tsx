'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

import { basePath } from '@/const';

import Title from '@/ui/title/title';
import LinkNew from '@/ui/link/link';
import Icon from "@/ui/icon/icon";
import { Container } from '@/ui/container/container';

import Hops from '@/assets/hops.svg';
import MugOfBeer from '@/assets/mug-of-beer.svg';

import styles from './about.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutImg1Ref = useRef<HTMLDivElement>(null);
  const aboutImg2Ref = useRef<HTMLDivElement>(null);

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
            start: "center center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(aboutImg2Ref.current, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
            },
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.root} ref={aboutRef}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.motto}>
            <p>“Чудесное пиво, для замечательных людей”</p>
            <div className={styles.backgroundMotto}>
              <picture>
                <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/about/hop-parallax-mobile.webp, ${basePath}/about/hop-parallax-mobile@2x.webp 2x`} />
                <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/about/hop-parallax.webp, ${basePath}/about/hop-parallax@2x.webp 2x`} />
                <Image
                  src={`${basePath}/about/hop-parallax.png`}
                  width={1920}
                  height={260}
                  alt="Изображение хмеля."
                />
              </picture>
            </div>
          </div>
          <div className={styles.animation}>
            <div className={styles.img1} ref={aboutImg1Ref}>
              <Icon path={MugOfBeer} width={240} height={420} />
            </div>
            <div className={styles.img2} ref={aboutImg2Ref}>
              <Icon path={Hops} width={205} height={354} />
            </div>
          </div>
          <div className={styles.text}>
            <Title className={styles.title} iconColor="green" title="О компании" />
            <p>Приветствуем на&nbsp;официальном сайте компании «Вундербир» – опытного и&nbsp;квалифицированного производителя и&nbsp;поставщика вкусного, качественного пива! В&nbsp;ассортименте в&nbsp;большом разнообразии представлены хмельные напитки собственного изготовления, а&nbsp;также от&nbsp;проверенных и&nbsp;надёжных партнёров – приобрести пиво оптом Москве и&nbsp;Московской области можно на&nbsp;выгодных условиях, а&nbsp;главное, будучи уверенным в&nbsp;отличных вкусовых характеристиках!</p>
            <LinkNew className={styles.btn} href={'/about-us'}>Подробнее</LinkNew>
          </div>
          <div className={styles.img}>
            <Image
              src={`${basePath}/about/men-drink-beer@2x.webp`}
              width={994}
              height={611}
              alt="Мужчина пьет пиво."
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
