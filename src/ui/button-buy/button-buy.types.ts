export type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  availability: boolean;
  disabled?: boolean;
};
