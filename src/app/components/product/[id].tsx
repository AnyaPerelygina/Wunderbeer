import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/const";

import FormForQuestions from "../forms/form-for-questions/form-for-questions";
import { Container } from "@/app/components/container/container";
import Button from "@/ui/button/button";
import Icon from "@/ui/icon/icon";
import Card from "../card/card";
import Arrow from "@/assets/arrow-long-black.svg";

import styles from "./product.module.scss";

import mockCatalogCards from "@/app/data/data";

export default function Product({ params }: { params: { id: string } }) {
  const product = mockCatalogCards.find((card) => card.key === params.id);

  if (!product) return <p>Товар не найден</p>;

  const availableCards = mockCatalogCards
    .filter((card) => card.availability)
    .slice(0, 4);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Link href="/catalog" className={styles.linkReturn}>
          <Icon Icon={Arrow} width={44} height={8} />
          Вернуться в каталог
        </Link>
        <div className={styles.about}>
          <Image
            src={`${basePath}/bottles/${product.image}.webp`}
            width={244}
            height={643}
            alt="Изображение пивной бутылки"
          />
          <div className={styles.aboutWrapper}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <h4 className={styles.strength}>
              Крепость: <span>{product.strength} %</span>
            </h4>
            <h4 className={styles.size}>
              Объем: <span>{product.size} л</span>
            </h4>
            <h4 className={styles.price}>
              {product.price} руб. <span>/шт.</span>
            </h4>
            <Button type="button" disabled={!product.availability}>
              {product.availability ? "Купить" : "Нет в наличии"}
            </Button>
          </div>
        </div>
        <div className={styles.wrapperForm}>
          <div className={styles.background}>
            <Image
              src={`${basePath}/delivery/background-hops-mini.webp`}
              width={255}
              height={364}
              alt="Фоновое изображение."
            />
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
          <h3 className={styles.subtitle}>
            Вам понравится
          </h3>
          <div className={styles.moreWrapper}>
            {availableCards.map((card) => (
              <Card
                id={card.key}
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
  );
}
