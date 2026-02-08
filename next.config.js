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

  // Expose basePath to client-side code
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/restaurant-static-page' : '',
  },
};

module.exports = nextConfig;
