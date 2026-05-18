import { diagnosticNodes, marketReality } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function MarketRealitySection() {
  return (
    <section id="market" className="editorial-graphite editorial-grain px-4 py-16 text-dusty md:px-8 md:py-24 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <Reveal className="mb-10 border-t border-dusty/18 pt-8">
          <SectionLabel>{marketReality.tag}</SectionLabel>
          <h2 className="mt-6 max-w-[880px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            {marketReality.headline}
          </h2>
          <p className="mt-6 max-w-[680px] text-base leading-8 text-mineral md:text-lg">{marketReality.copy}</p>
        </Reveal>

        <div className="border-y border-dusty/16 bg-graphite/48">
          <div className="hidden grid-cols-[70px_210px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.08fr)] border-b border-dusty/12 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper lg:grid">
            <span>№</span>
            <span>Узел</span>
            <span>Симптом</span>
            <span>Что ломается</span>
            <span>Первый шаг</span>
          </div>
          {diagnosticNodes.map((node, index) => (
            <Reveal key={node.number} delay={index * 0.025}>
              <article className="grid gap-5 border-b border-dusty/10 px-4 py-7 last:border-b-0 md:px-5 lg:grid-cols-[70px_210px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.08fr)]">
                <span className="font-mono text-sm text-copper">{node.number}</span>
                <h3 className="font-display text-3xl font-semibold leading-none text-dusty">{node.title}</h3>
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">Симптом</p>
                  <p className="text-base leading-7 text-dusty">{node.symptom}</p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">Что ломается</p>
                  <p className="text-base leading-7 text-mineral">{node.breakdown}</p>
                </div>
                <div className="border-l border-copper pl-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">Первый шаг</p>
                  <p className="text-base leading-7 text-dusty">{node.firstStep}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
