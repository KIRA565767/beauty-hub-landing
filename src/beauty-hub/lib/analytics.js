export function trackEvent(eventName, payload = {}) {
  if (typeof window === "undefined") return;

  const detail = { eventName, payload };

  try {
    window.dispatchEvent(new CustomEvent("beautyhub:analytics", { detail }));
  } catch {
    // Analytics must never block navigation or CTA clicks.
  }

  try {
    if (typeof window.ym === "function" && window.__BEAUTY_HUB_YM_ID__) {
      window.ym(window.__BEAUTY_HUB_YM_ID__, "reachGoal", eventName, payload);
    }
  } catch {
    // Optional counter may be absent or blocked.
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  } catch {
    // Optional gtag may be absent or blocked.
  }
}
