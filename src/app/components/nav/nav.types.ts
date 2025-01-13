export type NavProps = {
  onLinkClick: () => void;
  navLinks: { label: string; href: string }[];
  className?: string;
};
