import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";

export function CaseExtractCard({ item, index }) {
  const number = item.number || String(index + 1).padStart(2, "0");
  const details = [
    { label: "Слепая зона", value: item.blindSpot },
    { label: "Что исправлялось", value: item.fixing },
    { label: "Что проверяется", value: item.check },
  ];

  return (
    <Reveal delay={0.03 * index} className="group relative overflow-hidden private-pass p-5 md:p-6">
      <div className="absolute bottom-6 left-0 top-6 w-px bg-gradient-to-b from-copper/90 via-copper/35 to-transparent" />

      <div className="flex items-start justify-between gap-4 border-b border-dusty/10 pb-5">
        <div className="min-w-0">
          <p className="pl-4 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">case {number} / route</p>
          <p className="mt-3 pl-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">{item.eyebrow}</p>
        </div>
        <span className="font-display text-5xl leading-none text-dusty/16 md:text-6xl">{number}</span>
      </div>

      <h3 className="mt-6 max-w-[18ch] font-display text-2xl font-semibold leading-tight text-dusty md:text-3xl">
        {item.title}
      </h3>
      <p className="mt-4 text-base leading-8 text-mineral">{item.text}</p>

      <div className="mt-8 border-t border-dusty/10">
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

      <Button
        href={item.route}
        variant="secondary"
        source={`case_${item.id}`}
        className="mt-7 w-full justify-center md:w-auto md:justify-start"
      >
        {item.cta}
      </Button>
    </Reveal>
  );
}
