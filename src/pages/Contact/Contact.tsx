import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { BANNER_IMAGES } from "../../utils/imageLibrary";

export const Contact = (): JSX.Element => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <Layout>
      <Banner title="Contact" breadcrumbs={breadcrumbs} backgroundImage={BANNER_IMAGES.contact} />
      {/* <ContactInfoSection /> */}
      <MainContentSection />
      <Features />
    </Layout>
  );
};
