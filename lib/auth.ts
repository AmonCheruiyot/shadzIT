// lib/auth.ts
export const isAuthenticated = (): boolean => {
    return Boolean(localStorage.getItem('token'));
  };
  
  export const logout = (): void => {
    localStorage.removeItem('token');
  };