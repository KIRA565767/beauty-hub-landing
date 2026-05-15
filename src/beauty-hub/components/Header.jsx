import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { brand, hero, navItems } from "../content/landing";
import { useHapticFeedback } from "../hooks/useHapticFeedback";
import { getTelegramStartLink } from "../lib/telegramLinks";

export function Header() {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const pulse = useHapticFeedback(10);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass-header fixed inset-x-0 top-0 z-[70] h-16 border-b border-copper/20 text-dusty"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8 lg:px-10">
        <a
          href="#top"
          onClick={closeMenu}
          className="font-display text-2xl uppercase leading-none text-dusty transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
        >
          {brand.short}
        </a>
        <nav className="hidden items-center gap-7 text-xs uppercase text-mineral md:flex" aria-label="Главная навигация">
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
          onClick={pulse}
          className="hidden min-h-11 items-center justify-center border border-copper px-4 text-xs font-semibold uppercase text-copper transition hover:bg-copper hover:text-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper md:inline-flex"
        >
          {hero.primaryCta}
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
              href={getTelegramStartLink("mobile_menu")}
              onClick={() => {
                pulse();
                closeMenu();
              }}
              className="mt-3 inline-flex min-h-12 items-center justify-center bg-orange px-5 text-sm font-semibold uppercase text-dusty transition hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {hero.primaryCta}
            </a>
          </div>
        </nav>
      ) : null}
    </motion.header>
  );
}
