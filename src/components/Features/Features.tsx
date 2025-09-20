import React from "react";

const features = [
  {
    icon: "/trophy-1.svg",
    alt: "Trophy",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: "/guarantee.svg",
    alt: "Guarantee",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: "/shipping.svg",
    alt: "Shipping",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: "/customer-support.svg",
    alt: "Customer support",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="w-full bg-[#faf3ea] py-12 sm:py-16 lg:py-[100px]">
      <div className="container-responsive">
        {/* Mobile: Stack vertically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left"
            >
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] flex-shrink-0"
                alt={feature.alt}
                src={feature.icon}
              />

              <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-0.5">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#242424] text-lg sm:text-xl lg:text-[25px] tracking-[0] leading-tight lg:leading-[37.5px]">
                  {feature.title}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#898989] text-sm sm:text-base lg:text-xl tracking-[0] leading-relaxed lg:leading-[30px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};