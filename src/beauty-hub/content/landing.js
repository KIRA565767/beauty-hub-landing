export const meta = {
  title: "Beauty Hub Юлии Кюнеберг — стартовая диагностика beauty-мастера",
  description:
    "Beauty Hub помогает beauty-мастеру понять, какой узел сейчас тормозит рост: техника, клиенты, найм или отсутствие личной корректировки.",
};

export const brand = {
  short: "Beauty Hub",
  descriptor: "private beauty system / диагностика / маршруты",
};

export const navItems = [
  { label: "СТАРТ", href: "#/" },
  { label: "МАРШРУТЫ", href: "#/routes" },
  { label: "ВЫБОР", href: "#/start" },
  { label: "ЮЛИЯ", href: "#/julia" },
  { label: "TELEGRAM", href: "#/telegram" },
];

export const hero = {
  tag: "01 / 06 / Private Beauty System",
  headline: "Что чинить первым в системе мастера",
  subheadline:
    "Beauty Hub показывает не очередной курс, а слабый участок роста: техника, клиентский поток, самостоятельность или личная корректировка. Сначала диагностика, потом маршрут.",
  primaryCta: "ПОЛУЧИТЬ СТАРТОВУЮ ДИАГНОСТИКУ",
  secondaryCta: "СМОТРЕТЬ МАРШРУТЫ",
  systemLine: "диагностика -> слабый узел -> маршрут -> Telegram",
};

export const marketReality = {
  tag: "02 / 06 / Market Reality",
  headline: "Рост beauty-мастера ломается не в одном месте.",
  copy:
    "Если чинить всё подряд, система снова распадается на хаос. Beauty Hub ведёт через диагностику: сначала видно, какой узел держит рост, потом выбирается один маршрут.",
};

export const diagnosticNodes = [
  {
    number: "01",
    title: "Техника",
    anchor: "#route-technique",
    path: "#/routes/technique",
    short: "качество и точность",
    symptom: "результат есть, но уверенности в системе работы не хватает",
    breakdown: "техника, скорость, материалы и повторяемость результата требуют точной сборки.",
    firstStep: "разобрать, где техника влияет на доверие, удержание и цену.",
  },
  {
    number: "02",
    title: "Клиентский поток",
    anchor: "#route-client-flow",
    path: "#/routes/client-flow",
    short: "вход и запись",
    symptom: "заявки есть рывками или диалог не доходит до записи",
    breakdown: "профиль, оффер, переписка и первый контакт не собраны в понятный путь.",
    firstStep: "найти точку, где внимание клиента сливается до записи.",
  },
  {
    number: "03",
    title: "Самостоятельность",
    anchor: "#route-independence",
    path: "#/routes/independence",
    short: "выход из зависимости",
    symptom: "хочется выйти из найма или чужой системы без хаоса",
    breakdown: "нет маршрута перехода: финансы, запись, границы, позиционирование и риск смешаны.",
    firstStep: "собрать аккуратный выход без резких движений и ложной смелости.",
  },
  {
    number: "04",
    title: "Личная корректировка",
    anchor: "#route-mentorship",
    path: "#/routes/mentorship",
    short: "разбор маршрута",
    symptom: "понятно, что что-то тормозит, но самой трудно увидеть главный узел",
    breakdown: "нужен внешний взгляд на технику, упаковку, клиентов и порядок действий.",
    firstStep: "зайти в разбор и определить, что чинить первым.",
  },
];

export const productSystem = {
  tag: "03 / 06 / Product Routes",
  headline: "Четыре маршрута вместо хаотичного обучения.",
  copy:
    "Каждый маршрут ведёт к одному узлу системы. Выбор начинается не с обещания результата, а с честной диагностики текущей ситуации.",
  diagnosticMessage:
    "Один из этих узлов сейчас держит твой рост.\nВыбери маршрут, который ближе к твоей ситуации.",
};

