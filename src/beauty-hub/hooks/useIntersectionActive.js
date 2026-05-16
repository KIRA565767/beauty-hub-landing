import { useEffect, useRef, useState } from "react";
import { useHapticFeedback } from "./useHapticFeedback";

export function useIntersectionActive(itemCount, { rootRef, threshold = 0.6 } = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const didSetInitial = useRef(false);
  const pulse = useHapticFeedback(10);

  useEffect(() => {
    const root = rootRef?.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;

    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const nextIndex = Number(visible.target.getAttribute("data-index"));
        setActiveIndex((currentIndex) => {
          if (currentIndex === nextIndex) return currentIndex;
          if (didSetInitial.current) pulse();
          didSetInitial.current = true;
          return nextIndex;
        });
      },
      { root, threshold },
    );

    itemRefs.current.slice(0, itemCount).forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [itemCount, pulse, rootRef, threshold]);

  return {
    activeIndex,
    setItemRef: (index) => (node) => {
      itemRefs.current[index] = node;
    },
  };
}
