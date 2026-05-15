import { marketReality } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function MarketRealitySection() {
  return (
    <section id="market" className="editorial-concrete px-4 py-20 text-dusty md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.65fr)] lg:items-start">
        <Reveal>
          <SectionLabel>{marketReality.tag}</SectionLabel>
          <h2 className="mt-7 max-w-[920px] font-display text-4xl uppercase leading-none md:text-6xl lg:text-7xl">
            {marketReality.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="border-y border-dusty/14">
          <div className="grid gap-2 border-b border-copper/35 py-4 font-mono text-xs uppercase text-orange sm:grid-cols-[1fr_auto]">
            <span>{marketReality.marker}</span>
            <span className="text-copper">{marketReality.systemLine}</span>
          </div>
          <ul className="divide-y divide-dusty/10">
            {marketReality.bullets.map((item, index) => (
              <li key={item} className="grid grid-cols-[42px_1fr] gap-4 py-5">
                <span className="font-mono text-sm text-copper">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base leading-7 text-dusty md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
