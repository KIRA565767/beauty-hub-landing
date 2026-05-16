import { productRoutes, productSystem } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";
import { TerminalPanel } from "../ui/TerminalPanel";
import { ProductCoverCard } from "./ProductCoverCard";

export function ProductSystemSection() {
  return (
    <section id="products" className="editorial-concrete px-4 py-16 text-dusty md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>{productSystem.tag}</SectionLabel>
            <h2 className="mt-6 max-w-[860px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
              {productSystem.headline}
            </h2>
            <p className="mt-6 max-w-[680px] text-base leading-8 text-mineral md:text-lg">{productSystem.copy}</p>
          </Reveal>
          <Reveal delay={0.04}>
            <TerminalPanel />
          </Reveal>
        </div>

        <Reveal className="mt-10 max-w-[680px] border-l border-copper pl-4">
          {productSystem.diagnosticMessage.split("\n").map((line) => (
            <p key={line} className="font-display text-3xl font-semibold leading-tight text-dusty md:text-4xl">
              {line}
            </p>
          ))}
        </Reveal>

        <div className="-mx-4 mt-8 overflow-x-auto px-4 pb-4 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10 product-snap snap-x snap-mandatory">
          <div className="flex gap-4 pr-4 md:gap-5 md:pr-8 lg:pr-10">
            {productRoutes.map((route) => (
              <ProductCoverCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
