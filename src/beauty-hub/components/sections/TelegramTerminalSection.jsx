import { telegram } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function TelegramTerminalSection() {
  return (
    <section id="telegram" className="editorial-concrete min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <Reveal>
          <SectionLabel>{telegram.tag}</SectionLabel>
          <h2 className="mt-6 max-w-[860px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            {telegram.headline}
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-8 text-mineral md:text-lg">
            {telegram.copy}
          </p>

          <div className="mt-9 border-y border-dusty/16 bg-warm/54 p-5 md:p-7">
            <div className="mb-6 border-b border-dusty/10 pb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
              Private access / first step
            </div>
            <ul className="grid gap-4">
              {telegram.promise.map((item, index) => (
                <li key={item} className="grid grid-cols-[40px_1fr] gap-3 border-t border-dusty/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="font-mono text-xs text-copper">0{index + 1}</span>
                  <span className="text-base leading-7 text-mineral">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="bg-ivory p-5 text-graphite md:p-7 lg:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">Стартовая диагностика</p>
          <h3 className="mt-6 font-display text-4xl font-semibold leading-none">Первый шаг без лишнего обучения.</h3>
          <p className="mt-6 border-y border-graphite/14 py-6 text-lg leading-8">
            {telegram.copy}
          </p>
          <Button href={getTelegramStartLink(telegram.source)} variant="dark" haptic source={telegram.source} className="mt-8">
            {telegram.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
