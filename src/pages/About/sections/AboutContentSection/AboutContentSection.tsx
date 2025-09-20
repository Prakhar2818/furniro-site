import React from "react";
import { ABOUT_IMAGES } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

export const AboutContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-6">
              Our Journey
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Since 2010, Funiro has been at the forefront of furniture innovation, transforming the way people experience their living spaces. What started as a passion project in a small Los Angeles workshop has grown into a trusted name in modern furniture design.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Our artisans combine traditional craftsmanship with cutting-edge design techniques, creating pieces that are both timeless and contemporary. Each furniture piece tells a story of dedication, quality, and the pursuit of perfection.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              From sustainable sourcing to precision assembly, every step of our process reflects our commitment to excellence and environmental responsibility.
            </p>
          </div>
          
          <div className="relative">
            <ProductImage
              src={ABOUT_IMAGES[0]}
              alt="Modern furniture workshop showcasing craftsmanship"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              productName="Workshop"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          <div className="relative order-2 lg:order-1">
            <ProductImage
              src={ABOUT_IMAGES[1]}
              alt="Elegant furniture showroom interior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              productName="Showroom"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-6">
              Our Philosophy
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              We believe furniture should do more than fill a space – it should inspire, comfort, and reflect your unique style. Our design philosophy centers on creating pieces that seamlessly blend functionality with aesthetic appeal.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Sustainability isn't just a buzzword for us; it's a core principle. We source materials responsibly, partner with eco-conscious suppliers, and implement manufacturing processes that minimize environmental impact while maximizing durability.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              Our mission extends beyond creating beautiful furniture – we're building lasting relationships with customers who value quality, design, and responsible business practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-6">
              Craftsmanship Excellence
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Every piece in our collection represents hours of meticulous craftsmanship. Our skilled artisans bring decades of experience to each project, ensuring that every joint, finish, and detail meets our exacting standards.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              From hand-selected hardwoods to precision joinery techniques, we use time-honored methods combined with modern innovation to create furniture that will be treasured for generations.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              Quality is never an accident – it's the result of intelligent effort, sincere intention, and skilled execution.
            </p>
          </div>
          
          <div className="relative">
            <ProductImage
              src={ABOUT_IMAGES[2]}
              alt="Detailed craftsmanship and woodworking techniques"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              productName="Craftsmanship"
            />
          </div>
        </div>
      </div>
    </section>
  );
};