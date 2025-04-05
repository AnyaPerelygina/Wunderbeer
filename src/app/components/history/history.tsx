import { basePath } from '@/const';
import Image from 'next/image';

import { Container } from '@/ui/container/container';

import styles from './history.module.scss';

export default function History() {
  return (
    <section className={styles.root}>
      <div className={styles.background}>
        <picture>
          <source type="image/webp" media="(min-width: 320px)" srcSet={`${basePath}/background-img/paper-background.webp, ${basePath}/background-img/paper-background@2x.webp 2x`} />
          <Image
            src={`${basePath}/background-img/paper-background@2x.png`}
            width={1920}
            height={604}
            alt="Фоновое изображение."
          />
        </picture>
      </div>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Наша&nbsp;история</h2>
          <div className={styles.img}>
            <Image
              src={`${basePath}/about/beer-in-hands.webp`}
              width={540}
              height={323}
              alt="Кружки пива в руках."
            />
          </div>
          <div className={styles.text}>
            <h3 className={styles.subtitle}>1883&nbsp;г.</h3>
            <p>Удивительная история старой пивной бутылки нашла отражение в&nbsp;подвалах старой пивоварни. Путем сложного научного процесса ученым из&nbsp;исследовательской лаборатории удалось вырастить и&nbsp;очистить оригинальные дрожжи 1883&nbsp;года из&nbsp;бутылки. Теперь&nbsp;пиво переваривают, и&nbsp;дрожжи дали пиву название:&nbsp;1883.</p>
            <p>Пиво медного цвета с&nbsp;компактной головкой. У&nbsp;него&nbsp;уникальный и&nbsp;отчетливый вкус, чистый и&nbsp;свежий аромат с&nbsp;тонкими нотками солода и&nbsp;карамели.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
