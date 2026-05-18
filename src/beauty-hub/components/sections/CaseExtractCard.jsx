import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";

export function CaseExtractCard({ item, index }) {
  return (
    <Reveal delay={0.03 * index} className="private-pass orange-rim-light p-5 md:p-6">
      <div className="flex items-start justify-between gap-4 border-b border-dusty/10 pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
            case {item.number || String(index + 1).padStart(2, "0")} / route
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">{item.eyebrow}</p>
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-dusty md:text-3xl">
        {item.title}
      </h3>
      <p className="mt-4 text-base leading-8 text-mineral">{item.text}</p>

      <div className="mt-6 space-y-4 border-t border-dusty/10 pt-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">Слепая зона</p>
          <p className="mt-2 text-sm leading-7 text-mineral">{item.blindSpot}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">Что исправлялось</p>
          <p className="mt-2 text-sm leading-7 text-mineral">{item.fixing}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">Что проверяется</p>
          <p className="mt-2 text-sm leading-7 text-mineral">{item.check}</p>
        </div>
      </div>

      <Button href={item.route} variant="secondary" source={`case_${item.id}`} className="mt-7 w-full justify-center">
        {item.cta}
      </Button>
    </Reveal>
  );
}