export function trackEvent(event, payload = {}) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("beautyhub:analytics", {
      detail: { event, payload },
    }),
  );
}
