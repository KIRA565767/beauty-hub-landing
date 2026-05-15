import { useRef } from "react";
import { productSystem } from "../../content/landing";
import { useIntersectionActive } from "../../hooks/useIntersectionActive";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";
import { ProductCoverCard } from "./ProductCoverCard";

export function ProductSystemSection() {
  const carouselRef = useRef(null);
  const { activeIndex, setItemRef } = useIntersectionActive(productSystem.products.length, {
    rootRef: carouselRef,
    threshold: 0.62,
  });

  return (
    <section id="products" className="overflow-hidden bg-dusty px-0 py-20 text-graphite md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="grid gap-7 px-4 md:px-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,0.45fr)] lg:items-end">
          <div>
            <SectionLabel tone="light">{productSystem.tag}</SectionLabel>
            <h2 className="mt-7 max-w-[840px] font-display text-4xl uppercase leading-none md:text-6xl lg:text-7xl">
              {productSystem.headline}
            </h2>
          </div>
          <p className="max-w-[520px] text-base leading-8 text-concrete md:text-lg">
            {productSystem.note}
          </p>
        </Reveal>

        <div
          ref={carouselRef}
          className="product-snap mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 2xl:grid-cols-4"
        >
          {productSystem.products.map((product, index) => (
            <ProductCoverCard
              key={product.label}
              {...product}
              index={index}
              active={activeIndex === index}
              setRef={setItemRef(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
