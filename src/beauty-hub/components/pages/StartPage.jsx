import { diagnosticNodes, productRoutes, routeRooms, startPage } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function StartPage() {
  return (
    <section id="start" className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <Reveal className="border-t border-dusty/18 pt-8">
          <SectionLabel>{startPage.tag}</SectionLabel>
          <h1 className="mt-6 max-w-[820px] font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
            {startPage.headline}
          </h1>
          <p className="mt-6 max-w-[680px] text-base leading-8 text-mineral md:text-lg">{startPage.copy}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {diagnosticNodes.map((node, index) => {
            const route = productRoutes[index];
            const room = route ? routeRooms[route.id] : null;

            return (
              <Reveal key={node.title} delay={index * 0.03}>
                <a
                  href={route?.path || node.path}
                  className="group private-pass block h-full p-5 transition hover:border-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper md:p-6"
                >
                  <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                    <span>{room?.roomCode || node.number}</span>
                    <span>{route?.eyebrow}</span>
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mineral">ближайший симптом</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-dusty group-hover:text-copper">
                    {node.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-mineral">{node.symptom}</p>
                  <div className="mt-6 border-t border-dusty/10 pt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">что проверить первым</p>
                    <p className="mt-3 text-sm leading-7 text-mineral">{node.breakdown}</p>
                    <p className="mt-4 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-copper">
                      {node.firstStep}
                    </p>
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">open route room</p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 private-pass orange-rim-light p-5 md:p-7">
          <p className="max-w-[640px] text-base leading-8 text-mineral">
            Если симптом не считывается, не выбирай наугад. Зайди в Telegram и начни со стартового определения узла.
          </p>
          <Button href={getTelegramStartLink(startPage.source)} haptic source={startPage.source} className="mt-7">
            {startPage.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
