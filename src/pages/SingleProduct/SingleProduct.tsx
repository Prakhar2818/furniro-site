import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ProductBannerSection } from "./sections/ProductBannerSection/ProductBannerSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection/ProductDetailsSection";
import { ProductInfoSection } from "./sections/ProductInfoSection/ProductInfoSection";
import { RelatedProductsSection } from "./sections/RelatedProductsSection/RelatedProductsSection";
import { apiService } from "../../services/api";
import { Product } from "../../types";

export const SingleProduct = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError('Product ID not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const productData = await apiService.getProductById(id);
        setProduct(productData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return (
    <Layout>
      <ProductBannerSection product={product} loading={loading} error={error} />
      <ProductDetailsSection />
      <ProductInfoSection />
      <RelatedProductsSection />
    </Layout>
  );
};