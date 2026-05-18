import { authority } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function AuthoritySection() {
  return (
    <section id="authority" className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1fr)] lg:items-end">
        <Reveal className="private-pass orange-rim-light min-h-[360px] p-5 md:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">JULIA / THE ARCHITECT</p>
          <div className="mt-20 border-l border-copper/50 pl-5">
            <p className="font-display text-5xl font-semibold leading-none text-dusty md:text-7xl">
              {authority.stat}
            </p>
            <p className="mt-5 text-sm leading-7 text-mineral">
              Placeholder до съемки: портрет, руки, инструменты и материал будут добавлены позже.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="border-t border-dusty/18 pt-8">
          <SectionLabel>{authority.tag}</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] md:text-6xl">{authority.headline}</h2>
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
