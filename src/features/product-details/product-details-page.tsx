import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ProductBannerSection } from "../../pages/SingleProduct/sections/ProductBannerSection/ProductBannerSection";
import { ProductDetailsSection } from "../../pages/SingleProduct/sections/ProductDetailsSection/ProductDetailsSection";
import { ProductInfoSection } from "../../pages/SingleProduct/sections/ProductInfoSection/ProductInfoSection";
import { RelatedProductsSection } from "../../pages/SingleProduct/sections/RelatedProductsSection/RelatedProductsSection";

export const SingleProduct = (): JSX.Element => {
  return (
    <Layout>
      <ProductBannerSection />
      <ProductDetailsSection />
      <ProductInfoSection />
      <RelatedProductsSection />
    </Layout>
  );
};