import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ocheret.dp.ua";

  const daily = (path: string) => ({
    url: `${base}${path}`,
    changeFrequency: "daily" as const,
    priority: 1.0,
  });

  const weekly = (path: string, priority = 0.9) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority,
  });

  const monthly = (path: string, priority = 0.7) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    // Головна
    daily("/"),

    // Послуги
    weekly("/services"),
    weekly("/services/electryk"),
    weekly("/services/malyarni-roboty"),
    weekly("/services/remont-kvartyr"),
    weekly("/services/santehnik"),
    weekly("/services/zbirka-mebliv"),

    // Дніпро
    weekly("/dnipro"),
    weekly("/dnipro/electryk"),
    weekly("/dnipro/santehnik"),
    weekly("/dnipro/handyman"),

    // Кам'янське — розділ
    weekly("/kamianske"),

    // Кам'янське — електрик
    weekly("/kamianske/electryk"),
    weekly("/kamianske/electryk/zamina-elektroprovodky-v-kvartyri"),
    weekly("/kamianske/electryk/vstanovlennia-avtomativ-i-schytkiv"),
    weekly("/kamianske/electryk/vstanovlennya-rozetok-i-vymikachiv"),
    weekly("/kamianske/electryk/pidklyuchennya-pobutovoyi-tekhniky"),
    weekly("/kamianske/electryk/montazh-osvitlennya"),

    // Кам'янське — інші послуги
    weekly("/kamianske/remont-kvartyr"),
    weekly("/kamianske/vstanovlennya-vikon"),
    weekly("/kamianske/santehnik"),
    weekly("/kamianske/santehnik/prochistka-kanalizaciyi"),
    weekly("/kamianske/santehnik/ustanovka-boylera"),
    weekly("/kamianske/santehnik/zamina-unitaza"),
    weekly("/kamianske/santehnik/ustanovka-rakovyny"),
    weekly("/kamianske/shpalery"),
    weekly("/kamianske/zbirka-mebliv"),
    weekly("/kamianske/uteplennia-fasadiv"),
    weekly("/kamianske/clining"),
    weekly("/kamianske/handyman"),

    // Інфо-сторінки
    weekly("/about"),
    weekly("/contact"),
    weekly("/order", 0.8),

    // Статичні
    monthly("/masters"),
    monthly("/terms"),
    monthly("/privacy-policy"),
  ];
}