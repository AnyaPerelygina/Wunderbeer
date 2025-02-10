export interface CardsProps {
  key: string;
  image: string;
  title: string;
  description: string;
  price: number;
  availability: boolean;
  discount: boolean;
  new: boolean;
  tags: string;
}

export type CatalogListProps = {
  filteredCards: CardsProps[];
}
