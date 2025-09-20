import { Product, CartItem, FrontendCartItem } from '../types';

// Convert backend cart item to frontend format
export const convertToFrontendCartItem = (cartItem: CartItem): FrontendCartItem | null => {
  // Check if product exists and has required properties
  if (!cartItem.product || !cartItem.product._id) {
    console.warn('Cart item has null or invalid product:', cartItem);
    return null;
  }
  
  return {
    id: cartItem.product._id,
    name: cartItem.product.name || 'Unknown Product',
    price: cartItem.product.price || 0,
    quantity: cartItem.quantity || 1,
    image: cartItem.product.image || '',
  };
};

// Format price to Rupiah
export const formatPrice = (price: number): string => {
  return `Rs. ${price.toLocaleString()}`;
};

// Calculate cart total
export const calculateCartTotal = (items: FrontendCartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Local storage helpers for cart ID
export const getCartId = (): string | null => {
  return localStorage.getItem('cartId');
};

export const setCartId = (cartId: string): void => {
  localStorage.setItem('cartId', cartId);
};

export const removeCartId = (): void => {
  localStorage.removeItem('cartId');
};