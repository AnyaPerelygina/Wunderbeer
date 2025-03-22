export type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  availability: boolean;
  disabled?: boolean;
  productKey: string;
  productType: string;
  name: string;
  price: number;
  image: string;
  size: number;
  description: string;
};
