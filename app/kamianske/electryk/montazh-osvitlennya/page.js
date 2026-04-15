import Image from "next/image";
import {
  BoltIcon,
  LightBulbIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon,
  PowerIcon
} from '@heroicons/react/24/solid';
import Link from "next/link";

export const metadata = {
  title: "Монтаж освітлення Кам'янське — установка світильників та люстр",
  description:
    "Монтаж освітлення у Кам'янському під ключ. Встановлення люстр, світильників, LED-стрічок та точкових світильників — швидко, безпечно та з гарантією.",
  keywords: [
    "монтаж освітлення",
    "встановлення світильників Кам'янське",
    "установка люстри",
    "монтаж LED стрічки",
    "точкові світильники монтаж",
    "електрик Кам'янське",
    "освітлення під ключ",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical:
      "https://ocheret.dp.ua/kamianske/electryk/montazh-osvitlennya",
  },
  openGraph: {
    title:
      "Монтаж освітлення Кам'янське — установка світильників та люстр",
    description:
      "Професійний монтаж освітлення у Кам'янському. Люстри, LED-підсвітка, точкові світильники — якісно та з гарантією.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/electryk/montazh-osvitlennya",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/montazh-osvitlennya.webp",
        width: 1536,
        height: 1024,
        alt: "Монтаж освітлення",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Монтаж освітлення Кам'янське — установка світильників та люстр",
    description:
      "Встановлення люстр, світильників та LED-освітлення у Кам'янському. Надійно та безпечно.",
    images: [
      "https://ocheret.dp.ua/montazh-osvitlennya.webp",
    ],
  },
};

