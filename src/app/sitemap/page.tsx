import { basePath } from "@/const";
import Image from "next/image";
import Link from "next/link";

import styles from './sitemap.module.scss';

export default function Sitemap() {
  return (
    <div className={styles.sitemap}>
      <div className={styles.logo}>
        <Image
          src={`${basePath}/logo/logo.webp`}
          width={94}
          height={111}
          alt="Логотип Wunderbeer."
        />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={'/home'}>Главная;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/catalog'}>Каталог;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/distribution'}>Дистрибуция;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/equipment-of-shops'}>Комплектация магазинов;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/about-us'}>О компании;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/contacts'}>Контакты;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/privacy-policy'}>Политика конфиденциальности;</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/error'}>Ошибка загрузки страницы;</Link>
        </li>
      </ul>
    </div>
  )
}
