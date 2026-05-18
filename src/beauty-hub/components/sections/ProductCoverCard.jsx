import { Button } from "../ui/Button";

const routeDescriptors = {
  technique: "Техника / материалы / скорость / чистота",
  "client-flow": "Профиль / оффер / переписка / запись",
  independence: "Выход / график / цена / самостоятельность",
  mentorship: "Разбор / корректировка / маршрут / сопровождение",
};

export function ProductCoverCard({ route }) {
  return (
    <article
      id={route.articleId}
      className="route-card group private-pass orange-rim-light flex min-h-[280px] flex-col justify-between p-5 text-dusty transition duration-300 hover:-translate-y-[3px] md:min-h-[340px] md:p-6"
    >
      <div>
        <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
          <span>{route.number}</span>
          <span>{route.eyebrow}</span>
        </div>

        <h3 className="mt-12 font-display text-4xl font-semibold leading-none text-dusty md:text-5xl">
          {route.title}
        </h3>

        <p className="mt-5 text-sm uppercase leading-6 tracking-[0.08em] text-mineral">
          {routeDescriptors[route.id] || route.text}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-copper/35 pt-5 sm:flex-row sm:items-center sm:justify-between xl:flex-col xl:items-start 2xl:flex-row 2xl:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
          ACCESS ROUTE
        </p>
        <Button href={route.path} source={`${route.source}_detail`} variant="secondary" className="w-full justify-center sm:w-auto xl:w-full 2xl:w-auto">
          ОТКРЫТЬ МАРШРУТ →
        </Button>
      </div>
    </article>
  );
}
