import React, { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useApp } from "../../../../context/AppContext";
import { formatPrice } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

export const ProductsSection = (): JSX.Element => {
  const { state, actions } = useApp();
  const navigate = useNavigate();
  const { products, loading, error } = state;

  useEffect(() => {
    actions.loadProducts();
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

  if (loading.products) {
    return (
      <section className="w-full bg-white py-8 sm:py-12 lg:py-[56px]">
        <div className="container-responsive">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px]">
              Our Products
            </h2>
          </div>
          <div className="flex justify-center items-center h-32 sm:h-48 lg:h-64">
            <div className="text-base sm:text-lg text-gray-500">Loading products...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-8 sm:py-12 lg:py-[56px]">
        <div className="container-responsive">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px]">
              Our Products
            </h2>
          </div>
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

  // Show first 8 products for home page
  const displayProducts = products.slice(0, 8);

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-[56px]">
      <div className="container-responsive">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px]">
            Our Products
          </h2>
        </div>

        <div className="grid-responsive-products gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {displayProducts.filter(product => product && product._id).map((product) => (
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
                  
                  {/* Stock badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 flex flex-col gap-2">
                    {product.stock <= 5 && product.stock > 0 && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#e97171] rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[10px] sm:text-xs">
                          Low
                        </span>
                      </div>
                    )}
                    {product.stock === 0 && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-500 rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[10px] sm:text-xs">
                          Out
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 px-2">
                      <Button 
                        className="bg-white text-[#b88e2f] hover:bg-gray-100 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm lg:text-base px-4 sm:px-8 lg:px-12 py-2 sm:py-3 h-auto w-full max-w-[150px] sm:max-w-none"
                        onClick={(e) => handleAddToCart(e, product._id)}
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? 'Out of Stock' : 'Add to cart'}
                      </Button>
                      <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-5 text-white">
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm lg:text-base hover:text-gray-300">
                          Share
                        </button>
                        <button 
                          className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm lg:text-base hover:text-gray-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/comparison');
                          }}
                        >
                          Compare
                        </button>
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm lg:text-base hover:text-gray-300">
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-[#f4f5f7]">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-base sm:text-lg lg:text-2xl mb-1 sm:mb-2">
                    {product.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-[#898989] text-sm sm:text-base mb-1 sm:mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-lg sm:text-xl">
                      {formatPrice(product.price)}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#898989] text-xs sm:text-sm">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white [font-family:'Poppins',Helvetica] font-semibold text-sm sm:text-base px-6 sm:px-12 lg:px-[74px] py-2 sm:py-3 h-auto w-full sm:w-auto max-w-xs sm:max-w-none"
            onClick={() => navigate('/shop')}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};