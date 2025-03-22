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

  return (
    <CartContext.Provider value={{ items, totalItems, addItem, removeItem }}>
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


// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [items, setItems] = useState<
//     { productKey: string; name: string; price: number; image: string; quantity: number }[]
//   >([]);

//   const totalItems = items.reduce((total, item) => total + item.quantity, 0);

//   const addItem = (item: { productKey: string; name: string; price: number, image: string; }) => {
//     setItems((prevItems) => {
//       console.log('Добавляем товар:', item);
//       const existingItem = prevItems.find((i) => i.productKey === item.productKey);
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.productKey === item.productKey
//             ? { ...i, quantity: i.quantity + 1 }
//             : i
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   const removeItem = (productKey:string) => {
//     setItems((prevItems) =>
//       prevItems
//         .map((item) =>
//           item.productKey === productKey ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ items, totalItems, addItem, removeItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }
