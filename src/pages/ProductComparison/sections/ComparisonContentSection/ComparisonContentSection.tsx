import { StarIcon, XIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { COMPARISON_IMAGES } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";
import { apiService } from "../../../../services/api";
import { Product } from "../../../../types";
import { useApp } from "../../../../context/AppContext";
import { formatPrice } from "../../../../utils";

interface ComparisonContentSectionProps {
  productIds?: string;
}

// Default product data structure for comparison features
const getProductSpecs = (product: Product, index: number) => {
  const defaultSpecs = [
    ["1 sectional sofa", "1 Three Seater, 2 Single Seater", "1 Modern Chair"],
    ["TFCBLIGRBL6SRHS", "DTUBLIGRBL568", "MC789DEF"],
    ["Solid Wood", "Solid Wood", "Metal Frame"],
    ["L-shaped", "U-shaped", "Single"],
    ["Fabric + Cotton", "Leather", "Fabric"],
    ["Bright Grey & Lion", "Dark Brown", "Navy Blue"],
  ];
  
  const defaultDimensions = [
    ["Foam", "Matte", "Memory Foam"],
    ["Bright Grey & Lion", "Dark Walnut", "Modern Black"],
    ["No", "Yes", "No"],
    ["280 KG", "300 KG", "150 KG"],
    ["India", "India", "China"],
  ];
  
  const defaultWarranty = [
    ["1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty", "2 Year Warranty"],
    ["Email: operations@furniture.com", "Email: support@xyz.com", "Email: help@furniture.com"],
    ["Manufacturing Defect", "Limited manufacturing defects", "Full Coverage"],
    ["Usage beyond intended use", "Wear & tear in natural course", "Accidental damage"],
    ["1 Year", "3 Months", "2 Years"],
  ];
  
  return {
    specs: defaultSpecs.map(values => values[index] || values[0]),
    dimensions: defaultDimensions.map(values => values[index] || values[0]),
    warranty: defaultWarranty.map(values => values[index] || values[0]),
  };
};

const specifications = [
  { label: "Sales Package" },
  { label: "Model Number" },
  { label: "Secondary Material" },
  { label: "Configuration" },
  { label: "Upholstery Material" },
  { label: "Upholstery Color" },
];

const dimensions = [
  { label: "Filling Material" },
  { label: "Finish Type" },
  { label: "Adjustable Headrest" },
  { label: "Maximum Load Capacity" },
  { label: "Origin of Manufacture" },
];

const warranty = [
  { label: "Warranty Summary" },
  { label: "Warranty Service Type" },
  { label: "Covered in Warranty" },
  { label: "Not Covered in Warranty" },
  { label: "Domestic Warranty" },
];

export const ComparisonContentSection = ({ productIds }: ComparisonContentSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const { actions } = useApp();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showProductSelector, setShowProductSelector] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Load all products for selection
        const allProductsResponse = await apiService.getAllProducts({ limit: 100 });
        setAllProducts(allProductsResponse.products);
        
        if (productIds) {
          // Parse comma-separated product IDs from URL
          const ids = productIds.split(',').filter(Boolean);
          if (ids.length > 0) {
            const productPromises = ids.map(async (id) => {
              try {
                return await apiService.getProductById(id.trim());
              } catch (err) {
                console.error(`Failed to load product ${id}:`, err);
                return null;
              }
            });
            const loadedProducts = await Promise.all(productPromises);
            setProducts(loadedProducts.filter((p): p is Product => p !== null));
          } else {
            // Load default products if no valid IDs
            const defaultProducts = allProductsResponse.products.slice(0, 2);
            setProducts(defaultProducts);
          }
        } else {
          // Load default products
          const defaultProducts = allProductsResponse.products.slice(0, 2);
          setProducts(defaultProducts);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [productIds]);

  const handleAddToCart = async (product: Product) => {
    await actions.addToCart(product, 1);
  };

  const handleRemoveProduct = (productId: string) => {
    const remainingProducts = products.filter(p => p._id !== productId);
    setProducts(remainingProducts);
    
    // Update URL
    const newIds = remainingProducts.map(p => p._id).join(',');
    if (newIds) {
      navigate(`/comparison/${newIds}`, { replace: true });
    } else {
      navigate('/comparison', { replace: true });
    }
  };

  const handleAddProduct = (product: Product) => {
    if (products.length < 3 && !products.find(p => p._id === product._id)) {
      const newProducts = [...products, product];
      setProducts(newProducts);
      
      // Update URL
      const newIds = newProducts.map(p => p._id).join(',');
      navigate(`/comparison/${newIds}`, { replace: true });
    }
    setShowProductSelector(false);
  };

  const handleViewMore = () => {
    navigate('/shop');
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-4 sm:py-6 lg:py-[35px]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-center items-center h-48 sm:h-64 lg:h-96">
            <div className="text-base sm:text-lg text-gray-500">Loading products...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-4 sm:py-6 lg:py-[35px]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-center items-center h-48 sm:h-64 lg:h-96">
            <div className="text-center">
              <div className="text-base sm:text-lg text-red-500 mb-3 sm:mb-4">{error}</div>
              <Button 
                onClick={() => navigate('/shop')}
                className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              >
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-4 sm:py-6 lg:py-[35px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[52px] mb-6 sm:mb-8 lg:mb-[48px]">
          <div className="w-full lg:w-[223px] flex-shrink-0">
            <h2 className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg sm:text-xl lg:text-[28px] mb-4 lg:mb-[25px]">
              Go to Product page for more Products
            </h2>
            <Button 
              variant="ghost" 
              onClick={handleViewMore}
              className="[font-family:'Poppins',Helvetica] font-medium text-[#727272] text-base sm:text-lg lg:text-xl underline hover:bg-transparent p-0 h-auto"
            >
              View More
            </Button>
          </div>

          {/* Product Cards - Mobile: Stack vertically, Desktop: Horizontal scroll */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[52px] sm:overflow-x-auto lg:flex-nowrap">
            {products.map((product, index) => {
              const rating = 4.0 + Math.random() * 1.0;
              const reviews = Math.floor(Math.random() * 300) + 50;
              
              return (
                <div key={product._id} className="w-full sm:w-[240px] lg:w-[280px] flex-shrink-0 relative">
                  {/* Remove button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveProduct(product._id)}
                    className="absolute top-2 right-2 z-10 w-6 h-6 sm:w-8 sm:h-8 p-0 bg-white/80 hover:bg-white rounded-full"
                  >
                    <XIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 sm:h-40 lg:h-[177px] object-cover rounded-[10px] bg-[#f9f1e7] mb-3 sm:mb-4 lg:mb-[16px]"
                    productId={product._id}
                    productName={product.name}
                  />
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg sm:text-xl lg:text-2xl mb-2 lg:mb-[8px]">
                    {product.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-base sm:text-lg mb-2 lg:mb-[8px]">
                    {formatPrice(product.price)}
                  </p>
                  <div className="flex items-center gap-1 sm:gap-[5px] mb-3 sm:mb-4 lg:mb-[16px] flex-wrap">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base lg:text-lg">
                      {rating.toFixed(1)}
                    </span>
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${
                            i < Math.floor(rating)
                              ? "fill-[#ffc700] text-[#ffc700]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-xs sm:text-sm">
                      {reviews} Reviews
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Add Product Section */}
            {products.length < 3 && (
              <div className="w-full sm:w-[220px] lg:w-[242px] flex-shrink-0 relative">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-[25px]">
                  Add A Product
                </h3>
                <Button 
                  onClick={() => setShowProductSelector(!showProductSelector)}
                  className="w-full h-8 sm:h-10 lg:h-[39px] bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-semibold text-xs sm:text-sm rounded-md"
                >
                  Choose a Product
                </Button>
                
                {/* Product Selector Dropdown */}
                {showProductSelector && (
                  <div className="absolute z-20 mt-2 w-full sm:w-[280px] lg:w-[300px] max-h-[200px] sm:max-h-[300px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg">
                    {allProducts
                      .filter(p => !products.find(selected => selected._id === p._id))
                      .slice(0, 10)
                      .map((product) => (
                        <button
                          key={product._id}
                          onClick={() => handleAddProduct(product)}
                          className="w-full p-2 sm:p-3 text-left hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <ProductImage
                              src={product.image}
                              alt={product.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover rounded"
                              productId={product._id}
                              productName={product.name}
                            />
                            <div>
                              <div className="font-medium text-xs sm:text-sm">{product.name}</div>
                              <div className="text-gray-500 text-xs">{formatPrice(product.price)}</div>
                            </div>
                          </div>
                        </button>
                      ))
                    }
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        {products.length > 0 && (
          <div className="space-y-6 sm:space-y-8 lg:space-y-[48px]">
            {/* Mobile: Card Layout, Desktop: Table Layout */}
            <div className="block lg:hidden">
              {/* Mobile Comparison Cards */}
              {products.map((product, productIndex) => {
                const productSpecs = getProductSpecs(product, productIndex);
                return (
                  <div key={product._id} className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-lg mb-4">{product.name}</h4>
                    
                    {/* General Specs */}
                    <div className="mb-6">
                      <h5 className="font-medium text-base mb-3 text-[#b88e2f]">General</h5>
                      <div className="space-y-2">
                        {specifications.map((spec, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{spec.label}:</span>
                            <span className="text-right max-w-[60%]">{productSpecs.specs[index]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Product Details */}
                    <div className="mb-6">
                      <h5 className="font-medium text-base mb-3 text-[#b88e2f]">Product Details</h5>
                      <div className="space-y-2">
                        {dimensions.map((dim, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{dim.label}:</span>
                            <span className="text-right max-w-[60%]">{productSpecs.dimensions[index]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Warranty */}
                    <div className="mb-6">
                      <h5 className="font-medium text-base mb-3 text-[#b88e2f]">Warranty</h5>
                      <div className="space-y-2">
                        {warranty.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.label}:</span>
                            <span className="text-right max-w-[60%]">{productSpecs.warranty[index]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full h-12 bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-normal text-base rounded-md"
                    >
                      Add To Cart
                    </Button>
                  </div>
                );
              })}
            </div>
            
            {/* Desktop Table Layout */}
            <div className="hidden lg:block">
              {/* General */}
              <div>
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[33px]">
                  General
                </h3>
                <div className="space-y-[30px]">
                  {specifications.map((spec, index) => {
                    return (
                      <div key={index} className="flex gap-[52px] overflow-x-auto">
                        <div className="w-[223px] flex-shrink-0">
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                            {spec.label}
                          </span>
                        </div>
                        {products.map((product, productIndex) => {
                          const productSpecs = getProductSpecs(product, productIndex);
                          return (
                            <div key={product._id} className="w-[280px] flex-shrink-0">
                              <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                                {productSpecs.specs[index]}
                              </span>
                            </div>
                          );
                        })}
                        <div className="w-[242px] flex-shrink-0"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[33px]">
                  Product
                </h3>
                <div className="space-y-[30px]">
                  {dimensions.map((dim, index) => {
                    return (
                      <div key={index} className="flex gap-[52px] overflow-x-auto">
                        <div className="w-[223px] flex-shrink-0">
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                            {dim.label}
                          </span>
                        </div>
                        {products.map((product, productIndex) => {
                          const productSpecs = getProductSpecs(product, productIndex);
                          return (
                            <div key={product._id} className="w-[280px] flex-shrink-0">
                              <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                                {productSpecs.dimensions[index]}
                              </span>
                            </div>
                          );
                        })}
                        <div className="w-[242px] flex-shrink-0"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Warranty */}
              <div>
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[33px]">
                  Warranty
                </h3>
                <div className="space-y-[30px]">
                  {warranty.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-[52px] overflow-x-auto">
                        <div className="w-[223px] flex-shrink-0">
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                            {item.label}
                          </span>
                        </div>
                        {products.map((product, productIndex) => {
                          const productSpecs = getProductSpecs(product, productIndex);
                          return (
                            <div key={product._id} className="w-[280px] flex-shrink-0">
                              <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                                {productSpecs.warranty[index]}
                              </span>
                            </div>
                          );
                        })}
                        <div className="w-[242px] flex-shrink-0"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex gap-[52px] pt-[48px] overflow-x-auto">
                <div className="w-[223px] flex-shrink-0"></div>
                {products.map((product) => (
                  <div key={product._id} className="w-[280px] flex-shrink-0">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full h-[64px] bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-md"
                    >
                      Add To Cart
                    </Button>
                  </div>
                ))}
                <div className="w-[242px] flex-shrink-0"></div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-8 sm:py-12 lg:py-16">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-600 mb-3 sm:mb-4">
              No products to compare
            </h3>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Add some products to start comparing their features
            </p>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-[#b88e2f] hover:bg-[#a67d28] text-white h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
            >
              Browse Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};