export default function TekhnikaInstallationPage() {
  const faqs = [
  {
    q: "Скільки коштує монтаж освітлення?",
    a: "У середньому монтаж освітлення у Кам'янському коштує від 200 до 1500 грн за точку. Ціна залежить від типу освітлення (люстра, точкові світильники, LED-стрічка), складності монтажу та висоти стелі."
  },
  {
    q: "Скільки часу займає встановлення освітлення?",
    a: "Встановлення одного світильника зазвичай займає 30–60 хвилин. Монтаж складних систем освітлення або кількох точок може зайняти кілька годин."
  },
  {
    q: "Чи можна встановити освітлення без підготовленої проводки?",
    a: "Так, майстер може прокласти нову проводку, встановити вимикачі, розетки або підготувати точки під освітлення. Це оплачується окремо залежно від обсягу робіт."
  },
  {
    q: "Яке освітлення ви встановлюєте?",
    a: "Встановлюємо люстри, бра, точкові світильники, LED-стрічки, трекові системи та інші види освітлення для квартир і будинків."
  },
  {
    q: "Чи даєте гарантію на монтаж освітлення?",
    a: "Так, на всі роботи з монтажу освітлення надається гарантія. Ми дотримуємось норм безпеки та використовуємо якісні матеріали."
  }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/electryk/montazh-osvitlennya#service",
        "name": "Монтаж освітлення",
        "description":
          "Професійний монтаж освітлення у Кам'янському: встановлення люстр, світильників, LED-підсвітки та інших систем освітлення. Швидко, безпечно та з гарантією.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "areaServed": {
            "@type": "Place",
            "name": "Кам'янське"
          }
        },
        "areaServed": {
          "@type": "Place",
          "name": "Кам'янське"
        },
        "url": "https://ocheret.dp.ua/kamianske/electryk/montazh-osvitlennya"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/electryk/montazh-osvitlennya#faq",
        "mainEntity": faqs.map(item => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      { /* HERO */ }
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/montazh-osvitlennya.webp"
            alt="Монтаж освітлення у Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Монтаж освітлення у Кам’янському
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Професійне встановлення люстр, світильників, LED-підсвітки та трекових систем у Кам’янському. Швидко, безпечно та з гарантією якості.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              >
                Замовити монтаж
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

      { /* ABOUT SERVICE */ }
      <section className="py-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібен монтаж освітлення у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Монтаж освітлення необхідний під час ремонту, після покупки нових світильників або при оновленні інтер’єру. Це може бути встановлення люстри, точкових світильників, LED-підсвітки або сучасних трекових систем.
          </p>
          <p className="text-gray-700">
            Варто звернутися до електрика, якщо потрібно замінити старі світильники, додати нові точки освітлення або зробити більш комфортне зонування світла. Неправильний монтаж може призвести до короткого замикання або некоректної роботи освітлення.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Монтаж освітлення у Кам’янському для квартир, будинків і бізнесу
          </h2>
          <p className="text-gray-700 mb-4">
            Послуга монтажу освітлення у Кам’янському актуальна для квартир, приватних будинків і комерційних приміщень. У квартирах найчастіше встановлюють люстри, бра, точкові світильники та LED-підсвітку.
          </p>
          <p className="text-gray-700">
            У приватних будинках монтаж освітлення може включати прокладання нової проводки, встановлення вимикачів та створення складних світлових сценаріїв. Для бізнесу важливо правильно організувати освітлення — особливо у магазинах, офісах та закладах, де використовується акцентне або трекове освітлення.
          </p>
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
            Замовити майстра в Камʼянському
            </Link>
        </section>

        {/* SERVICES LIST */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-6">
              Монтаж освітлення у Кам’янському
            </h2>

            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <LightBulbIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Встановлення люстр, світильників та бра</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <SparklesIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Монтаж точкових світильників у стелі</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <BoltIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Підключення LED-стрічок та декоративного підсвічування</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <AdjustmentsHorizontalIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Монтаж трекових систем освітлення</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <PowerIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Встановлення вимикачів та керування освітленням</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Діагностика та ремонт освітлення</span>
              </li>
            </ul>
          </div>
        </section>

        {/* WHEN URGENT */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Коли потрібен терміновий монтаж освітлення у Кам’янському
            </h2>

            <p className="text-gray-700 mb-4">
              Терміновий монтаж або ремонт освітлення у Кам’янському необхідний у таких ситуаціях:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                не працює люстра або світильник після встановлення;
              </li>
              <li className="text-gray-700">
                мерехтить світло або пропадає контакт;
              </li>
              <li className="text-gray-700">
                вибиває автомат при увімкненні освітлення;
              </li>
              <li className="text-gray-700">
                потрібно швидко встановити освітлення після ремонту;
              </li>
              <li className="text-gray-700">
                відсутні або неправильно підключені точки освітлення;
              </li>
              <li className="text-gray-700">
                потрібна заміна старих світильників на сучасні (LED, трекові системи).
              </li>
            </ul>

            <p className="text-gray-700">
              Своєчасний монтаж освітлення гарантує безпеку, стабільну роботу електромережі та комфортне освітлення у квартирі або будинку.
            </p>
          </div>
        </section>

        {/* OLD BUILDINGS */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Монтаж освітлення у старих будинках Кам’янського
            </h2>

            <p className="text-gray-700 mb-4">
              У старих будинках Кам’янського електропроводка часто не відповідає сучасним вимогам. Це може призводити до перебоїв у роботі освітлення, мерехтіння або перегріву проводів.
            </p>

            <p className="text-gray-700 mb-4">
              Під час монтажу освітлення майстер:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                перевіряє стан електропроводки;
              </li>
              <li className="text-gray-700">
                визначає оптимальні точки освітлення;
              </li>
              <li className="text-gray-700">
                встановлює нові вимикачі та розподільчі коробки;
              </li>
              <li className="text-gray-700">
                виконує монтаж світильників з урахуванням навантаження;
              </li>
              <li className="text-gray-700">
                тестує систему освітлення після встановлення;
              </li>
            </ul>

            <p className="text-gray-700">
              Професійний монтаж освітлення у старих будинках дозволяє уникнути коротких замикань, перевантаження мережі та забезпечує стабільну роботу освітлення.
            </p>
          </div>
        </section>

        {/* PRICE INFO */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Вартість монтажу освітлення у Кам’янському
            </h2>

            <p className="text-gray-700 mb-4">
              Ціни на монтаж освітлення у Кам’янському залежать від типу світильників та складності робіт. Орієнтовна вартість:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                встановлення люстри — від 300 до 800 грн;
              </li>
              <li className="text-gray-700">
                монтаж точкових світильників — від 150 до 400 грн за точку;
              </li>
              <li className="text-gray-700">
                підключення LED-стрічки — від 200 до 600 грн;
              </li>
              <li className="text-gray-700">
                монтаж трекових систем освітлення — від 500 до 1500 грн;
              </li>
              <li className="text-gray-700">
                встановлення вимикачів — від 150 до 300 грн;
              </li>
              <li className="text-gray-700">
                виїзд електрика по Кам’янському — від 200 грн (може входити у вартість робіт);
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              Перед початком робіт електрик оцінює обсяг завдань, перевіряє електромережу та погоджує точну вартість. Це гарантує прозорі ціни без прихованих платежів.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="pb-20 bg-gray-50">
          <div className="container mx-auto px-4 xl:px-24">
            <div className="flex flex-wrap -mx-3 items-center">
              
              <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4">
                  Чому обирають монтаж освітлення у Кам’янському
                </h2>

                <p className="text-gray-700 mb-4">
                  Монтаж освітлення виконується досвідченими електриками з дотриманням усіх норм безпеки. Використовуються якісні матеріали та сучасні рішення освітлення.
                </p>

                <p className="text-gray-700 mb-16">
                  Клієнти отримують швидкий виїзд майстра, чесну вартість та гарантію на всі роботи. Кожен проєкт виконується з урахуванням особливостей приміщення.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  Безпечний монтаж освітлення
                </h2>

                <p className="text-gray-700 mb-4">
                  Під час монтажу перевіряється стан електромережі, правильність підключення та надійність контактів.
                </p>

                <p className="text-gray-700 mb-16">
                  Це дозволяє уникнути коротких замикань, перегріву та нестабільної роботи освітлення.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  Які матеріали використовуються
                </h2>

                <p className="text-gray-700">
                  Під час монтажу освітлення використовуються:
                </p>

                <ul className="marked-list">
                  <li className="text-gray-700">якісні кабелі та ізоляція;</li>
                  <li className="text-gray-700">надійні кріплення для світильників;</li>
                  <li className="text-gray-700">сучасні LED-компоненти;</li>
                  <li className="text-gray-700">вимикачі та автоматика захисту.</li>
                </ul>

                <p className="text-gray-700">
                  Це гарантує довговічність освітлення, безпеку та комфорт у використанні.
                </p>
              </div>

              <div className="w-full px-3 md:w-1/2">
                <Image
                  src="/montazh-osvitlennya-kamianske.webp"
                  width={1024}
                  height={1024}
                  alt="Монтаж освітлення Кам'янське"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 xl:px-24">
            <div className="flex flex-wrap -mx-3">

              <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4">
                  Як проходить монтаж освітлення у Кам’янському
                </h2>

                <ol className="numbered-list text-gray-700">
                  <li>Ви залишаєте заявку на сайті або телефонуєте нам.</li>
                  <li>Ми уточнюємо тип освітлення (люстра, LED, точкові світильники, трекові системи).</li>
                  <li>Майстер виїжджає на об’єкт у Кам’янському (за потреби).</li>
                  <li>Виконується монтаж і підключення освітлення до електромережі.</li>
                  <li>Перевіряється робота світильників, вимикачів та безпека.</li>
                  <li>Ви отримуєте готове освітлення та рекомендації по використанню.</li>
                </ol>
              </div>

              <div className="w-full px-3 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">
                  Переваги монтажу освітлення у професійного електрика
                </h2>

                <p className="text-gray-700">
                  Замовляючи монтаж освітлення у Кам’янському, ви отримуєте:
                </p>

                <ul className="marked-list text-gray-700">
                  <li>безпечне підключення освітлення без ризику короткого замикання;</li>
                  <li>правильне розташування світильників для комфортного світла;</li>
                  <li>швидке виконання робіт без зайвих затримок;</li>
                  <li>використання якісних кабелів та комплектуючих;</li>
                  <li>гарантію на монтаж освітлення;</li>
                  <li>консультації щодо вибору та експлуатації освітлення.</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  Більше послуг дивіться на сторінці{' '}
                  <a href="/kamianske/electryk" className="text-brand underline">
                    електрик у Кам’янському
                  </a>.
                </p>
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