import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Icon from '@/ui/icon/icon';

import styles from './form-done.module.scss';

import WheatPopup from '@/assets/popup/wheat-popup.svg';
import GlassOfBeerPopup from '@/assets/popup/glass-of-beer-popup.svg';

export default function FormDonePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    if (isVisible) {
      document.body.classList.add('scroll-lock');
      gsap.fromTo(popupRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });

      setTimeout(() => {
        gsap.to(popupRef.current, { opacity: 0, scale: 0.5, duration: 1 });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
        setTimeout(() => setIsVisible(false), 1000);
      }, 3000);
    } else {
      document.body.classList.remove('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay}`} ref={overlayRef}>
      <div className={styles.popup} ref={popupRef}>
        <span>Ваш заказ отправлен!</span>
        <div className={styles.images}>
          <div className={styles.image1}>
            <Icon path={WheatPopup} width={77} height={120} />
          </div>
          <div className={styles.image2}>
            <Icon path={GlassOfBeerPopup} width={124} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
