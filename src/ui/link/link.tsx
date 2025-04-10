import Link from "next/link";

import { LinkProps } from './link.types';
import styles from './link.module.scss';

export default function LinkNew({ className, href, children }: LinkProps) {
  return (
    <Link className={`${styles.linkNew} ${className}`} href={href} target={'_blank'}>
      {children}
    </Link>
  );
}
