import { useCallback } from "react";

export function useHapticFeedback(duration = 10) {
  return useCallback(() => {
    if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") return;

    navigator.vibrate(duration);
  }, [duration]);
}
