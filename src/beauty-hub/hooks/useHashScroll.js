import { useEffect } from "react";

export function useHashScroll() {
  useEffect(() => {
    function scrollToHash() {
      if (window.location.hash.startsWith("#/")) return;

      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    }

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
}
