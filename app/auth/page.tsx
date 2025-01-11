// app/auth/page.tsx
'use client';

import Link from 'next/link';

const AuthPage = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Site</h1>
      <p>Please log in or register to continue.</p>
      <div className="flex space-x-4">
        <Link href="/auth/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </Link>
        <Link href="/auth/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;