export type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  availability: boolean;
  disabled?: boolean;
  productKey: string;
  name: string;
  price: number;
  image: string;
};
