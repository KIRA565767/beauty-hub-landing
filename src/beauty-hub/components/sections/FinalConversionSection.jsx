import { finalConversion } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function FinalConversionSection() {
  return (
    <section id="final-conversion" className="editorial-graphite editorial-grain px-4 py-16 text-dusty md:px-8 md:py-24 lg:px-10">
      <Reveal className="relative z-10 mx-auto max-w-[1180px] private-pass orange-rim-light">
        <div className="p-6 md:p-9 lg:p-10">
          <SectionLabel>{finalConversion.tag}</SectionLabel>
          <h2 className="mt-6 max-w-[720px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            {finalConversion.headline}
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-8 text-mineral md:text-lg">
            {finalConversion.subheadline}
          </p>
          <Button href={getTelegramStartLink(finalConversion.source)} haptic source={finalConversion.source} className="mt-8">
            {finalConversion.primaryCta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
