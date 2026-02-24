import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  CubeIcon,
  HomeIcon,
  Squares2X2Icon,
  TruckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Збірка меблів — професійне складання меблів вдома та в офісі",
  description:
    "Професійна збірка меблів: шафи, ліжка, кухні, столи, офісні меблі. Швидко, акуратно, з гарантією. Виклик майстра зі збірки меблів.",
  alternates: {
    canonical: "https://ocheret.dp.ua/services/zbirka-mebliv",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Збірка меблів — професійне складання меблів",
    description:
      "Збірка меблів будь-якої складності: квартир, будинків та офісів. Досвідчені майстри, інструмент, гарантія якості.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/services/zbirka-mebliv",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/zbirka-mebliv-hero.png",
        width: 1536,
        height: 1024,
        alt: "Майстер збирає меблі"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Збірка меблів — професійне складання меблів",
    description:
      "Швидка та якісна збірка меблів з виїздом до клієнта. Квартири, будинки, офіси.",
    images: ["https://ocheret.dp.ua/zbirka-mebliv-hero.png"],
  },
};

export default function FurnitureAssemblyServicePage() {
  const faqs = [
    {
      q: "Чи збираєте ви меблі з IKEA та інших магазинів?",
      a: "Так, ми виконуємо збірку меблів IKEA, JYSK, BRW, Епіцентр та інших виробників.",
    },
    {
      q: "Чи потрібно мати інструменти?",
      a: "Ні, майстер приїжджає з усім необхідним професійним інструментом.",
    },
    {
      q: "Чи надається гарантія на збірку меблів?",
      a: "Так, ми надаємо гарантію на всі виконані роботи зі збірки меблів.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/services/zbirka-mebliv#service",
        "name": "Збірка меблів",
        "description":
          "Професійна збірка меблів для дому та офісу: шафи, кухні, ліжка, столи, офісні меблі.",
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
        "url": "https://ocheret.dp.ua/services/zbirka-mebliv"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/services/zbirka-mebliv#faq",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/zbirka-mebliv-hero.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Збірка меблів — швидко, акуратно, професійно
            </h1>

            <p className="mt-6 text-lg text-white">
              Професійна збірка меблів для квартир, будинків та офісів.
              Досвідчені майстри, правильна установка та гарантія якості.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
              href="/order"
              className="btn inline-flex items-center justify-center rounded-lg
                         bg-brand px-6 py-3 text-lg font-semibold
                         text-white transition hover:bg-green-700
                         focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white"
            >
              Замовити майстра
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
            Коли потрібна збірка меблів
          </h2>
          <p className="text-gray-700 mb-4">
            Послуги зі збірки меблів необхідні після покупки нових меблів,
            переїзду, ремонту або заміни інтер’єру. Неправильна збірка може
            призвести до пошкодження конструкції та втрати гарантії.
          </p>
          <p className="text-gray-700">
            Професійний майстер забезпечує правильне складання, надійне
            кріплення та довгий термін експлуатації меблів.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Які меблі ми збираємо
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CubeIcon className="w-8 h-8 text-brand" />
              <span>Шафи, комоди, гардероби</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeIcon className="w-8 h-8 text-brand" />
              <span>Ліжка, дивани, тумби</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <Squares2X2Icon className="w-8 h-8 text-brand" />
              <span>Кухонні меблі та модулі</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand" />
              <span>Офісні меблі та робочі місця</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <TruckIcon className="w-8 h-8 text-brand" />
              <span>Меблі після доставки або переїзду</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand" />
              <span>Виправлення помилок неякісної збірки</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Вартість збірки меблів
          </h2>
          <p className="text-gray-700">
            Ціна збірки меблів залежить від типу, складності конструкції,
            кількості елементів та часу виконання робіт.
            Остаточна вартість узгоджується перед початком робіт.
          </p>
        </div>
      </section>

      {/* CITY */}
      <section className="pb-20 bg-gray-50 p-6 rounded-lg">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-3">
            Збірка меблів у вашому місті
          </h2>
          <p className="text-gray-700 mb-4">
            Ми виконуємо збірку меблів з виїздом у різних містах області.
          </p>

          <Link
            href="/kamianske/zbirka-mebliv"
            className="inline-flex bg-brand px-6 py-3 text-lg text-white font-semibold rounded-lg hover:text-white hover:bg-green-700 no-underline"
          >
            Збірка меблів у Кам’янському
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
              <details key={i} className="group border rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-lg flex justify-between">
                  {item.q}
                  <span className="text-green-600 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}