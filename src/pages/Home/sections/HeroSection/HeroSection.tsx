import React from "react";
import { Button } from "../../../../components/ui/button";
import { HERO_IMAGES } from "../../../../utils/imageLibrary";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full h-[500px] sm:h-[600px] lg:h-[716px] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero background"
        src={HERO_IMAGES.main}
      />
      
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-[58px]">
        <div className="w-full max-w-lg lg:max-w-[643px] bg-[#fff3e3] rounded-[10px] p-6 sm:p-8 lg:p-[62px] text-center lg:text-left">
          <div className="space-y-4">
            <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-sm sm:text-base tracking-[2px] sm:tracking-[3px] leading-[normal]">
              New Arrival
            </p>
            
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#b88e2f] text-2xl sm:text-3xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[65px]">
              Discover Our<br className="hidden lg:block" />
              <span className="lg:hidden"> </span>New Collection
            </h1>
            
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-sm sm:text-base lg:text-lg tracking-[0] leading-relaxed lg:leading-[24px] mb-6 lg:mb-12">
              Transform your living space with our handcrafted furniture collection that combines timeless elegance with modern comfort.
            </p>
            
            <Button className="bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-bold text-sm sm:text-base px-8 sm:px-12 lg:px-[72px] py-3 sm:py-4 lg:py-[25px] h-auto w-full sm:w-auto">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};