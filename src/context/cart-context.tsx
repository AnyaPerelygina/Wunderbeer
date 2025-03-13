import { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
  totalItems: number;
  addItem: () => void;
  removeItem: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [totalItems, setTotalItems] = useState(0);

  const addItem = () => setTotalItems((prev) => prev + 1);
  const removeItem = () => setTotalItems((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <CartContext.Provider value={{ totalItems, addItem, removeItem }}>
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
