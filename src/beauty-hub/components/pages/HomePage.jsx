import { FinalConversionSection } from "../sections/FinalConversionSection";
import { HeroSection } from "../sections/HeroSection";
import { MarketRealitySection } from "../sections/MarketRealitySection";
import { ProjectHubSection } from "../sections/ProjectHubSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketRealitySection />
      <ProjectHubSection />
      <FinalConversionSection />
    </>
  );
}
