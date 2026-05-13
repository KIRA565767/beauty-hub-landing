import { faqItems } from "../content/landing";
import { Reveal } from "./ReferenceMotion";

export function FAQ() {
  return (
    <section className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[300px_1fr]">
        <Reveal className="border-y border-[#F3EADF]/18 bg-[#15110D]/78 px-5 py-7 md:px-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Вопросы</p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] md:text-5xl">
            Коротко и честно
          </h2>
        </Reveal>

        <Reveal className="border-y border-[#F3EADF]/18 bg-[#15110D]/76 px-5 py-1 md:px-7">
          {faqItems.map((item) => (
            <details key={item.question} className="group border-b border-[#F3EADF]/12 py-4 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="text-lg font-medium leading-7 text-[#F3EADF] md:text-xl">{item.question}</span>
                <span className="mt-1 font-mono text-sm text-[#C9825B] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-[760px] text-base leading-7 text-[#D8C3B0]">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
