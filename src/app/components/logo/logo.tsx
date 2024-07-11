import { basePath } from "@/const";
import Image from "next/image";

export default function Logo() {
  return (
    <div className='logo'>
      <Image
        src={`${basePath}/logo.png`}
        width={94}
        height={111}
        alt="Логотип Wunderbeer."
      />
      <span>Wunderbeer</span>
    </div>
  )
}
