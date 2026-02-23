import Link from "next/link";
import {
  BoltIcon,
  WrenchIcon,
  HomeIcon,
  CubeIcon,
  LightBulbIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';


export const metadata = {
  title: "Послуги електрика — професійні електромонтажні роботи",
  description:
    "Послуги електрика для дому та бізнесу: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика.",
  alternates: {
    canonical: "https://ocheret.dp.ua/services/electryk",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Послуги електрика — професійні електромонтажні роботи",
    description:
      "Послуги електрика для дому та бізнесу: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/services/electryk",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/electryk-hero-img.png",
        width: 1536,
        height: 1024,
        alt: "Електрик монтує УЗО"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги електрика — професійні електромонтажні роботи",
    description:
      "Послуги електрика для дому та бізнесу: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика.",
    images: ["https://ocheret.dp.ua/electryk-hero-img.png"],
  },
};



export default function ElectrikServicePage() {
  const faqs = [
    {
      q: "Чи можна викликати електрика терміново?",
      a: "Так, можливий терміновий виїзд у разі аварійних ситуацій.",
    },
    {
      q: "Чи надається гарантія на роботи?",
      a: "Так, на всі виконані роботи надається гарантія.",
    },
    {
      q: "Чи працюєте ви з комерційними об’єктами?",
      a: "Так, електрик виконує роботи як для приватних, так і для комерційних приміщень.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/services/electryk#service",
        "name": "Послуги електрика",
        "description":
          "Професійні електромонтажні роботи для дому та бізнесу: електропроводка, розетки, освітлення, електрощити, аварійні роботи.",
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
        "url": "https://ocheret.dp.ua/services/electryk"
      },

      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/services/electryk#faq",
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
      {/* H1 */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url('/electryk-hero-img.png')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 xl:px-24">
        <div className="max-w-3xl relative">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Послуги електрика — професійні електромонтажні роботи
          </h1>

          <p className="mt-6 text-base md:text-lg text-white">
            Професійні електромонтажні роботи для квартир, будинків,
            офісів та комерційних приміщень. Надійно, безпечно та з дотриманням
            усіх норм.
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

      {/* ABOUT SERVICE */}
      <section className="py-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібні послуги електрика
          </h2>
          <p className="text-gray-700 mb-4">
            Послуги електрика необхідні у випадках монтажу або заміни
            електропроводки, встановлення розеток і вимикачів, підключення
            освітлення, модернізації електромережі чи усунення аварійних
            ситуацій. Робота з електрикою вимагає досвіду та знання технічних
            стандартів, тому самостійне втручання може бути небезпечним.
          </p>
          <p className="text-gray-700">
            Кваліфікований електрик оцінює стан мережі, підбирає оптимальні
            рішення та гарантує безпечну експлуатацію електрообладнання.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Які роботи виконує електрик
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            {/* Монтаж та заміна електропроводки */}
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <BoltIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Монтаж та заміна електропроводки</span>
            </li>

            {/* Встановлення розеток і вимикачів */}
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Встановлення розеток і вимикачів</span>
            </li>

            {/* Підключення люстр, світильників, LED-освітлення */}
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <LightBulbIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Підключення люстр, світильників, LED-освітлення</span>
            </li>

            {/* Монтаж електрощитів, автоматів та УЗО */}
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CubeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Монтаж електрощитів, автоматів та УЗО</span>
            </li>

            {/* Підключення побутової техніки */}
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Підключення побутової техніки</span>
            </li>

            {/* Усунення несправностей та аварійні роботи */}
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Усунення несправностей та аварійні роботи</span>
            </li>
          </ul>

        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
        <h2 className="text-2xl font-semibold mb-4">
          Вартість послуг електрика
        </h2>
        <p className="text-gray-700">
          Ціна на послуги електрика залежить від складності робіт,
          обсягу завдання та стану електромережі. Перед початком робіт
          майстер оцінює ситуацію та погоджує вартість із клієнтом.
        </p>
        </div>
      </section>

      {/* INTERNAL LINK TO CITY */}
      <section className="pb-20 bg-gray-50 p-6 rounded-lg">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-3">
            Послуги електрика у вашому місті
          </h2>
          <p className="text-gray-700 mb-4">
            Ми надаємо послуги електрика з виїздом у конкретних містах.
            Оберіть своє місто, щоб переглянути детальну інформацію.
          </p>

          <Link
            href="/kamianske/electryk"
            className="inline-flex items-center justify-center rounded-lg
                         bg-brand px-6 py-3 text-lg font-semibold
                         text-white transition hover:bg-green-700
                         focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white no-underline"
          >
            Послуги електрика у Кам’янському
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
