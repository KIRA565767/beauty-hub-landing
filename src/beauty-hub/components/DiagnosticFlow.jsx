import { diagnosticOutputs, mechanicSteps } from "../content/landing";
import { Reveal } from "./ReferenceMotion";

export function DiagnosticFlow() {
  return (
    <section id="diagnostic" className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="border-y border-[#F3EADF]/18 bg-[#0B0907]/72 p-6 md:p-8 lg:p-9">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Механика диагностики</p>
          <h2 className="mt-5 max-w-[620px] font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
            Сначала диагноз. Потом маршрут.
          </h2>
          <p className="mt-6 max-w-[560px] text-base leading-8 text-[#D8C3B0] md:text-lg">
            Логика простая: диагностика → слабое место → раздел базы → маршрут действий. Beauty Hub не предлагает чинить все сразу.
          </p>
          <a
            href="#telegram"
            data-source="diagnostic_primary"
            className="mt-8 inline-flex min-h-[52px] items-center justify-center bg-[#C9825B] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B0907] transition hover:-translate-y-0.5 hover:bg-[#D27F53]"
          >
            Пройти диагностику в Telegram
          </a>
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="border-y border-[#F3EADF]/18 bg-[#15110D]/52 px-5 py-2 md:px-6">
            {mechanicSteps.map(([number, title, text], index) => (
              <div key={number} className="grid gap-4 border-b border-[#F3EADF]/12 py-5 last:border-b-0 md:grid-cols-[64px_170px_1fr]">
                <span className="font-mono text-sm tracking-[0.18em] text-[#C9825B]">{number}</span>
                <h3 className="font-serif text-2xl font-semibold leading-none text-[#F3EADF] md:text-3xl">{title}</h3>
                <p className="text-base leading-7 text-[#D8C3B0]">{text}</p>
                {index < mechanicSteps.length - 1 && <span className="hidden" aria-hidden="true">→</span>}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.04} className="border border-[#0B0907]/10 bg-[#EFE5D8] p-5 text-[#0B0907] md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#0B0907]/14 pb-4">
              <h3 className="font-serif text-3xl font-semibold leading-none md:text-4xl">После диагностики ты получаешь</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">системная выдача</span>
            </div>
            <ol className="grid gap-4 md:grid-cols-2">
              {diagnosticOutputs.map((item, index) => (
                <li key={item} className="grid grid-cols-[42px_1fr] gap-4 border-t border-[#0B0907]/12 pt-4 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-4">
                  <span className="font-mono text-xs tracking-[0.16em] text-[#2D2117]">0{index + 1}</span>
                  <span className="text-base leading-7">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
