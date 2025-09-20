import React from "react";
import { GALLERY_IMAGES } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

const galleryImages = GALLERY_IMAGES;

export const FurnitureGallerySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-[67px]">
      <div className="container-responsive">
        <div className="text-center mb-6 sm:mb-8 lg:mb-[62px]">
          <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#616161] text-base sm:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-[30px] mb-2">
            Share your setup with
          </p>
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px]">
            #FuniroFurniture
          </h2>
        </div>

        {/* Mobile: Stack images vertically */}
        <div className="grid grid-cols-2 sm:hidden gap-2">
          {galleryImages.slice(0, 6).map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt="Furniture gallery"
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName={`Gallery Furniture ${index + 1}`}
            />
          ))}
        </div>

        {/* Tablet: 3 columns */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-3">
          {galleryImages.slice(0, 9).map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt="Furniture gallery"
              className="w-full h-40 sm:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName={`Gallery Furniture ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop: Original grid layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {/* First column */}
          <div className="flex flex-col gap-4">
            <ProductImage
              src={galleryImages[0]}
              alt="Furniture gallery"
              className="w-full h-[382px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 1"
            />
            <ProductImage
              src={galleryImages[7]}
              alt="Furniture gallery"
              className="w-full h-[323px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 7"
            />
          </div>

          {/* Second column */}
          <div className="flex flex-col gap-4">
            <ProductImage
              src={galleryImages[1]}
              alt="Furniture gallery"
              className="w-full h-[312px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 2"
            />
            <ProductImage
              src={galleryImages[3]}
              alt="Furniture gallery"
              className="w-full h-[348px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 3"
            />
          </div>

          {/* Third column */}
          <div className="flex flex-col gap-4">
            <ProductImage
              src={galleryImages[2]}
              alt="Furniture gallery"
              className="w-full h-[392px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 4"
            />
            <ProductImage
              src={galleryImages[6]}
              alt="Furniture gallery"
              className="w-full h-[242px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 6"
            />
          </div>

          {/* Fourth column */}
          <div className="flex flex-col gap-4">
            <ProductImage
              src={galleryImages[4]}
              alt="Furniture gallery"
              className="w-full h-[433px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 5"
            />
            <ProductImage
              src={galleryImages[8]}
              alt="Furniture gallery"
              className="w-full h-[196px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 8"
            />
          </div>

          {/* Fifth column */}
          <div className="flex flex-col gap-4">
            <ProductImage
              src={galleryImages[5]}
              alt="Furniture gallery"
              className="w-full h-[323px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 9"
            />
            <ProductImage
              src={galleryImages[7]}
              alt="Furniture gallery"
              className="w-full h-[242px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              productName="Gallery Furniture 10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};