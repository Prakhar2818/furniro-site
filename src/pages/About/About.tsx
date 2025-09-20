import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { AboutContentSection } from "./sections/AboutContentSection/AboutContentSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { ValuesSection } from "./sections/ValuesSection/ValuesSection";
import { BANNER_IMAGES } from "../../utils/imageLibrary";

export const About = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About" },
  ];

  return (
    <Layout>
      <Banner title="About" breadcrumbs={breadcrumbs} backgroundImage={BANNER_IMAGES.about} />
      <AboutContentSection />
      <TeamSection />
      <ValuesSection />
      <Features />
    </Layout>
  );
};