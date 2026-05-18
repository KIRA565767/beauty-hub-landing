import { productRoutes, routeHall, routeRooms } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function RouteHallIntroSection() {
  return (
    <section className="editorial-graphite editorial-grain px-4 pb-8 pt-24 text-dusty md:px-8 md:pb-12 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1440px] border-t border-dusty/18 pt-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.55fr)] lg:items-end">
          <Reveal>
            <SectionLabel>{routeHall.tag}</SectionLabel>
            <h1 className="mt-6 max-w-[900px] font-display text-5xl font-semibold leading-[0.96] md:text-7xl lg:text-8xl">
              {routeHall.headline}
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-mineral md:text-lg md:leading-9">{routeHall.copy}</p>
          </Reveal>

          <Reveal delay={0.04} className="private-pass orange-rim-light p-5 md:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">private route map</p>
            <div className="mt-6 space-y-3">
              {productRoutes.map((route) => {
                const room = routeRooms[route.id];

                return (
                  <a
                    key={route.id}
                    href={route.path}
                    className="group block border-t border-dusty/10 py-4 transition hover:border-copper"
                  >
                    <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">
                      <span>{room?.roomCode}</span>
                      <span className="text-copper">ACCESS</span>
                    </div>
                    <p className="mt-3 font-display text-2xl font-semibold leading-tight text-dusty transition group-hover:text-copper">
                      {room?.roomName || route.title}
                    </p>
                  </a>
                );
              })}
            </div>
            <p className="mt-6 border-l border-copper/70 pl-4 text-sm leading-7 text-mineral">{routeHall.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
