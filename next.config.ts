import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode
  experimental: {
    appDir: true, // Enable the app directory structure (if using Next.js 13 or later)
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow images from any HTTPS domain
      },
      {
        protocol: 'http',
        hostname: '**', // Allow images from any HTTP domain
      },
    ],
  },
  i18n: {
    locales: ['en-US', 'fr', 'de'], // Your supported locales
    defaultLocale: 'en-US', // The default locale
  },
  publicRuntimeConfig: {
    // Define runtime configuration accessible on client side
    myPublicApiKey: process.env.MY_PUBLIC_API_KEY,
  },
  env: {
    // Define environment variables to be used in both client and server
    MY_API_URL: process.env.MY_API_URL,
  },
  trailingSlash: true, // Controls whether to add a trailing slash to routes
  // Additional configurations can be included as needed
};

export default nextConfig;