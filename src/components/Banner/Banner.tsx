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
} from "../ui/breadcrumb";
import { DEFAULT_PRODUCT_IMAGE, getRandomSofaImage } from "../../utils/imageLibrary";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BannerProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const Banner: React.FC<BannerProps> = ({ 
  title, 
  backgroundImage = "/rectangle-1.png", 
  breadcrumbs 
}) => {
  // Create fallback for background image - use sofa image for better appeal
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = getRandomSofaImage();
  };

  return (
    <section className="w-full h-48 sm:h-56 md:h-64 lg:h-[316px] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Page banner background"
        src={backgroundImage}
        onError={handleImageError}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[77px] lg:h-[77px] object-cover mb-3 sm:mb-4 lg:mb-6"
          alt="Meubel house logos"
          src="/meubel-house-logos-05-1.png"
          onError={handleImageError}
        />
        
        {/* Title */}
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl [font-family:'Poppins',Helvetica] text-black text-center mb-3 sm:mb-4 lg:mb-6 max-w-[90vw] px-2">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <div className="mt-2 sm:mt-3 lg:mt-4">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-1 sm:gap-1.5">
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {breadcrumb.href ? (
                      <BreadcrumbLink asChild>
                        <Link
                          to={breadcrumb.href}
                          className="font-medium text-sm sm:text-base [font-family:'Poppins',Helvetica] text-black hover:text-gray-700 transition-colors"
                        >
                          {breadcrumb.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="font-light text-sm sm:text-base [font-family:'Poppins',Helvetica] text-black">
                        {breadcrumb.label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
};