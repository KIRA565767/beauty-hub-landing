import { motion, useReducedMotion } from "framer-motion";
import londonBuilding from "../assets/london-brutal-neutral.jpg";
import { diagnosticPreview, diagnosticZones } from "../content/landing";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate min-h-[calc(100svh-61px)] overflow-hidden bg-[#0B0907] text-[#F3EADF]">
      <img
        src={londonBuilding}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-[58%_50%] md:object-center"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-61px)] max-w-[1400px] gap-7 px-4 py-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-10 lg:py-9">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.52, ease: "easeOut" }}
          className="flex flex-col justify-center gap-10"
        >
          <div className="max-w-[790px] border border-[#F3EADF]/14 bg-[#0B0907]/68 p-5 md:p-7 lg:p-8">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#D8C3B0]">
              <span className="border border-[#F3EADF]/22 px-3 py-2">Beauty Hub Юлии Кюнеберг</span>
              <span className="border border-[#C9825B]/55 px-3 py-2 text-[#C9825B]">не курс / не салон / не маркетплейс</span>
            </div>

            <h1 className="max-w-[760px] font-serif text-5xl font-semibold leading-[0.96] text-[#F3EADF] md:text-7xl lg:text-[5.7rem]">
              Beauty Hub: что чинить первым
            </h1>

            <p className="mt-6 max-w-[610px] text-base leading-8 text-[#D8C3B0] md:text-lg">
              Закрытая база знаний, диагностика и маршруты роста для beauty-мастера, который много работает руками, но растет хаотично.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#diagnostic"
                data-source="hero_primary"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#D27F53] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B0907] transition hover:-translate-y-0.5 hover:bg-[#C9825B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9825B]"
              >
                Пройти диагностику
              </a>
              <a
                href="#hub"
                data-source="hero_secondary"
                className="inline-flex min-h-[52px] items-center justify-center border-b border-[#F3EADF]/28 px-1 text-sm uppercase tracking-[0.12em] text-[#D8C3B0] transition hover:border-[#C9825B] hover:text-[#C9825B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9825B]"
              >
                Открыть Beauty Hub
              </a>
            </div>
          </div>

          <div className="grid max-w-[790px] border-y border-[#F3EADF]/20 bg-[#0B0907]/58 p-4 text-[10px] uppercase tracking-[0.18em] text-[#D8C3B0] sm:grid-cols-3">
            <span>Сайт = структура</span>
            <span className="text-[#C9825B]">Диагностика → узел → маршрут</span>
            <span>Telegram = движение</span>
          </div>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.04, ease: "easeOut" }}
          className="self-center border border-[#F3EADF]/18 bg-[#0B0907]/70 lg:self-end"
        >
          <div className="border-b border-[#F3EADF]/14 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#D8C3B0]">
            Индекс системы / 06 узлов
          </div>
          <div className="divide-y divide-[#F3EADF]/10">
            {diagnosticZones.map((item) => (
              <a key={item.number} href="#diagnostic" className="group grid grid-cols-[46px_1fr] gap-3 px-5 py-3.5 transition hover:bg-[#C9825B]/10">
                <span className="font-mono text-xs tracking-[0.18em] text-[#C9825B]">{item.number}</span>
                <span>
                  <span className="block font-serif text-2xl font-semibold leading-none text-[#F3EADF] group-hover:text-[#C9825B]">{item.title}</span>
                  <span className="mt-1.5 block text-xs leading-5 text-[#D8C3B0]/86">{item.indexText}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="border-t border-[#C9825B]/45 bg-[#EFE5D8] p-4 text-[#0B0907]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#2D2117]">Пример результата диагностики</p>
            <dl className="mt-4 grid gap-2.5 text-sm leading-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Слабый узел</dt>
                <dd className="font-semibold">{diagnosticPreview.node}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Причина</dt>
                <dd>{diagnosticPreview.reason}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Первый маршрут</dt>
                <dd>{diagnosticPreview.route}</dd>
              </div>
            </dl>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
