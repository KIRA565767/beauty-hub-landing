import { productRoutes, terminalPanel } from "../../content/landing";

export function TerminalPanel({ className = "" }) {
  return (
    <aside className={`border border-dusty/14 bg-graphite/72 text-dusty ${className}`}>
      <div className="border-b border-dusty/12 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
        {terminalPanel.label}
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display text-3xl font-semibold leading-none">{terminalPanel.title}</h3>
        <p className="mt-4 text-sm leading-7 text-mineral">{terminalPanel.text}</p>
        <nav className="mt-6 grid gap-2" aria-label="Выбор маршрута">
          {productRoutes.map((route) => (
            <a
              key={route.id}
              href={route.anchor}
              className="grid min-h-11 grid-cols-[38px_1fr] items-center gap-3 border-t border-dusty/10 py-3 text-left transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              <span className="font-mono text-xs text-copper">{route.number}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em]">{route.eyebrow}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
