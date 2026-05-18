import { productRoutes, routeRooms } from "../../content/landing";
import { getTelegramStartLink } from "../../lib/telegramLinks";
import { Reveal } from "../ReferenceMotion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

function RoomVisual({ room }) {
  return (
    <div className="relative overflow-hidden private-pass orange-rim-light p-5 md:p-7">
      <div className="absolute left-0 top-0 h-full w-[3px] bg-copper" />
      <div className="relative min-h-[280px] graphite-surface p-5 md:min-h-[360px] md:p-7">
        <div className="flex items-start justify-between gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">
          <span>PRIVATE ACCESS</span>
          <span>{room.roomCode}</span>
        </div>
        <div className="mt-16 max-w-[520px] md:mt-24">
          <p className="font-display text-4xl font-semibold leading-none text-dusty md:text-6xl">
            {room.roomName}
          </p>
          <p className="mt-6 max-w-[420px] text-sm leading-7 text-mineral">{room.visualDirection}</p>
        </div>
        <div className="absolute bottom-6 right-6 h-20 w-20 border border-copper/60 md:h-28 md:w-28" />
        <div className="absolute bottom-10 right-10 h-px w-28 bg-copper/60" />
      </div>
    </div>
  );
}

function RoomBlock({ code, title, children }) {
  return (
    <Reveal className="border-t border-dusty/14 pt-8">
      <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">{code}</p>
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-dusty md:text-5xl">{title}</h2>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

function RoomSignalCard({ index, children }) {
  return (
    <div className="private-pass p-5 transition duration-300 hover:border-copper/60 md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
        signal {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-4 text-base leading-7 text-mineral md:text-lg md:leading-8">{children}</p>
    </div>
  );
}

function RoomBulletCard({ index, children }) {
  return (
    <div className="private-pass p-5 md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">node {String(index + 1).padStart(2, "0")}</p>
      <p className="mt-4 text-base leading-8 text-mineral">{children}</p>
    </div>
  );
}

function RoomIndexPanel({ route, room, otherRoutes, telegramHref }) {
  return (
    <Reveal delay={0.05} className="lg:sticky lg:top-24">
      <aside className="private-pass orange-rim-light p-5 md:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">room index</p>
        <div className="mt-5 border-y border-dusty/10 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mineral">{room.roomCode}</p>
          <p className="mt-4 font-display text-3xl font-semibold leading-none text-dusty">{route.title}</p>
          <p className="mt-4 text-sm leading-7 text-mineral">{room.atmosphere}</p>
        </div>

        <div className="mt-6 space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">other rooms</p>
          {otherRoutes.map((item) => {
            const otherRoom = routeRooms[item.id];

            return (
              <a
                key={item.id}
                href={item.path}
                className="block border-t border-dusty/10 py-4 text-dusty transition hover:border-copper hover:text-copper"
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-mineral">
                  {otherRoom?.roomCode}
                </span>
                <span className="mt-2 block text-sm uppercase tracking-[0.08em]">{item.title}</span>
              </a>
            );
          })}
        </div>

        <div className="mt-7 border-t border-dusty/10 pt-6">
          <p className="text-sm leading-7 text-mineral">
            Сначала фиксируется узел. Потом выбирается маршрут. Следующий шаг — стартовый вход в Telegram.
          </p>
          <Button href={telegramHref} haptic source={room.source} className="mt-5 w-full justify-center">
            {room.cta}
          </Button>
        </div>
      </aside>
    </Reveal>
  );
}

export function RouteDetailPage({ route, node }) {
  const room = route ? routeRooms[route.id] : null;

  if (!route || !node || !room) {
    return (
      <section className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-28 text-dusty md:px-8 lg:px-10">
        <div className="relative z-10 mx-auto max-w-[760px] border-t border-dusty/18 pt-8">
          <SectionLabel>route not found</SectionLabel>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-none md:text-7xl">Комната не найдена.</h1>
          <p className="mt-6 text-base leading-8 text-mineral">
            Этот маршрут не собран в системе. Вернись в холл и выбери одну из четырёх комнат.
          </p>
          <Button href="#/routes" variant="secondary" source="route_not_found_back" className="mt-8">
            ВЕРНУТЬСЯ В ХОЛЛ
          </Button>
        </div>
      </section>
    );
  }

  const telegramHref = getTelegramStartLink(room.source);
  const otherRoutes = productRoutes.filter((item) => item.id !== route.id);
  const isTechniqueRoom = route.id === "technique";
  const productPurchase = isTechniqueRoom ? room.productPurchase : null;
  const tribute = isTechniqueRoom ? room.tribute : null;
  const tributeUrl = productPurchase?.tributeUrl || tribute?.url || "";
  const purchaseHref = tributeUrl || telegramHref;
  const purchaseIsExternal = Boolean(tributeUrl);

  return (
    <section className="editorial-graphite editorial-grain min-h-svh px-4 pb-16 pt-24 text-dusty md:px-8 md:pb-24 md:pt-28 lg:px-10">
      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_400px]">
        <div className="space-y-10 md:space-y-12">
          <Reveal className="border-t border-dusty/18 pt-8">
            <SectionLabel>{room.roomCode}</SectionLabel>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">{room.roomName}</p>
            <h1 className="mt-6 max-w-[880px] font-display text-5xl font-semibold leading-[0.96] md:text-7xl lg:text-8xl">
              {room.headline}
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-mineral md:text-lg md:leading-9">{room.lead}</p>
            <p className="mt-6 max-w-[620px] border-l border-copper/70 pl-5 text-sm uppercase leading-7 tracking-[0.08em] text-dusty">
              {room.atmosphere}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={telegramHref} haptic source={room.source}>
                {room.cta}
              </Button>
              <Button href="#/routes" variant="secondary" source={`${room.source}_back`}>
                НАЗАД В ХОЛЛ
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.03}>
            <RoomVisual room={room} />
          </Reveal>

          <RoomBlock code="problem signal" title={room.symptomTitle}>
            <div className="grid gap-3 md:grid-cols-2">
              {room.symptoms.map((symptom, index) => (
                <RoomSignalCard key={symptom} index={index}>
                  {symptom}
                </RoomSignalCard>
              ))}
            </div>
          </RoomBlock>

          <RoomBlock code="pain" title={room.painTitle}>
            <p className="max-w-[880px] text-base leading-8 text-mineral md:text-lg md:leading-9">{room.pain}</p>
          </RoomBlock>

          <RoomBlock code="system breakdown" title={room.breakdownTitle}>
            <div className="space-y-3">
              {room.breakdown.map((item, index) => (
                <div key={item} className="grid gap-4 border-t border-dusty/10 py-5 md:grid-cols-[64px_minmax(0,1fr)]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-8 text-mineral md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </RoomBlock>

          <RoomBlock code="what it fixes" title={room.fixesTitle}>
            <div className="grid gap-3 md:grid-cols-3">
              {room.fixes.map((item, index) => (
                <RoomBulletCard key={item} index={index}>
                  {item}
                </RoomBulletCard>
              ))}
            </div>
          </RoomBlock>

          <RoomBlock code="product substance" title={room.substanceTitle}>
            <div className="grid gap-3 md:grid-cols-3">
              {room.substance.map((item, index) => (
                <RoomBulletCard key={item} index={index}>
                  {item}
                </RoomBulletCard>
              ))}
            </div>
          </RoomBlock>

          <RoomBlock code="first fix" title={room.firstFixTitle}>
            <div className="grid gap-3 md:grid-cols-2">
              {room.firstFix.map((item, index) => (
                <div key={item} className="private-pass p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
                    step {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-base leading-8 text-mineral">{item}</p>
                </div>
              ))}
            </div>
          </RoomBlock>

          <RoomBlock code="future paid product" title={room.paidTitle}>
            <p className="max-w-[880px] border-l border-copper/55 bg-graphite/45 py-4 pl-5 text-base leading-8 text-mineral md:text-lg">
              {room.paidNote}
            </p>
          </RoomBlock>

          {isTechniqueRoom && (productPurchase || tribute) ? (
            <RoomBlock
              code="product access"
              title={productPurchase?.title || "Курс по технике — отдельный вход в маршрут."}
            >
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
                <div className="private-pass orange-rim-light p-5 md:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
                    PRODUCT ACCESS / TECHNIQUE COURSE
                  </p>
                  <h3 className="mt-5 max-w-[760px] font-display text-3xl font-semibold leading-tight text-dusty md:text-5xl">
                    {productPurchase?.headline || productPurchase?.title || "Курс по технике — отдельный вход в маршрут."}
                  </h3>
                  <p className="mt-5 max-w-[760px] text-base leading-8 text-mineral md:text-lg md:leading-9">
                    {productPurchase?.text || productPurchase?.copy}
                  </p>

                  {productPurchase?.bullets?.length ? (
                    <div className="mt-7 grid gap-3 md:grid-cols-3">
                      {productPurchase.bullets.map((item, index) => (
                        <RoomBulletCard key={item} index={index}>
                          {item}
                        </RoomBulletCard>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <Button
                      href={purchaseHref}
                      haptic={!purchaseIsExternal}
                      source={productPurchase?.source || room.source}
                      target={purchaseIsExternal ? "_blank" : undefined}
                      rel={purchaseIsExternal ? "noreferrer" : undefined}
                    >
                      {tributeUrl ? productPurchase?.primaryCta || "ОПЛАТИТЬ ДОСТУП ЧЕРЕЗ TRIBUTE →" : productPurchase?.primaryCta}
                    </Button>
                    <Button href={telegramHref} variant="secondary" haptic source={room.source}>
                      {productPurchase?.secondaryCta || "ПРОДОЛЖИТЬ МАРШРУТ В TELEGRAM →"}
                    </Button>
                  </div>
                </div>

                {tribute ? (
                  <div className="ivory-material orange-rim-light p-5 md:p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-concrete">{tribute.tag}</p>
                    <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-graphite md:text-4xl">
                      {tribute.headline}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-graphite/84">{tribute.copy}</p>
                    {tribute.note ? <p className="mt-5 border-t border-graphite/14 pt-5 text-sm leading-7 text-graphite/72">{tribute.note}</p> : null}
                  </div>
                ) : null}
              </div>
            </RoomBlock>
          ) : null}

          <RoomBlock code="next step" title={room.resultTitle}>
            <div className="space-y-3">
              {room.result.map((item) => (
                <p key={item} className="border-l border-copper/55 bg-graphite/45 py-4 pl-5 text-base leading-8 text-mineral">
                  {item}
                </p>
              ))}
            </div>
          </RoomBlock>
        </div>

        <RoomIndexPanel route={route} room={room} otherRoutes={otherRoutes} telegramHref={telegramHref} />
      </div>

      <Reveal className="relative z-10 mx-auto mt-12 max-w-[1440px] border-t border-dusty/16 pt-8 md:mt-16 md:pt-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.75fr)_auto] md:items-end">
          <div>
            <SectionLabel>final access</SectionLabel>
            <h2 className="mt-5 max-w-[760px] font-display text-4xl font-semibold leading-tight text-dusty md:text-6xl">
              Открой маршрут в Telegram и начни с первого узла, а не с хаоса.
            </h2>
          </div>
          <Button href={telegramHref} haptic source={room.source} className="md:mb-1">
            {room.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
