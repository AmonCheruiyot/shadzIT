// lib/api.ts
import { Product } from './types/product';

const BASE_URL = 'http://localhost:5000'; // Change to your backend API URL.

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Product not found');
  return response.json();
}