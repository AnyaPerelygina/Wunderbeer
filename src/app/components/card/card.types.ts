export type CardProps = {
  key: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isNew?: boolean;
  isOnSale?: boolean;
  inStock: boolean;
};
