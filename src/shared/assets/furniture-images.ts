// Centralized image library for the furniture e-commerce website
// All images are sourced from high-quality stock photo providers

export interface ImageConfig {
  url: string;
  alt: string;
  category?: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

// Hero section and banner images
export const HERO_IMAGES = {
  main: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1440&h=716&q=80",
  bedroom: "https://images.unsplash.com/photo-1631079084326-01e8e12a13b2?auto=format&fit=crop&w=1440&h=716&q=80",
  living_room: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1440&h=716&q=80",
} as const;

// Product category images
export const CATEGORY_IMAGES = {
  dining: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=381&h=480&q=80",
  living: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=381&h=480&q=80",
  bedroom: "https://images.unsplash.com/photo-1540518614846-7eded47ee1af?auto=format&fit=crop&w=381&h=480&q=80",
} as const;

// Product images - furniture items
export const PRODUCT_IMAGES: string[] = [
  // Sofas and Seating
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=285&h=301&q=80", // Modern sofa
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=285&h=301&q=80", // Grey sofa
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=285&h=301&q=80", // Sectional sofa
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=285&h=301&q=80", // Leather chair
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=285&h=301&q=80", // Armchair
  
  // Tables and Surfaces
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=285&h=301&q=80", // Dining table
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=285&h=301&q=80", // Coffee table
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=285&h=301&q=80", // Side table
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=285&h=301&q=80", // Desk
  
  // Bedroom Furniture
  "https://images.unsplash.com/photo-1540518614846-7eded47ee1af?auto=format&fit=crop&w=285&h=301&q=80", // Modern bedroom
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=285&h=301&q=80", // Bed frame
  "https://images.unsplash.com/photo-1560185127-6ed8b80901b6?auto=format&fit=crop&w=285&h=301&q=80", // Nightstand
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=285&h=301&q=80", // Bedroom decor
  "https://images.unsplash.com/photo-1631079084326-01e8e12a13b2?auto=format&fit=crop&w=285&h=301&q=80", // Dresser
  
  // Storage and Organization
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=285&h=301&q=80", // Bookshelf
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=285&h=301&q=80", // Wardrobe
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=285&h=301&q=80", // Cabinet
] as const;

// Gallery images for the furniture showcase section
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=274&h=382&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=451&h=312&q=80",
  "https://images.unsplash.com/photo-1631079084326-01e8e12a13b2?auto=format&fit=crop&w=295&h=392&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=290&h=348&q=80",
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=425&h=433&q=80",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=381&h=323&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=344&h=242&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=178&h=242&q=80",
  "https://images.unsplash.com/photo-1631079084326-01e8e12a13b2?auto=format&fit=crop&w=258&h=196&q=80",
] as const;

// Blog and content images
export const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=817&h=500&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=817&h=500&q=80",
  "https://images.unsplash.com/photo-1631079084326-01e8e12a13b2?auto=format&fit=crop&w=817&h=500&q=80",
] as const;

// Small thumbnail images for blog sidebar
export const BLOG_THUMBNAILS = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1631079084326-01e8e12a13b2?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=80&h=80&q=80",
] as const;

// Inspiration section images
export const INSPIRATION_IMAGES = {
  main: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=404&h=582&q=80",
  secondary: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=372&h=486&q=80",
} as const;

// Product detail images
export const PRODUCT_DETAIL_IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=605&h=348&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=605&h=348&q=80",
] as const;

// Team member images (professional headshots)
export const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b510?auto=format&fit=crop&w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
] as const;

// About page content images
export const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&h=400&q=80",
] as const;

// Product comparison images
export const COMPARISON_IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=280&h=177&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=280&h=177&q=80",
] as const;

// Default fallback image for products - Beautiful modern sofa
export const DEFAULT_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&h=300&q=80";

// Sofa-specific fallback images for better product representation
export const SOFA_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&h=300&q=80", // Modern grey sofa
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=300&q=80", // Elegant sofa
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&h=300&q=80", // Sectional sofa
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=400&h=300&q=80", // Luxury leather sofa
  "https://images.unsplash.com/photo-1493663284031-b7e3aaa4b7bb?auto=format&fit=crop&w=400&h=300&q=80", // Contemporary sofa
] as const;

// Utility functions
export const getRandomProductImage = (): string => {
  const randomIndex = Math.floor(Math.random() * PRODUCT_IMAGES.length);
  return PRODUCT_IMAGES[randomIndex];
};

export const getRandomSofaImage = (): string => {
  const randomIndex = Math.floor(Math.random() * SOFA_FALLBACK_IMAGES.length);
  return SOFA_FALLBACK_IMAGES[randomIndex];
};

export const getProductImageByIndex = (index: number): string => {
  return PRODUCT_IMAGES[index % PRODUCT_IMAGES.length];
};

export const getGalleryImageByIndex = (index: number): string => {
  return GALLERY_IMAGES[index % GALLERY_IMAGES.length];
};

export const getBlogThumbnailByIndex = (index: number): string => {
  return BLOG_THUMBNAILS[index % BLOG_THUMBNAILS.length];
};

export const getBlogImageByIndex = (index: number): string => {
  return BLOG_IMAGES[index % BLOG_IMAGES.length];
};

export const getTeamImageByIndex = (index: number): string => {
  return TEAM_IMAGES[index % TEAM_IMAGES.length];
};

// Generate fallback image for products based on product ID or name
export const getProductFallbackImage = (productId?: string, productName?: string): string => {
  if (productId) {
    // Use product ID to generate consistent sofa fallback image
    const hash = productId.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    const index = Math.abs(hash) % SOFA_FALLBACK_IMAGES.length;
    return SOFA_FALLBACK_IMAGES[index];
  }
  
  if (productName) {
    // Use product name to generate consistent sofa fallback image
    const hash = productName.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    const index = Math.abs(hash) % SOFA_FALLBACK_IMAGES.length;
    return SOFA_FALLBACK_IMAGES[index];
  }
  
  // Default fallback - beautiful sofa image
  return DEFAULT_PRODUCT_IMAGE;
};

// Validate and provide fallback for any image URL
export const getValidImageUrl = (imageUrl?: string, fallbackUrl?: string): string => {
  // If no image URL provided, use fallback
  if (!imageUrl || imageUrl.trim() === '') {
    return fallbackUrl || DEFAULT_PRODUCT_IMAGE;
  }
  
  // If URL seems invalid, use fallback
  if (!imageUrl.startsWith('http') && !imageUrl.startsWith('/')) {
    return fallbackUrl || DEFAULT_PRODUCT_IMAGE;
  }
  
  return imageUrl;
};

// Image categories for easier management
export const IMAGE_CATEGORIES = {
  hero: HERO_IMAGES,
  category: CATEGORY_IMAGES,
  product: PRODUCT_IMAGES,
  gallery: GALLERY_IMAGES,
  blog: BLOG_IMAGES,
  blogThumbnails: BLOG_THUMBNAILS,
  inspiration: INSPIRATION_IMAGES,
  productDetails: PRODUCT_DETAIL_IMAGES,
  team: TEAM_IMAGES,
  about: ABOUT_IMAGES,
  comparison: COMPARISON_IMAGES,
} as const;