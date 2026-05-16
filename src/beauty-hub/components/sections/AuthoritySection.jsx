import { authority } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function AuthoritySection() {
  return (
    <section id="authority" className="editorial-concrete px-4 py-16 text-dusty md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal className="border-y border-dusty/16 bg-graphite/72 p-5 md:p-7">
          <SectionLabel>{authority.tag}</SectionLabel>
          <p className="mt-8 font-display text-5xl font-semibold leading-none text-copper md:text-7xl">
            {authority.stat}
          </p>
        </Reveal>

        <Reveal delay={0.04} className="border-t border-dusty/18 pt-8">
          <h2 className="font-display text-4xl font-semibold leading-[1.02] md:text-6xl">{authority.headline}</h2>
          <p className="mt-6 max-w-[720px] text-base leading-8 text-mineral md:text-lg">{authority.lead}</p>
          <ul className="mt-8 grid gap-3">
            {authority.areas.map((area, index) => (
              <li key={area} className="grid min-h-11 grid-cols-[40px_1fr] items-center gap-3 border-t border-dusty/10 py-3">
                <span className="font-mono text-xs text-copper">0{index + 1}</span>
                <span className="text-base leading-7 text-dusty">{area}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
