/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export only for production builds (GitHub Pages)
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // Set basePath only for production builds (GitHub Pages subdirectory)
  basePath: process.env.NODE_ENV === 'production' ? '/restaurant-static-page' : '',
  
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
