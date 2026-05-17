import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { brand, navItems } from "../content/landing";
import { useHapticFeedback } from "../hooks/useHapticFeedback";
import { trackEvent } from "../lib/analytics";
import { getTelegramStartLink } from "../lib/telegramLinks";

export function Header() {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const pulse = useHapticFeedback(10);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.documentElement.dataset.mobileMenuOpen = isOpen ? "true" : "false";
    window.dispatchEvent(new Event("beautyhub:mobile-menu"));

    return () => {
      delete document.documentElement.dataset.mobileMenuOpen;
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass-header fixed inset-x-0 top-0 z-[70] h-16 border-b border-dusty/12 text-dusty"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8 lg:px-10">
        <a
          href="#/"
          onClick={closeMenu}
          className="font-display text-2xl leading-none text-dusty transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
        >
          {brand.short}
        </a>
        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.14em] text-mineral md:flex" aria-label="Главная навигация">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              className="transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={getTelegramStartLink("header")}
          data-source="header"
          onClick={() => {
            pulse();
            trackEvent("cta_click", {
              source: "header",
              href: getTelegramStartLink("header"),
              label: "Диагностика",
            });
          }}
          className="hidden min-h-11 items-center justify-center border border-copper px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-copper transition hover:bg-copper hover:text-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper md:inline-flex"
        >
          Диагностика
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-copper/40 text-copper transition hover:border-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper md:hidden"
          aria-label={isOpen ? "ЗАКРЫТЬ МЕНЮ" : "ОТКРЫТЬ МЕНЮ"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
      {isOpen ? (
        <nav className="fixed inset-x-0 top-16 z-[80] border-b border-copper/20 bg-graphite px-4 py-5 text-sm uppercase text-dusty md:hidden" aria-label="Мобильная навигация">
          <div className="grid gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="min-h-11 border-b border-dusty/10 py-3 transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                {label}
              </a>
            ))}
            <a
              href={getTelegramStartLink("header")}
              onClick={() => {
                pulse();
                trackEvent("cta_click", {
                  source: "header",
                  href: getTelegramStartLink("header"),
                  label: "Пройти диагностику",
                });
                closeMenu();
              }}
              className="mt-3 inline-flex min-h-12 items-center justify-center bg-orange px-5 text-sm font-semibold uppercase text-dusty transition hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Пройти диагностику
            </a>
          </div>
        </nav>
      ) : null}
    </motion.header>
  );
}
