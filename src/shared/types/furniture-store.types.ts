// API Types
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  brand: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  _id: string;
  items: CartItem[];
  createdAt: string;
}

// Frontend Types
export interface FrontendCartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ProductsResponse {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface ProductFilters {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'price' | 'brand' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  brand?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface ProductStats {
  totalProducts: number;
  avgPrice: number;
  minPrice: number;
  maxPrice: number;
  brands: string[];
}

// API Error Class
export class ApiError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}