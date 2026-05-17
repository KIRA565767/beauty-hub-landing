import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function RouteDetailPage({ route, node }) {
  if (!route || !node) return null;

  return (
    <section className="editorial-concrete min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.58fr)] lg:items-start">
        <Reveal className="border-t border-dusty/18 pt-8">
          <SectionLabel>{route.eyebrow} / private route</SectionLabel>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">{route.number}</p>
          <h1 className="mt-6 max-w-[760px] font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
            {route.title}
          </h1>
          <p className="mt-6 max-w-[680px] text-base leading-8 text-mineral md:text-lg">{route.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={getTelegramStartLink(route.source)} haptic source={route.source}>
              {route.cta}
            </Button>
            <Button href="#/routes" variant="secondary" source={`${route.source}_back`}>
              ВСЕ МАРШРУТЫ
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="border-y border-dusty/16 bg-graphite/74">
          <div className="aspect-[4/3] border-b border-dusty/10 bg-concrete">
            <img
              src={`${import.meta.env.BASE_URL}${route.image}`}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="p-5 md:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">сигнал маршрута</p>
            <p className="mt-5 text-base leading-7 text-mineral">{node.symptom}</p>
            <div className="mt-6 border-y border-dusty/10 py-5">
              <p className="text-base leading-7 text-dusty">{node.breakdown}</p>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-copper">
              {node.firstStep}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
