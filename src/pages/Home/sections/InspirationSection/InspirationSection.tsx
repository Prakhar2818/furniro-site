import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { INSPIRATION_IMAGES } from "../../../../utils/imageLibrary";

export const InspirationSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fcf8f3] py-8 sm:py-11">
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-[42px]">
          {/* Text Content */}
          <div className="flex-1 max-w-lg lg:max-w-[422px] text-center lg:text-left">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px] mb-2">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-sm sm:text-base tracking-[0] leading-relaxed lg:leading-[24px] mb-4 sm:mb-6">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <Button className="bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-semibold text-sm sm:text-base px-6 sm:px-9 py-3 h-auto w-full sm:w-auto">
              Explore More
            </Button>
          </div>

          {/* Images */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <div className="relative flex-1">
              <img
                src={INSPIRATION_IMAGES.main}
                alt="Inner Peace"
                className="w-full h-64 sm:h-80 lg:h-[582px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 max-w-[200px] lg:max-w-[217px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-sm sm:text-base">
                    01
                  </span>
                  <div className="w-4 sm:w-6 h-px bg-[#616161]" />
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-sm sm:text-base">
                    Bed Room
                  </span>
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-lg sm:text-xl lg:text-[28px] tracking-[0] leading-tight lg:leading-[33.6px]">
                  Inner Peace
                </h3>
              </div>
              <Button
                size="icon"
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#b88e2f] hover:bg-[#a67d28] w-10 h-10 sm:w-12 sm:h-12"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </Button>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 flex-1">
              <img
                src={INSPIRATION_IMAGES.secondary}
                alt="Dining room"
                className="w-full h-64 sm:h-80 lg:h-[486px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};