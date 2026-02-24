import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import SocialProof from "@/components/SocialProof";
import VossBlock from "@/components/VossBlock";
import FacilitiesGallery from "@/components/FacilitiesGallery";
import ComparisonTable from "@/components/ComparisonTable";
import PricingTable from "@/components/PricingTable";
import SavingsCalculator from "@/components/SavingsCalculator";
import Testimonials from "@/components/Testimonials";
import GuiltRelease from "@/components/GuiltRelease";
import RiskReversal from "@/components/RiskReversal";
import HowItWorks from "@/components/HowItWorks";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FomoNotifications from "@/components/FomoNotifications";
import ExitIntent from "@/components/ExitIntent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main>
      {/* Sticky CTA Bar */}
      <StickyBar />

      {/* FOMO Notifications */}
      <FomoNotifications />

      {/* Exit Intent Popup */}
      <ExitIntent />

      {/* Accessibility Widget */}
      <AccessibilityWidget />

      {/* Cookie Consent */}
      <CookieConsent />

      {/* 1. Hero - The Hook */}
      <Hero />

      {/* 1.5. Video Section */}
      <VideoSection />

      {/* 2. Authority & Social Proof */}
      <SocialProof />

      {/* 3. Voss Psychology - No-Oriented Questions */}
      <VossBlock />

      {/* 4. Facilities Gallery */}
      <FacilitiesGallery />

      {/* 4.5. Comparison Table */}
      <ComparisonTable />

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 5.5. Guilt Release - Clearing the barrier */}
      <GuiltRelease />

      {/* 6. Pricing Anchoring */}
      <PricingTable />

      {/* 7. Savings Calculator */}
      <SavingsCalculator />

      {/* 8. Risk Reversal */}
      <RiskReversal />

      {/* 8.5. How It Works - 3 Steps */}
      <HowItWorks />

      {/* 9. Checkout Form */}
      <CheckoutForm />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
