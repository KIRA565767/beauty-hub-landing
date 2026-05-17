import { useEffect, useState } from "react";

const ROUTE_HASH_PREFIX = "#/";

function normalizeRouteHash(hash) {
  if (!hash || hash === "#") return "/";
  if (!hash.startsWith(ROUTE_HASH_PREFIX)) return "/";

  const [path] = hash.slice(1).split("?");
  const normalized = path.replace(/\/+$/, "");

  return normalized || "/";
}

function getCurrentRoute() {
  if (typeof window === "undefined") return "/";

  return normalizeRouteHash(window.location.hash);
}

export function useHashRoute() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    function syncRoute() {
      setRoute(getCurrentRoute());
    }

    window.addEventListener("hashchange", syncRoute);

    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return route;
}
