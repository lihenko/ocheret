import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  CubeIcon,
  ArrowPathIcon,
  FireIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Послуги сантехніка — професійні сантехнічні роботи",
  description:
    "Послуги сантехніка для дому та бізнесу: водопровід, каналізація, опалення, бойлери, аварійні роботи. Виклик професійного сантехніка.",
  alternates: {
    canonical: "https://ocheret.dp.ua/services/santehnik",
  },
  openGraph: {
    title: "Послуги сантехніка — професійні сантехнічні роботи",
    description:
      "Послуги сантехніка для дому та бізнесу: водопровід, каналізація, опалення, бойлери, аварійні роботи. Виклик професійного сантехніка.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/services/santehnik",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/santehnik-hero-img.png",
        width: 1536,
        height: 1024,
        alt: "Сантехнік виконує монтаж труб"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги сантехніка — професійні сантехнічні роботи",
    description:
      "Послуги сантехніка для дому та бізнесу: водопровід, каналізація, опалення, бойлери, аварійні роботи.",
    images: ["https://ocheret.dp.ua/santehnik-hero-img.png"],
  },
};

export default function SantehnikServicePage() {
  const faqs = [
    {
      q: "Чи можна викликати сантехніка терміново?",
      a: "Так, можливий терміновий виїзд сантехніка у разі аварійних ситуацій.",
    },
    {
      q: "Чи надається гарантія на сантехнічні роботи?",
      a: "Так, на всі виконані сантехнічні роботи надається гарантія.",
    },
    {
      q: "Чи працюєте ви з комерційними об’єктами?",
      a: "Так, сантехнік виконує роботи як для приватних, так і для комерційних приміщень.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/services/santehnik#service",
        "name": "Послуги сантехніка",
        "description":
          "Професійні сантехнічні роботи: водопровід, каналізація, опалення, бойлери, аварійні виїзди.",
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
        "url": "https://ocheret.dp.ua/services/santehnik"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/services/santehnik#faq",
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
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/santehnik-hero-img.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Послуги сантехніка — професійні сантехнічні роботи
            </h1>

            <p className="mt-6 text-lg text-white">
              Монтаж, ремонт та обслуговування сантехніки у квартирах, будинках,
              офісах та комерційних приміщеннях.
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
            Коли потрібні послуги сантехніка
          </h2>
          <p className="text-gray-700 mb-4">
            Послуги сантехніка необхідні при протіканні труб, засміченні
            каналізації, встановленні або заміні сантехнічного обладнання,
            бойлерів та систем опалення.
          </p>
          <p className="text-gray-700">
            Кваліфікований сантехнік швидко визначає проблему та забезпечує
            надійне й безпечне рішення.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Які роботи виконує сантехнік
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg">
              <CubeIcon className="w-8 h-8 text-brand" />
              <span>Монтаж та заміна труб водопостачання і каналізації</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand" />
              <span>Встановлення унітазів, раковин, ванн, душових кабін</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <HomeIcon className="w-8 h-8 text-brand" />
              <span>Підключення бойлерів та побутової техніки</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <FireIcon className="w-8 h-8 text-brand" />
              <span>Монтаж і ремонт систем опалення</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ArrowPathIcon className="w-8 h-8 text-brand" />
              <span>Усунення протікань та заміна змішувачів</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand" />
              <span>Аварійні сантехнічні роботи</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CITY */}
      <section className="pb-20 bg-gray-50 p-6">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-3">
            Послуги сантехніка у вашому місті
          </h2>
          <Link href="/kamianske/santehnik" className="inline-flex items-center justify-center rounded-lg
                         bg-brand px-6 py-3 text-lg font-semibold
                         text-white transition hover:bg-green-700
                         focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white no-underline">
            Сантехнік у Кам’янському
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Питання та відповіді
          </h2>

          {faqs.map((item, i) => (
            <details key={i} className="border p-6 rounded-lg mb-4">
              <summary className="font-semibold cursor-pointer">
                {item.q}
              </summary>
              <p className="mt-4 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
