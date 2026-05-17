import { FinalConversionSection } from "../sections/FinalConversionSection";
import { ProductSystemSection } from "../sections/ProductSystemSection";
import { RouteHallIntroSection } from "../sections/RouteHallIntroSection";

export function RoutesPage() {
  return (
    <>
      <RouteHallIntroSection />
      <ProductSystemSection />
      <FinalConversionSection />
    </>
  );
}
