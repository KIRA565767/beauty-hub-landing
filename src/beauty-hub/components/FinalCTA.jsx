import { Reveal } from "./ReferenceMotion";

export function FinalCTA() {
  return (
    <section id="cta" className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-[1240px] border-y border-[#F3EADF]/18 bg-[#15110D]/62">
        <div className="grid gap-px bg-[#F3EADF]/12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-[#0B0907]/92 p-6 text-[#F3EADF] md:p-9 lg:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">Не знаешь, что чинить первым?</p>
            <h2 className="mt-5 max-w-[700px] font-serif text-4xl font-semibold leading-[1.02] md:text-5xl">
              Пройди диагностику и найди главный узел
            </h2>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-[#D8C3B0] md:text-lg">
              Сначала становится понятно, где ломается рост. Потом открывается нужный раздел базы и маршрут действий.
            </p>
            <a
              href="#diagnostic"
              data-source="final_primary"
              className="mt-8 inline-flex min-h-[56px] items-center justify-center bg-[#C9825B] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B0907] transition hover:-translate-y-0.5 hover:bg-[#D27F53]"
            >
              Пройти диагностику
            </a>
          </div>

          <div className="bg-[#15110D]/84 p-6 md:p-9 lg:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">Уже понимаешь слабый узел?</p>
            <h3 className="mt-5 font-serif text-3xl font-semibold leading-none text-[#F3EADF] md:text-4xl">
              Открой Beauty Hub
            </h3>
            <p className="mt-6 text-base leading-8 text-[#D8C3B0]">
              Перейди в архив и выбери раздел: Avito, переписка, техника, цена, упаковка или стратегия.
            </p>
            <a
              href="#hub"
              data-source="final_secondary"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-[#F3EADF]/22 px-6 py-4 text-sm uppercase tracking-[0.12em] text-[#F3EADF]/78 transition hover:border-[#C9825B] hover:text-[#C9825B]"
            >
              Открыть Beauty Hub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
