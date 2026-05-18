import { telegram } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function TelegramTerminalSection() {
  return (
    <section id="telegram" className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <Reveal className="border-t border-dusty/18 pt-8">
          <SectionLabel>{telegram.tag}</SectionLabel>
          <h2 className="mt-6 max-w-[860px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            {telegram.headline}
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-8 text-mineral md:text-lg">
            {telegram.copy}
          </p>

          <div className="mt-9 grid gap-3">
            {telegram.promise.map((item, index) => (
              <div key={item} className="private-pass p-5 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                  access {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-base leading-7 text-mineral">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="ivory-material orange-rim-light p-5 md:p-7 lg:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">Private access / live space</p>
          <h3 className="mt-6 font-display text-4xl font-semibold leading-none">
            Закрытый вход в живое пространство Beauty Hub.
          </h3>
          <p className="mt-6 border-y border-graphite/14 py-6 text-lg leading-8">
            Внутри остаются маршруты, материалы, разборы и рабочие инструкции без публичного шума.
          </p>
          <Button href={getTelegramStartLink(telegram.source)} variant="dark" haptic source={telegram.source} className="mt-8">
            {telegram.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
