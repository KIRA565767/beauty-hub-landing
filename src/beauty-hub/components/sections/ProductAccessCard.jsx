import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";

export function ProductAccessCard({ item, index }) {
  return (
    <Reveal delay={0.03 * index} className="private-pass p-5 md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
        access {item.number || String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">{item.label}</p>

      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-dusty md:text-3xl">
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-mineral">{item.text}</p>

      <div className="mt-6 space-y-4 border-t border-dusty/10 pt-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">route</p>
          <p className="mt-2 text-sm leading-7 text-dusty">{item.route}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">solves</p>
          <p className="mt-2 text-sm leading-7 text-mineral">{item.solves}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">access model</p>
          <p className="mt-2 text-sm leading-7 text-mineral">{item.accessModel}</p>
        </div>
      </div>

      <Button href={item.href} variant="secondary" source={`product_access_${item.id}`} className="mt-7 w-full justify-center">
        {item.cta}
      </Button>
    </Reveal>
  );
}