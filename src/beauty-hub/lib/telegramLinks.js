const BOT_URL = "#telegram";

export function getTelegramStartLink(source) {
  if (BOT_URL.startsWith("#")) return BOT_URL;

  return `${BOT_URL}?start=${encodeURIComponent(source)}`;
}
