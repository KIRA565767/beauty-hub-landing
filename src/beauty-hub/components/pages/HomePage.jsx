import { FinalConversionSection } from "../sections/FinalConversionSection";
import { HeroSection } from "../sections/HeroSection";
import { MarketRealitySection } from "../sections/MarketRealitySection";
import { ProductSystemSection } from "../sections/ProductSystemSection";
import { AuthoritySection } from "../sections/AuthoritySection";
import { TelegramTerminalSection } from "../sections/TelegramTerminalSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketRealitySection />
      <ProductSystemSection />
      <AuthoritySection />
      <TelegramTerminalSection />
      <FinalConversionSection />
    </>
  );
}
