import { finalConversion } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function FinalConversionSection() {
  return (
    <section id="final-conversion" className="relative overflow-hidden bg-graphite px-4 py-24 text-dusty md:px-8 md:py-32 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-px bg-copper/50" aria-hidden="true" />
      <Reveal className="mx-auto max-w-[980px] text-center">
        <div className="flex justify-center">
          <SectionLabel>{finalConversion.tag}</SectionLabel>
        </div>
        <h2 className="mt-8 font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl">
          {finalConversion.headline}
        </h2>
        <p className="mx-auto mt-7 max-w-[660px] text-base leading-8 text-mineral md:text-lg">
          {finalConversion.subheadline}
        </p>
        <Button href={getTelegramStartLink("final_conversion")} haptic className="mt-9">
          {finalConversion.cta}
        </Button>
      </Reveal>
    </section>
  );
}
