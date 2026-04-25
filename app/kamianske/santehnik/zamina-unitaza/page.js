import Image from "next/image";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  BeakerIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Заміна унітаза Кам'янське — встановлення та демонтаж",
  description:
    "Заміна унітаза у Кам'янському: демонтаж старого, встановлення нового, підключення, герметизація, гарантія на роботи. Швидко, недорого, виїзд у день звернення.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/santehnik/zamina-unitaza",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Заміна унітаза Кам'янське — встановлення та демонтаж",
    description:
      "Професійна заміна унітаза у Кам'янському. Демонтаж старого, монтаж нового, підключення та виїзд майстра.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/santehnik/zamina-unitaza",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/zamina-unitaza-kamianske.webp",
        width: 1536,
        height: 1024,
        alt: "Заміна унітаза у Кам'янському",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Заміна унітаза Кам'янське — встановлення та демонтаж",
    description:
      "Термінова заміна унітаза у Кам'янському. Демонтаж, встановлення, підключення, виїзд майстра.",
    images: ["https://ocheret.dp.ua/zamina-unitaza-kamianske.webp"],
  },
};


export default function ZaminaUnitazaPage() {
  const faqs = [
  {
    q: "Чи можна викликати майстра для заміни унітаза терміново у Камʼянському?",
    a: "Так, можливий терміновий виїзд сантехніка для заміни унітаза у Камʼянському, у тому числі в аварійних ситуаціях."
  },
  {
    q: "Які послуги входять у заміну унітаза?",
    a: "Виконуємо демонтаж старого унітаза, встановлення нового, підключення до каналізації та водопостачання, герметизацію зʼєднань і перевірку роботи."
  },
  {
    q: "Чи можна замінити старий унітаз на новий в той самий день?",
    a: "Так, у багатьох випадках майстер може демонтувати старий унітаз і встановити новий у день звернення, якщо немає складних додаткових робіт."
  },
  {
    q: "Скільки коштує заміна унітаза у Камʼянському?",
    a: "Ціна залежить від типу унітаза, стану підключень, складності демонтажу, необхідності додаткових робіт та матеріалів. Остаточна вартість визначається після огляду."
  },
  {
    q: "Чи можна замовити заміну унітаза у зручний час?",
    a: "Так, майстер може приїхати для заміни унітаза у погоджений час, включаючи вечір або вихідні за попередньою домовленістю."
  },
  {
    q: "Чи виконуєте заміну унітаза в квартирі та приватному будинку?",
    a: "Так, виконуємо заміну унітазів у квартирах, приватних будинках, офісах та комерційних приміщеннях у Камʼянському."
  },
  {
    q: "Чи потрібно купувати матеріали для заміни унітаза самостійно?",
    a: "За потреби майстер може привезти необхідні кріплення, гофру, шланги, герметик та інші матеріали або виконати заміну з матеріалами замовника."
  },
  {
    q: "Чи є гарантія на заміну унітаза?",
    a: "Так, на виконані роботи із заміни та підключення унітаза надається гарантія."
  },
  {
    q: "Як швидко приїжджає майстер для заміни унітаза?",
    a: "У більшості випадків виїзд можливий у день звернення, особливо якщо потрібна термінова заміна унітаза."
  }
];


  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/santehnik/zamina-unitaza#service",
      "name": "Заміна унітаза у Кам'янському",
      "description":
        "Професійна заміна унітаза у Кам'янському: демонтаж старого унітаза, встановлення нового, підключення до водопостачання та каналізації, герметизація, виїзд майстра.",
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
          "name": "Виїзд майстра для заміни унітаза у Кам'янському"
        }
      },
      "url": "https://ocheret.dp.ua/kamianske/santehnik/zamina-unitaza"
    },
    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/santehnik/zamina-unitaza#faq",
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
            src="/zamina-unitaza-kamianske.webp"
            alt="Заміна унітаза в Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Заміна унітаза в Кам'янському — швидко і професійно
            </h1>

            <p className="mt-6 text-lg text-white">
              Демонтаж старого та встановлення нового унітаза у квартирах, будинках,
              офісах і комерційних приміщеннях у Кам'янському. Виїзд майстра у день звернення.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white"
              >
                Замовити заміну
              </Link>
              <Link
                href="/masters"
                className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black"
              >
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
            Професійна заміна унітаза в Кам'янському
          </h2>

          <p className="text-gray-700 mb-4">
            Заміна унітаза в Кам'янському виконується з акуратним демонтажем старої
            сантехніки, правильним підключенням до каналізації та водопостачання,
            герметизацією з'єднань і перевіркою роботи після встановлення.
          </p>

          <p className="text-gray-700">
            Професійне встановлення нового унітаза допомагає уникнути протікань,
            неприємних запахів, перекосів і проблем з підключенням. Послуга доступна
            для квартир, приватних будинків, офісів і комерційних приміщень у
            Кам'янському.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Послуги із заміни унітаза в Кам'янському
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand" />
              <span>Демонтаж старого та встановлення нового унітаза</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <BeakerIcon className="w-8 h-8 text-brand" />
              <span>Підключення унітаза до водопостачання та каналізації</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ShieldCheckIcon className="w-8 h-8 text-brand" />
              <span>Герметизація з'єднань і перевірка на протікання</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ArrowPathIcon className="w-8 h-8 text-brand" />
              <span>Заміна старого унітаза на новий з підгонкою підключень</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ClockIcon className="w-8 h-8 text-brand" />
              <span>Терміновий виїзд майстра у день звернення</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <HomeIcon className="w-8 h-8 text-brand" />
              <span>Заміна унітаза в квартирах, будинках та офісах</span>
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
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4">
            <h2 className="text-2xl font-semibold mb-4">
              Термінова заміна унітаза в Кам'янському — швидко та без переплат
            </h2>

            <p className="text-gray-700 mb-4">
              Потрібно замінити унітаз у Кам'янському? Виконуємо терміновий демонтаж
              старої сантехніки та встановлення нового унітаза з виїздом майстра у
              найкоротші строки. Працюємо акуратно, дотримуємось технічних норм та
              надаємо гарантію на виконані роботи.
            </p>

            <p className="text-gray-700 mb-4">
              Замінюємо унітази різних типів і конструкцій, підключаємо до
              водопостачання та каналізації, герметизуємо з'єднання і перевіряємо
              систему на відсутність протікань та коректну роботу після монтажу.
            </p>

            <p className="text-gray-700">
              Перегляньте всі послуги на сторінці{" "}
              <Link href="/kamianske/santehnik" className="text-brand underline">
                послуги сантехніка в Кам'янському
              </Link>.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <Image
              src="/zamina-unitaza.webp"
              width={1024}
              height={1024}
              alt="Заміна унітаза Кам'янське"
            />
          </div>
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
