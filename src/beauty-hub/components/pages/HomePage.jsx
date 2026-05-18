import { FinalConversionSection } from "../sections/FinalConversionSection";
import { HeroSection } from "../sections/HeroSection";
import { MarketRealitySection } from "../sections/MarketRealitySection";
import { ProductSystemSection } from "../sections/ProductSystemSection";
import { CasesPreviewSection } from "../sections/CasesPreviewSection";
import { ProductCommercialSection } from "../sections/ProductCommercialSection";
import { AuthoritySection } from "../sections/AuthoritySection";
import { TelegramTerminalSection } from "../sections/TelegramTerminalSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketRealitySection />
      <ProductSystemSection />
      <CasesPreviewSection />
      <ProductCommercialSection />
      <AuthoritySection />
      <TelegramTerminalSection />
      <FinalConversionSection />
    </>
  );
}
