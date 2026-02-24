import Link from "next/link";
import {
  HomeModernIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  TruckIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Ремонт квартир — комплексні ремонтні роботи під ключ",
  description:
    "Ремонт квартир під ключ: чорнові та чистові роботи, сантехніка, електрика, оздоблення, демонтаж. Професійний ремонт квартир у Дніпропетровській області.",
  alternates: {
    canonical: "https://ocheret.dp.ua/services/remont-kvartyr",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Ремонт квартир — комплексні ремонтні роботи під ключ",
    description:
      "Комплексний ремонт квартир: від демонтажу до чистового оздоблення. Надійні майстри, прозора вартість, гарантія на роботи.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/services/remont-kvartyr",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/remont-kvartyr-hero-img.png",
        width: 1536,
        height: 1024,
        alt: "Процес ремонту квартири"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ремонт квартир — комплексні ремонтні роботи під ключ",
    description:
      "Ремонт квартир під ключ: чорнові та чистові роботи, сантехніка, електрика, оздоблення.",
    images: ["https://ocheret.dp.ua/remont-kvartyr-hero-img.png"],
  },
};

export default function RemontKvartyrPage() {
  const faqs = [
    {
      q: "Скільки часу займає ремонт квартири?",
      a: "Термін виконання залежить від площі та складності робіт. Косметичний ремонт займає від 2–4 тижнів, капітальний — довше.",
    },
    {
      q: "Чи можна замовити ремонт квартири під ключ?",
      a: "Так, ми виконуємо ремонт квартир під ключ — від демонтажу до встановлення освітлення та сантехніки.",
    },
    {
      q: "Чи надається гарантія на ремонтні роботи?",
      a: "Так, на всі виконані роботи надається гарантія відповідно до договору.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/services/remont-kvartyr#service",
        "name": "Ремонт квартир",
        "description":
          "Комплексний ремонт квартир під ключ: демонтаж, чорнові та чистові роботи, електрика, сантехніка, оздоблення.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Дніпропетровська область"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "Україна"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Виїзд до клієнта"
          }
        },
        "url": "https://ocheret.dp.ua/services/remont-kvartyr"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/services/remont-kvartyr#faq",
        "mainEntity": faqs.map((item) => ({
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/remont-kvartyr-hero-img.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Ремонт квартир — професійно та під ключ
            </h1>

            <p className="mt-6 text-base md:text-lg text-white">
              Виконуємо ремонт квартир будь-якої складності: від косметичного
              оновлення до капітального ремонту з повною заміною комунікацій.
              Працюємо швидко, якісно та з гарантією.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg
                  bg-brand px-6 py-3 text-lg font-semibold
                  text-white transition hover:bg-green-700
                  focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white"
              >
                Замовити ремонт
              </a>

              <a
                href="/masters"
                className="btn inline-flex items-center justify-center rounded-lg
                  border border-gray-300 px-6 py-3 text-lg font-semibold
                  text-white transition hover:bg-gray-50 hover:text-black"
              >
                Стати майстром
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібен ремонт квартири
          </h2>
          <p className="text-gray-700 mb-4">
            Ремонт квартири необхідний при купівлі нового житла, зношенні
            інженерних мереж або бажанні оновити інтер’єр. Професійний підхід
            дозволяє уникнути помилок, перевитрати матеріалів та затягування
            термінів.
          </p>
          <p className="text-gray-700">
            Комплексний ремонт квартир включає планування, підбір матеріалів,
            організацію всіх етапів робіт та контроль якості виконання.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Що входить у ремонт квартири
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeModernIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Капітальний та косметичний ремонт квартир</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Демонтажні та чорнові роботи</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <PaintBrushIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Шпаклювання, фарбування, укладання плитки</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <Squares2X2Icon className="w-8 h-8 text-brand shrink-0" />
              <span>Монтаж підлоги: ламінат, паркет, плитка</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <TruckIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Закупівля та доставка матеріалів</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ClipboardDocumentCheckIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Контроль якості та здача об’єкта під ключ</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Вартість ремонту квартири
          </h2>
          <p className="text-gray-700">
            Ціна на ремонт квартири формується залежно від площі приміщення,
            обсягу робіт та обраних матеріалів. Після огляду об’єкта майстер
            складає детальний кошторис та погоджує його з клієнтом.
          </p>
        </div>
      </section>

      {/* INTERNAL LINK */}
      <section className="pb-20 bg-gray-50 p-6 rounded-lg">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-3">
            Ремонт квартир у вашому місті
          </h2>
          <p className="text-gray-700 mb-4">
            Оберіть місто, щоб переглянути детальну інформацію про ремонт
            квартир з виїздом майстра.
          </p>

          <Link
            href="/kamianske/remont-kvartyr"
            className="inline-flex items-center justify-center rounded-lg
              bg-brand px-6 py-3 text-lg font-semibold
              text-white transition hover:bg-green-700
              focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white no-underline"
          >
            Ремонт квартир у Кам’янському
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Питання та відповіді
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border p-6 open:shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-green-600 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}