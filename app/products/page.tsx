// app/products/page.tsx
'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../lib/api';
import { Product } from '../../lib/types/product';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err: unknown) { // Use unknown instead of any
        setError('Failed to fetch products');
        console.error(err); // Log the error for debugging
      }
    })();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;