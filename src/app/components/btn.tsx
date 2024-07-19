import Link from "next/link";

type LinkProps = {
  onLinkClick?: () => void;
  className?: string;
  href: string;
  children: React.ReactNode;
};

export default function Button({ onLinkClick, className, href, children }: LinkProps) {
  return (
    <Link className={className} href={href} onClick={onLinkClick}>
      {children}
    </Link>
  );
}
