import { Reveal } from "../ReferenceMotion";

export function CaseExtractCard({ item, index }) {
  const number = item.number || String(index + 1).padStart(2, "0");
  const routeLabel = item.eyebrow || (item.route ? String(item.route).toUpperCase() : "ROUTE");
  const details = [
    { label: "Слепая зона", value: item.blindSpot },
    { label: "Коррекция", value: item.correction || item.fixing },
    { label: "Что проверяется", value: item.check },
  ].filter((detail) => detail.value);
  const hasNarrative = Boolean(item.title || item.text);

  return (
    <Reveal delay={0.03 * index} className="group relative overflow-hidden private-pass p-5 md:p-6">
      <div className="absolute bottom-6 left-0 top-6 w-px bg-gradient-to-b from-copper/90 via-copper/35 to-transparent" />

      <div className="flex items-start justify-between gap-4 border-b border-dusty/10 pb-5">
        <div className="min-w-0">
          <p className="pl-4 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">case {number} / route</p>
          <p className="mt-3 pl-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">{routeLabel}</p>
        </div>
        <span className="font-display text-5xl leading-none text-dusty/16 md:text-6xl">{number}</span>
      </div>

      {item.image ? (
        <div className="mt-6 overflow-hidden border border-copper/30 bg-graphite/75 p-2">
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name ? `${item.name} — case archive` : `Case ${number}`}
              className="aspect-[4/5] w-full object-cover object-center"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/30 via-transparent to-transparent" />
          </div>
        </div>
      ) : null}

      {(item.name || item.age) ? (
        <div className="mt-5 flex items-end justify-between gap-4 border-b border-dusty/10 pb-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">archive identity</p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-dusty">{item.name}</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">{item.age}</p>
        </div>
      ) : null}

      {item.title ? (
        <h3 className="mt-6 max-w-[18ch] font-display text-2xl font-semibold leading-tight text-dusty md:text-3xl">
          {item.title}
        </h3>
      ) : null}

      {item.text ? <p className="mt-4 text-base leading-8 text-mineral">{item.text}</p> : null}

      <div className={`${hasNarrative ? "mt-8" : "mt-6"} border-t border-dusty/10`}>
        {details.map((detail) => (
          <div
            key={detail.label}
            className="grid gap-3 border-b border-dusty/10 py-4 md:grid-cols-[148px_minmax(0,1fr)] md:gap-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">{detail.label}</p>
            <p className="text-sm leading-7 text-mineral md:text-[15px]">{detail.value}</p>
          </div>
        ))}
      </div>

      {item.href ? (
        <a
          href={item.href}
          className="mt-6 inline-flex max-w-fit items-center gap-2 border-t border-dusty/10 pt-4 text-sm font-semibold uppercase tracking-[0.08em] text-dusty transition hover:text-copper"
          aria-label={item.name ? `${item.cta || "ОТКРЫТЬ МАРШРУТ →"} ${item.name}` : item.cta || "ОТКРЫТЬ МАРШРУТ →"}
        >
          {item.cta || "ОТКРЫТЬ МАРШРУТ →"}
        </a>
      ) : null}
    </Reveal>
  );
}
