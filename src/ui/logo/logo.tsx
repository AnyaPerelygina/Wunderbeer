import { basePath } from "@/shared/const";
import Image from "next/image";

import { LogoProps } from "./logo.types";
import styles from './logo.module.scss';

export default function Logo({ className }: LogoProps) {
  return (
    <a className={`${styles.logo} ${className}`} href="/">
      <Image
        src={`${basePath}/images/logo/logo.webp`}
        width={94}
        height={111}
        alt="Логотип Wunderbeer."
      />
      <span>Wunderbeer</span>
    </a>
  );
}
