import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { CartSidebar } from "../CartSidebar/CartSidebar";
import { useApp } from "../../context/AppContext";
import { DEFAULT_PRODUCT_IMAGE, getRandomSofaImage } from "../../utils/imageLibrary";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const { state } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = state;

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = getRandomSofaImage();
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm relative z-50">
        <div className="container-responsive">
          <div className="flex items-center justify-between py-4 lg:py-[29px] h-auto lg:h-[100px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-[5px] z-10">
              <img
                className="w-8 h-6 sm:w-[50px] sm:h-8"
                alt="Meubel house logos"
                src="/meubel-house-logos-05.png"
                onError={handleLogoError}
              />
              <div className="[font-family:'Montserrat',Helvetica] font-bold text-black text-xl sm:text-2xl lg:text-[34px] tracking-[0] leading-[normal]">
                Furniro
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
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

            {/* Desktop Action Icons */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-[45px]">
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 lg:w-[28px] lg:h-[28px] p-0 hover:bg-gray-100"
              >
                <UserIcon className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-black" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 lg:w-[28px] lg:h-[28px] p-0 hover:bg-gray-100"
              >
                <SearchIcon className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-black" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 lg:w-[28px] lg:h-[28px] p-0 hover:bg-gray-100"
              >
                <HeartIcon className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-black" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="w-7 h-7 lg:w-[28px] lg:h-[28px] p-0 hover:bg-gray-100 relative"
              >
                <ShoppingCartIcon className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-black" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#b88e2f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Action Icons */}
            <div className="flex sm:hidden items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="w-8 h-8 p-0 hover:bg-gray-100 relative"
              >
                <ShoppingCartIcon className="w-6 h-6 text-black" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#b88e2f] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cartItemCount}
                  </span>
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-8 h-8 p-0 hover:bg-gray-100 lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <XIcon className="w-6 h-6 text-black" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-black" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <nav className="px-4 py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-2 [font-family:'Poppins',Helvetica] font-medium text-lg tracking-[0] leading-[normal] hover:text-gray-600 transition-colors border-b border-gray-100 last:border-b-0 ${
                      location.pathname === item.href ? "text-[#b88e2f]" : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 p-0 hover:bg-gray-100"
                  >
                    <UserIcon className="w-6 h-6 text-black" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 p-0 hover:bg-gray-100"
                  >
                    <SearchIcon className="w-6 h-6 text-black" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 p-0 hover:bg-gray-100"
                  >
                    <HeartIcon className="w-6 h-6 text-black" />
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};