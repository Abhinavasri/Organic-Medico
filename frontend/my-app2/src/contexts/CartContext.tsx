// /contexts/CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import { products } from '@/Products/data';
import { strict } from 'assert';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
  vendor: Vendor;
}
export interface SavedItem {
  id: string;
  name: string;
  price: string;
  image: string;
  vendor: Vendor;
}
export interface Vendor { 
  id: string;
  name: string;
  location: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  saveItem: () => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  saveForLater: (id: string) => void;  
  removeFromSaved: (id: string) => void;
  moveToCart: (id: string) => void;
  savedItems: SavedItem[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const loadFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

const saveToLocalStorage = (key: string, data: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};


export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = loadFromLocalStorage('cart');
    return savedCart.length > 0
      ? savedCart.map((item: CartItem) => {
          const product = products.find((p) => p.id === item.id);
          const vendor = product ? product.vendor : { id: "", name: "Unknown Vendor", location: "" };
          return {
            ...item,
            vendor,  
          };
        })
      : products.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          vendor: product.vendor,  
        }));
  });
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => loadFromLocalStorage('savedItems'));
  

  useEffect(() => {
    saveToLocalStorage('cart', cart);
  }, [cart]);

  useEffect(() => {
    saveToLocalStorage('savedItems', savedItems);
  }, [savedItems]);

  const addToCart = (item: CartItem) => {
    console.log('Adding to cart:', item);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [
          ...prevCart,
          {
            ...item,
            quantity: 1,
            vendor: item.vendor || { id: "", name: "", location: "" }, 
          },
        ];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    saveToLocalStorage('cart', []); 
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const saveForLater = (id: string) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
      setSavedItems((prevSavedItems) => [...prevSavedItems, item]); // Add to savedItems
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id)); // Remove from cart
    }
  };
  

  const removeFromSaved = (id: string) => {
    setSavedItems((prevSaved) => prevSaved.filter((item) => item.id !== id));
  };

  const moveToCart = (id: string) => {
    setSavedItems((prevSaved) => {
      const itemToMove = prevSaved.find((item) => item.id === id);
      if (itemToMove) {
        addToCart({ ...itemToMove, quantity: 1 });
      }
      return prevSaved.filter((item) => item.id !== id);
    });
  };

    return (
    <CartContext.Provider
      value={{
        cart,
        savedItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemQuantity,
        saveForLater,
        removeFromSaved,
        moveToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

