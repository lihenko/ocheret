import Image from "next/image";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  BoltIcon,
  ArrowPathIcon,
  SparklesIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Прочистка каналізації Кам'янське — усунення засорів 24/7",
  description:
    "Прочистка каналізації у Кам'янському: усунення засорів, прочистка труб, аварійний виклик сантехніка. Швидко, недорого, виїзд у день звернення.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/santehnik/prochistka-kanalizaciyi",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Прочистка каналізації Кам'янське — усунення засорів",
    description:
      "Професійна прочистка каналізації у Кам'янському. Усунення засорів, чистка труб, аварійні сантехнічні роботи.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/santehnik/prochistka-kanalizaciyi",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/prochistka-kanalizaciyi-kamianske.webp",
        width: 1536,
        height: 1024,
        alt: "Прочистка каналізації у Кам'янському"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Прочистка каналізації Кам'янське — усунення засорів",
    description:
      "Термінова прочистка каналізації у Кам'янському. Виїзд майстра, усунення засорів, чистка труб.",
    images: ["https://ocheret.dp.ua/prochistka-kanalizaciyi-kamianske.webp"],
  },
};

export default function SantehnikKamianskePage() {
  const faqs = [
  {
    q: "Чи можна викликати майстра для прочистки каналізації терміново у Камʼянському?",
    a: "Так, можливий терміновий виїзд сантехніка для усунення засорів каналізації у Камʼянському, у тому числі в аварійних ситуаціях."
  },
  {
    q: "Які послуги входять у прочистку каналізації?",
    a: "Виконуємо механічну та гідродинамічну прочистку каналізації, усунення засорів у трубах, сифоні та стояках."
  },
  {
    q: "Що робити при сильному засорі каналізації?",
    a: "Рекомендується не використовувати воду та викликати сантехніка, щоб уникнути затоплення та пошкоджень труб."
  },
  {
    q: "Скільки коштує прочистка каналізації у Камʼянському?",
    a: "Ціна залежить від складності засору та типу труб. Остаточна вартість визначається після огляду."
  },
  {
    q: "Чи працюєте ви 24/7 при засорах?",
    a: "Так, майстер може приїхати для усунення засору каналізації у будь-який час, включаючи ніч та святкові дні."
  },
  {
    q: "Чи можна прочистити каналізацію в квартирі та приватному будинку?",
    a: "Так, ми працюємо як у квартирах, так і в приватних будинках, офісах та комерційних приміщеннях у Камʼянському."
  },
  {
    q: "Чи допомагаєте ви при засорах у кухні та ванній?",
    a: "Так, усуваємо засори в раковинах, ваннах, душових кабінах та кухонних зливах."
  },
  {
    q: "Чи є гарантія на прочистку каналізації?",
    a: "Так, на виконані роботи надається гарантія, якщо проблема не пов’язана з аварійним станом труб."
  },
  {
    q: "Як швидко приїжджає майстер для прочистки каналізації?",
    a: "У більшості випадків виїзд можливий у день звернення, особливо при термінових засорах."
  }
];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/santehnik/prochistka-kanalizaciyi#service",
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
        "url": "https://ocheret.dp.ua/kamianske/santehnik/prochistka-kanalizaciyi"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/santehnik/prochistka-kanalizaciyi#faq",
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
            src="/prochistka-kanalizaciyi-kamianske.webp"
            alt="Послуги сантехніка в Кам'янському"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Прочистка каналізації в Кам'янському — швидко і професійно
            </h1>

            <p className="mt-6 text-lg text-white">
              Усунення засмічень каналізації у квартирах, будинках, офісах та
              комерційних приміщеннях у Кам'янському.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white">
                Замовити прочистку
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
            Коли потрібна прочистка каналізації в Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Прочистка каналізації потрібна при засміченні труб, повільному відтоку води, неприємному запаху з зливу або повному блокуванні системи.
          </p>
          <p className="text-gray-700">
            Професійна прочистка каналізації дозволяє швидко усунути засмічення без пошкодження труб і відновити нормальну роботу системи водовідведення.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Послуги з прочистки каналізації в Кам'янському
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand" />
              <span>Механічна прочистка труб від засмічень</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <BoltIcon className="w-8 h-8 text-brand" />
              <span>Прочистка каналізації спеціальним обладнанням</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <SparklesIcon className="w-8 h-8 text-brand" />
              <span>Глибоке очищення труб від складних засмічень</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand" />
              <span>Усунення складних та аварійних засмічень</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <ArrowPathIcon className="w-8 h-8 text-brand" />
              <span>Видалення жиру, відкладень і сторонніх предметів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg">
              <HomeIcon className="w-8 h-8 text-brand" />
              <span>Прочистка каналізації в квартирах, будинках та офісах</span>
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
              Термінова прочистка каналізації в Кам'янському — швидко та без переплат
            </h2>
            <p className="text-gray-700 mb-4">
              Засмітилась каналізація? Не чекайте, поки проблема стане критичною.
              Виконуємо термінову прочистку каналізації в Кам'янському з виїздом майстра у найкоротші строки.
              Працюємо швидко, чисто і з гарантією результату.
            </p>
            <p className="text-gray-700 mb-4">
              Усуваємо будь-які засмічення — від побутових до складних аварійних випадків.
              Використовуємо професійний інструмент, що дозволяє повністю відновити прохідність труб
              без їх пошкодження.
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
              src="/kanalizatsiya-kamianske.webp"
              width={1024}
              height={1024}
              alt="Прочистка каналізації Кам'янське"
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
