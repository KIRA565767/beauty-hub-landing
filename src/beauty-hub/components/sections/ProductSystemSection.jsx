import { productRoutes, productSystem } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";
import { ProductCoverCard } from "./ProductCoverCard";

export function ProductSystemSection() {
  const routeMessage = productSystem.routeMessage || productSystem.diagnosticMessage;

  return (
    <section id="products" className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>{productSystem.tag}</SectionLabel>
            <h2 className="mt-6 max-w-[860px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
              {productSystem.headline}
            </h2>
            <p className="mt-6 max-w-[680px] text-base leading-8 text-mineral md:text-lg">{productSystem.copy}</p>
          </Reveal>
          <Reveal delay={0.04}>
            <aside className="private-pass orange-rim-light p-5 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
                ROUTE ACCESS
              </p>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-none text-dusty">
                Выбери ближайший маршрут.
              </h3>
              <p className="mt-4 text-sm leading-7 text-mineral">
                На главной карточки показывают только вход. Детали, сигналы и первый шаг открываются внутри комнаты.
              </p>
            </aside>
          </Reveal>
        </div>

        <Reveal className="mt-10 max-w-[680px] border-l border-copper pl-4">
          {routeMessage.split("\n").map((line) => (
            <p key={line} className="font-display text-3xl font-semibold leading-tight text-dusty md:text-4xl">
              {line}
            </p>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productRoutes.map((route) => (
            <ProductCoverCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
