import { productRoutes, routeHall, routeRooms } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

function HallCard({ route }) {
  const room = routeRooms[route.id];

  return (
    <Reveal className="private-pass orange-rim-light p-5 md:p-6">
      <div className="flex items-start justify-between gap-4 border-b border-dusty/10 pb-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">{room?.roomCode}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-none text-dusty md:text-4xl">
            {route.title}
          </h2>
        </div>
        <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-mineral">{route.number}</span>
      </div>

      <div className="mt-5 space-y-5">
        <p className="text-base leading-8 text-mineral">{route.text}</p>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="border-l border-copper/60 pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">signal</p>
            <p className="mt-3 text-sm leading-7 text-mineral">{route.hallSignal}</p>
          </div>
          <div className="border-l border-dusty/14 pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">entry result</p>
            <p className="mt-3 text-sm leading-7 text-mineral">{route.hallOutcome}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={route.path} source={`${route.source}_hall_open`}>
            {route.cta}
          </Button>
          <Button
            href={getTelegramStartLink(room?.source || route.source)}
            variant="secondary"
            haptic
            source={`${route.source}_hall_telegram`}
          >
            В TELEGRAM СРАЗУ
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function RoutesPage() {
  return (
    <section className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <Reveal className="grid gap-8 border-t border-dusty/18 pt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_400px]">
          <div>
            <SectionLabel>{routeHall.tag}</SectionLabel>
            <h1 className="mt-6 max-w-[900px] font-display text-5xl font-semibold leading-[0.96] md:text-7xl lg:text-8xl">
              {routeHall.headline}
            </h1>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-mineral md:text-lg md:leading-9">{routeHall.copy}</p>
            <p className="mt-6 max-w-[640px] border-l border-copper/70 pl-5 text-sm uppercase leading-7 tracking-[0.08em] text-dusty">
              {routeHall.note}
            </p>
          </div>

          <aside className="private-pass p-5 md:p-6 lg:sticky lg:top-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">{routeHall.indexTitle}</p>
            <div className="mt-5 space-y-4 border-t border-dusty/10 pt-5">
              {routeHall.index.map((item, index) => (
                <div key={item} className="grid gap-3 md:grid-cols-[44px_minmax(0,1fr)]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-mineral">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2">
          {productRoutes.map((route) => (
            <HallCard key={route.id} route={route} />
          ))}
        </div>

        <Reveal className="mt-12 border-t border-dusty/16 pt-8 md:mt-16 md:pt-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_auto] md:items-end">
            <div>
              <SectionLabel>final access</SectionLabel>
              <h2 className="mt-5 max-w-[820px] font-display text-4xl font-semibold leading-tight text-dusty md:text-6xl">
                {routeHall.finalTitle}
              </h2>
              <p className="mt-5 max-w-[720px] text-base leading-8 text-mineral">{routeHall.finalCopy}</p>
            </div>
            <Button href={getTelegramStartLink("route_hall_final")} haptic source="route_hall_final">
              ВОЙТИ В TELEGRAM →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
