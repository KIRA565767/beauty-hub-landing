import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AuthoritySection } from "./components/sections/AuthoritySection";
import { FinalConversionSection } from "./components/sections/FinalConversionSection";
import { HeroSection } from "./components/sections/HeroSection";
import { MarketRealitySection } from "./components/sections/MarketRealitySection";
import { ProductSystemSection } from "./components/sections/ProductSystemSection";
import { TelegramTerminalSection } from "./components/sections/TelegramTerminalSection";
import { StickyCTA } from "./components/ui/StickyCTA";
import { useHashScroll } from "./hooks/useHashScroll";

export function BeautyHubPage() {
  useHashScroll();

  return (
    <main className="beauty-hub min-h-screen bg-graphite text-dusty">
      <Header />
      <HeroSection />
      <MarketRealitySection />
      <ProductSystemSection />
      <AuthoritySection />
      <TelegramTerminalSection />
      <FinalConversionSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
