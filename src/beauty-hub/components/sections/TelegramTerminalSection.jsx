import { telegram } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function TelegramTerminalSection() {
  return (
    <section id="telegram" className="editorial-concrete px-4 py-20 text-dusty md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(420px,0.6fr)] lg:items-center">
        <Reveal>
          <SectionLabel>{telegram.tag}</SectionLabel>
          <h2 className="mt-7 max-w-[900px] font-display text-4xl uppercase leading-none md:text-6xl lg:text-7xl">
            {telegram.headline}
          </h2>
          <p className="mt-7 max-w-[620px] text-base leading-8 text-mineral md:text-lg">
            {telegram.copy}
          </p>
          <Button href={getTelegramStartLink("telegram_terminal")} haptic className="mt-9">
            {telegram.cta}
          </Button>
        </Reveal>

        <Reveal delay={0.06} className="border border-copper/30 bg-graphite p-5 shadow-terminal md:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-dusty/10 pb-4 font-mono text-xs uppercase text-mineral">
            <span>{telegram.terminalLabel}</span>
            <span className="text-orange">{telegram.liveStatus}</span>
          </div>
          <div className="mt-6 divide-y divide-dusty/10">
            {telegram.feed.map((item) => (
              <article key={item.status} className="grid gap-3 py-5 sm:grid-cols-[128px_1fr]">
                <span className="font-mono text-xs uppercase text-copper">{item.status}</span>
                <h3 className="text-xl font-semibold uppercase leading-7 text-dusty">{item.title}</h3>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
