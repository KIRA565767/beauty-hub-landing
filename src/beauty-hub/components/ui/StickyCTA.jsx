import { useEffect, useState } from "react";
import { Button } from "./Button";
import { getTelegramStartLink } from "../../lib/telegramLinks";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hash, setHash] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));

  useEffect(() => {
    const heroNode = document.getElementById("top");
    const productsNode = document.getElementById("products");
    const finalNode = document.getElementById("final-conversion");
    if (!heroNode || !productsNode || !finalNode) return undefined;

    let frame = 0;

    function sync() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setHash(window.location.hash);
        const heroRect = heroNode.getBoundingClientRect();
        const productsRect = productsNode.getBoundingClientRect();
        const finalRect = finalNode.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const productsVisible = productsRect.top < viewportHeight && productsRect.bottom > 80;
        const finalVisible = finalRect.top < viewportHeight && finalRect.bottom > 0;
        const menuOpen = document.documentElement.dataset.mobileMenuOpen === "true";

        setIsVisible(heroRect.bottom <= 80 && !productsVisible && !finalVisible && !menuOpen);
      });
    }

    sync();
    const initialSync = window.setTimeout(sync, 180);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", sync);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(initialSync);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", sync);
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
