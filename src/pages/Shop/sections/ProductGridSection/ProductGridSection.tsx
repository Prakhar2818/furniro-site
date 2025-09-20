import React, { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useApp } from "../../../../context/AppContext";
import { formatPrice } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";
import { EditIcon, TrashIcon } from "lucide-react";
import { Product } from "../../../../types";

interface ProductGridSectionProps {
  onEditProduct?: (product: Product) => void;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({ onEditProduct }) => {
  const { state, actions } = useApp();
  const navigate = useNavigate();
  const { products, loading, error } = state;

  useEffect(() => {
    if (products.length === 0) {
      actions.loadProducts();
    }
  }, []);

  const handleAddToCart = async (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    const product = products.find(p => p && p._id === productId);
    if (product && product._id) {
      await actions.addToCart(product);
    } else {
      console.error('Product not found or invalid:', productId);
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleEditProduct = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (onEditProduct) {
      onEditProduct(product);
    }
  };

  const handleDeleteProduct = async (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await actions.deleteProduct(productId);
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  if (loading.products) {
    return (
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="container-responsive">
          <div className="flex justify-center items-center h-32 sm:h-48 lg:h-64">
            <div className="text-base sm:text-lg text-gray-500">Loading products...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="container-responsive">
          <div className="flex justify-center items-center h-32 sm:h-48 lg:h-64">
            <div className="text-center">
              <div className="text-base sm:text-lg text-red-500 mb-4">Error loading products: {error}</div>
              <Button onClick={() => actions.loadProducts()}>Try Again</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="container-responsive">
        <div className="grid-responsive-products gap-4 sm:gap-6">
          {products.filter(product => product && product._id).map((product) => (
            <Card
              key={product._id}
              className="group relative bg-[#f4f5f7] border-0 shadow-none overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleProductClick(product._id)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 lg:h-[301px] object-cover group-hover:scale-105 transition-transform duration-300"
                    productId={product._id}
                    productName={product.name}
                  />
                  
                  {/* Stock badges */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col gap-2">
                    {product.stock <= 5 && product.stock > 0 && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e97171] rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[10px] sm:text-xs">
                          Low
                        </span>
                      </div>
                    )}
                    {product.stock === 0 && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-500 rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[10px] sm:text-xs">
                          Out
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Admin action buttons */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-white/90 hover:bg-white"
                      onClick={(e) => handleEditProduct(e, product)}
                    >
                      <EditIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500/90 hover:bg-red-600"
                      onClick={(e) => handleDeleteProduct(e, product._id)}
                    >
                      <TrashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-3 sm:space-y-4 px-2">
                      <Button 
                        className="bg-white text-[#b88e2f] hover:bg-gray-100 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm px-4 sm:px-8 py-2 h-auto w-full max-w-[120px] sm:max-w-none"
                        onClick={(e) => handleAddToCart(e, product._id)}
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? 'Out of Stock' : 'Add to cart'}
                      </Button>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 text-white">
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm hover:text-gray-300">
                          Share
                        </button>
                        <button 
                          className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm hover:text-gray-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/comparison');
                          }}
                        >
                          Compare
                        </button>
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm hover:text-gray-300">
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-[#f4f5f7]">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-base sm:text-lg lg:text-xl mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-[#898989] text-sm mb-1 line-clamp-2">
                    {product.brand}
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#898989] text-xs mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-base sm:text-lg">
                      {formatPrice(product.price)}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#898989] text-xs">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {products.length === 0 && !loading.products && (
          <div className="text-center py-12 sm:py-16">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">Try adjusting your filters or search terms</p>
            <Button onClick={() => actions.resetFilters()}>Reset Filters</Button>
          </div>
        )}
      </div>
    </section>
  );
};