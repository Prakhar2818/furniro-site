import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

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

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full relative mt-[30px] bg-white border-t border-[#0000002b]">
      <div className="max-w-[1240px] mx-auto px-[100px] py-12">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal] mb-12">
              Funiro.
            </h2>
            <p className="font-normal text-[#9f9f9f] text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
              1247 Design Boulevard, Suite 150
              <br />
              Los Angeles, CA 90028 USA
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base tracking-[0] leading-[normal] mb-12">
              Links
            </h3>
            <nav className="space-y-8">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block font-medium text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base tracking-[0] leading-[normal] mb-12">
              Help
            </h3>
            <nav className="space-y-8">
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block [font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base tracking-[0] leading-[normal] mb-12">
              Newsletter
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Your Email Address"
                    className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:border-black"
                  />
                </div>
                <Button
                  variant="ghost"
                  className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 h-auto [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] hover:bg-transparent hover:border-black"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-[#9f9f9f]" />

        <div className="text-left">
          <p className="font-normal text-black text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};