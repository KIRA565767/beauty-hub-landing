import { referenceRoutes } from "../content/landing";
import { Reveal } from "./ReferenceMotion";
import { RouteLandscape } from "./ReferenceScenes";

export function GrowthRoutes() {
  return (
    <section id="routes" className="relative overflow-hidden bg-[#F39A1F] px-4 py-14 text-[#160604] md:px-8 lg:px-10">
      <RouteLandscape className="pointer-events-none absolute bottom-[-9rem] left-[-10rem] h-[28rem] w-[58rem] opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <Reveal className="mb-9 text-center">
          <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">Маршруты роста</h2>
          <p className="mx-auto mt-4 max-w-[660px] text-base leading-7 text-[#160604]/72">Это не программа курса. Это порядок действий после диагностики.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {referenceRoutes.map((route, i) => (
            <Reveal key={route.num} delay={i * 0.055} className="min-h-[300px] border border-[#160604]/14 bg-[#E9E2BC]/92 p-6 shadow-[0_18px_70px_rgba(22,6,4,0.18)] backdrop-blur-sm">
              <div className="mb-14 font-serif text-6xl tracking-[-0.06em] text-[#160604]">{route.num}</div>
              <h3 className="text-2xl font-semibold leading-[1.02] tracking-[-0.045em]">{route.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#160604]/64">{route.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
