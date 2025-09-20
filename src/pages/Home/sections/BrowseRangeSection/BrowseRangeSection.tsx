import React from "react";
import { CATEGORY_IMAGES } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

const categories = [
  {
    name: "Dining",
    image: CATEGORY_IMAGES.dining,
  },
  {
    name: "Living",
    image: CATEGORY_IMAGES.living,
  },
  {
    name: "Bedroom",
    image: CATEGORY_IMAGES.bedroom,
  },
];

export const BrowseRangeSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-[56px]">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 lg:mb-[62px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-2xl sm:text-3xl lg:text-[32px] tracking-[0] leading-tight lg:leading-[48px] mb-2">
            Browse The Range
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base sm:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-[30px]">
            Explore our curated selection of premium furniture designed to elevate every room in your home.
          </p>
        </div>

        <div className="grid-responsive-categories gap-4 sm:gap-6 lg:gap-5">
          {categories.map((category, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 sm:mb-6 lg:mb-[30px]">
              <ProductImage
                src={category.image}
                alt={category.name}
                className="w-full h-48 sm:h-64 lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-300"
                productName={category.name}
              />
              </div>
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-lg sm:text-xl lg:text-2xl tracking-[0] leading-[normal]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};