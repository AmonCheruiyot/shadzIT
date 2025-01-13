import ProductCard from './ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our wide range of tech products including laptops, smartphones, and accessories.',
};

// Fetch products from the API
const fetchProducts = async () => {
  const response = await fetch('http://localhost:5000/products/');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export default async function Products() {
  const products = await fetchProducts(); // Fetch the product data

  return (
    <div className="animate-fade-in p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: { id: number; name: string; price: number; description: string; stock: number; image_url: string; }) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}