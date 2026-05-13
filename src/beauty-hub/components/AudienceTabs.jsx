import { Reveal } from "./ReferenceMotion";
import { SectionScene } from "./ReferenceScenes";

export function AudienceTabs() {
  return (
    <section className="relative overflow-hidden bg-[#F3E8C9] px-4 py-16 text-[#1B120E] md:px-8 lg:px-10">
      <SectionScene type="people" />
      <Reveal className="relative z-10 mx-auto max-w-[1120px]">
        <div className="mb-8 flex flex-wrap gap-8 border-b border-[#1B120E]/15 text-sm font-medium text-[#1B120E]/58">
          <span className="border-b-2 border-[#F39A1F] pb-4 text-[#1B120E]">Мастеру без потока</span>
          <span className="pb-4">Мастеру с заявками</span>
          <span className="pb-4">Мастеру с опытом</span>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-base leading-8 text-[#1B120E]/68">
            <p><b className="text-[#1B120E]">Если нет стабильных заявок:</b> сначала проверяется вход — Avito, профиль, фото, оффер и быстрый ответ.</p>
            <p><b className="text-[#1B120E]">Если заявки есть, но записи нет:</b> фокус переносится на переписку, цену и снятие сомнений.</p>
          </div>
          <p className="max-w-[520px] text-lg leading-8 text-[#1B120E]/66 md:justify-self-end">Beauty Hub не заставляет проходить всё подряд. Он помогает выбрать участок, который сейчас реально тормозит рост.</p>
        </div>
      </Reveal>
    </section>
  );
}
