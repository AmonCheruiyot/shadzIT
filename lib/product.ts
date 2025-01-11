// lib/product.ts
import { Product } from './types/product';

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

// Example function that could be expanded in the future
export const sortProductsByPrice = (products: Product[], ascending: boolean = true): Product[] => {
  return products.sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
};