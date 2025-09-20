import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { CheckoutFormSection } from "./sections/CheckoutFormSection/CheckoutFormSection";

export const Checkout = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Checkout" },
  ];

  return (
    <Layout>
      <Banner title="Checkout" breadcrumbs={breadcrumbs} />
      <CheckoutFormSection />
      <Features />
    </Layout>
  );
};