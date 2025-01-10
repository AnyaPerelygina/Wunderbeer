'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { basePath } from '@/const';
import Image from 'next/image';

import Title from '@/ui/title/title';
import LinkNew from '@/ui/link/link';

import { Container } from '../container/container';

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
              <Image
                  src={`${basePath}/svg/mug-of-beer.svg`}
                  width={242}
                  height={420}
                  alt="Изображение кружки пива."
                />
            </div>
            <div className={styles.img2} ref={aboutImg2Ref}>
              <Image
                src={`${basePath}/svg/hops.svg`}
                width={205}
                height={354}
                alt="Изображение хмеля."
              />
            </div>
          </div>
          <div className={styles.text}>
            <Title className={styles.title} image="wheat-green" title="О компании"/>
            <p>Приветствуем на&nbsp;официальном сайте компании «Вундербир» – опытного и&nbsp;квалифицированного производителя и&nbsp;поставщика вкусного, качественного пива! В&nbsp;ассортименте в&nbsp;большом разнообразии представлены хмельные напитки собственного изготовления, а&nbsp;также от&nbsp;проверенных и&nbsp;надёжных партнёров – приобрести пиво оптом Москве и&nbsp;Московской области можно на&nbsp;выгодных условиях, а&nbsp;главное, будучи уверенным в&nbsp;отличных вкусовых характеристиках!</p>
            <LinkNew className={styles.btn} href={'/about'}>Подробнее</LinkNew>
          </div>
          <div className={styles.img}>
            <Image
              src={`${basePath}/about/men-drink-beer.png`}
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
