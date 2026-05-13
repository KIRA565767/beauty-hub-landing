import { diagnosticPreview, telegramLiveItems } from "../content/landing";
import { Reveal } from "./ReferenceMotion";

export function TelegramHub() {
  return (
    <section id="telegram" className="concrete-section px-4 py-20 text-[#F3EADF] md:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-12 grid gap-7 border-t border-[#F3EADF]/20 pt-8 lg:grid-cols-[1fr_390px] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9825B]">Живая часть Beauty Hub</p>
            <h2 className="mt-5 max-w-[820px] font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
              Сайт дает структуру. Telegram — живые разборы.
            </h2>
          </div>
          <p className="text-base leading-8 text-[#D8C3B0]">
            Здесь появляется движение: новые ошибки, короткие разборы, наблюдения из практики и вход в диагностику.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="border-y border-[#F3EADF]/18 bg-[#15110D]/56 p-6 md:p-8 lg:p-9">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#F3EADF]/14 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">Редакционная лента</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D8C3B0]">не просто канал</span>
            </div>
            <div className="space-y-0">
              {telegramLiveItems.map((item) => (
                <article key={item.title} className="grid gap-4 border-b border-[#F3EADF]/12 py-6 last:border-b-0 md:grid-cols-[96px_1fr]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9825B]">{item.status}</span>
                  <div>
                    <h3 className="font-serif text-3xl font-semibold leading-none text-[#F3EADF] md:text-4xl">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#D8C3B0]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.04} className="border border-[#0B0907]/10 bg-[#EFE5D8] p-6 text-[#0B0907] md:p-8 lg:p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Пример диагностического ответа</p>
            <h3 className="mt-6 max-w-[520px] font-serif text-3xl font-semibold leading-none md:text-4xl">
              Слабый узел найден. Теперь нужен первый маршрут.
            </h3>
            <dl className="mt-8 grid gap-5 border-y border-[#0B0907]/14 py-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Слабый узел</dt>
                <dd className="mt-1 text-lg font-semibold">{diagnosticPreview.node}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Причина</dt>
                <dd className="mt-1 text-lg">{diagnosticPreview.reason}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2D2117]">Первый маршрут</dt>
                <dd className="mt-1 text-lg font-semibold">{diagnosticPreview.route}</dd>
              </div>
            </dl>
            <a
              href="#cta"
              data-source="telegram_hub"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center bg-[#0B0907] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#F3EADF] transition hover:-translate-y-0.5 hover:bg-[#2D2117]"
            >
              Пройти диагностику в Telegram
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
