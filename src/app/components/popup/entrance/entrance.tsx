'use client'

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { gsap } from 'gsap';

import styles from './entrance.module.scss';

import Button from '@/ui/button/button';
import { basePath } from "@/const";

export default function EntrancePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('scroll-lock');
      gsap.fromTo(popupRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    } else {
      document.body.classList.remove('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isVisible]);

  useEffect(() => {
    const hasConfirmedAge = localStorage.getItem('ageConfirmed');
    if (!hasConfirmedAge) {
      setIsVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('ageConfirmed', 'true');

    gsap.to(popupRef.current, { opacity: 0, scale: 0.5, duration: 0.5 });
    gsap.to(overlayRef.current, { opacity: 0, duration: 1 });

    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  const handleDeny = () => {
    window.location.href = 'https://google.com';
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay}`} ref={overlayRef}>
      <div className={styles.popup} ref={popupRef}>
        <h2 className={styles.popupTitle}>Вам точно 18 лет?</h2>
        <p>Добро пожаловать на наш сайт Wunderbeer. Для доступа необходимо подтвердить совершеннолетний возраст.</p>
        <p>Сайт содержит информацию для лиц совершеннолетнего возраста. Сведения, размещенные на сайте, не являются рекламой, носят исключительно информационный характер, и предназначены только для личного использования.</p>
        <div className={styles.buttons}>
          <Button className={styles.buttonYes} type={'button'} onClick={handleConfirm}>Мне исполнилось 18 лет</Button>
          <Button className={styles.buttonNo} type={'button'} onClick={handleDeny}>Мне еще нет 18</Button>
        </div>
        <div className={styles.images}>
          <div className={styles.image1}>
            <Image
              src={`${basePath}/svg/popup/wheat-popup.svg`}
              width={77}
              height={120}
              alt={'.'}
            />
          </div>
          <div className={styles.image2}>
            <Image
              src={`${basePath}/svg/popup/glass-of-beer-popup.svg`}
              width={124}
              height={200}
              alt={'.'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
