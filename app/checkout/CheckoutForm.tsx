// app/checkout/CheckoutForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';

export default function CheckoutForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address, cardNumber }),
      });

      if (!response.ok) throw new Error('Checkout failed!');

      alert('Checkout successful!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleCheckout}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Label htmlFor="address">Address</Label>
      <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <Label htmlFor="cardNumber">Card Number</Label>
      <Input id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <Button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Checkout"}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}