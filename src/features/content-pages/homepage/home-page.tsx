import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Features } from "../../components/Features/Features";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { BrowseRangeSection } from "./sections/BrowseRangeSection/BrowseRangeSection";
import { ProductsSection } from "./sections/ProductsSection/ProductsSection";
import { InspirationSection } from "./sections/InspirationSection/InspirationSection";
import { FurnitureGallerySection } from "./sections/FurnitureGallerySection/FurnitureGallerySection";

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <HeroSection />
      <BrowseRangeSection />
      <ProductsSection />
      <InspirationSection />
      <FurnitureGallerySection />
      <Features />
    </Layout>
  );
};