"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  image_url: string;
}

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    setAddSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: product.id, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      setAddSuccess(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8">
      <div className="md:w-1/2">
        <Image
          src={product.image_url}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg shadow"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews || 0} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">In stock: {product.stock}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <Button size="lg" onClick={handleAddToCart} disabled={isAdding || addSuccess}>
            {isAdding
              ? 'Adding...'
              : addSuccess
              ? 'Added to Cart'
              : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </>
            )}
          </Button>
          <Button size="lg" variant="outline">Buy Now</Button>
        </div>
        {addSuccess && (
          <p className="text-green-600 mt-2">Product added to cart successfully!</p>
        )}
      </div>
    </div>
  );
}