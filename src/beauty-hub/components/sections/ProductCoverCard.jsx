import { ArrowRight } from "lucide-react";

const visualLines = {
  precision: "after:left-8 after:top-10 after:h-28 after:w-px",
  route: "after:left-8 after:top-16 after:h-px after:w-44",
  threshold: "after:right-10 after:top-12 after:h-36 after:w-px",
  private: "after:left-10 after:bottom-14 after:h-px after:w-52",
};

export function ProductCoverCard({ label, title, copy, cta, imageSrc, imageAlt, visualMode, active, index, setRef }) {
  const hasTextArrow = cta.trim().endsWith("→");

  return (
    <article
      ref={setRef}
      data-index={index}
      className={`group relative min-h-[460px] min-w-[84vw] max-w-[420px] snap-center overflow-hidden border border-graphite/20 bg-graphite text-dusty transition duration-300 after:absolute after:bg-copper after:transition after:duration-300 md:min-h-[600px] md:min-w-0 md:max-w-none ${
        visualLines[visualMode]
      } ${active ? "border-copper after:opacity-70" : "after:opacity-45"} hover:scale-[1.01] hover:border-copper hover:after:opacity-70`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition duration-300 ${
          active ? "brightness-[0.86]" : "brightness-100"
        } group-hover:brightness-[0.86]`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,22,24,0.08)_0%,rgba(22,22,24,0.46)_42%,rgba(22,22,24,0.96)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-7 top-24 h-px bg-copper/35 transition group-hover:bg-copper/60" aria-hidden="true" />
      <div className="absolute bottom-7 left-7 right-7 h-px bg-dusty/14" aria-hidden="true" />

      <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-between p-6 md:min-h-[600px] md:p-7">
        <div>
          <p className="inline-flex border-b border-copper/50 pb-2 font-mono text-xs uppercase text-copper">{label}</p>
          <h3 className="mt-6 max-w-[460px] break-words font-display text-4xl uppercase leading-none md:text-6xl">{title}</h3>
        </div>
        <div className="border-t border-dusty/12 pt-5">
          <p className="max-w-[340px] text-base leading-7 text-dusty">{copy}</p>
          <a
            href="#telegram"
            className={`mt-6 inline-flex min-h-11 items-center gap-2 font-mono text-sm uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper ${
              active ? "text-orange" : "text-copper"
            } group-hover:text-orange`}
          >
            <span>{cta}</span>
            {hasTextArrow ? null : <ArrowRight aria-hidden="true" size={17} />}
          </a>
        </div>
      </div>
    </article>
  );
}
