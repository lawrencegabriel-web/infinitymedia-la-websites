import Navbar from "../components/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ManifestoSection from "../components/landing/ManifestoSection";
import PreschoolBanner from "../components/landing/PreschoolBanner";
import AmenitiesSection from "../components/landing/AmenitiesSection";
import MembershipSection from "../components/landing/MembershipSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <PreschoolBanner />
      <AmenitiesSection />
      <MembershipSection />
      <Footer />
    </div>
  );
};

export default Index;
