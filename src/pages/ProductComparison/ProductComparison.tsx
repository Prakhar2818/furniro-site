import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { ComparisonContentSection } from "./sections/ComparisonContentSection/ComparisonContentSection";
import { BANNER_IMAGES } from "../../utils/imageLibrary";

export const ProductComparison = (): JSX.Element => {
  const { productIds } = useParams<{ productIds?: string }>();
  
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Comparison" },
  ];

  return (
    <Layout>
      <Banner 
        title="Product Comparison" 
        breadcrumbs={breadcrumbs} 
        backgroundImage={BANNER_IMAGES.shop} 
      />
      <ComparisonContentSection productIds={productIds} />
      <Features />
    </Layout>
  );
};