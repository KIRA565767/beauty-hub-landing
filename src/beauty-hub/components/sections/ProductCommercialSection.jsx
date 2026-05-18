import { homepageProducts, productAccess } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";
import { ProductAccessCard } from "./ProductAccessCard";

export function ProductCommercialSection() {
  return (
    <section className="editorial-graphite editorial-grain px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>PRODUCT SYSTEM / ACCESS</SectionLabel>
            <h2 className="mt-6 max-w-[900px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
              {homepageProducts.headline || "У Beauty Hub не один вход. У каждой проблемы свой продуктовый маршрут."}
            </h2>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-mineral md:text-lg">
              {homepageProducts.copy ||
                "Техника открывается через курс и материалы, клиентский поток — через разбор профиля, оффера и переписки, самостоятельность — через план выхода, а личный разбор нужен там, где узлы смешаны."}
            </p>
          </Reveal>

          <Reveal delay={0.04} className="ivory-material orange-rim-light p-5 md:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">private product logic</p>
            <h3 className="mt-6 font-display text-4xl font-semibold leading-none">
              Это не блог и не одна ссылка на Telegram.
            </h3>
            <p className="mt-6 border-y border-graphite/14 py-6 text-base leading-8">
              У каждого узла свой способ доступа: курс, разбор, план перехода или личная корректировка. Поэтому маршрут выбирается по проблеме, а не по громкости обещания.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productAccess.map((item, index) => (
            <ProductAccessCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}