import Link from "next/link";

import Icon from "@/ui/icon/icon";

import styles from './mouse-button.module.scss';

import Mouse from '@/assets/mouse.svg';
import ArrowLong from '@/assets/arrow-long.svg';

export default function MouseButton() {
  return (
    <Link className={styles.mouseButton} href={'#footer'}>
      <span>Пролистать вниз</span>
      <Icon path={Mouse} width={21} height={38} />
      <Icon path={ArrowLong} width={8} height={29} />
    </Link>
  )
}
