import { basePath } from "@/const";
import Image from "next/image";
import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="sitemap">
      <Image
        src={`${basePath}/logo/logo.png`}
        width={50}
        height={50}
        alt="Логотип Wunderbeer."
      />
      <br /><br />
      <Link href={'/main-page'}>1. Главная</Link>
      {/* <br /><br />
      <Link href={'/catalog'}>2. Каталог</Link> */}
    </div>
  )
}
