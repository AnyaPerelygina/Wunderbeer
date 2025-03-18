export interface CardsProps {
  productKey: string;
  type: string;
  image: string;
  title: string;
  description: string;
  strength: number;
  wort: number;
  composition: string;
  value: number;
  gluten: string;
  size: number;
  price: number;
  availability: boolean;
  discount: boolean;
  new: boolean;
  tags: string;
  text: string;
}

export type CatalogListProps = {
  filteredCards: CardsProps[];
}
