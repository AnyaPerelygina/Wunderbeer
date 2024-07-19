import { basePath } from "@/const";

import Link from "next/link";
import Image from "next/image";

export default function MouseButton() {
  return (
    <Link className={'mouse-button'} href={'#footer'}>
      <span>Пролистать вниз</span>
      <Image
        src={`${basePath}/svg/mouse.svg`}
        width={21}
        height={38}
        alt={'Изображение компьютерной мыши.'}
      />
      <Image
        src={`${basePath}/svg/arrow-long.svg`}
        width={8}
        height={29}
        alt={'Изображение стрелки вниз.'}
      />
    </Link>
  )
}
