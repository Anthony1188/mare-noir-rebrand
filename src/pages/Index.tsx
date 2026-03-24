import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import AtelierSection from "@/components/AtelierSection";
import CountdownSection from "@/components/CountdownSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <StorySection />
      <AtelierSection />
      <CountdownSection />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;
