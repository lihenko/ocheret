import Image from "next/image";
import {
  BoltIcon,
  HomeIcon,
  FireIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import Link from "next/link";

export const metadata = {
  title: "Підключення побутової техніки Кам'янське — установка та монтаж",
  description:
    "Підключення побутової техніки у Кам'янському під ключ. Пральні машини, бойлери, плити, посудомийки — швидко, безпечно та з гарантією.",
  keywords: [
    "підключення побутової техніки",
    "установка техніки Кам'янське",
    "підключення пральної машини",
    "підключення бойлера",
    "установка посудомийки",
    "підключення електроплити",
    "майстер Кам'янське",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical:
      "https://ocheret.dp.ua/kamianske/electryk/pidklyuchennya-pobutovoyi-tekhniky",
  },
  openGraph: {
    title:
      "Підключення побутової техніки Кам'янське — установка та монтаж",
    description:
      "Професійне підключення побутової техніки у Кам'янському. Пральні машини, бойлери, плити — швидко та з гарантією.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/electryk/pidklyuchennya-pobutovoyi-tekhniky",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/pidklyuchennya-pobutovoyi-tekhniky.webp",
        width: 1536,
        height: 1024,
        alt: "Підключення побутової техніки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Підключення побутової техніки Кам'янське — установка та монтаж",
    description:
      "Підключення пральних машин, бойлерів, плит та іншої техніки у Кам'янському. Надійно та безпечно.",
    images: [
      "https://ocheret.dp.ua/pidklyuchennya-pobutovoyi-tekhniky.webp",
    ],
  },
};

export default function TekhnikaInstallationPage() {
  const faqs = [
  {
    q: "Скільки коштує підключення побутової техніки?",
    a: "У середньому підключення побутової техніки у Кам'янському коштує від 300 до 1500 грн. Ціна залежить від типу техніки (пральна машина, бойлер, плита, посудомийка), складності робіт та необхідності додаткових підключень."
  },
  {
    q: "Скільки часу займає підключення техніки?",
    a: "Підключення однієї одиниці техніки зазвичай займає 30–90 хвилин. Якщо потрібно підводити комунікації або виконувати додаткові роботи — час може збільшитися."
  },
  {
    q: "Чи можна підключити техніку без підготовлених комунікацій?",
    a: "Так, майстер може підвести воду, каналізацію або електроживлення. Це може включати монтаж розеток, встановлення кранів, сифонів або прокладання кабелю."
  },
  {
    q: "Яку техніку ви підключаєте?",
    a: "Підключаємо пральні машини, бойлери, електричні та газові плити, духові шафи, посудомийні машини, витяжки та іншу побутову техніку."
  },
  {
    q: "Чи даєте гарантію на роботи?",
    a: "Так, на всі роботи з підключення побутової техніки надається гарантія. Ми дотримуємось норм безпеки та використовуємо якісні матеріали."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/electryk/pidklyuchennya-pobutovoyi-tekhniky#service",
      "name": "Підключення побутової техніки",
      "description":
        "Професійне підключення побутової техніки у Кам'янському: пральні машини, бойлери, плити, посудомийки та інша техніка. Швидко, безпечно та з гарантією.",
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
      "url": "https://ocheret.dp.ua/kamianske/electryk/pidklyuchennya-pobutovoyi-tekhniky"
    },
    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/electryk/pidklyuchennya-pobutovoyi-tekhniky#faq",
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

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pidklyuchennya-pobutovoyi-tekhniky.webp"
            alt="Підключення побутової техніки у Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Підключення побутової техніки у Кам’янському
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Професійне підключення пральних машин, бойлерів, плит та іншої техніки у Кам’янському. Швидко, безпечно та з гарантією якості.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              >
                Замовити підключення
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

      {/* ABOUT SERVICE */}
      <section className="py-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібно підключення побутової техніки у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Підключення побутової техніки необхідне після покупки нових приладів або під час переїзду. Це стосується пральних машин, бойлерів, посудомийок, плит та іншої техніки, яка потребує правильного підключення до електрики, води або газу.
          </p>
          <p className="text-gray-700">
            Також варто звернутися до майстра, якщо потрібно замінити стару техніку, підключити нове обладнання або перевірити безпеку підключення. Неправильний монтаж може призвести до протікань, короткого замикання або виходу техніки з ладу.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Підключення побутової техніки у Кам’янському для квартир, будинків і бізнесу
          </h2>
          <p className="text-gray-700 mb-4">
            Послуга підключення побутової техніки у Кам’янському актуальна для квартир, приватних будинків і комерційних приміщень. У квартирах найчастіше підключають пральні машини, бойлери, посудомийки та кухонну техніку.
          </p>
          <p className="text-gray-700">
            У приватних будинках підключення техніки часто включає додаткові роботи — підведення води, монтаж розеток або встановлення окремих ліній живлення. Для бізнесу важливо правильно підключити обладнання, щоб забезпечити стабільну та безпечну роботу всієї техніки.
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
              Підключення побутової техніки у Кам’янському
            </h2>

            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <HomeIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Підключення пральних та посудомийних машин</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <FireIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Підключення електричних і газових плит, духовок</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <BeakerIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Підключення бойлерів та водонагрівачів</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Монтаж та підключення кухонної техніки (витяжки, варильні поверхні)</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <BoltIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Підключення до електромережі з урахуванням навантаження</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Діагностика та усунення проблем при підключенні техніки</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Коли потрібно терміново підключити побутову техніку у Кам’янському
            </h2>

            <p className="text-gray-700 mb-4">
              Термінове підключення або перевірка техніки необхідні у таких випадках:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                нова техніка не працює після самостійного підключення;
              </li>
              <li className="text-gray-700">
                з’явилися протікання води або проблеми зі зливом;
              </li>
              <li className="text-gray-700">
                техніка вибиває автомат або перегрівається;
              </li>
              <li className="text-gray-700">
                відсутні необхідні підключення (вода, каналізація, розетки);
              </li>
              <li className="text-gray-700">
                потрібно швидко підключити техніку після покупки або ремонту;
              </li>
              <li className="text-gray-700">
                виникають сторонні шуми або нестабільна робота пристрою.
              </li>
            </ul>

            <p className="text-gray-700">
              Своєчасне підключення побутової техніки гарантує її довговічну роботу, безпеку та відсутність аварійних ситуацій.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Підключення побутової техніки у старих будинках Кам’янського
            </h2>

            <p className="text-gray-700 mb-4">
              У старих будинках часто відсутні необхідні комунікації або електромережа не розрахована на сучасну побутову техніку. Це може призводити до перебоїв у роботі або навіть аварій.
            </p>

            <p className="text-gray-700 mb-4">
              Під час виконання робіт майстер:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                перевіряє стан електропроводки та комунікацій;
              </li>
              <li className="text-gray-700">
                підбирає правильні способи підключення техніки;
              </li>
              <li className="text-gray-700">
                встановлює додаткові розетки, крани або сифони;
              </li>
              <li className="text-gray-700">
                виконує підключення з урахуванням навантаження;
              </li>
              <li className="text-gray-700">
                тестує роботу техніки після монтажу;
              </li>
            </ul>

            <p className="text-gray-700">
              Професійне підключення побутової техніки у старих будинках дозволяє уникнути перевантаження мережі, протікань та забезпечує стабільну і безпечну роботу всіх пристроїв.
            </p>
          </div>
        </section>
        {/* PRICE INFO */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Вартість підключення побутової техніки у Кам’янському
            </h2>

            <p className="text-gray-700 mb-4">
              Ціни на підключення побутової техніки формуються індивідуально, але орієнтовно по Кам’янському:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                підключення пральної машини — від 300 до 600 грн;
              </li>
              <li className="text-gray-700">
                підключення посудомийної машини — від 400 до 700 грн;
              </li>
              <li className="text-gray-700">
                підключення бойлера — від 500 до 1000 грн;
              </li>
              <li className="text-gray-700">
                підключення електроплити або духовки — від 400 до 800 грн;
              </li>
              <li className="text-gray-700">
                підключення витяжки — від 300 до 600 грн;
              </li>
              <li className="text-gray-700">
                виїзд майстра по Кам’янському — від 200 грн (може входити у вартість робіт);
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              Перед початком робіт майстер оцінює умови підключення, перевіряє комунікації та погоджує остаточну вартість. Це гарантує прозорість і відсутність прихованих платежів.
            </p>
          </div>
        </section>

        <section className="pb-20 bg-gray-50">
          <div className="container mx-auto px-4 xl:px-24">
            <div className="flex flex-wrap -mx-3 items-center">
              
              <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4">
                  Чому обирають підключення побутової техніки у Кам’янському
                </h2>

                <p className="text-gray-700 mb-4">
                  Підключення техніки виконується досвідченими майстрами з дотриманням усіх норм безпеки. Ми використовуємо якісні комплектуючі та професійний інструмент, що гарантує стабільну та довговічну роботу техніки.
                </p>

                <p className="text-gray-700 mb-16">
                  Клієнти отримують швидкий виїзд, чесну ціну та гарантію на всі роботи. Кожне замовлення виконується індивідуально з урахуванням типу техніки та умов підключення.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  Безпечне підключення техніки
                </h2>

                <p className="text-gray-700 mb-4">
                  Під час підключення майстер перевіряє електромережу, герметичність з’єднань та правильність підключення до води і каналізації.
                </p>

                <p className="text-gray-700 mb-16">
                  Це дозволяє уникнути протікань, перевантаження мережі та передчасного виходу техніки з ладу.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  Які матеріали використовуються
                </h2>

                <p className="text-gray-700">
                  Під час підключення використовуються:
                </p>

                <ul className="marked-list">
                  <li className="text-gray-700">якісні шланги та з’єднання;</li>
                  <li className="text-gray-700">надійні електричні кабелі та вилки;</li>
                  <li className="text-gray-700">крани, сифони та фітинги;</li>
                  <li className="text-gray-700">захисні автомати та стабілізатори (за потреби).</li>
                </ul>

                <p className="text-gray-700">
                  Це забезпечує безпечну експлуатацію, довговічність техніки та комфорт у використанні.
                </p>
              </div>

              <div className="w-full px-3 md:w-1/2">
                <Image
                  src="/pidklyuchennya-pobutovoyi-tekhniky-kamianske.webp"
                  width={1024}
                  height={1024}
                  alt="Підключення побутової техніки Кам'янське"
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
                  Як проходить підключення побутової техніки у Кам’янському
                </h2>

                <ol className="numbered-list text-gray-700">
                  <li>Ви залишаєте заявку на сайті або телефонуєте нам.</li>
                  <li>Ми уточнюємо тип техніки та умови підключення.</li>
                  <li>Майстер виїжджає на об’єкт (за потреби).</li>
                  <li>Виконується підключення до електрики, води або газу.</li>
                  <li>Перевіряється робота техніки та безпека підключення.</li>
                  <li>Ви отримуєте готовий результат і рекомендації.</li>
                </ol>
              </div>

              <div className="w-full px-3 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">
                  Переваги підключення техніки у професіоналів
                </h2>

                <p className="text-gray-700">
                  Замовляючи підключення у спеціалістів, ви отримуєте:
                </p>

                <ul className="marked-list text-gray-700">
                  <li>правильне та безпечне підключення;</li>
                  <li>відсутність ризику протікань і коротких замикань;</li>
                  <li>швидке виконання робіт;</li>
                  <li>використання якісних матеріалів;</li>
                  <li>гарантію на всі роботи;</li>
                  <li>консультації по експлуатації техніки.</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  Більше послуг ви можете переглянути на сторінці{' '}
                  <a href="/kamianske/electryk" className="text-brand underline">
                    Послуги електрика у Кам’янському
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