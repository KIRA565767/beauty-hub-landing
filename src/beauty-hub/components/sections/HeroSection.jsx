import { diagnosticNodes, hero } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function HeroSection() {
  return (
    <section id="top" className="private-archive-hero editorial-grain relative isolate min-h-svh overflow-hidden px-4 pb-10 pt-24 text-dusty md:px-8 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-[1440px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.58fr)] lg:items-center">
        <Reveal className="flex flex-col justify-center gap-7">
          <div className="max-w-[860px] border-l border-copper/45 pl-5 md:pl-7 lg:pl-8">
            <SectionLabel>{hero.tag}</SectionLabel>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-mineral">{hero.systemLine}</p>
            <h1 className="mt-7 max-w-[780px] font-display text-5xl leading-[0.96] text-dusty md:text-7xl lg:text-[5.5rem]">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-[720px] text-base leading-8 text-mineral md:text-lg md:leading-9">
              {hero.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={getTelegramStartLink("hero_primary")} haptic source="hero_primary">
                {hero.primaryCta}
              </Button>
              <Button href="#/routes" variant="secondary" source="hero_secondary">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="grid max-w-[860px] border-t border-dusty/14 pt-5 text-[11px] uppercase tracking-[0.14em] text-mineral sm:grid-cols-2 lg:grid-cols-4">
            {diagnosticNodes.map((node) => (
              <a
                key={node.number}
                href={node.path}
                className="grid grid-cols-[38px_1fr] gap-3 border-b border-dusty/10 px-4 py-4 transition hover:text-copper sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <span className="font-mono text-copper">{node.number}</span>
                <span className="text-dusty">{node.title}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06} className="relative min-h-[320px] md:min-h-[520px] lg:min-h-[620px]">
          <div className="absolute inset-0 rounded-none graphite-surface orange-rim-light" />
          <div className="absolute right-4 top-8 h-[77%] w-[72%] rotate-[-4deg] private-pass orange-rim-light p-5 md:right-6 md:top-10 md:p-6">
            <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
              <span>PRIVATE ACCESS</span>
              <span>04 ROUTES</span>
            </div>

            <div className="mt-10 pb-44">
              <p className="font-display text-4xl font-semibold leading-none text-dusty md:text-5xl">
                BEAUTY HUB
              </p>
              <p className="mt-5 max-w-[280px] text-sm leading-7 text-mineral md:max-w-[320px]">
                Route archive for technique, clients, independence and mentorship.
              </p>
            </div>

            <div className="absolute bottom-5 left-5 right-5 grid gap-2 md:bottom-6 md:left-6 md:right-6">
              {diagnosticNodes.map((node) => (
                <a
                  key={node.number}
                  href={node.path}
                  className="grid min-h-10 grid-cols-[34px_1fr] items-start gap-3 border-t border-dusty/10 pt-2 text-left transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-copper">{node.number}</span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-dusty">{node.title}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
