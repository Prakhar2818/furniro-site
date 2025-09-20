import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const contactInfo = [
  {
    icon: "/vector.svg",
    title: "Address",
    content: "1247 Design Boulevard, Suite 150, Los Angeles, CA 90028, United States",
    topPosition: "top-[58px]",
  },
  {
    icon: "/bxs-phone.svg",
    title: "Phone",
    content: "Mobile: +1 (213) 555-7890\nHotline: +1 (213) 555-FURN",
    topPosition: "top-52",
  },
  {
    icon: "/bi-clock-fill.svg",
    title: "Working Time",
    content: "Monday-Friday: 9:00 - 19:00\nSaturday: 10:00 - 18:00\nSunday: 11:00 - 17:00",
    topPosition: "top-[334px]",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl sm:text-3xl lg:text-4xl tracking-[0] leading-[normal] mb-3 sm:mb-4">
            Get In Touch With Us
          </h1>
          <p className="max-w-2xl mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base text-center tracking-[0] leading-relaxed">
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-18">
          {/* Contact Info */}
          <Card className="lg:w-[405px] bg-white border-0 shadow-none">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="space-y-8 lg:space-y-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-6">
                    <img
                      className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0"
                      alt={info.title}
                      src={info.icon}
                    />
                    <div>
                      <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg sm:text-xl lg:text-2xl tracking-[0] leading-[normal] mb-2 sm:mb-4">
                        {info.title}
                      </h3>
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm sm:text-base tracking-[0] leading-relaxed whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="flex-1 bg-white border-0 shadow-none">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <form className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-6">
                  <Label
                    htmlFor="name"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base tracking-[0] leading-[normal]"
                  >
                    Your name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Abc"
                    className="h-12 sm:h-16 lg:h-[75px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base px-4 sm:px-6 lg:px-8"
                  />
                </div>

                <div className="space-y-3 sm:space-y-6">
                  <Label
                    htmlFor="email"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base tracking-[0] leading-[normal]"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="Abc@def.com"
                    className="h-12 sm:h-16 lg:h-[75px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base px-4 sm:px-6 lg:px-8"
                  />
                </div>

                <div className="space-y-3 sm:space-y-6">
                  <Label
                    htmlFor="subject"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base tracking-[0] leading-[normal]"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    defaultValue="This is an optional"
                    className="h-12 sm:h-16 lg:h-[75px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base px-4 sm:px-6 lg:px-8"
                  />
                </div>

                <div className="space-y-3 sm:space-y-6">
                  <Label
                    htmlFor="message"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base tracking-[0] leading-[normal]"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    defaultValue="Hi! i'd like to ask about"
                    className="h-24 sm:h-28 lg:h-[120px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto sm:min-w-[200px] lg:w-[239px] h-12 sm:h-14 lg:h-[55px] bg-[#b88e2f] hover:bg-[#a67d28] rounded-[5px] border border-solid border-[#b88e2f] [font-family:'Poppins',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[normal]"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
