import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  ["Диагностика", "#diagnostic"],
  ["База", "#hub"],
  ["Telegram", "#telegram"],
  ["Финал", "#cta"],
];

export function Header() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[#F3EADF]/12 bg-[#0B0907] px-4 py-3.5 text-[#F3EADF] md:px-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <a href="#top" className="font-serif text-2xl font-semibold leading-none text-[#F3EADF] transition hover:text-[#C9825B]">
          Beauty Hub
        </a>
        <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.18em] text-[#D8C3B0] md:flex" aria-label="Главная навигация">
          {navItems.map(([label, href]) => (
            <a key={label} className="transition hover:text-[#C9825B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9825B]" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#diagnostic"
          data-source="header"
          className="border border-[#C9825B] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9825B] transition hover:bg-[#C9825B] hover:text-[#0B0907] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9825B] md:px-5"
        >
          Диагностика
        </a>
      </div>
    </motion.header>
  );
}
