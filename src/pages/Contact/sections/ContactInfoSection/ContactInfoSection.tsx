import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const ContactInfoSection = (): JSX.Element => {
  return (
    <section className="w-full h-[316px] relative">
      <div className="absolute top-[195px] left-1/2 transform -translate-x-1/2">
        {/* <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1.5">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRightIcon className="w-5 h-5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-light text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                Contact
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>
    </section>
  );
};
