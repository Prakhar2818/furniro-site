import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, FrontendCartItem, ProductFilters, ProductsResponse } from '../types';
import { apiService } from '../services/api';
import { convertToFrontendCartItem, getCartId, setCartId } from '../utils';
import { toast } from '../hooks/use-toast';

// State interface
interface AppState {
  products: Product[];
  cartItems: FrontendCartItem[];
  cartId: string | null;
  filters: ProductFilters;
  pagination: {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
  };
  loading: {
    products: boolean;
    cart: boolean;
  };
  error: string | null;
}

// Action types
type AppAction =
  | { type: 'SET_PRODUCTS_DATA'; payload: ProductsResponse }
  | { type: 'SET_CART_ITEMS'; payload: FrontendCartItem[] }
  | { type: 'SET_CART_ID'; payload: string }
  | { type: 'SET_FILTERS'; payload: Partial<ProductFilters> }
  | { type: 'RESET_FILTERS' }
  | { type: 'SET_LOADING'; payload: { type: 'products' | 'cart'; loading: boolean } }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_TO_CART'; payload: FrontendCartItem }
  | { type: 'UPDATE_CART_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string };

// Initial state
const initialState: AppState = {
  products: [],
  cartItems: [],
  cartId: null,
  filters: {
    page: 1,
    limit: 12,
    sortBy: 'name',
    sortOrder: 'asc',
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 12,
    totalItems: 0,
  },
  loading: {
    products: false,
    cart: false,
  },
  error: null,
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PRODUCTS_DATA':
      return {
        ...state,
        products: action.payload.products,
        pagination: action.payload.pagination,
      };
    case 'SET_CART_ITEMS':
      return { ...state, cartItems: action.payload };
    case 'SET_CART_ID':
      return { ...state, cartId: action.payload };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    case 'RESET_FILTERS':
      return {
        ...state,
        filters: {
          page: 1,
          limit: 12,
          sortBy: 'name',
          sortOrder: 'asc',
        },
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: { ...state.loading, [action.payload.type]: action.payload.loading },
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload),
      };
    default:
      return state;
  }
};

// Context interface
interface AppContextType {
  state: AppState;
  actions: {
    loadProducts: (filters?: ProductFilters) => Promise<void>;
    setFilters: (filters: Partial<ProductFilters>) => void;
    resetFilters: () => void;
    loadCart: () => Promise<void>;
    addToCart: (product: Product, quantity?: number) => Promise<void>;
    updateCartItemQuantity: (productId: string, quantity: number) => Promise<void>;
    removeFromCart: (productId: string) => Promise<void>;
    createProduct: (product: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
    updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    clearError: () => void;
  };
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Initialize cart ID from localStorage
  useEffect(() => {
    const savedCartId = getCartId();
    if (savedCartId) {
      dispatch({ type: 'SET_CART_ID', payload: savedCartId });
    }
  }, []);

  // Load products with filters
  const loadProducts = async (filters?: ProductFilters) => {
    dispatch({ type: 'SET_LOADING', payload: { type: 'products', loading: true } });
    dispatch({ type: 'SET_ERROR', payload: null });
    
    const finalFilters = filters || state.filters;
    
    try {
      const response = await apiService.getAllProducts(finalFilters);
      dispatch({ type: 'SET_PRODUCTS_DATA', payload: response });
      
      // Update filters to match what was actually used
      dispatch({ type: 'SET_FILTERS', payload: finalFilters });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to load products' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { type: 'products', loading: false } });
    }
  };

  // Set filters and reload products
  const setFilters = (filters: Partial<ProductFilters>) => {
    // Always reset to page 1 when changing any filters except for direct page changes
    const newFilters = { ...state.filters, ...filters };
    loadProducts(newFilters);
  };

  // Reset filters to default
  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
    loadProducts({
      page: 1,
      limit: 12,
      sortBy: 'name',
      sortOrder: 'asc',
    });
  };

  // Load cart
  const loadCart = async () => {
    if (!state.cartId) return;
    
    dispatch({ type: 'SET_LOADING', payload: { type: 'cart', loading: true } });
    dispatch({ type: 'SET_ERROR', payload: null });
    
    try {
      const cart = await apiService.getCart(state.cartId);
      const frontendCartItems = cart.items
        .map(convertToFrontendCartItem)
        .filter((item): item is FrontendCartItem => item !== null);
      dispatch({ type: 'SET_CART_ITEMS', payload: frontendCartItems });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to load cart' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { type: 'cart', loading: false } });
    }
  };

  // Add to cart
  const addToCart = async (product: Product, quantity: number = 1) => {
    // Validate product before adding to cart
    if (!product || !product._id) {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid product data' });
      return;
    }
    
    try {
      let cartId = state.cartId;
      
      // Create cart if it doesn't exist
      if (!cartId) {
        const newCart = await apiService.createCart();
        cartId = newCart._id;
        dispatch({ type: 'SET_CART_ID', payload: cartId });
        setCartId(cartId);
      }
      
      await apiService.addItemToCart(cartId, product._id, quantity);
      
      // Update local state
      const frontendCartItem: FrontendCartItem = {
        id: product._id,
        name: product.name || 'Unknown Product',
        price: product.price || 0,
        quantity,
        image: product.image || '',
      };
      
      dispatch({ type: 'ADD_TO_CART', payload: frontendCartItem });
      
      // Show success toast notification
      toast({
        variant: 'success',
        title: 'Added to cart!',
        description: `${product.name} has been added to your cart.`,
      });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to add to cart' });
    }
  };

  // Update cart item quantity
  const updateCartItemQuantity = async (productId: string, quantity: number) => {
    if (!state.cartId) return;
    
    try {
      await apiService.updateItemQuantity(state.cartId, productId, quantity);
      dispatch({ type: 'UPDATE_CART_ITEM', payload: { id: productId, quantity } });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to update cart' });
    }
  };

  // Remove from cart
  const removeFromCart = async (productId: string) => {
    if (!state.cartId) return;
    
    try {
      await apiService.removeItemFromCart(state.cartId, productId);
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to remove from cart' });
    }
  };

  // Create new product
  const createProduct = async (productData: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newProduct = await apiService.createProduct(productData);
      dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to create product' });
      throw error;
    }
  };

  // Update existing product
  const updateProduct = async (id: string, productData: Partial<Product>) => {
    try {
      const updatedProduct = await apiService.updateProduct(id, productData);
      dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to update product' });
      throw error;
    }
  };

  // Delete product
  const deleteProduct = async (id: string) => {
    try {
      await apiService.deleteProduct(id);
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to delete product' });
      throw error;
    }
  };

  // Set current page and reload products
  const setCurrentPage = (page: number) => {
    const newFilters = { ...state.filters, page };
    loadProducts(newFilters);
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  const contextValue: AppContextType = {
    state,
    actions: {
      loadProducts,
      setFilters,
      resetFilters,
      loadCart,
      addToCart,
      updateCartItemQuantity,
      removeFromCart,
      createProduct,
      updateProduct,
      deleteProduct,
      clearError,
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Hook to use context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};