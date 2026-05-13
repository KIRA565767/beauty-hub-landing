import { referencePrinciples } from "../content/landing";
import { Reveal } from "./ReferenceMotion";
import { SectionScene } from "./ReferenceScenes";

export function TrustPrinciples() {
  return (
    <section className="relative overflow-hidden bg-[#160604] px-4 py-16 text-[#F7EFD8] md:px-8 lg:px-10">
      <SectionScene type="hand" />
      <Reveal className="relative z-10 mx-auto mb-9 max-w-[760px] text-center">
        <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">Простые правила системы</h2>
        <p className="mt-4 text-base leading-7 text-[#F7EFD8]/60">Так страница не превращается в курс, мотивацию или очередной красивый набор советов.</p>
      </Reveal>
      <div className="relative z-10 mx-auto grid max-w-[1120px] gap-px overflow-hidden border border-[#F7EFD8]/10 bg-[#F7EFD8]/10 md:grid-cols-2 lg:grid-cols-4">
        {referencePrinciples.map((item, i) => (
          <Reveal key={item} delay={i * 0.04} className="min-h-[170px] bg-[#1E0A07]/92 p-5 backdrop-blur-sm">
            <div className="mb-8 h-5 w-5 rounded-full bg-[#F39A1F]" />
            <p className="text-base leading-7 text-[#F7EFD8]/70">{item}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
