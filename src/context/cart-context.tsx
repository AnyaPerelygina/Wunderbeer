import { createContext, useContext, useState, ReactNode } from "react";

import { CartContextType, Item } from './cart-context.types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const addItem = (item: Omit<Item, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.productKey === item.productKey);
      return existingItem
        ? prevItems.map((i) =>
            i.productKey === item.productKey ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (productKey: string) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productKey === productKey ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateItemQuantity = (productKey: string, quantityChange: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productKey === productKey
          ? { ...item, quantity: item.quantity + quantityChange }
          : item
      )
    );
  };

  const removeItemCompletely = (productKey: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.productKey !== productKey));
  };

  return (
    <CartContext.Provider value={{ items, totalItems, addItem, removeItem, removeItemCompletely, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
