import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { CartContentSection } from "./sections/CartContentSection/CartContentSection";

export const Cart = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart" },
  ];

  return (
    <Layout>
      <Banner title="Cart" breadcrumbs={breadcrumbs} />
      <CartContentSection />
      <Features />
    </Layout>
  );
};