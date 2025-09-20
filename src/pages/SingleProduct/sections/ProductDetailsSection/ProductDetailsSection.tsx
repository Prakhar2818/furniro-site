import { FacebookIcon, LinkedinIcon, MinusIcon, PlusIcon, StarIcon, TwitterIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { useApp } from "../../../../context/AppContext";
import { formatPrice } from "../../../../utils";
import { apiService } from "../../../../services/api";
import { Product } from "../../../../types";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

export const ProductDetailsSection = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { actions } = useApp();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError('Product ID not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const productData = await apiService.getProductById(id);
        setProduct(productData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (product) {
      await actions.addToCart(product, quantity);
    }
  };

  const handleCompare = () => {
    if (product) {
      navigate(`/comparison/${product._id}`);
    } else {
      navigate('/comparison');
    }
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-[35px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-96">
            <div className="text-lg text-gray-500">Loading product details...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="w-full bg-white py-[35px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <div className="text-lg text-red-500 mb-4">
                {error || 'Product not found'}
              </div>
              <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-[35px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[105px]">
          {/* Product Images */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-[31px] flex-shrink-0">
            {/* Mobile: Main image first */}
            <div className="order-2 lg:order-1">
              <div className="hidden lg:flex flex-col gap-8">
                {/* Desktop thumbnails */}
                {[1, 2, 3, 4].map((index) => (
                  <ProductImage
                    key={index}
                    src={product?.image}
                    alt={`${product?.name || 'Product'} ${index}`}
                    className="w-[76px] h-20 object-cover rounded-[10px] bg-[#f9f1e7] cursor-pointer hover:opacity-80"
                    productId={product?._id}
                    productName={product?.name}
                  />
                ))}
              </div>
              
              {/* Mobile thumbnails - horizontal scroll */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-4">
                {[1, 2, 3, 4].map((index) => (
                  <ProductImage
                    key={index}
                    src={product?.image}
                    alt={`${product?.name || 'Product'} ${index}`}
                    className="w-16 h-16 flex-shrink-0 object-cover rounded-lg bg-[#f9f1e7] cursor-pointer hover:opacity-80"
                    productId={product?._id}
                    productName={product?.name}
                  />
                ))}
              </div>
            </div>
            
            {/* Main product image */}
            <div className="order-1 lg:order-2">
              <ProductImage
                src={product?.image}
                alt={product?.name || 'Product'}
                className="w-full h-64 sm:h-80 lg:w-[481px] lg:h-[500px] object-cover rounded-[10px] bg-[#f9f1e7]"
                productId={product?._id}
                productName={product?.name}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 max-w-full lg:max-w-[606px]">
            <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl sm:text-3xl lg:text-[42px] mb-4 leading-tight">
              {product?.name || 'Unknown Product'}
            </h1>
            
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-xl sm:text-2xl mb-4">
              {formatPrice(product?.price || 0)}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-[18px] mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "fill-[#ffc700] text-[#ffc700]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="hidden sm:block w-px h-[30px] bg-[#9f9f9f]" />
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-[13px]">
                5 Customer Review
              </span>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm sm:text-[13px] mb-6 leading-relaxed">
              {product?.description || 'No description available'}
            </p>

            {/* Stock Info */}
            <div className="mb-6">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm mb-3">
                Availability: {(product?.stock || 0) > 0 ? `${product?.stock || 0} in stock` : 'Out of stock'}
              </p>
              {(product?.stock || 0) <= 5 && (product?.stock || 0) > 0 && (
                <p className="[font-family:'Poppins',Helvetica] font-normal text-red-500 text-sm">
                  Only {product?.stock || 0} left in stock!
                </p>
              )}
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm mb-3">
                Size
              </p>
              <div className="flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 sm:w-[30px] sm:h-[30px] rounded-[5px] [font-family:'Poppins',Helvetica] font-normal text-xs sm:text-[13px] ${
                      selectedSize === size
                        ? "bg-[#b88e2f] text-white"
                        : "bg-[#f9f1e7] text-black hover:bg-[#b88e2f] hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm mb-3">
                Color
              </p>
              <div className="flex gap-4">
                {[
                  { name: "purple", color: "#816dfa" },
                  { name: "black", color: "#000000" },
                  { name: "brown", color: "#b88e2f" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full border-2 ${
                      selectedColor === color.name
                        ? "border-gray-400"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[18px] mb-12 sm:mb-[60px]">
              <div className="flex items-center border border-[#9f9f9f] rounded-[10px] w-full sm:w-[123px] h-12 sm:h-16">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 hover:bg-transparent"
                  disabled={(product?.stock || 0) === 0}
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="flex-1 text-center [font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product?.stock || 0, quantity + 1))}
                  className="w-8 h-8 hover:bg-transparent"
                  disabled={(product?.stock || 0) === 0}
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>

              <Button 
                onClick={handleAddToCart}
                disabled={(product?.stock || 0) === 0}
                className="w-full sm:w-[215px] h-12 sm:h-16 bg-transparent border border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-lg sm:text-xl rounded-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {(product?.stock || 0) === 0 ? 'Out of Stock' : 'Add To Cart'}
              </Button>

              <Button 
                variant="outline"
                onClick={handleCompare}
                className="w-full sm:w-[215px] h-12 sm:h-16 border border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-lg sm:text-xl rounded-[15px]"
              >
                + Compare
              </Button>
            </div>

            {/* Product Meta */}
            <div className="space-y-3 border-t border-[#d9d9d9] pt-6 sm:pt-10">
              <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-20 [font-family:'Poppins',Helvetica] font-medium sm:font-normal text-black sm:text-[#9f9f9f] text-sm sm:text-base mb-1 sm:mb-0">
                  SKU
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base">
                  {!product?._id ? 'N/A' : `: ${product._id.slice(-6).toUpperCase()}`}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-20 [font-family:'Poppins',Helvetica] font-medium sm:font-normal text-black sm:text-[#9f9f9f] text-sm sm:text-base mb-1 sm:mb-0">
                  Category
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base">
                  : {product?.category || 'General'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-20 [font-family:'Poppins',Helvetica] font-medium sm:font-normal text-black sm:text-[#9f9f9f] text-sm sm:text-base mb-1 sm:mb-0">
                  Stock
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base">
                  : {product?.stock || 0} items
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="w-full sm:w-20 [font-family:'Poppins',Helvetica] font-medium sm:font-normal text-black sm:text-[#9f9f9f] text-sm sm:text-base mb-2 sm:mb-0">
                  Share
                </span>
                <div className="flex items-center gap-6 sm:ml-2">
                  <span className="hidden sm:inline [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">:</span>
                  <div className="flex gap-4 sm:gap-6">
                    <FacebookIcon className="w-5 h-5 text-black cursor-pointer hover:text-[#b88e2f] transition-colors" />
                    <LinkedinIcon className="w-5 h-5 text-black cursor-pointer hover:text-[#b88e2f] transition-colors" />
                    <TwitterIcon className="w-5 h-5 text-black cursor-pointer hover:text-[#b88e2f] transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};