import { hero } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { TerminalPanel } from "../ui/TerminalPanel";

export function HeroSection() {
  return (
    <section id="top" className="hero-hard-light relative isolate overflow-hidden px-4 pb-16 pt-28 text-dusty md:min-h-[90vh] md:px-8 md:pt-32 lg:px-10">
      <img
        src="/images/hero-placeholder.svg"
        alt="Графитовый архитектурный плейсхолдер Beauty Hub"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-20"
        loading="eager"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(234,234,234,0.06)_1px,transparent_1px)] bg-[length:120px_120px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <SectionLabel>{hero.tag}</SectionLabel>
          <h1 className="mt-8 max-w-[820px] font-display text-5xl uppercase leading-[0.98] text-dusty md:text-7xl lg:text-8xl">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-[660px] text-base leading-8 text-mineral md:text-lg md:leading-9">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={getTelegramStartLink("hero_primary")} haptic>
              {hero.primaryCta}
            </Button>
            <Button href="#products" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.08}>
          <TerminalPanel title={hero.terminalTitle} action={hero.terminalAction} />
        </Reveal>
      </div>
    </section>
  );
}
