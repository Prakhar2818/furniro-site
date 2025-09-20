import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { XIcon } from "lucide-react";
import { Product } from "../../types";
import { useApp } from "../../context/AppContext";
import { PRODUCT_IMAGES } from "../../utils/imageLibrary";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  mode: 'create' | 'edit';
}

const DEFAULT_IMAGES = [...PRODUCT_IMAGES];

const BRANDS = [
  "IKEA", "Ashley", "Wayfair", "West Elm", "Pottery Barn",
  "Crate & Barrel", "CB2", "Room & Board", "Article", "Floyd",
  "Herman Miller", "Steelcase", "Knoll", "Humanscale", "Haworth"
];

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  mode
}) => {
  const { actions } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    brand: '',
    stock: 0,
    image: DEFAULT_IMAGES[0],
  });

  // Initialize form data when product or mode changes
  useEffect(() => {
    if (mode === 'edit' && product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || 0,
        brand: product.brand || '',
        stock: product.stock || 0,
        image: product.image || DEFAULT_IMAGES[0],
      });
    } else if (mode === 'create') {
      setFormData({
        name: '',
        description: '',
        price: 0,
        brand: '',
        stock: 0,
        image: DEFAULT_IMAGES[0],
      });
    }
    setErrors({});
  }, [mode, product, isOpen]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (!formData.brand.trim()) {
      newErrors.brand = 'Brand is required';
    }

    if (formData.stock < 0) {
      newErrors.stock = 'Stock cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      if (mode === 'create') {
        await actions.createProduct(formData);
      } else if (mode === 'edit' && product) {
        await actions.updateProduct(product._id, formData);
      }
      
      onClose();
    } catch (error) {
      console.error('Failed to save product:', error);
      setErrors({ submit: 'Failed to save product. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Simple Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Simple Modal */}
        <Card 
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-lg border rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900">
              {mode === 'create' ? 'Add Product' : 'Edit Product'}
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              disabled={isLoading}
              className="h-8 w-8 hover:bg-gray-100"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Product Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter product name"
                  className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Enter product description"
                  rows={3}
                  className={`mt-1 ${errors.description ? 'border-red-500' : ''}`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              {/* Price and Stock */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                    Price ($) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    className={`mt-1 ${errors.price ? 'border-red-500' : ''}`}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="stock" className="text-sm font-medium text-gray-700">
                    Stock Quantity *
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => handleInputChange('stock', parseInt(e.target.value) || 0)}
                    placeholder="0"
                    className={`mt-1 ${errors.stock ? 'border-red-500' : ''}`}
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-sm mt-1">{errors.stock}</p>
                  )}
                </div>
              </div>

              {/* Brand */}
              <div>
                <Label htmlFor="brand" className="text-sm font-medium text-gray-700">
                  Brand *
                </Label>
                <select
                  id="brand"
                  value={formData.brand}
                  onChange={(e) => handleInputChange('brand', e.target.value)}
                  className={`mt-1 h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#b88e2f] focus:outline-none focus:ring-1 focus:ring-[#b88e2f] ${errors.brand ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a brand</option>
                  {BRANDS.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                {errors.brand && (
                  <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
                )}
              </div>

              {/* Image Selection */}
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Product Image
                </Label>
                <div className="mt-2 grid grid-cols-4 gap-3">
                  {DEFAULT_IMAGES.map((imageUrl, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleInputChange('image', imageUrl)}
                      className={`aspect-square rounded-md border-2 overflow-hidden transition-colors ${
                        formData.image === imageUrl 
                          ? 'border-[#b88e2f]' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={imageUrl}
                        alt={`Product option ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                {formData.image && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-md border">
                    <p className="text-sm text-gray-600 mb-2">Selected Image:</p>
                    <img
                      src={formData.image}
                      alt="Selected product"
                      className="w-16 h-16 object-cover rounded border"
                    />
                  </div>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <p className="text-red-600 text-sm">{errors.submit}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#b88e2f] hover:bg-[#a67d28] text-white"
                >
                  {isLoading ? 'Saving...' : (mode === 'create' ? 'Add Product' : 'Update Product')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};