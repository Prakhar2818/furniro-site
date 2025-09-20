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
} from "../../../components/ui/breadcrumb";
import { DEFAULT_PRODUCT_IMAGE, getRandomSofaImage } from "../../../utils/imageLibrary";

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
    <section className="w-full h-[316px] relative">
      <img
        className="absolute -top-1.5 left-0 w-full h-[328px] object-cover"
        alt="Page banner background"
        src={backgroundImage}
        onError={handleImageError}
      />

      <div className="absolute top-[61px] left-1/2 transform -translate-x-1/2 w-auto min-w-[200px] h-[133px]">
        <h1 className="absolute top-[61px] left-1/2 transform -translate-x-1/2 font-medium text-5xl [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] text-center whitespace-nowrap">
          {title}
        </h1>

        <img
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[77px] h-[77px] object-cover"
          alt="Meubel house logos"
          src="/meubel-house-logos-05-1.png"
          onError={handleImageError}
        />
      </div>

      <div className="absolute top-[195px] left-1/2 transform -translate-x-1/2">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1.5">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {breadcrumb.href ? (
                    <BreadcrumbLink asChild>
                      <Link
                        to={breadcrumb.href}
                        className="font-medium text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]"
                      >
                        {breadcrumb.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="font-light text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                      {breadcrumb.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRightIcon className="w-5 h-5" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};