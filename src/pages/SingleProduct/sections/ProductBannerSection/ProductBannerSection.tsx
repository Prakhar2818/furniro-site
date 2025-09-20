import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Product } from "../../../../types";

interface ProductBannerSectionProps {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

export const ProductBannerSection = ({ product, loading, error }: ProductBannerSectionProps): JSX.Element => {
  const getProductName = () => {
    if (loading) return "Loading...";
    if (error || !product) return "Product Not Found";
    return product.name;
  };

  return (
    <section className="w-full bg-[#f9f1e7] py-6 sm:py-8 lg:py-[35px]">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex flex-wrap items-center gap-1.5 text-sm sm:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="font-normal text-sm sm:text-base [font-family:'Poppins',Helvetica] text-[#9f9f9f] tracking-[0] leading-[normal] hover:text-[#b88e2f] transition-colors"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/shop"
                  className="font-normal text-sm sm:text-base [font-family:'Poppins',Helvetica] text-[#9f9f9f] tracking-[0] leading-[normal] hover:text-[#b88e2f] transition-colors"
                >
                  Shop
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <div className="w-px h-6 sm:h-[37px] bg-[#9f9f9f]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-normal text-sm sm:text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] break-words">
                {getProductName()}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};