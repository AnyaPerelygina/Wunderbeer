import { basePath } from "@/const";
import Image from "next/image";

import { LogoProps } from "./logo.types";
import styles from './logo.module.scss';

export default function Logo({ className }: LogoProps) {
  return (
    <a className={`${styles.root} ${className}`} href="/home">
      <Image
        src={`${basePath}/logo/logo.webp`}
        width={94}
        height={111}
        alt="Логотип Wunderbeer."
      />
      <span>Wunderbeer</span>
    </a>
  );
}
