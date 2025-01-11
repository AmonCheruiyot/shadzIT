// lib/cart.ts
import { Product } from './types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

export const addToCart = (cart: CartItem[], newItem: CartItem) => {
  const existingItem = cart.find(item => item.product.id === newItem.product.id);
  if (existingItem) {
    existingItem.quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (cart: CartItem[], productId: number) => {
  const newCart = cart.filter(item => item.product.id !== productId);
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

export const getCart = (): CartItem[] => {
  const storedItems = localStorage.getItem('cart');
  return storedItems ? JSON.parse(storedItems) : [];
};