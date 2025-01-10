'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { basePath } from '@/const';
import Image from 'next/image';

import Title from '@/ui/title/title';

import { Container } from '../container/container';

import styles from './news.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function News() {
  const NewsList = [
    {
      link: 'news-1.webp',
      alt: 'Изображение пивного крана и кружки пива.',
      newsTitle: 'Откройте для себя наше крафтовое пиво.',
      text: 'При покупки 3-х бутылок нашего крафтого пива 1 бутылка в подарок.',
    },
    {
      link: 'news-2.webp',
      alt: 'Изображение кружки пива на столе.',
      newsTitle: 'Откройте для себя наше крафтовое пиво.',
      text: 'При покупки 3-х бутылок нашего крафтого пива 1 бутылка в подарок.',
    },
    {
      link: 'news-3.webp',
      alt: 'Изображение бутылок пива.',
      newsTitle: 'Откройте для себя наше крафтовое пиво.',
      text: 'При покупки 3-х бутылок нашего крафтого пива 1 бутылка в подарок.',
    }
  ];

  const newsRef = useRef<HTMLDivElement>(null);
  const newsImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (newsImgRef.current) {
      gsap.fromTo(
        newsImgRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: newsRef.current,
            start: "top center",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(newsImgRef.current, { x: 0, opacity: 1, duration: 1 });
            },
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.root} ref={newsRef}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Title className={styles.title} image="wheat-yellow" title="Новости"/>
          <ul className={styles.list}>
            {NewsList.map((img) => (
              <li className={styles.item} key={img.link}>
                <Image
                  src={`${basePath}/news/${img.link}`}
                  width={350}
                  height={236}
                  alt={img.alt}
                />
                <h3>{img.newsTitle}</h3>
                <p>{img.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.animation}>
            <div className={styles.img} ref={newsImgRef}>
              <Image
                src={`${basePath}/svg/glass-of-beer.svg`}
                width={224}
                height={342}
                alt="Изображение кружки пива."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
