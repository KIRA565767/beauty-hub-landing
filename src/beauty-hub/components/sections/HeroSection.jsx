import londonBuilding from "../../assets/london-brutal-neutral.jpg";
import { diagnosticNodes, hero } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function HeroSection() {
  return (
    <section id="top" className="hero-hard-light relative isolate min-h-svh overflow-hidden px-4 pb-10 pt-24 text-dusty md:px-8 md:pt-28 lg:px-10">
      <img
        src={londonBuilding}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-[58%_50%] md:object-center"
        loading="eager"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-[1440px] gap-5 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
        <Reveal className="flex flex-col justify-end gap-5">
          <div className="max-w-[820px] border border-dusty/14 bg-graphite/72 p-5 md:p-7 lg:p-8">
            <SectionLabel>{hero.tag}</SectionLabel>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-mineral">{hero.systemLine}</p>
            <h1 className="mt-6 max-w-[760px] font-display text-5xl font-semibold leading-[0.96] text-dusty md:text-7xl lg:text-[5.7rem]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-mineral md:text-lg">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={getTelegramStartLink("hero_primary")} haptic source="hero_primary">
                {hero.primaryCta}
              </Button>
              <Button href="#/routes" variant="secondary" source="hero_secondary">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="grid max-w-[820px] border-y border-dusty/16 bg-graphite/58 text-[11px] uppercase tracking-[0.14em] text-mineral sm:grid-cols-3">
            {diagnosticNodes.slice(0, 3).map((node) => (
              <a key={node.number} href={node.path} className="grid grid-cols-[38px_1fr] gap-3 border-b border-dusty/10 px-4 py-3 transition hover:text-copper sm:border-b-0 sm:border-r sm:border-dusty/10 sm:last:border-r-0">
                <span className="font-mono text-copper">{node.number}</span>
                <span>{node.title}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06} className="border border-dusty/16 bg-graphite/70">
          <div className="border-b border-dusty/12 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-mineral">
            Индекс системы / 04 узла
          </div>
          <div className="divide-y divide-dusty/10">
            {diagnosticNodes.map((node) => (
              <a key={node.number} href={node.path} className="group grid min-h-14 grid-cols-[42px_1fr] gap-3 px-5 py-3 transition hover:bg-copper/10">
                <span className="font-mono text-xs text-copper">{node.number}</span>
                <span>
                  <span className="block font-display text-2xl font-semibold leading-none text-dusty group-hover:text-copper">{node.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-mineral">{node.short}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="border-t border-copper/45 bg-ivory p-4 text-graphite">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">Стартовая диагностика</p>
            <p className="mt-4 text-sm leading-6">
              Показывает, какой узел сейчас держит рост: техника, клиенты, найм или отсутствие личной корректировки.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
