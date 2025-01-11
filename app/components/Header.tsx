'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated auth state

  const handleLogout = () => {
    // Handle logout logic (e.g., clear token, redirect, etc.)
    setIsAuthenticated(false);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            shadzIT
          </Link>
          <div className="flex-grow mx-4">
            <form className="flex" onSubmit={(e) => { e.preventDefault(); /* Handle search */ }}>
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full max-w-md"
              />
              <Button type="submit" className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/" className={pathname === '/' ? 'text-blue-400' : 'hover:text-blue-400 transition-colors'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={pathname === '/products' ? 'text-blue-400' : 'hover:text-blue-400 transition-colors'}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className={pathname === '/cart' ? 'text-blue-400' : 'hover:text-blue-400 transition-colors'}>
                  <ShoppingCart className="inline-block" />
                </Link>
              </li>
              <li>
                <Link href="/profile" className={pathname === '/profile' ? 'text-blue-400' : 'hover:text-blue-400 transition-colors'}>
                  <User className="inline-block" />
                </Link>
              </li>
              {/* Conditional rendering based on authentication state */}
              {isAuthenticated ? (
                <li>
                  <Button variant="outline" onClick={handleLogout} className="text-white hover:text-blue-400">
                    Logout
                  </Button>
                </li>
              ) : (
                <li>
                  <Link href="/auth">
                    <Button variant="outline" className="text-white hover:text-blue-400">
                      Sign Up / Login
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;