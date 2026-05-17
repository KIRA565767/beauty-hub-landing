import { Button } from "../ui/Button";

export function ProductCoverCard({ route, node, room }) {
  const roomCode = room?.roomCode || route.number;
  const roomName = room?.roomName || route.title;
  const signal = node?.symptom || route.text;
  const firstStep = node?.firstStep || "Открыть маршрут и определить первый фикс.";

  return (
    <article
      id={route.articleId}
      className="route-card group min-w-[82vw] scroll-ml-4 snap-start border-y border-dusty/16 bg-graphite/74 text-dusty transition duration-300 hover:border-copper hover:shadow-[0_0_80px_rgba(184,115,51,0.16)] sm:min-w-[420px] lg:min-w-[480px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-dusty/10 bg-concrete">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,232,220,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(239,232,220,0.05)_1px,transparent_1px)] bg-[size:38px_38px] opacity-45" />
        <div className="absolute left-0 top-0 h-full w-[3px] bg-copper transition duration-300 group-hover:w-[5px]" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">
          <span>PRIVATE ACCESS</span>
          <span>{roomCode}</span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">route room pass</p>
          <p className="mt-4 max-w-[320px] font-display text-4xl font-semibold leading-none text-dusty md:text-5xl">
            {roomName}
          </p>
        </div>
        <div className="absolute bottom-8 right-8 h-16 w-16 border border-copper/50 transition duration-300 group-hover:border-copper md:h-20 md:w-20" />
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
          <span>{route.eyebrow}</span>
          <span>{route.number}</span>
        </div>
        <h3 className="mt-6 font-display text-4xl font-semibold leading-none text-dusty">{route.title}</h3>
        <p className="mt-5 text-base leading-7 text-mineral">{route.text}</p>

        <div className="mt-6 space-y-4 border-y border-dusty/10 py-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">signal</p>
            <p className="mt-2 text-sm leading-7 text-mineral">{signal}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">first step</p>
            <p className="mt-2 text-sm leading-7 text-dusty">{firstStep}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">access route</p>
          <Button href={route.path} source={`${route.source}_detail`} variant="secondary" className="w-full sm:w-auto">
            СМОТРЕТЬ МАРШРУТ →
          </Button>
        </div>
      </div>
    </article>
  );
}
