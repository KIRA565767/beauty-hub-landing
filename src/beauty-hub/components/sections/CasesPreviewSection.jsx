import { casesPreview, homepageCases } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { CaseExtractCard } from "./CaseExtractCard";

export function CasesPreviewSection() {
  return (
    <section className="editorial-graphite editorial-grain px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-end">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>CASE ARCHIVE / PROOF</SectionLabel>
            <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_220px] xl:items-end">
              <h2 className="max-w-[880px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
                {homepageCases.headline || "Не отзывы. Выписки из того, где у мастеров ломался рост."}
              </h2>
              <p className="max-w-[220px] font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-mineral">
                selected extracts
                <br />
                blind zone / correction / check
              </p>
            </div>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-mineral md:text-lg">
              {homepageCases.copy ||
                "Beauty Hub показывает не эмоции, а узел, исправление и то, что проверяется в системе после фикса."}
            </p>
          </Reveal>

          <Reveal delay={0.04}>
            <aside className="relative overflow-hidden private-pass p-5 md:p-7">
              <div className="absolute bottom-6 left-0 top-6 w-px bg-gradient-to-b from-copper/80 via-copper/35 to-transparent" />
              <p className="pl-4 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">archive extract / selected node</p>
              <h3 className="mt-5 pl-4 font-display text-3xl font-semibold leading-none text-dusty">
                Не отзыв, а рабочая выписка из узла.
              </h3>
              <p className="mt-4 pl-4 text-sm leading-7 text-mineral">
                Секция показывает, где рост ломался, что приходилось фиксировать и по какому признаку можно увидеть системное движение.
              </p>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {casesPreview.map((item, index) => (
            <CaseExtractCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-3 border-t border-dusty/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href="#/routes" source="cases_preview_routes">
            СМОТРЕТЬ МАРШРУТЫ →
          </Button>
          <Button
            href={getTelegramStartLink("homepage_cases_preview")}
            variant="secondary"
            haptic
            source="homepage_cases_preview"
          >
            ПРОДОЛЖИТЬ В TELEGRAM →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
