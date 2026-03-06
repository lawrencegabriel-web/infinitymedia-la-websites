import Navbar from "../components/Navbar";
import HeroSectionV1 from "../components/landing/v1/HeroSectionV1";
import ManifestoSectionV1 from "../components/landing/v1/ManifestoSectionV1";
import PreschoolBannerV1 from "../components/landing/v1/PreschoolBannerV1";
import AmenitiesSectionV1 from "../components/landing/v1/AmenitiesSectionV1";
import MembershipSectionV1 from "../components/landing/v1/MembershipSectionV1";
import Footer from "../components/Footer";

const IndexV1 = () => {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <HeroSectionV1 />
      <ManifestoSectionV1 />
      <PreschoolBannerV1 />
      <AmenitiesSectionV1 />
      <MembershipSectionV1 />
      <Footer />
    </div>
  );
};

export default IndexV1;
