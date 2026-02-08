/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Set basePath for subdirectory deployment on GitHub Pages
  basePath: '/restaurant-static-page',
  
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
