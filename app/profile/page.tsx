// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../auth/hooks/useAuth';
import { User } from '../../lib/types/user';

const ProfilePage = () => {
  const { isAuthenticated } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserData = async () => {
        try {
          const response = await fetch('http://localhost:5000/auth/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });

          if (!response.ok) throw new Error('Failed to fetch user data');

          const data = await response.json();
          setUser(data);
        } catch (err: any) {
          setError(err.message);
        }
      };
      fetchUserData();
    }
  }, [isAuthenticated]);

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div>
      <h1>Profile</h1>
      {error && <p className="text-red-500">{error}</p>}
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;