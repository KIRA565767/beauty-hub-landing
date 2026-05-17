import { useEffect, useState } from "react";
import { Button } from "./Button";
import { getTelegramStartLink } from "../../lib/telegramLinks";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hash, setHash] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));

  useEffect(() => {
    let frame = 0;

    function sync() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nextHash = window.location.hash;
        const heroNode = document.getElementById("top");
        const productsNode = document.getElementById("products");
        const finalNode = document.getElementById("final-conversion");

        setHash(nextHash);

        if (!heroNode) {
          setIsVisible(false);
          return;
        }

        const heroRect = heroNode.getBoundingClientRect();
        const productsRect = productsNode?.getBoundingClientRect();
        const finalRect = finalNode?.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const productsVisible = productsRect ? productsRect.top < viewportHeight && productsRect.bottom > 80 : false;
        const finalVisible = finalRect ? finalRect.top < viewportHeight && finalRect.bottom > 0 : false;
        const menuOpen = document.documentElement.dataset.mobileMenuOpen === "true";
        const routeBlocksSticky = nextHash.startsWith("#/routes") || nextHash === "#/start";

        setIsVisible(heroRect.bottom <= 80 && !productsVisible && !finalVisible && !menuOpen && !routeBlocksSticky);
      });
    }

    sync();
    const initialSync = window.setTimeout(sync, 180);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", sync);
    window.addEventListener("beautyhub:mobile-menu", sync);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(initialSync);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("beautyhub:mobile-menu", sync);
    };
  }, []);

  return (
    <div
      className={`fixed left-5 right-5 z-[55] md:hidden ${
        isVisible && hash !== "#products" ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      } transition duration-300`}
      style={{ bottom: "calc(20px + env(safe-area-inset-bottom))" }}
    >
      <Button href={getTelegramStartLink("sticky_cta")} haptic source="sticky_cta" className="w-full shadow-terminal">
        ПОЛУЧИТЬ МАРШРУТ →
      </Button>
    </div>
  );
}
