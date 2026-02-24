import Link from "next/link";
import Image from "next/image";
import {
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  Squares2X2Icon,
  BuildingOffice2Icon,
  TruckIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Ремонт квартир Кам'янське — під ключ, ціни та гарантія",
  description:
    "Професійний ремонт квартир у Кам'янському: під ключ, косметичний, капітальний. Оздоблювальні роботи, плитка, підлога, сантехніка, електрика. Гарантія якості.",
  keywords: [
    "ремонт квартир Кам'янське",
    "ремонт під ключ Кам'янське",
    "капітальний ремонт Кам'янське",
    "косметичний ремонт Кам'янське",
    "майстри Кам'янське"
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/remont-kvartyr"
  },
  openGraph: {
    title: "Ремонт квартир Кам'янське — під ключ",
    description:
      "Комплексний ремонт квартир у Кам'янському. Швидко, якісно, з гарантією.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/remont-kvartyr",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/remont-kvartyr-kamianske-img.png",
        width: 1536,
        height: 1024,
        alt: "Ремонт квартири у Кам'янському"
      }
    ]
  }
};

export default function RemontKvartyrKamianskePage() {
  const faqs = [
    {
      q: "Скільки коштує ремонт квартири у Кам'янському?",
      a: "Вартість залежить від площі, типу ремонту та обсягу робіт. Точна ціна визначається після огляду об'єкта."
    },
    {
      q: "Чи можна замовити ремонт під ключ?",
      a: "Так, виконується повний цикл робіт — від демонтажу до фінального оздоблення."
    },
    {
      q: "Скільки триває ремонт?",
      a: "Тривалість залежить від складності та площі квартири. У середньому — від кількох тижнів."
    },
    {
      q: "Чи надається гарантія?",
      a: "Так, на всі види ремонтних робіт надається гарантія."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/remont-kvartyr#service",
        "name": "Ремонт квартир у Кам'янському",
        "description":
          "Комплексний ремонт квартир під ключ у Кам'янському: оздоблення, плитка, підлога, сантехніка, електромонтаж.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "areaServed": {
            "@type": "Place",
            "name": "Кам'янське"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Кам'янське",
            "addressRegion": "Дніпропетровська область",
            "addressCountry": "UA"
          }
        },
        "areaServed": {
          "@type": "Place",
          "name": "Кам'янське"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Виїзд до клієнта у Кам'янському"
          }
        },
        "url": "https://ocheret.dp.ua/kamianske/remont-kvartyr"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/remont-kvartyr#faq",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative flex items-center py-24 xl:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/remont-kvartyr-kamianske-img.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24 relative">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl">
            Ремонт квартир Кам'янське — якісно та під ключ
          </h1>
          <p className="mt-6 text-white max-w-2xl">
            Виконуємо комплексний ремонт квартир у Кам'янському:
            косметичний, капітальний, ремонт у новобудовах та вторинному житлі.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
              <a href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white">
                Замовити майстра
              </a>
              <a href="/masters" className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black">
                Стати майстром
              </a>
            </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Роботи, які виконуємо
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Комплексний ремонт під ключ</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <PaintBrushIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Шпаклівка, фарбування, оздоблення</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <Squares2X2Icon className="w-8 h-8 text-brand shrink-0" />
              <span>Плитка, ламінат, підлогові покриття</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <BuildingOffice2Icon className="w-8 h-8 text-brand shrink-0" />
              <span>Ремонт у новобудовах та вторинному житлі</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <TruckIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Доставка матеріалів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CheckBadgeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Гарантія на всі роботи</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Чому обирають ремонт квартир у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Професійний підхід, сучасні матеріали та дотримання будівельних норм
            забезпечують якісний та довговічний результат.
          </p>
          <p className="text-gray-700">
            Роботи виконуються поетапно, з узгодженням бюджету та термінів.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center"> Питання та відповіді </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group rounded-lg border p-6 open:shadow-sm">
                <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                  {item.q} <span className="text-green-600 transition group-open:rotate-180"> ▼ </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}