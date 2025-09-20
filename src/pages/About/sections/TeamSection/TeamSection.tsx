import React from "react";
import { getTeamImageByIndex } from "../../../../utils/imageLibrary";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

const teamMembers = [
  {
    name: "Alexandra Martinez",
    role: "Founder & CEO",
    image: getTeamImageByIndex(0),
    description: "With over 18 years in luxury furniture design, Alexandra founded Funiro with a vision to make exceptional design accessible to everyone."
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    image: getTeamImageByIndex(1),
    description: "James leads our design team, blending contemporary aesthetics with timeless functionality to create furniture that tells a story."
  },
  {
    name: "Isabella Park",
    role: "Master Craftsperson",
    image: getTeamImageByIndex(2),
    description: "Isabella oversees our artisan workshop, ensuring every piece meets the highest standards of craftsmanship and attention to detail."
  },
  {
    name: "Marcus Thompson",
    role: "Operations Director",
    image: getTeamImageByIndex(3),
    description: "Marcus manages our sustainable supply chain and manufacturing processes, ensuring quality while maintaining our environmental commitments."
  }
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f9f1e7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-4">
            Meet Our Team
          </h2>
          <p className="max-w-2xl mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
            Our passionate team of designers, craftspeople, and innovators work together to bring you exceptional furniture that transforms your living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ProductImage
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-[300px] object-cover"
                productName={member.name}
              />
              <div className="p-6">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-xl mb-2">
                  {member.name}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#b88e2f] text-base mb-3">
                  {member.role}
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-sm leading-[20px]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};