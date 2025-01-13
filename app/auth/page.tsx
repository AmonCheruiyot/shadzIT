'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/Card';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000'; // Adjust this as needed

const AuthPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Capture the previous URL
  const previousUrl = typeof window !== "undefined" ? document.referrer : "";

  const storeToken = (token: string) => {
    localStorage.setItem('accessToken', token);
    sessionStorage.setItem('accessToken', token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const url = isLogin ? `${API_URL}/auth/login` : `${API_URL}/auth/register`;
    const payload = isLogin ? { username, password } : { username, email, password };

    try {
      const response = await axios.post(url, payload);

      if (response.status === 200) {
        if (isLogin) {
          const { token } = response.data;
          storeToken(token);
          alert('Login successful!');
          router.push(previousUrl || '/'); // Redirect to the previous page, or home if not available
        } else {
          alert('Registration successful!');
          router.push(previousUrl || '/auth/login'); // Redirect to previous page or to login
        }
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || 'Something went wrong. Please try again!';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-12 shadow-lg border border-gray-200 rounded-lg animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          {isLogin ? 'Login' : 'Register'}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {isLogin
            ? 'Welcome back! Please login to your account.'
            : 'Create a new account to get started.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded-md text-sm mb-4">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username" className="text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="mt-1"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required={!isLogin}
                disabled={isLogin}
                className="mt-1"
              />
            </div>
          )}
          <div className="mb-4">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          variant="link"
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 hover:underline mt-2"
        >
          {isLogin
            ? 'Need an account? Register'
            : 'Already have an account? Login'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthPage;