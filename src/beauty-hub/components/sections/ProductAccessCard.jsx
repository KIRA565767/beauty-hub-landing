import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";

export function ProductAccessCard({ item, index }) {
  const number = item.number || String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={0.03 * index} className="group relative flex h-full flex-col overflow-hidden private-pass p-5 md:p-6">
      <div className="absolute bottom-6 left-0 top-6 w-px bg-gradient-to-b from-copper/90 via-copper/35 to-transparent" />

      <div className="flex items-start justify-between gap-4 border-b border-dusty/10 pb-5">
        <div className="min-w-0">
          <p className="pl-4 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">private access</p>
          <p className="mt-3 pl-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">{item.label}</p>
        </div>
        <span className="font-display text-5xl leading-none text-dusty/16 md:text-6xl">{number}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">route / {item.route}</p>
        <h3 className="mt-4 max-w-[18ch] font-display text-2xl font-semibold leading-tight text-dusty md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-mineral md:text-[15px]">{item.text}</p>

        <div className="mt-8 border-t border-dusty/10">
          <div className="grid gap-3 border-b border-dusty/10 py-4 md:grid-cols-[140px_minmax(0,1fr)] md:gap-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">solves</p>
            <p className="text-sm leading-7 text-mineral md:text-[15px]">{item.solves}</p>
          </div>
          <div className="grid gap-3 py-4 md:grid-cols-[140px_minmax(0,1fr)] md:gap-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">access model</p>
            <p className="text-sm leading-7 text-mineral md:text-[15px]">{item.accessModel}</p>
          </div>
        </div>

        <Button
          href={item.href}
          variant="secondary"
          source={`product_access_${item.id}`}
          className="mt-7 w-full justify-center md:w-auto md:justify-start"
        >
          {item.cta}
        </Button>
      </div>
    </Reveal>
  );
}
