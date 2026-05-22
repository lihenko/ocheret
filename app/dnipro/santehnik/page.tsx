import Image from "next/image";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  CubeIcon,
  ArrowPathIcon,
  FireIcon,
  BeakerIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Сантехнік Дніпро — професійні сантехнічні роботи",
  description:
    "Послуги сантехніка у Дніпрі: водопровід, каналізація, опалення, бойлери, аварійні роботи. Терміновий виклик сантехніка у Дніпрі.",
  alternates: {
    canonical: "https://ocheret.dp.ua/dnipro/santehnik",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Сантехнік Дніпро — професійні сантехнічні роботи",
    description:
      "Послуги сантехніка у Дніпрі: водопровід, каналізація, опалення, бойлери, аварійні роботи.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/dnipro/santehnik",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/santehnik-dnipro-img.webp",
        width: 1536,
        height: 1024,
        alt: "Сантехнік у Дніпрі"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сантехнік Дніпро — професійні сантехнічні роботи",
    description:
      "Виклик сантехніка у Дніпрі: ремонт, монтаж, аварійні роботи.",
    images: ["https://ocheret.dp.ua/santehnik-dnipro-img.webp"],
  },
};

export default function SantehnikDniproPage() {
  const faqs = [
    {
      q: "Чи можна викликати сантехніка терміново у Дніпрі?",
      a: "Так, можливий терміновий виїзд сантехніка у Дніпрі при аварійних ситуаціях, протіканнях або засорах."
    },
    {
      q: "Які сантехнічні роботи ви виконуєте у Дніпрі?",
      a: "Виконуємо заміну труб, ремонт змішувачів, усунення засорів, встановлення унітазів, бойлерів, раковин та іншої сантехніки у Дніпрі."
    },
    {
      q: "Чи надається гарантія на сантехнічні роботи у Дніпрі?",
      a: "Так, на всі виконані сантехнічні роботи у Дніпрі надається гарантія."
    },
    {
      q: "Скільки коштує виклик сантехніка у Дніпрі?",
      a: "Вартість залежить від виду робіт та складності. Остаточна ціна озвучується після огляду або консультації."
    },
    {
      q: "Чи працює сантехнік у Дніпрі у вихідні та святкові дні?",
      a: "Так, сантехнік у Дніпрі працює без вихідних, можливий виїзд у вечірній час та у святкові дні."
    },
    {
      q: "Чи можна викликати сантехніка в приватний будинок у Дніпрі?",
      a: "Так, ми обслуговуємо квартири, приватні будинки, дачі та котеджі у Дніпрі."
    },
    {
      q: "Чи працюєте ви з офісами та комерційними об'єктами у Дніпрі?",
      a: "Так, сантехнік виконує роботи в офісах, магазинах, кафе та інших комерційних приміщеннях у Дніпрі."
    },
    {
      q: "Чи допомагаєте з підбором та закупівлею матеріалів?",
      a: "Так, за потреби сантехнік у Дніпрі допоможе підібрати якісні матеріали або виконати роботи з матеріалами замовника."
    },
    {
      q: "Як швидко може приїхати сантехнік у Дніпрі?",
      a: "У більшості випадків виїзд по Дніпру можливий у день звернення, особливо при термінових заявках."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/dnipro/santehnik#service",
        "name": "Послуги сантехніка у Дніпрі",
        "description":
          "Сантехнічні роботи у Дніпрі: водопровід, каналізація, опалення, бойлери, аварійні виїзди.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Дніпро",
            "addressRegion": "Дніпропетровська область",
            "addressCountry": "UA"
          }
        },
        "areaServed": {
          "@type": "Place",
          "name": "Дніпро"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Виїзд до клієнта у Дніпрі"
          }
        },
        "url": "https://ocheret.dp.ua/dnipro/santehnik"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/dnipro/santehnik#faq",
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
            src="/santehnik-dnipro-img.webp"
            alt="Послуги сантехніка у Дніпрі"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Сантехнік Дніпро — професійні сантехнічні роботи
            </h1>

            <p className="mt-6 text-lg text-white">
              Монтаж і ремонт сантехніки у квартирах, будинках, офісах та
              комерційних приміщеннях у Дніпрі.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white">
                Замовити майстра
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
            Коли потрібні послуги сантехніка у Дніпрі
          </h2>
          <p className="text-gray-700 mb-4">
            Сантехнік у Дніпрі потрібен при протіканні труб, засміченні каналізації,
            встановленні або заміні сантехніки, бойлерів та систем опалення.
          </p>
          <p className="text-gray-700">
            Досвідчений майстер швидко знаходить несправність та усуває її
            безпечно і надійно — з виїздом по всьому Дніпру.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Роботи, які виконує сантехнік у Дніпрі
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
              <BeakerIcon className="w-8 h-8 text-brand" />
              <span>Прочистка каналізації та усунення засорів у Дніпрі</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <ArrowPathIcon className="w-8 h-8 text-brand" />
              <span>Усунення протікань та заміна змішувачів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand" />
              <span>Аварійні сантехнічні роботи у Дніпрі</span>
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
          Замовити сантехніка у Дніпрі
        </Link>
      </section>

      {/* WHY */}
      <section className="pb-20 bg-gray-50">
        <div className="container px-4 mx-auto xl:px-24">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full px-4 md:w-1/2 mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                Чому обирають сантехніка у Дніпрі
              </h2>
              <p className="text-gray-700 mb-4">
                Майстри мають великий досвід роботи у Дніпрі, використовують
                якісні матеріали та сучасний інструмент.
              </p>
              <p className="text-gray-700">
                Швидкий виїзд по місту, прозора ціна та гарантія на всі роботи.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <Image
                src="/santehnik-dnipro.webp"
                width={1024}
                height={1024}
                alt="Сантехнік Дніпро"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">Питання та відповіді</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group rounded-lg border p-6 open:shadow-sm">
                <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                  {item.q} <span className="text-green-600 transition group-open:rotate-180">▼</span>
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