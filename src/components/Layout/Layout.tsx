import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};