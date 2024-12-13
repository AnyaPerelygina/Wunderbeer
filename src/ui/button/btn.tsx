import Link from "next/link";

import { LinkProps } from './btn.types';
import styles from './btn.module.scss';

export default function Button({ onLinkClick, className, href, children }: LinkProps) {
  return (
    <Link className={`${styles.btn} ${className}`} href={href} onClick={onLinkClick}>
      {children}
    </Link>
  );
}
