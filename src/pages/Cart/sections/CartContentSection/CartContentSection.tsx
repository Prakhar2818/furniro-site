import { TrashIcon, MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useApp } from "../../../../context/AppContext";
import { formatPrice, calculateCartTotal } from "../../../../utils";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

export const CartContentSection = (): JSX.Element => {
  const { state, actions } = useApp();
  const navigate = useNavigate();
  const { cartItems, loading } = state;

  const handleQuantityChange = async (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      await actions.removeFromCart(productId);
    } else {
      await actions.updateCartItemQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    await actions.removeFromCart(productId);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const total = calculateCartTotal(cartItems);

  if (loading.cart) {
    return (
      <section className="w-full bg-white py-[72px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500">Loading cart...</div>
          </div>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="w-full bg-white py-[72px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] mb-8">
              Your cart is empty
            </h2>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-[#b88e2f] hover:bg-[#a67d28] text-white px-8 py-3"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-[72px]">
      <div className="max-w-none mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Cart Items */}
          <div className="flex-1 min-w-0">
            {/* Desktop Header - Hidden on mobile */}
            <div className="hidden lg:flex bg-[#f9f1e7] h-[55px] items-center px-4 lg:px-[60px] mb-[55px]">
              <div className="grid grid-cols-[5fr_1.5fr_1.5fr_1.5fr_100px] gap-8 w-full">
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Product
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Price
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Quantity
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Subtotal
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Action
                </div>
              </div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => {
              const subtotal = item.price * item.quantity;
              return (
                <div key={item.id}>
                  {/* Desktop Layout */}
                  <div className="hidden lg:block px-4 lg:px-[60px] py-[25px] border-b border-gray-100 min-h-[140px]">
                    <div className="grid grid-cols-[5fr_1.5fr_1.5fr_1.5fr_100px] gap-8 w-full items-start h-full">
                      <div className="flex items-start gap-4 min-w-0 h-full">
                        <ProductImage
                          src={item.image}
                          alt={item.name}
                          className="w-[108px] h-[105px] object-cover rounded-[10px] bg-[#f9f1e7] flex-shrink-0"
                          productId={item.id}
                          productName={item.name}
                        />
                        <div className="flex-1 pt-2">
                          <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-base leading-tight block">
                            {item.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-center [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base pt-8">
                        {formatPrice(item.price)}
                      </div>
                      <div className="text-center pt-6">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-6 h-6 text-gray-500 hover:text-red-500"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </Button>
                          <div className="w-8 h-8 border border-[#9f9f9f] rounded flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base">
                            {item.quantity}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-6 h-6 text-gray-500 hover:text-green-500"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-center [font-family:'Poppins',Helvetica] font-normal text-black text-base pt-8">
                        {formatPrice(subtotal)}
                      </div>
                      <div className="flex items-center justify-center pt-8">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-[#b88e2f] hover:bg-[#b88e2f]/10 hover:text-red-500"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <Card className="mx-2 mb-4 shadow-sm border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <ProductImage
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-[#f9f1e7] flex-shrink-0"
                            productId={item.id}
                            productName={item.name}
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base leading-tight mb-2">
                              {item.name}
                            </h3>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-xs sm:text-sm text-gray-600">
                                  Price:
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-normal text-xs sm:text-sm text-[#9f9f9f]">
                                  {formatPrice(item.price)}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-xs sm:text-sm text-gray-600">
                                  Quantity:
                                </span>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="w-6 h-6 text-gray-500 hover:text-red-500"
                                  >
                                    <MinusIcon className="w-3 h-3" />
                                  </Button>
                                  <div className="w-8 h-8 border border-[#9f9f9f] rounded flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-sm">
                                    {item.quantity}
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="w-6 h-6 text-gray-500 hover:text-green-500"
                                  >
                                    <PlusIcon className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-xs sm:text-sm text-gray-600">
                                  Subtotal:
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-sm sm:text-base text-[#b88e2f]">
                                  {formatPrice(subtotal)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-[#b88e2f] hover:bg-[#b88e2f]/10 hover:text-red-500 w-8 h-8"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Totals */}
          <Card className="w-full xl:w-[350px] xl:flex-shrink-0 h-auto lg:h-[390px] bg-[#f9f1e7] border-0 shadow-none mx-2 lg:mx-0">
            <CardContent className="p-4 sm:p-8 lg:p-[75px]">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl sm:text-[28px] lg:text-[32px] text-center mb-8 sm:mb-12 lg:mb-[61px]">
                Cart Totals
              </h2>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-[31px] mb-6 sm:mb-8 lg:mb-[42px]">
                <div className="flex justify-between">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base">
                    Subtotal
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base">
                    Total
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b88e2f] text-lg sm:text-xl">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full h-12 sm:h-14 lg:h-[58px] bg-transparent border-2 border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-lg sm:text-xl rounded-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};