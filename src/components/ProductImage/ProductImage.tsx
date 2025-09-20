import React, { useState } from "react";
import { DEFAULT_PRODUCT_IMAGE, getValidImageUrl, getProductFallbackImage, getRandomSofaImage } from "../../utils/imageLibrary";

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  productId?: string;
  productName?: string;
}

// Default fallback image - a professional furniture placeholder
const DEFAULT_FALLBACK_IMAGE = DEFAULT_PRODUCT_IMAGE;

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc,
  productId,
  productName,
}) => {
  // Generate appropriate fallback image
  const defaultFallback = fallbackSrc || getProductFallbackImage(productId, productName) || DEFAULT_PRODUCT_IMAGE;
  
  // Validate and get the initial image URL
  const validatedSrc = getValidImageUrl(src, defaultFallback);
  
  const [currentSrc, setCurrentSrc] = useState(validatedSrc);
  const [hasErrored, setHasErrored] = useState(false);

  const handleImageError = () => {
    if (!hasErrored) {
      // Use sofa image as fallback for better visual appeal
      setCurrentSrc(defaultFallback);
      setHasErrored(true);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleImageError}
      loading="lazy"
    />
  );
};