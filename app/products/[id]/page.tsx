import ProductDetailsClient from './ProductDetailsClient';
import { Metadata } from 'next';

const fetchProduct = async (id: string) => {
  const response = await fetch(`http://localhost:5000/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id: ${id}`);
  }
  return response.json();
};

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  return {
    title: product.name,
    description: `${product.name} - ${product.description.slice(0, 160)}...`,
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id); // Fetch product data on the server
  return <ProductDetailsClient product={product} />;
}