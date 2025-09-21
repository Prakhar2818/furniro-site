import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AppProvider } from "./context/AppContext";
import { ErrorNotification } from "./components/ErrorNotification/ErrorNotification";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { ProductComparison } from "./pages/ProductComparison/ProductComparison";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Blog } from "./pages/Blog/Blog";

export const FurnitureStoreApp = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen w-full bg-background flex flex-col">
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/comparison" element={<ProductComparison />} />
              <Route path="/comparison/:productIds" element={<ProductComparison />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <ErrorNotification />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            className="!top-4 !right-4 !left-4 sm:!left-auto sm:!w-auto !w-[calc(100%-2rem)]"
            toastClassName="!bg-white !text-gray-800 !rounded-lg !shadow-lg !border !border-gray-200 !mb-2 !p-3 sm:!p-4 !text-sm sm:!text-base !font-medium"
            progressClassName="!bg-[#b88e2f]"
            style={{
              fontFamily: "'Poppins', Helvetica",
              fontSize: '14px'
            }}
          />
        </div>
      </Router>
    </AppProvider>
  );
};