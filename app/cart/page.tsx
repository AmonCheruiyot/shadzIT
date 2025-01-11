// app/cart/page.tsx
'use client';

import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Product } from '../../lib/types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedItems);
  }, []);

  const removeFromCart = (id: number) => {
    const newCart = cartItems.filter(item => item.product.id !== id);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.product.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ))
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;