import { basePath } from "@/const";
import Image from "next/image";
import Link from "next/link";

import styles from './sitemap.module.scss';

export default function Sitemap() {
  return (
    <div className={styles.sitemap}>
      <Image
        src={`${basePath}/logo/logo.webp`}
        width={94}
        height={111}
        alt="Логотип Wunderbeer."
      />
      <br /><br />
      <Link href={'/home'}>1. Главная;</Link>
      <Link href={'/error'}>2. Ошибка загрузки страницы;</Link>
      <Link href={'/privacy-policy'}>3. Политика конфиденциальности;</Link>
      <Link href={'/contacts'}>4. Контакты;</Link>
      <Link href={'/about-us'}>5. О компании;</Link>
      <Link href={'/equipment-of-shops'}>6. Комплектация магазинов;</Link>
    </div>
  )
}
