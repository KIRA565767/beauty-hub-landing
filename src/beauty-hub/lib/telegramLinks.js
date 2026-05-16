const FALLBACK_TELEGRAM_URL = "https://t.me/beautyhub_official_bot";

export const TELEGRAM_BASE_URL = import.meta.env.VITE_TELEGRAM_URL || FALLBACK_TELEGRAM_URL;

export function getTelegramStartLink(source = "site") {
  return `${TELEGRAM_BASE_URL}?start=${encodeURIComponent(source)}`;
}
