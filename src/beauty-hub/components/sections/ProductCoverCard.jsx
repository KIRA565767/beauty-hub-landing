import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Button } from "../ui/Button";

export function ProductCoverCard({ route }) {
  return (
    <article
      id={route.articleId}
      className="route-card min-w-[82vw] scroll-ml-4 snap-start border-y border-dusty/16 bg-graphite/74 text-dusty sm:min-w-[420px] lg:min-w-[480px]"
    >
      <div className="aspect-[4/3] border-b border-dusty/10 bg-warm/60">
        <img
          src={`${import.meta.env.BASE_URL}${route.image}`}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
          <span>{route.eyebrow}</span>
          <span>{route.number}</span>
        </div>
        <h3 className="mt-7 font-display text-4xl font-semibold leading-none text-dusty">{route.title}</h3>
        <p className="mt-5 text-base leading-7 text-mineral">{route.text}</p>
        <Button href={getTelegramStartLink(route.source)} haptic source={route.source} variant="secondary" className="mt-7 w-full sm:w-auto">
          {route.cta}
        </Button>
      </div>
    </article>
  );
}
