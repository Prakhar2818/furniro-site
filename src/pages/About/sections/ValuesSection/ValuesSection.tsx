import React from "react";

const values = [
  {
    icon: "🪑",
    title: "Timeless Design",
    description: "We create furniture pieces that transcend trends, combining classic elegance with contemporary functionality to enhance any living space for years to come."
  },
  {
    icon: "🌿",
    title: "Eco-Conscious Manufacturing",
    description: "From responsibly sourced hardwoods to low-impact finishes, we prioritize sustainable practices that protect our planet while delivering exceptional quality."
  },
  {
    icon: "🔨",
    title: "Artisan Excellence",
    description: "Our skilled craftspeople blend traditional woodworking techniques with modern precision, ensuring every joint, curve, and finish reflects true mastery."
  },
  {
    icon: "🏠",
    title: "Home-Focused Solutions",
    description: "We understand that furniture shapes how you live. Our designs prioritize comfort, functionality, and personal expression to help you create your perfect home."
  }
];

export const ValuesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-4">
            What Drives Us
          </h2>
          <p className="max-w-2xl mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
            Our core values shape every decision we make, from initial design concepts to final delivery, ensuring that every customer receives furniture that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 rounded-lg hover:bg-[#f9f1e7] transition-colors duration-300">
              <div className="text-6xl mb-6">{value.icon}</div>
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-xl mb-4">
                {value.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base leading-[24px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};