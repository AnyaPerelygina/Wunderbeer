import { basePath } from "@/const";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src={`${basePath}/logo/logo.png`}
        width={94}
        height={111}
        alt="Логотип Wunderbeer."
      />
      <span>Wunderbeer</span>
    </div>
  );
}