export const productRoutes = [
  // ROUTE: TECHNIQUE
  // Purpose: техника как точность, скорость, чистота, контроль материалов, архитектура и качество.
  // Old-site source: modules 1–5: workplace setup, material diagnostics, detachments/pre-burns, speed combi, hard materials.
  // Do not: salon pink, stock manicure glam, cute icons.
  {
    id: "technique",
    articleId: "route-technique",
    source: "route_technique",
    anchor: "#route-technique",
    path: "#/routes/technique",
    number: "01",
    eyebrow: "TECHNIQUE",
    title: "Техника и материалы",
    text: "Для мастера, которому нужно разобрать точность работы, материалы, скорость, чистоту результата и уверенность в качестве.",
    cta: "РАЗОБРАТЬ ТЕХНИКУ →",
    image: "images/product-technique-placeholder.svg",
  },
  // ROUTE: CLIENT FLOW
  // Purpose: клиентский поток как путь от видимости к записи.
  // Old-site source: Avito module: profile packaging, ad photos, offer, price framing, messaging scripts, objections, negative review response.
  // Do not: SaaS dashboard, fake metrics, traffic-hack hype.
  {
    id: "client-flow",
    articleId: "route-client-flow",
    source: "route_client_flow",
    anchor: "#route-client-flow",
    path: "#/routes/client-flow",
    number: "02",
    eyebrow: "CLIENT FLOW",
    title: "Клиентский поток",
    text: "Для ситуации, где просмотры, профиль, переписка или оффер не приводят к стабильной записи.",
    cta: "НАЙТИ ТОЧКУ СЛИВА →",
    image: "images/product-client-flow-placeholder.svg",
  },
  // ROUTE: INDEPENDENCE
  // Purpose: выход из найма как переход из чужой системы в собственную профессиональную траекторию.
  // Product substance: own cabinet, schedule, price, financial risk, client base, working conditions.
  // Do not: girlboss clichés, beach laptop, motivational freedom imagery.
  {
    id: "independence",
    articleId: "route-independence",
    source: "route_independence",
    anchor: "#route-independence",
    path: "#/routes/independence",
    number: "03",
    eyebrow: "INDEPENDENCE",
    title: "Выход из зависимости",
    text: "Для мастера, который хочет выйти из найма, чужой сетки или хаотичного режима без резкого прыжка в пустоту.",
    cta: "СОБРАТЬ ВЫХОД →",
    image: "images/product-independence-placeholder.svg",
  },
  // ROUTE: MENTORSHIP
  // Purpose: наставничество как диагностика, личная корректировка, сопровождение и контроль внедрения.
  // Product substance: point A audit, route, video reviews, technique/client/price corrections, 5-month guidance.
  // Do not: webinar coaching, smiling stock coach, influencer luxury.
  {
    id: "mentorship",
    articleId: "route-mentorship",
    source: "route_mentorship",
    anchor: "#route-mentorship",
    path: "#/routes/mentorship",
    number: "04",
    eyebrow: "MENTORSHIP",
    title: "Личный разбор",
    text: "Для тех, кому нужна личная корректировка маршрута: где сейчас главный узел и что делать первым.",
    cta: "ПОЙТИ С РАЗБОРОМ →",
    image: "images/product-mentorship-placeholder.svg",
  },
];

export const terminalPanel = {
  label: "Private access / route selector",
  title: "Выбери узел без лишнего шума.",
  text:
    "Короткий слой навигации: техника, клиенты, самостоятельность или личный разбор.",
};

export const projectHub = {
  tag: "Private Beauty System / входы",
  headline: "Четыре входа в Private Beauty System.",
  copy:
    "Главная держит общий контекст. Дальше мастер выбирает маршрут, сверяет профессиональную основу проекта или сразу переходит к стартовому шагу в Telegram.",
  entries: [
    {
      number: "01",
      title: "Маршруты",
      text: "Четыре направления роста: техника, клиенты, самостоятельность и личная корректировка.",
      href: "#/routes",
    },
    {
      number: "02",
      title: "Старт",
      text: "Короткий выбор ближайшего узла без отдельной диагностической воронки.",
      href: "#/start",
    },
    {
      number: "03",
      title: "Юлия",
      text: "Профессиональная база проекта и области, на которых держится маршрут.",
      href: "#/julia",
    },
    {
      number: "04",
      title: "Telegram",
      text: "Главный вход для стартового шага и получения маршрута.",
      href: "#/telegram",
    },
  ],
};

export const startPage = {
  tag: "Route finder / старт",
  headline: "Выбери ближайший узел роста.",
  copy:
    "Это не отдельный продукт и не новая диагностика. Это стартовая навигация: один узел, один маршрут, один следующий шаг.",
  cta: "ПОЛУЧИТЬ МАРШРУТ В TELEGRAM →",
  source: "final_conversion",
};

export const authority = {
  tag: "04 / 06 / Authority",
  headline: "Юлия Кюнеберг собирает маршрут как практик, а не как автор вебинара.",
  lead:
    "14 лет практики важны не сами по себе. В Beauty Hub этот опыт превращён в систему: что смотреть в работе мастера, где ломается рост и какой шаг делать первым.",
  stat: "14 лет практики",
  areas: [
    "техника и материалы",
    "клиентский поток и упаковка",
    "личная корректировка и маршрут",
  ],
};

export const telegram = {
  tag: "05 / 06 / Telegram Private Access",
  headline: "Стартовая диагностика начинается в Telegram.",
  copy:
    "После перехода в Telegram ты получишь стартовую диагностику: какой узел сейчас тормозит рост — техника, клиенты, найм или отсутствие личной корректировки.",
  cta: "ПОЛУЧИТЬ СТАРТОВУЮ ДИАГНОСТИКУ →",
  source: "telegram_terminal",
  promise: [
    "определить слабый узел",
    "понять, почему он держит рост",
    "выбрать первый маршрут без лишних разделов",
  ],
};

export const finalConversion = {
  tag: "06 / 06 / Final CTA",
  headline: "Не знаешь, какой узел чинить первым?",
  subheadline:
    "Начни со стартовой диагностики в Telegram. Она покажет ближайший маршрут без обещаний и без лишнего обучения.",
  primaryCta: "ПОЛУЧИТЬ МАРШРУТ В TELEGRAM →",
  source: "final_conversion",
};

export const footer = {
  brand: "Beauty Hub Юлии Кюнеберг",
  descriptor: "Private Beauty System для beauty-мастеров",
  microcopy: "Сначала диагностика. Потом маршрут.",
  routesTitle: "Навигация",
  routes: navItems,
  accessTitle: "Главный вход",
  accessCopy: "Стартовая диагностика определяет, какой узел держит рост сейчас.",
  cta: "ПОЛУЧИТЬ МАРШРУТ",
  source: "footer",
  bottomLine: "Beauty Hub / private beauty system / Julia Kyuneberg",
};