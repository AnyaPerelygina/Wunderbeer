export type CardProps = {
  id: string;
  productKey: string;
  image: string;
  title: string;
  description: string;
  strength: number;
  price: number;
  isNew?: boolean;
  isOnSale?: boolean;
  availability: boolean;
  text?: string;
};
