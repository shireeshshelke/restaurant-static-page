/**
 * Get the correct image path accounting for basePath in production
 * Used for absolute image paths that Next.js doesn't automatically handle
 */
export function getImagePath(imagePath) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (basePath && imagePath.startsWith('/')) {
    return `${basePath}${imagePath}`;
  }
  return imagePath;
}
