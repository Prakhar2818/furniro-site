import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const helpLinks = [
  { label: "Payment Options", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Privacy Policies", href: "#" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative mt-6 sm:mt-8 lg:mt-[30px] bg-white border-t border-[#0000002b]">
      <div className="container-responsive py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Company Info */}
          <div className="col-span-1 text-center sm:text-left">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl sm:text-2xl tracking-[0] leading-[normal] mb-6 sm:mb-8 lg:mb-12">
              Funiro.
            </h2>
            <p className="font-normal text-[#9f9f9f] text-sm sm:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
              1247 Design Boulevard, Suite 150
              <br />
              Los Angeles, CA 90028 USA
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 text-center sm:text-left">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm sm:text-base tracking-[0] leading-[normal] mb-6 sm:mb-8 lg:mb-12">
              Links
            </h3>
            <nav className="space-y-4 sm:space-y-6 lg:space-y-8">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block font-medium text-sm sm:text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div className="col-span-1 text-center sm:text-left">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm sm:text-base tracking-[0] leading-[normal] mb-6 sm:mb-8 lg:mb-12">
              Help
            </h3>
            <nav className="space-y-4 sm:space-y-6 lg:space-y-8">
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block [font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm sm:text-base tracking-[0] leading-[normal] mb-6 sm:mb-8 lg:mb-12">
              Newsletter
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Your Email Address"
                    className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-xs sm:text-sm tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:border-black w-full"
                  />
                </div>
                <Button
                  variant="ghost"
                  className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 h-auto [font-family:'Poppins',Helvetica] font-medium text-black text-xs sm:text-sm tracking-[0] leading-[normal] hover:bg-transparent hover:border-black w-full sm:w-auto"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6 sm:mb-8 bg-[#9f9f9f]" />

        <div className="text-center sm:text-left">
          <p className="font-normal text-black text-sm sm:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};