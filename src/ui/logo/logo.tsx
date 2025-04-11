import Image from "next/image";
import Link from "next/link";

import { basePath } from "@/const";

import { LogoProps } from "./logo.types";
import styles from './logo.module.scss';

export default function Logo({ onLinkClick, className }: LogoProps) {
  return (
    <Link
      className={`${styles.root} ${className}`}
      href={'/home'}
      onClick={() => {
        onLinkClick?.()
    }}>
      <Image
        src={`${basePath}/logo/logo.webp`}
        width={94}
        height={111}
        alt="Логотип Wunderbeer."
      />
      <span>Wunderbeer</span>
    </Link>
  );
}
