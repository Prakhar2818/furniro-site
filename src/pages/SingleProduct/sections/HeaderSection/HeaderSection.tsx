import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { CartSidebar } from "../../../../components/CartSidebar/CartSidebar";
import { useApp } from "../../../../context/AppContext";
import { DEFAULT_PRODUCT_IMAGE, getRandomSofaImage } from "../../../../utils/imageLibrary";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HeaderSection = (): JSX.Element => {
  const location = useLocation();
  const { state } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = state;

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = getRandomSofaImage();
  };

  return (
    <>
      <header className="w-full bg-white">
        <div className="flex items-center justify-between px-[54px] py-[29px] h-[100px]">
          <Link to="/" className="flex items-center gap-[5px]">
            <img
              className="w-[50px] h-8"
              alt="Meubel house logos"
              src="/meubel-house-logos-05.png"
              onError={handleLogoError}
            />
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-black text-[34px] tracking-[0] leading-[normal]">
              Furniro
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-[75px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={`[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal] hover:text-gray-600 transition-colors ${
                        location.pathname === item.href ? "text-[#b88e2f]" : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-[45px]">
            <Button
              variant="ghost"
              size="icon"
              className="w-[28px] h-[28px] p-0 hover:bg-gray-100"
            >
              <UserIcon className="w-[28px] h-[28px] text-black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-[28px] h-[28px] p-0 hover:bg-gray-100"
            >
              <SearchIcon className="w-[28px] h-[28px] text-black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-[28px] h-[28px] p-0 hover:bg-gray-100"
            >
              <HeartIcon className="w-[28px] h-[28px] text-black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="w-[28px] h-[28px] p-0 hover:bg-gray-100 relative"
            >
              <ShoppingCartIcon className="w-[28px] h-[28px] text-black" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#b88e2f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};