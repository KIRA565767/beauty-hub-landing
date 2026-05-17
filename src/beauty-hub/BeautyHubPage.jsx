import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import { JuliaPage } from "./components/pages/JuliaPage";
import { RouteDetailPage } from "./components/pages/RouteDetailPage";
import { RoutesPage } from "./components/pages/RoutesPage";
import { StartPage } from "./components/pages/StartPage";
import { TelegramPage } from "./components/pages/TelegramPage";
import { StickyCTA } from "./components/ui/StickyCTA";
import { diagnosticNodes, meta, productRoutes } from "./content/landing";
import { useHashRoute } from "./hooks/useHashRoute";
import { useHashScroll } from "./hooks/useHashScroll";

const pageTitles = {
  "/": meta.title,
  "/routes": `Маршруты — ${meta.title}`,
  "/telegram": `Telegram — ${meta.title}`,
  "/julia": `Юлия — ${meta.title}`,
  "/start": `Старт — ${meta.title}`,
};

function getRouteDetail(routePath) {
  if (!routePath.startsWith("/routes/")) return null;

  const routeId = routePath.replace("/routes/", "");
  const route = productRoutes.find((item) => item.id === routeId);
  if (!route) return null;

  const index = productRoutes.findIndex((item) => item.id === route.id);

  return {
    route,
    node: diagnosticNodes[index],
  };
}

export function BeautyHubPage() {
  const routePath = useHashRoute();
  const routeDetail = getRouteDetail(routePath);
  useHashScroll();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    document.title = routeDetail?.route
      ? `${routeDetail.route.title} — ${meta.title}`
      : pageTitles[routePath] || meta.title;
  }, [routeDetail?.route, routePath]);

  let page = <HomePage />;

  if (routePath === "/routes") page = <RoutesPage />;
  if (routePath === "/telegram") page = <TelegramPage />;
  if (routePath === "/julia") page = <JuliaPage />;
  if (routePath === "/start") page = <StartPage />;
  if (routeDetail) page = <RouteDetailPage route={routeDetail.route} node={routeDetail.node} />;

  return (
    <main className="beauty-hub min-h-screen bg-graphite text-dusty">
      <Header />
      <div key={routePath}>{page}</div>
      <Footer />
      <StickyCTA />
    </main>
  );
}
