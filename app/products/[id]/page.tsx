// app/products/[id]/page.tsx

"use client"; // Add this line at the top to mark this component as a client component

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import { fetchProduct } from '../../../lib/api';
import { Product } from '../../../lib/types/product';

interface Params {
  id: string;
}

const ProductDetailPage = ({ params }: { params: Params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProduct(params.id);
        setProduct(data);
      } catch (err: any) { // Type the caught error as 'any'
        setError('Product not found');
        console.error(err); // Log the error for debugging purposes
      }
    })();
  }, [params.id]);

  if (error) {
    return <div>Error: {error}</div>; // Display the error if it exists
  }

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Description: {product.description}</p>
      <Image 
        src={product.image_url} 
        alt={product.name} 
        width={500} // Replace with appropriate values
        height={300} // Replace with appropriate values
        priority // Set priority if this is a significant image
      />
    </div>
  );
};

export default ProductDetailPage;