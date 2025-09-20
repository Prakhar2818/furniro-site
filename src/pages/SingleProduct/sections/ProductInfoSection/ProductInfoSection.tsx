import React, { useState } from "react";
import { PRODUCT_DETAIL_IMAGES } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

export const ProductInfoSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="w-full bg-white py-8 sm:py-12 border-t border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-[52px] mb-6 sm:mb-8 lg:mb-[37px]">
          {[
            { id: "description", label: "Description" },
            { id: "additional", label: "Additional Information" },
            { id: "reviews", label: "Reviews [5]" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`[font-family:'Poppins',Helvetica] text-lg sm:text-xl lg:text-2xl transition-colors ${
                activeTab === tab.id
                  ? "font-medium text-black"
                  : "font-normal text-[#9f9f9f] hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-[1026px] mx-auto">
          {activeTab === "description" && (
            <div className="space-y-[30px]">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base leading-[24px]">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base leading-[24px]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish transport.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-[29px] mt-[36px]">
                <ProductImage
                  src={PRODUCT_DETAIL_IMAGES[0]}
                  alt="Product detail 1"
                  className="w-full lg:w-[605px] h-[250px] sm:h-[300px] lg:h-[348px] object-cover rounded-[10px] bg-[#f9f1e7]"
                />
                <ProductImage
                  src={PRODUCT_DETAIL_IMAGES[1]}
                  alt="Product detail 2"
                  className="w-full lg:w-[605px] h-[250px] sm:h-[300px] lg:h-[348px] object-cover rounded-[10px] bg-[#f9f1e7]"
                />
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="space-y-4">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                Additional information about the product specifications, dimensions, and care instructions.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                Customer reviews and ratings will be displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};