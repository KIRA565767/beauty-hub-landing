import { Reveal } from "./ReferenceMotion";

export function WhatIsBeautyHub() {
  return (
    <section className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <Reveal className="mx-auto grid max-w-[1240px] gap-8 border-y border-[#F3EADF]/18 py-10 md:py-12 lg:grid-cols-[260px_1fr]">
        <div className="bg-[#0B0907]/82 p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Что такое Beauty Hub</p>
          <p className="mt-4 max-w-[210px] text-sm leading-6 text-[#D8C3B0]">отстройка от курса, салона и случайного Telegram-канала</p>
        </div>
        <div className="bg-[#EFE5D8] p-6 text-[#0B0907] md:p-8 lg:p-10">
          <p className="max-w-[940px] font-serif text-4xl font-semibold leading-[1.04] md:text-5xl">
            Beauty Hub — это не курс и не марафон.
          </p>
          <p className="mt-6 max-w-[900px] text-lg leading-8 text-[#2D2117] md:text-xl md:leading-9">
            Это база знаний и маршрутов для мастера, который хочет понять, где именно ломается рост: в клиентах, переписке, технике, цене, упаковке или стратегии.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
