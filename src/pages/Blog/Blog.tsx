import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { BlogContentSection } from "./sections/BlogContentSection/BlogContentSection";

export const Blog = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  return (
    <Layout>
      <Banner title="Blog" breadcrumbs={breadcrumbs} />
      <BlogContentSection />
      <Features />
    </Layout>
  );
};