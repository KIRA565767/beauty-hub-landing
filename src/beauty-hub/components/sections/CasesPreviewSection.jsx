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
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>CASE ARCHIVE / PROOF</SectionLabel>
            <h2 className="mt-6 max-w-[880px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
              {homepageCases.headline || "Не отзывы. Выписки из того, где у мастеров ломался рост."}
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-mineral md:text-lg">
              {homepageCases.copy ||
                "Beauty Hub показывает не эмоции, а узел, исправление и то, что проверяется в системе после фикса."}
            </p>
          </Reveal>

          <Reveal delay={0.04}>
            <aside className="private-pass orange-rim-light p-5 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">archive extract</p>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-none text-dusty">
                Не отзыв, а рабочая выписка из узла.
              </h3>
              <p className="mt-4 text-sm leading-7 text-mineral">
                Секция показывает, где рост ломался, что приходилось фиксировать и по какому признаку можно увидеть системное движение.
              </p>
            </aside>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          {casesPreview.map((item, index) => (
            <CaseExtractCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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