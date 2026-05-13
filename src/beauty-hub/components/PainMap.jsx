import { diagnosticZones } from "../content/landing";
import { Reveal } from "./ReferenceMotion";

export function PainMap() {
  return (
    <section className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 grid gap-7 border-t border-[#F3EADF]/20 pt-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Карта поломок</p>
            <h2 className="mt-5 max-w-[820px] font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
              Карта поломок, а не список проблем
            </h2>
          </div>
          <p className="max-w-[440px] text-base leading-7 text-[#D8C3B0] md:text-lg">
            Мастер должен узнать себя не в обещании, а в конкретном участке системы: симптом, причина и первый ремонт.
          </p>
        </Reveal>

        <div className="border-y border-[#F3EADF]/18 bg-[#15110D]/46">
          <div className="hidden grid-cols-[72px_210px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.08fr)] border-b border-[#F3EADF]/12 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B] lg:grid">
            <span>№</span>
            <span>Узел</span>
            <span>Симптом</span>
            <span>Поломка</span>
            <span>Первый шаг</span>
          </div>
          {diagnosticZones.map((zone, index) => (
            <Reveal key={zone.number} delay={index * 0.035} className="group">
              <article className="grid gap-5 border-b border-[#F3EADF]/12 px-4 py-8 transition last:border-b-0 hover:bg-[#0B0907]/28 md:px-5 lg:grid-cols-[72px_210px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.08fr)] lg:items-start">
                <div className="font-mono text-sm tracking-[0.18em] text-[#C9825B]">{zone.number}</div>
                <h3 className="font-serif text-3xl font-semibold leading-none text-[#F3EADF] md:text-4xl">{zone.title}</h3>
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">Симптом</p>
                  <p className="text-base leading-7 text-[#F3EADF]">{zone.symptom}</p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">Поломка</p>
                  <p className="text-base leading-7 text-[#D8C3B0]">{zone.breakdown}</p>
                </div>
                <div className="border-l border-[#C9825B] pl-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">Первый шаг</p>
                  <p className="text-base leading-7 text-[#F3EADF]">{zone.firstStep}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
