import { authority } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function AuthoritySection() {
  return (
    <section id="authority" className="bg-graphite px-4 py-20 text-dusty md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(360px,0.55fr)_minmax(0,0.75fr)] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden border border-dusty/12 bg-concrete">
            <img src={authority.imageSrc} alt={authority.imageAlt} loading="lazy" className="aspect-[4/5] w-full object-cover grayscale" />
            <div className="absolute inset-x-0 bottom-0 border-t border-copper/40 bg-graphite/80 p-4 font-mono text-xs uppercase text-copper">
              {authority.placeholderLabel}
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.05}>
          <SectionLabel>{authority.tag}</SectionLabel>
          <p className="mt-8 max-w-[820px] font-display text-5xl uppercase leading-none text-dusty md:text-7xl">
            {authority.anchor}
          </p>
          <h2 className="mt-8 max-w-[760px] text-xl font-semibold uppercase leading-8 text-copper md:text-2xl md:leading-9">
            {authority.headline}
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-8 text-mineral md:text-lg">
            {authority.copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
