import Image from "next/image";
import { basePath } from "@/const";

export default function Assortment() {
  const AssortmentList = [
    {
      link: 'beers.svg',
      width: 115,
      height: 129,
      alt: 'Изображение пивных кружек.',
      text: 'Пиво',
    },
    {
      link: 'beer.svg',
      width: 77,
      height: 133,
      alt: 'Изображение пивной кружки.',
      text: 'Пивные напитки',
    },
    {
      link: 'cider.svg',
      width: 99,
      height: 135,
      alt: 'Изображение сидра.',
      text: 'Сидр',
    },
    {
      link: 'beer-bottle-and-glass.svg',
      width: 120,
      height: 129,
      alt: 'Изображение кваса.',
      text: 'Квас',
    },
    {
      link: 'lemonade.svg',
      width: 100,
      height: 143,
      alt: 'Изображение лимонада.',
      text: 'Лимонад',
    }
  ]

  return (
    <section className="assortment">
      <div className="container">
        <div className="assortment__background-img">
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/assortment/wood-mobile.webp, ${basePath}/assortment/wood-mobile@2x.webp 2x`} />
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/wood.webp, ${basePath}/assortment/wood@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/wood-mobile.png`}
              width={1920}
              height={604}
              alt="Изображение древесной доски."
            />
          </picture>
        </div>
        <div className="assortment__titleWrapper">
          <Image
            src={`${basePath}/svg/wheat-yellow.svg`}
            width={47}
            height={18}
            alt="Изображение колосьев."
          />
          <Image
            src={`${basePath}/svg/wheat-yellow.svg`}
            width={47}
            height={18}
            alt="Изображение колосьев."
          />
          <h2 className="assortment__title title">Наш ассортимент</h2>
        </div>
        <ul className="assortment__list">
          {AssortmentList.map((img) => (
            <li className="assortment__item" key={img.link}>
              <Image
                src={`${basePath}/svg/${img.link}`}
                width={img.width}
                height={img.height}
                alt={img.alt}
              />
              <span>{img.text}</span>
            </li>
          ))}
        </ul>
        <div className="assortment__img1">
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/assortment/leaf-mobile.webp, ${basePath}/assortment/leaf-mobile@2x.webp 2x`} />
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/leaf.webp, ${basePath}/assortment/leaf@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/leaf.png`}
              width={516}
              height={458}
              alt="Изображение колосьев хмеля."
            />
          </picture>
        </div>
        <div className="assortment__img2">
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/assortment/wheat-mobile.webp, ${basePath}/assortment/wheat-mobile@2x.webp 2x`} />
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/wheat.webp, ${basePath}/assortment/wheat@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/wheat.png`}
              width={516}
              height={458}
              alt="Изображение колосьев пшеницы."
            />
          </picture>
        </div>
        <div className="assortment__img3">
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={`${basePath}/assortment/beer-mobile.webp, ${basePath}/assortment/beer-mobile@2x.webp 2x`} />
            <source type="image/webp" media="(min-width: 768px)" srcSet={`${basePath}/assortment/beer.webp, ${basePath}/assortment/beer@2x.webp 2x`} />
            <Image
              src={`${basePath}/assortment/beer.png`}
              width={585}
              height={541}
              alt="Изображение кружки пива."
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
