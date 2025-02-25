import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/const";
import { Container } from "../container/container";
import FormForQuestions from '../forms/form-for-questions/form-for-questions';
import Button from '@/ui/button/button';
import Card from '@/app/components/card/card';

import styles from './product.module.scss';

import mockCatalogCards from '@/app/data/data';

export default function Product() {
  const availableCards = mockCatalogCards
    .filter((card) => card.availability)
    .slice(0, 4);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Link href={'/catalog'} target="_self">Вернуться в каталог</Link>
        <div className={styles.about}>
          <div className={styles.aboutWrapper}>
            <Image
              src={`${basePath}/bottles/${image}.webp`}
              width={244}
              height={643}
              alt={'Изображение пивной бутылки.'}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <h4 className={styles.strength}>Крепость
              <span>{strength} %</span>
            </h4>
            <h4 className={styles.size}>Объем
              <span>{size} л</span>
            </h4>
            <h4 className={styles.price}>{price} руб.
              <span>/шт.</span>
            </h4>
            <Button
              className={styles.button}
              type={'button'}
              disabled={!inStock}>{inStock ? 'Купить' : 'Нет в наличии'}
            </Button>
          </div>
          <FormForQuestions />
        </div>
        <div className={styles.info}>
          <div className={styles.infoWrapper}>
            <div className={styles.controls}>
              <Button className={styles.button} type={'button'}>Описание</Button>
              <Button className={styles.button} type={'button'}>Характеристики</Button>
            </div>
            <div className={styles.contents}>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
            </div>
          </div>
        </div>
        <div className={styles.more}>
          <h3 className={styles.subtitle}>Вам понравится</h3>
          <div className={styles.moreWrapper}>
            {availableCards.map((card) => (
              <Card
                key={card.key}
                image={card.image}
                title={card.title}
                description={card.description}
                price={card.price}
                inStock={card.availability}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
