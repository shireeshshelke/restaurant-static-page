/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Optional: Set basePath if deploying to a subdirectory
  // basePath: '/repository-name',
  
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
