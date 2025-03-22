export type Item = {
  productKey: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  productType: string;
  description: string;
  size: number;
}

export type CartContextType = {
  items: Item[];
  totalItems: number;
  addItem: (item: Omit<Item, "quantity">) => void;
  removeItem: (productKey: string) => void;
  removeItemCompletely: (productKey: string) => void;
  updateItemQuantity: (productKey: string, quantityChange: number) => void;
};
