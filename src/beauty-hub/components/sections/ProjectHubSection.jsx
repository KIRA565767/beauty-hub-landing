import { projectHub } from "../../content/landing";
import { Reveal } from "../ReferenceMotion";
import { SectionLabel } from "../ui/SectionLabel";

export function ProjectHubSection() {
  return (
    <section className="editorial-concrete px-4 py-16 text-dusty md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="border-t border-dusty/18 pt-8">
          <SectionLabel>{projectHub.tag}</SectionLabel>
          <h2 className="mt-6 max-w-[780px] font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            {projectHub.headline}
          </h2>
          <p className="mt-6 max-w-[680px] text-base leading-8 text-mineral md:text-lg">{projectHub.copy}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projectHub.entries.map((entry, index) => (
            <Reveal key={entry.href} delay={index * 0.03}>
              <a
                href={entry.href}
                className="group block min-h-[180px] border-y border-dusty/16 bg-graphite/72 p-5 text-dusty transition hover:border-copper hover:bg-concrete/84 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper md:p-6"
              >
                <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                  <span>{entry.number}</span>
                  <span>вход</span>
                </div>
                <h3 className="mt-8 font-display text-4xl font-semibold leading-none group-hover:text-copper">
                  {entry.title}
                </h3>
                <p className="mt-5 max-w-[520px] text-base leading-7 text-mineral">{entry.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
