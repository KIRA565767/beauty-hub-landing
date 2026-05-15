import { footer } from "../content/landing";
import { getTelegramStartLink } from "../lib/telegramLinks";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-graphite px-4 py-12 text-mineral md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] border-t border-copper/20 pt-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr] md:gap-10">
          <div>
            <p className="font-display text-4xl uppercase leading-none text-dusty">{footer.brand}</p>
            <p className="mt-3 font-mono text-xs uppercase text-copper">{footer.descriptor}</p>
            <p className="mt-8 max-w-[260px] font-mono text-xs uppercase leading-6 text-mineral">{footer.microcopy}</p>
          </div>

          <nav className="font-mono text-xs uppercase" aria-label="Маршруты Beauty Hub">
            <p className="text-copper">{footer.routesTitle}</p>
            <div className="mt-5 grid gap-4">
              {footer.routes.map((route) => (
                <a key={route.label} href={route.href} className="w-fit text-dusty transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper">
                  {route.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="font-mono text-xs uppercase md:justify-self-end md:text-right">
            <p className="text-copper">{footer.accessTitle}</p>
            <p className="mt-5 max-w-[260px] leading-6 text-mineral md:ml-auto">{footer.accessCopy}</p>
            <Button href={getTelegramStartLink("footer")} variant="secondary" haptic className="mt-6">
              {footer.cta}
            </Button>
          </div>
        </div>

        <div className="mt-10 border-t border-dusty/10 pt-5 font-mono text-xs uppercase text-mineral">
          {footer.bottomLine}
        </div>
      </div>
    </footer>
  );
}
