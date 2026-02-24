import { BoltIcon, WrenchIcon, HomeIcon, PaintBrushIcon, CubeIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

export const metadata = {
  title: "Майстри у Камʼянському — електрик, сантехнік, ремонт | Очерет",
  description:
    "Знайдіть перевіреного майстра у Камʼянському: електрик, сантехнік, ремонт квартир, малярні роботи та інші послуги. Швидкий підбір спеціаліста без посередників.",

  alternates: {
    canonical: "https://ocheret.dp.ua",
  },

  openGraph: {
    title: "Майстри у Камʼянському — сервіс підбору майстрів",
    description:
      "Електрика, сантехніка, ремонт квартир та інші послуги у Камʼянському. Перевірені майстри, швидкий виїзд, без прихованих комісій.",
    url: "https://ocheret.dp.ua",
    siteName: "Очерет",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "https://ocheret.dp.ua/home-hero-img.png",
        width: 1536,
        height: 1024,
        alt: "Перевірені майстри у Камʼянському — електрик, сантехнік, ремонт",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Майстри у Камʼянському — Очерет",
    description:
      "Сервіс підбору перевірених майстрів у Камʼянському. Електрик, сантехнік, ремонт квартир.",
    images: ["https://ocheret.dp.ua/home-hero-img.png"],
  },
};


export default function Home() {
  const categories = [
    { title: "Електрик", slug: "electryk", icon: <BoltIcon className="w-10 h-10 mx-auto text-white" /> },
    { title: "Сантехнік", slug: "santehnik", icon: <WrenchIcon className="w-10 h-10 mx-auto text-white" /> },
    { title: "Ремонт квартир", slug: "remont-kvartyr", icon: <HomeIcon className="w-10 h-10 mx-auto text-white" /> },
    { title: "Малярні роботи", slug: "malyarni-roboty", icon: <PaintBrushIcon className="w-10 h-10 mx-auto text-white" /> },
    { title: "Збірка меблів", slug: "zbirka-mebliv", icon: <CubeIcon className="w-10 h-10 mx-auto text-white" /> }, 
  ];
  const faqs = [
    {
      q: "Скільки коштують послуги майстра?",
      a: "Вартість робіт залежить від типу послуги, обсягу та складності завдання. Ви оплачуєте роботу напряму майстру, без прихованих комісій. Остаточна ціна узгоджується до початку виконання робіт.",
    },
    {
      q: "Хто здійснює оплату?",
      a: "Оплату здійснює замовник безпосередньо майстру після виконання або за домовленістю. Сервіс «Очерет» не бере гроші з клієнтів за користування платформою.",
    },
    {
      q: "Як обираються майстри?",
      a: "До платформи допускаються лише майстри, які пройшли перевірку контактних даних, мають досвід роботи та позитивні відгуки. Ми відбираємо спеціалістів відповідно до вашого запиту та міста.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ocheret.dp.ua/#localbusiness",
        "name": "Очерет",
        "url": "https://ocheret.dp.ua",
        "image": "https://ocheret.dp.ua/home-hero-img.png",
        "description":
          "Сервіс підбору перевірених майстрів для дому та бізнесу по Дніпропетровській області.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Дніпропетровська область"
        },
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Дніпропетровська область",
          "addressCountry": "UA"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Послуги майстрів",
          "itemListElement": categories.map((cat) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `https://ocheret.dp.ua/services/${cat.slug}#service`,
              "name": cat.title,
              "url": `https://ocheret.dp.ua/services/${cat.slug}`,
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Дніпропетровська область"
              }
            }
          }))
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/#faq",
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
      <section id="home-hero" className="relative flex items-center py-16 xl:py-24">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url('/home-hero-img.png')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 xl:px-24">
        <div className="max-w-3xl relative">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Знайдіть <br></br> перевіреного майстра
            <span className="block text-green-500">
              у Камʼянському
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white">
            Електрика, сантехніка, ремонт квартир та інші роботи.<br></br>
            Швидкий підбір майстра в Камʼянському.
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Популярні послуги майстрів у Камʼянському
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
            {categories.map((c) => (
              <Link key={c.slug} href={`/services/${c.slug}`} className="
                  group rounded-2xl bg-white p-6 text-center
                  shadow-md hover:shadow-xl
                  transform translate-y-0 hover:-translate-y-1
                  transition-all duration-400
                  will-change-transform no-underline
                "
              >
                <div className="
                    mx-auto w-16 h-16 flex items-center justify-center
                    rounded-full bg-gradient-to-r from-green-700 to-brand mb-4
                    transition-transform duration-300 group-hover:scale-110
                  "
                >
                  {c.icon}
                </div>
                <div className="font-medium text-gray-700 text-lg">{c.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            Як працює сервіс підбору майстрів
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Залишаєте заявку",
                text: "Описуєте задачу та вказуєте контактні дані",
              },
              {
                step: "02",
                title: "Ми підбираємо майстра",
                text: "Підбираємо перевіреного спеціаліста у Камʼянському відповідно до вашого запиту",
              },
              {
                step: "03",
                title: "Майстер виконує роботу",
                text: "Ви домовляєтесь напряму та приймаєте результат",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-4">
                <div className="text-4xl font-bold text-green-700">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Потрібен майстер вже сьогодні?
        </h2>
        <a
          href="/order"
          className="btn inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition hover:text-brand"
        >
          Залишити заявку
        </a>
      </section>
      <section className="pt-20 relative pb-96 xl:pb-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: "url('/city-bg.png')" }}
        />
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-3xl font-bold mb-6">
            Перевірені майстри у Камʼянському
          </h2>

          <div className="space-y-4 leading-relaxed">
            <p>
              Сервіс <strong>«Очерет»</strong> допомагає швидко знайти
              перевіреного майстра у Камʼянському для виконання будь-яких
              ремонтних робіт. У нашій базі — електрики, сантехніки,
              майстри з ремонту квартир та інші спеціалісти з досвідом роботи.
            </p>

            <p>
              Ми підбираємо майстрів у Камʼянському з урахуванням типу роботи,
              терміновості та району міста. Залиште заявку — і ми знайдемо
              спеціаліста саме для вашого завдання.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/kamianske/electryk" className="text-green-700 hover:underline">
              Електрик у Камʼянському
            </Link>

            <Link href="/kamianske/santehnik" className="text-green-700 hover:underline">
              Сантехнік у Камʼянському
            </Link>

            <Link href="/kamianske/remont-kvartyr" className="text-green-700 hover:underline">
              Ремонт квартир у Камʼянському
            </Link>

          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Часті запитання про майстрів у Камʼянському
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