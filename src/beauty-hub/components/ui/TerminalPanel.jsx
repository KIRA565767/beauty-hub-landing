import { routes } from "../../content/landing";

export function TerminalPanel({ title, action }) {
  return (
    <aside className="relative overflow-hidden border border-copper/30 bg-graphite/90 p-5 shadow-terminal md:p-6" aria-label="Навигационная панель Beauty Hub">
      <div className="pointer-events-none absolute inset-4 border border-dusty/10" aria-hidden="true" />
      <div className="relative flex items-center justify-between gap-4 border-b border-dusty/10 pb-4 font-mono text-xs uppercase text-mineral">
        <span>{title}</span>
        <span className="text-orange">01</span>
      </div>
      <div className="relative mt-6 grid gap-3">
        {routes.map((route, index) => (
          <a
            key={route}
            href="#products"
            className="group grid min-h-14 grid-cols-[34px_1fr] items-center gap-3 border-b border-dusty/10 text-sm uppercase text-dusty transition hover:border-copper hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            <span className="font-mono text-xs text-copper">{String(index + 1).padStart(2, "0")}</span>
            <span>{route}</span>
          </a>
        ))}
      </div>
      <div className="relative mt-8 border-t border-copper/40 pt-4 font-mono text-xs uppercase text-orange">
        {action}
      </div>
    </aside>
  );
}
