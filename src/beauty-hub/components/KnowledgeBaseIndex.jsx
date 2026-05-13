import { knowledgeModules } from "../content/landing";
import { Reveal } from "./ReferenceMotion";

export function KnowledgeBaseIndex() {
  return (
    <section id="hub" className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-12 grid gap-7 border-t border-[#F3EADF]/20 pt-8 lg:grid-cols-[360px_1fr] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Архив базы</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
              Архив, а не хаотичная лента
            </h2>
          </div>
          <p className="max-w-[680px] text-base leading-8 text-[#D8C3B0] md:text-lg">
            База устроена как индекс. Каждый раздел чинит конкретный участок системы мастера и открывается как продолжение диагностики.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden border-y border-[#F3EADF]/18 bg-[#15110D]/52">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F3EADF]/16 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">
            <span>Архив / 06 разделов</span>
            <span className="text-[#D8C3B0]">диагностика ведет к полке базы</span>
          </div>
          <div className="divide-y divide-[#F3EADF]/12">
            {knowledgeModules.map((module) => (
              <article key={module.number} className="grid gap-5 px-5 py-7 transition hover:bg-[#0B0907]/26 md:grid-cols-[74px_220px_minmax(0,240px)_minmax(0,1fr)_150px] md:items-start">
                <span className="font-mono text-sm tracking-[0.18em] text-[#C9825B]">{module.number}</span>
                <h3 className="font-serif text-3xl font-semibold leading-none text-[#F3EADF] md:text-4xl">{module.name}</h3>
                <p className="text-base leading-7 text-[#F3EADF]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B] md:hidden">Чинит: </span>
                  {module.fix}
                </p>
                <p className="text-base leading-7 text-[#D8C3B0]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B] md:hidden">Внутри: </span>
                  {module.inside}
                </p>
                <span className="w-fit border-t border-[#C9825B]/55 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#D8C3B0] md:justify-self-end">
                  {module.route}
                </span>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.04} className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-[#F3EADF]/16 bg-[#0B0907]/74 p-5">
          <p className="max-w-[620px] text-sm leading-7 text-[#D8C3B0]">
            Если уже знаешь свой слабый узел, можно сразу открыть нужный раздел. Если нет — сначала диагностика.
          </p>
          <a href="#diagnostic" className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C9825B] transition hover:text-[#D27F53]">
            Пройти диагностику
          </a>
        </Reveal>
      </div>
    </section>
  );
}
