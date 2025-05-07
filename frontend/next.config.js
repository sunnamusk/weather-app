/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true, 
    images: {
      domains: ['openweathermap.org'],
    },
    env: {
      BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8000/api',
    },
  };
  
  module.exports = nextConfig;