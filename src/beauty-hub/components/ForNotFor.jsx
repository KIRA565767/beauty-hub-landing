import { fitLists } from "../content/landing";
import { Reveal } from "./ReferenceMotion";

export function ForNotFor() {
  return (
    <section className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-10 max-w-[760px] border-y border-[#F3EADF]/18 bg-[#15110D]/78 px-5 py-8 md:px-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Фильтр</p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
            Beauty Hub не для всех. И это хорошо.
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="border-y border-[#F3EADF]/18 bg-[#15110D]/82 px-5 py-7 md:px-7">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#F3EADF]/12 pb-4">
              <h3 className="font-serif text-4xl font-semibold leading-none">Подходит</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">внутри системы</span>
            </div>
            <ul className="grid gap-5">
              {fitLists.for.map((item, index) => (
                <li key={item} className="grid grid-cols-[44px_1fr] gap-4 border-t border-[#F3EADF]/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="font-mono text-xs tracking-[0.16em] text-[#C9825B]">0{index + 1}</span>
                  <span className="text-base leading-7 text-[#F3EADF] md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.04} className="border-y border-[#F3EADF]/18 bg-[#15110D]/58 px-5 py-7 md:px-7">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#F3EADF]/12 pb-4">
              <h3 className="font-serif text-4xl font-semibold leading-none">Не подходит</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D8C3B0]">снаружи системы</span>
            </div>
            <ul className="grid gap-5">
              {fitLists.notFor.map((item, index) => (
                <li key={item} className="grid grid-cols-[44px_1fr] gap-4 border-t border-[#F3EADF]/12 pt-5 first:border-t-0 first:pt-0">
                  <span className="font-mono text-xs tracking-[0.16em] text-[#C9825B]">0{index + 1}</span>
                  <span className="text-lg leading-7 text-[#D8C3B0]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
