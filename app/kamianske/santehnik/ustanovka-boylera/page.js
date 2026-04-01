import Image from "next/image";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  BoltIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Установка бойлера Кам'янське — монтаж водонагрівача 24/7",
  description:
    "Установка бойлера у Кам'янському: монтаж водонагрівачів, підключення, заміна старого бойлера, гарантія на роботи. Швидко, недорого, виїзд у день звернення.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-boylera",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Установка бойлера Кам'янське — монтаж водонагрівача",
    description:
      "Професійна установка бойлера у Кам'янському. Монтаж, підключення, заміна водонагрівачів, виїзд майстра 24/7.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-boylera",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/ustanovka-boylera-kamianske.webp",
        width: 1536,
        height: 1024,
        alt: "Установка бойлера у Кам'янському"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Установка бойлера Кам'янське — монтаж водонагрівача",
    description:
      "Термінова установка бойлера у Кам'янському. Підключення, монтаж, заміна водонагрівача, виїзд майстра.",
    images: ["https://ocheret.dp.ua/ustanovka-boylera-kamianske.webp"],
  },
};

export default function SantehnikKamianskePage() {
  const faqs = [
  {
    q: "Чи можна викликати майстра для установки бойлера терміново у Камʼянському?",
    a: "Так, можливий терміновий виїзд сантехніка для установки та підключення бойлера у Камʼянському, у тому числі в аварійних ситуаціях."
  },
  {
    q: "Які послуги входять в установку бойлера?",
    a: "Виконуємо монтаж бойлера, підключення до водопроводу та електромережі, встановлення кріплень, підключення запобіжного клапана та перевірку роботи."
  },
  {
    q: "Чи можна встановити бойлер замість старого?",
    a: "Так, майстер демонтує старий бойлер і встановить новий з правильним підключенням та перевіркою системи."
  },
  {
    q: "Скільки коштує установка бойлера у Камʼянському?",
    a: "Ціна залежить від обʼєму бойлера, складності монтажу, необхідності додаткових робіт та матеріалів. Остаточна вартість визначається після огляду."
  },
  {
    q: "Чи працюєте ви 24/7 для установки бойлерів?",
    a: "Так, майстер може приїхати для установки або заміни бойлера у будь-який час, включаючи вечір, ніч та святкові дні."
  },
  {
    q: "Чи встановлюєте бойлери в квартирі та приватному будинку?",
    a: "Так, виконуємо установку бойлерів у квартирах, приватних будинках, офісах та комерційних приміщеннях у Камʼянському."
  },
  {
    q: "Чи потрібно купувати матеріали для установки бойлера самостійно?",
    a: "За потреби майстер може привезти необхідні кріплення, шланги, клапани та інші матеріали або встановити бойлер з матеріалами замовника."
  },
  {
    q: "Чи є гарантія на установку бойлера?",
    a: "Так, на виконані роботи з установки та підключення бойлера надається гарантія."
  },
  {
    q: "Як швидко приїжджає майстер для установки бойлера?",
    a: "У більшості випадків виїзд можливий у день звернення, особливо при терміновій заміні або підключенні бойлера."
  }
];

  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-boylera#service",
      "name": "Установка бойлера у Кам'янському",
      "description":
        "Професійна установка бойлера у Кам'янському: монтаж водонагрівача, підключення до водопроводу та електромережі, заміна старого бойлера, виїзд майстра.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ocheret",
        "url": "https://ocheret.dp.ua",
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
          "name": "Виїзд майстра для установки бойлера у Кам'янському"
        }
      },
      "url": "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-boylera"
    },
    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-boylera#faq",
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
      <section className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ustanovka-boylera-kamianske.webp"
            alt="Послуги сантехніка в Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Установка бойлера в Кам'янському — швидко і професійно
            </h1>

            <p className="mt-6 text-lg text-white">
              Монтаж і підключення бойлерів у квартирах, будинках, офісах та
              комерційних приміщеннях у Кам'янському. Виїзд майстра у день звернення.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white">
                Замовити встановлення
              </Link>
              <Link href="/masters" className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black">
                Стати майстром
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Професійна установка бойлера в Кам'янському
          </h2>

          <p className="text-gray-700 mb-4">
            Установка бойлера в Кам'янському виконується з правильним підключенням до
            водопроводу та електромережі, монтажем кріплень, встановленням запобіжного
            клапана та перевіркою герметичності системи.
          </p>

          <p className="text-gray-700">
            Професійний монтаж водонагрівача гарантує безпечну роботу бойлера,
            стабільний тиск води та довгий термін служби обладнання у квартирі,
            приватному будинку або комерційному приміщенні в Кам'янському.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Послуги з установки бойлера в Кам'янському
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand" />
              <span>Монтаж та установка бойлера будь-якого типу</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <BoltIcon className="w-8 h-8 text-brand" />
              <span>Підключення бойлера до електромережі та водопроводу</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ShieldCheckIcon className="w-8 h-8 text-brand" />
              <span>Встановлення запобіжного клапана та перевірка безпеки</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ArrowPathIcon className="w-8 h-8 text-brand" />
              <span>Заміна старого бойлера на новий</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ClockIcon className="w-8 h-8 text-brand" />
              <span>Терміновий виїзд майстра у день звернення</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <HomeIcon className="w-8 h-8 text-brand" />
              <span>Установка бойлера в квартирах, будинках та офісах</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 mb-20 bg-brand text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Потрібен майстер вже сьогодні?
        </h2>
        <Link
          href="/order"
          className="w-[450px] max-w-full inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition no-underline hover:text-brand"
        >
          Замовити сантехніка в Камʼянському
        </Link>
      </section>

      {/* WHY */}

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Термінова установка бойлера в Кам'янському — швидко та без переплат
            </h2>

            <p className="text-gray-700 mb-4">
              Потрібно встановити бойлер у Кам'янському? Виконуємо терміновий монтаж
              та підключення водонагрівачів з виїздом майстра у найкоротші строки.
              Працюємо акуратно, дотримуємось технічних норм та надаємо гарантію на роботи.
            </p>

            <p className="text-gray-700 mb-4">
              Встановлюємо бойлери будь-якого об'єму та типу, підключаємо до водопроводу
              та електромережі, виконуємо заміну старого обладнання і перевіряємо систему
              на герметичність та безпечну роботу.
            </p>

            <p className="text-gray-700">
              Перегляньте всі послуги на сторінці{" "}
              <Link href="/kamianske/santehnik" className="text-brand underline">
                послуги сантехніка в Кам'янському
              </Link>.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src="/ustanovka-boylera.webp"
              width={1024}
              height={1024}
              alt="Установка бойлера Кам'янське"
            />
          </div>
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
