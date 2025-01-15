export type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
};
