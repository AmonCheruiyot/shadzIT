// app/auth/register.tsx
'use client';

import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) throw new Error('Registration failed!');

      alert('Registration successful! You can log in now.');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Label htmlFor="username">Username</Label>
      <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Label htmlFor="email">Email</Label>
      <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}