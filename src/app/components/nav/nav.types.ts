export type NavProps = {
  onLinkClick: () => void;
  navLinks: { label: string; url: string }[];
  className?: string;
};
