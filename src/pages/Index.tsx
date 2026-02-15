import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSolution from "@/components/landing/ProblemSolution";
import WhyDifferent from "@/components/landing/WhyDifferent";
import ComparisonTable from "@/components/landing/ComparisonTable";
import HowItWorks from "@/components/landing/HowItWorks";
import MarketTrust from "@/components/landing/MarketTrust";
import Testimonials from "@/components/landing/Testimonials";
import PricingTable from "@/components/landing/PricingTable";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <WhyDifferent />
      <ComparisonTable />
      <HowItWorks />
      <MarketTrust />
      <Testimonials />
      <PricingTable />
      <CtaSection />
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Index;
