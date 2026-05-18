import { homepageProducts, productAccess } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";
import { ProductAccessCard } from "./ProductAccessCard";

export function ProductCommercialSection() {
  return (
    <section className="editorial-graphite editorial-grain px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-end">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>PRODUCT SYSTEM / ACCESS</SectionLabel>
            <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_220px] xl:items-end">
              <h2 className="max-w-[900px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
                {homepageProducts.headline || "У Beauty Hub не один вход. У каждой проблемы свой продуктовый маршрут."}
              </h2>
              <p className="max-w-[220px] font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-mineral">
                numbered access passes
                <br />
                route / solves / model
              </p>
            </div>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-mineral md:text-lg">
              {homepageProducts.copy ||
                "Техника открывается через курс и материалы, клиентский поток — через разбор профиля, оффера и переписки, самостоятельность — через план выхода, а личный разбор нужен там, где узлы смешаны."}
            </p>
          </Reveal>

          <Reveal delay={0.04} className="relative overflow-hidden ivory-material p-5 md:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-copper/80 via-copper/22 to-transparent" />
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">private product logic</p>
            <h3 className="mt-6 font-display text-4xl font-semibold leading-none">
              Сначала маршрут. Потом формат доступа.
            </h3>
            <p className="mt-6 border-y border-graphite/14 py-6 text-base leading-8">
              У каждого узла свой способ доступа: курс, разбор, план перехода или личная корректировка. Поэтому маршрут выбирается по проблеме, а не по громкости обещания.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {productAccess.map((item, index) => (
            <ProductAccessCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
