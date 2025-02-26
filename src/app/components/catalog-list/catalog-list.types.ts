export interface CardProps {
  key: string;
  image: string;
  title: string;
  description: string;
  strength: number;
  size: number;
  price: number;
  availability: boolean;
  discount: boolean;
  new: boolean;
  tags: string;
}

export type CatalogListProps = {
  filteredCards: CardProps[];
}
