import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const CheckoutFormSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[98px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-[98px]">
          {/* Billing Details */}
          <div className="flex-1">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-4xl mb-[36px]">
              Billing details
            </h2>
            
            <form className="space-y-[36px]">
              <div className="grid grid-cols-2 gap-[31px]">
                <div className="space-y-[22px]">
                  <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                    First Name
                  </Label>
                  <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
                </div>
                <div className="space-y-[22px]">
                  <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                    Last Name
                  </Label>
                  <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
                </div>
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Company Name (Optional)
                </Label>
                <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Country / Region
                </Label>
                <select className="w-full h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base bg-white">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Street address
                </Label>
                <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Town / City
                </Label>
                <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Province
                </Label>
                <select className="w-full h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base bg-white">
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                  <option>Florida</option>
                  <option>Washington</option>
                </select>
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  ZIP code
                </Label>
                <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Phone
                </Label>
                <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
              </div>

              <div className="space-y-[22px]">
                <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Email address
                </Label>
                <Input className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px]" />
              </div>

              <div className="space-y-[22px]">
                <Textarea 
                  placeholder="Additional information"
                  className="h-[75px] border border-[#9f9f9f] rounded-[10px] px-[30px] py-[25px] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base resize-none"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <Card className="w-[608px] bg-white border-0 shadow-none">
            <CardContent className="p-[38px]">
              <div className="space-y-[22px] mb-[22px]">
                <div className="flex justify-between items-center">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl">
                    Product
                  </h3>
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl">
                    Subtotal
                  </h3>
                </div>

                <div className="flex justify-between items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                    Asgaard sofa × 1
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base">
                    Rs. 250,000.00
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
                    Subtotal
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base">
                    Rs. 250,000.00
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#d9d9d9] pb-[22px]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
                    Total
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-[#b88e2f] text-2xl">
                    Rs. 250,000.00
                  </span>
                </div>
              </div>

              <div className="space-y-[11px] mb-[39px]">
                <div className="flex items-center gap-[14px]">
                  <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
                    Direct Bank Transfer
                  </span>
                </div>
                <p className="[font-family:'Poppins',Helvetica] font-light text-[#9f9f9f] text-base ml-[28px]">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                <div className="flex items-center gap-[14px] ml-[28px]">
                  <div className="w-[14px] h-[14px] border border-[#9f9f9f] rounded-full"></div>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base">
                    Direct Bank Transfer
                  </span>
                </div>

                <div className="flex items-center gap-[14px] ml-[28px]">
                  <div className="w-[14px] h-[14px] border border-[#9f9f9f] rounded-full"></div>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base">
                    Cash On Delivery
                  </span>
                </div>
              </div>

              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-base mb-[39px]">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                <span className="font-semibold">privacy policy</span>.
              </p>

              <Button className="w-full h-[64px] bg-transparent border-2 border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[15px]">
                Place order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};