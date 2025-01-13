"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../lib/types/product";
import { Button } from "../components/ui/Button"; // Adjust the path accordingly
import { ShoppingCart } from "lucide-react"; // Ensure this is imported

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    setAddSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: product.id, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      setAddSuccess(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white p-4">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={product.image_url}
          alt={product.name}
          layout="fill"
          objectFit="contain" // Ensures the image fits within the allocated space
          className="rounded-lg"
        />
      </div>

      {/* Product Info */}
      <h2 className="font-bold text-lg mt-3 text-gray-800">{product.name}</h2>
      <p className="text-blue-600 text-xl font-semibold">${product.price.toFixed(2)}</p>

      {/* Actions Section */}
      <div className="mt-4 space-y-3">
        {/* View Details Button */}
        <Link href={`/products/${product.id}`}>
          <Button size="sm" className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-md">
            View Details
          </Button>
        </Link>

        {/* Add to Cart Button */}
        <Button
          size="sm"
          onClick={handleAddToCart}
          disabled={isAdding || addSuccess}
          className={`w-full ${
            addSuccess ? "bg-green-500 hover:bg-green-600" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {isAdding ? (
            "Adding..."
          ) : addSuccess ? (
            "Added to Cart"
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
