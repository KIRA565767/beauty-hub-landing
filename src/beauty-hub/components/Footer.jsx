export function Footer() {
  return (
    <footer className="concrete-section border-t border-[#F3EADF]/14 px-4 py-10 text-[#D8C3B0] md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-5 text-[10px] uppercase tracking-[0.18em] md:grid-cols-4">
        <span className="font-semibold text-[#F3EADF]">Beauty Hub Юлии Кюнеберг</span>
        <a href="#diagnostic" className="transition hover:text-[#C9825B]">Диагностика</a>
        <a href="#hub" className="transition hover:text-[#C9825B]">База знаний</a>
        <a href="#telegram" className="transition hover:text-[#C9825B]">Telegram Hub</a>
      </div>
    </footer>
  );
}
