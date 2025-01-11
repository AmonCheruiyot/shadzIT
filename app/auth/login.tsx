// app/auth/login.tsx
'use client';

import { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';

export default function LoginPage() {
  const { login, error, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="username">Username</Label>
      <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}