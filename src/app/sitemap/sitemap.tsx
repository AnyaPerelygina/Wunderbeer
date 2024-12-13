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
      <Link href={'/home'}>1. Главная</Link>
    </div>
  )
}
