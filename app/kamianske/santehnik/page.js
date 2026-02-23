import Link from "next/link";
import Image from "next/image";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  CubeIcon,
  ArrowPathIcon,
  FireIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Сантехнік Кам'янське — професійні сантехнічні роботи",
  description:
    "Послуги сантехніка у Кам'янському: водопровід, каналізація, опалення, бойлери, аварійні роботи. Терміновий виклик сантехніка.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/santehnik",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Сантехнік Кам'янське — професійні сантехнічні роботи",
    description:
      "Послуги сантехніка у Кам'янському: водопровід, каналізація, опалення, бойлери, аварійні роботи.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/santehnik",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/santehnik-kamianske-img.png",
        width: 1536,
        height: 1024,
        alt: "Сантехнік у Кам'янському"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сантехнік Кам'янське — професійні сантехнічні роботи",
    description:
      "Виклик сантехніка у Кам'янському: ремонт, монтаж, аварійні роботи.",
    images: ["https://ocheret.dp.ua/santehnik-kamianske-img.png"],
  },
};

export default function SantehnikKamianskePage() {
  const faqs = [
    {
      q: "Чи можна викликати сантехніка терміново у Камʼянському?",
      a: "Так, можливий терміновий виїзд сантехніка у Камʼянському при аварійних ситуаціях, протіканнях або засорах."
    },
    {
      q: "Які сантехнічні роботи ви виконуєте у Камʼянському?",
      a: "Виконуємо заміну труб, ремонт змішувачів, усунення засорів, встановлення унітазів, бойлерів, раковин та іншої сантехніки."
    },
    {
      q: "Чи надається гарантія на сантехнічні роботи?",
      a: "Так, на всі виконані сантехнічні роботи у Камʼянському надається гарантія."
    },
    {
      q: "Скільки коштує виклик сантехніка у Камʼянському?",
      a: "Вартість залежить від виду робіт та складності. Остаточна ціна озвучується після огляду або консультації."
    },
    {
      q: "Чи працює сантехнік у вихідні та святкові дні?",
      a: "Так, сантехнік у Камʼянському працює без вихідних, можливий виїзд у вечірній час та у святкові дні."
    },
    {
      q: "Чи можна викликати сантехніка в приватний будинок?",
      a: "Так, ми обслуговуємо квартири, приватні будинки, дачі та котеджі у Камʼянському."
    },
    {
      q: "Чи працюєте ви з офісами та комерційними обʼєктами?",
      a: "Так, сантехнік виконує роботи в офісах, магазинах, кафе та інших комерційних приміщеннях."
    },
    {
      q: "Чи допомагаєте з підбором та закупівлею матеріалів?",
      a: "Так, за потреби сантехнік допоможе підібрати якісні матеріали або виконати роботи з матеріалами замовника."
    },
    {
      q: "Як швидко може приїхати сантехнік у Камʼянському?",
      a: "У більшості випадків виїзд можливий у день звернення, особливо при термінових заявках."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/santehnik#service",
        "name": "Послуги сантехніка у Кам'янському",
        "description":
          "Сантехнічні роботи у Кам'янському: водопровід, каналізація, опалення, бойлери, аварійні виїзди.",
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
            "name": "Виїзд до клієнта у Кам'янському"
          }
        },
        "url": "https://ocheret.dp.ua/kamianske/santehnik"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/santehnik#faq",
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
          style={{ backgroundImage: "url('/santehnik-kamianske-img.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Сантехнік Кам'янське — професійні сантехнічні роботи
            </h1>

            <p className="mt-6 text-lg text-white">
              Монтаж і ремонт сантехніки у квартирах, будинках, офісах та
              комерційних приміщеннях у Кам'янському.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white">
                Замовити майстра
              </a>
              <a href="/masters" className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black">
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
            Коли потрібні послуги сантехніка у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Сантехнік потрібен при протіканні труб, засміченні каналізації,
            встановленні або заміні сантехніки, бойлерів та систем опалення.
          </p>
          <p className="text-gray-700">
            Досвідчений сантехнік швидко знаходить проблему та усуває її
            безпечно і надійно.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Роботи, які виконує сантехнік у Кам'янському
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

      {/* WHY */}
      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Чому обирають сантехніка у Кам'янському
            </h2>
            <p className="text-gray-700 mb-4">
              Майстри мають великий досвід, працюють з якісними матеріалами
              та сучасним інструментом.
            </p>
            <p className="text-gray-700">
              Швидкий виїзд, чесна ціна та гарантія на всі роботи.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/santehnik-kamianske.png"
              width={1024}
              height={1024}
              alt="Сантехнік Кам'янське"
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
