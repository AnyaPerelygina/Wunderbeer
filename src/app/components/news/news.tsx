'use client';

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { basePath } from '@/const';
import Image from 'next/image';

import Title from '@/ui/title/title';
import Button from "@/ui/button/button";

import { Container } from '../container/container';

import styles from './news.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function News() {
  const NewsList = [
    {
      link: 'news-1.webp',
      alt: 'Изображение пивного крана и кружки пива.',
      newsTitle: 'Откройте для себя наше крафтовое пиво.',
      text: 'При покупки 3-х бутылок нашего крафтового пива 1 бутылка в подарок.',
    },
    {
      link: 'news-2.webp',
      alt: 'Изображение кружки пива на столе.',
      newsTitle: 'Откройте для себя наше крафтовое пиво.',
      text: 'При покупки 3-х бутылок нашего крафтового пива 1 бутылка в подарок.',
    },
    {
      link: 'news-3.webp',
      alt: 'Изображение бутылок пива.',
      newsTitle: 'Откройте для себя наше крафтовое пиво.',
      text: 'При покупки 3-х бутылок нашего крафтового пива 1 бутылка в подарок.',
    }
  ];

  const [visibleNewsCount, setVisibleNewsCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleNewsCount(3);
    } else {
      setVisibleNewsCount((prevCount) => prevCount + 3);
    }
    setIsExpanded(!isExpanded && visibleNewsCount + 3 >= NewsList.length);
  };

  return (
    <section className={styles.root} ref={newsRef}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Title className={styles.title} image="wheat-yellow" title="Новости" />
          <ul className={styles.list}>
            {NewsList.slice(0, visibleNewsCount).map((img) => (
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
          {visibleNewsCount < NewsList.length || isExpanded ? (
            <Button
              className={styles.showMoreButton}
              onClick={handleShowMore}
            >
              {isExpanded ? "Показать меньше" : "Показать ещё"}
            </Button>
          ) : null}
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
  );
}
