import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { getProductImageByIndex } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

const relatedProducts = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    image: getProductImageByIndex(0),
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: getProductImageByIndex(1),
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image: getProductImageByIndex(2),
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: getProductImageByIndex(3),
    isNew: true,
  },
];

export const RelatedProductsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[56px] border-t border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-black text-4xl mb-[25px]">
            Related Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[69px]">
          {relatedProducts.map((product) => (
            <Card
              key={product.id}
              className="group relative bg-[#f4f5f7] border-0 shadow-none overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[301px] object-cover group-hover:scale-105 transition-transform duration-300"
                    productId={product.id.toString()}
                    productName={product.name}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    {product.discount && (
                      <div className="w-12 h-12 bg-[#e97171] rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                          {product.discount}
                        </span>
                      </div>
                    )}
                    {product.isNew && (
                      <div className="w-12 h-12 bg-[#2ec1ac] rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                          New
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <Button className="bg-white text-[#b88e2f] hover:bg-gray-100 [font-family:'Poppins',Helvetica] font-semibold text-base px-12 py-3">
                        Add to cart
                      </Button>
                      <div className="flex items-center justify-center gap-5 text-white">
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-base hover:text-gray-300">
                          Share
                        </button>
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-base hover:text-gray-300">
                          Compare
                        </button>
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-base hover:text-gray-300">
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#f4f5f7]">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-2xl mb-2">
                    {product.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-[#898989] text-base mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-xl">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-[#b0b0b0] text-base line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white [font-family:'Poppins',Helvetica] font-semibold text-base px-[74px] py-3 h-auto"
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};