import Image from "next/image";
import {
  BoltIcon,
  LightBulbIcon,
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import Link from "next/link";

export const metadata = {
  title: "Встановлення розеток і вимикачів Кам'янське — монтаж та підключення",
  description:
    "Встановлення розеток і вимикачів у Кам'янському під ключ. Монтаж, заміна та підключення розеток і вимикачів з гарантією безпеки та якості.",
  keywords: [
    "встановлення розеток",
    "встановлення вимикачів",
    "розетки Кам'янське",
    "монтаж розеток",
    "заміна вимикачів",
    "підключення розеток",
    "електрик Кам'янське",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical:
      "https://ocheret.dp.ua/kamianske/electryk/vstanovlennya-rozetok-i-vymikachiv",
  },
  openGraph: {
    title:
      "Встановлення розеток і вимикачів Кам'янське — монтаж та підключення",
    description:
      "Професійне встановлення розеток і вимикачів у Кам'янському. Швидкий монтаж, безпека та гарантія якості.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/electryk/vstanovlennya-rozetok-i-vymikachiv",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/vstanovlennya-rozetok-i-vymikachiv.webp",
        width: 1536,
        height: 1024,
        alt: "Встановлення розеток і вимикачів",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Встановлення розеток і вимикачів Кам'янське — монтаж та підключення",
    description:
      "Монтаж та підключення розеток і вимикачів у Кам'янському. Надійно, безпечно, з гарантією.",
    images: ["https://ocheret.dp.ua/vstanovlennya-rozetok-i-vymikachiv.webp"],
  },
};

export default function SocketInstallationPage() {
  const faqs = [
    {
      q: "Скільки коштує встановлення розетки або вимикача?",
      a: "У середньому встановлення розетки або вимикача у Кам'янському коштує від 150 до 400 грн за точку. Ціна залежить від типу (внутрішня чи зовнішня), складності монтажу та стану проводки."
    },
    {
      q: "Скільки часу займає встановлення?",
      a: "Монтаж однієї розетки або вимикача зазвичай займає 20–60 хвилин. Якщо потрібно прокладати проводку або штробити стіни — час може збільшитися."
    },
    {
      q: "Чи можна перенести розетку в інше місце?",
      a: "Так, можливе перенесення розеток і вимикачів. Це включає штроблення стін, прокладання кабелю та встановлення нової точки."
    },
    {
      q: "Чи потрібно міняти старі розетки?",
      a: "Так, якщо розетки старі, іскрять або погано тримають вилку — їх варто замінити на сучасні для безпеки та зручності."
    },
    {
      q: "Які розетки та вимикачі краще обрати?",
      a: "Рекомендується використовувати якісні розетки з заземленням та надійні вимикачі від перевірених виробників. Електрик допоможе підібрати оптимальний варіант під ваші потреби."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/electryk/vstanovlennya-rozetok-i-vymikachiv#service",
        "name": "Встановлення розеток і вимикачів",
        "description":
          "Професійне встановлення розеток і вимикачів у Кам'янському: монтаж, підключення, заміна старих розеток, перенесення точок та електромонтажні роботи.",
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
        "url": "https://ocheret.dp.ua/kamianske/electryk/vstanovlennya-rozetok-i-vymikachiv"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/electryk/vstanovlennya-rozetok-i-vymikachiv#faq",
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
            src="/vstanovlennya-rozetok-i-vymikachiv.webp"
            alt="Встановлення розеток і вимикачів у Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Встановлення розеток і вимикачів у Кам’янському
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Професійний монтаж та заміна розеток і вимикачів у Кам’янському. Швидко, акуратно та з дотриманням усіх норм безпеки.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              >
                Замовити встановлення
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
            Коли потрібно встановлювати або міняти розетки і вимикачі у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Встановлення або заміна розеток і вимикачів необхідні під час ремонту, перенесення точок живлення, підключення нової техніки або якщо старі розетки не відповідають сучасним стандартам безпеки. Також варто звернутися до електрика, якщо розетки іскрять, нагріваються або погано тримають вилку.
          </p>
          <p className="text-gray-700">
            Професійний монтаж розеток і вимикачів забезпечує надійну роботу електромережі, правильне підключення та захист від коротких замикань. Це гарантує безпеку у вашому домі чи офісі в Кам'янському та комфортне користування електроприладами.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Встановлення розеток і вимикачів у Кам’янському для квартир, будинків і бізнесу
          </h2>
          <p className="text-gray-700 mb-4">
            Послуга встановлення розеток і вимикачів у Кам’янському актуальна для квартир, приватних будинків і комерційних приміщень. У квартирах часто виконують заміну старих розеток, встановлення додаткових точок живлення, а також монтаж сучасних вимикачів для зручного керування освітленням.
          </p>
          <p className="text-gray-700">
            У приватних будинках встановлення розеток передбачає підключення побутової техніки, кухонного обладнання, бойлерів та інших пристроїв. Для бізнесу — офісів, магазинів і закладів — важливо правильно розмістити розетки та вимикачі, щоб забезпечити комфортну роботу персоналу та безпечну експлуатацію електромережі.
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
            Замовити електрика в Камʼянському
            </Link>
        </section>

        {/* SERVICES LIST */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-6">
              Встановлення розеток та вимикачів у Кам’янському
            </h2>

            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <BoltIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Встановлення розеток у квартирах, будинках і офісах</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <LightBulbIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Монтаж і заміна вимикачів (одноклавішних, двоклавішних)</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <AdjustmentsHorizontalIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Установка розеток із заземленням та захистом</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Заміна старих розеток та вимикачів на нові</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <CpuChipIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Підключення складних схем освітлення (прохідні вимикачі)</span>
              </li>

              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Діагностика та усунення несправностей електрофурнітури</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Коли потрібно терміново встановлювати або замінювати розетки і вимикачі у Кам’янському
            </h2>

            <p className="text-gray-700 mb-4">
              Негайне встановлення або заміна розеток і вимикачів необхідні у таких випадках:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                розетки і вимикачі іскрять, нагріваються або мають сліди оплавлення;
              </li>
              <li className="text-gray-700">
                пристрої випадають зі стіни або погано тримаються;
              </li>
              <li className="text-gray-700">
                є перебої в роботі світла або періодично не працюють вимикачі;
              </li>
              <li className="text-gray-700">
                встановлені старі розетки без заземлення або захисту;
              </li>
              <li className="text-gray-700">
                планується ремонт або оновлення інтер’єру;
              </li>
              <li className="text-gray-700">
                потрібно додати нові точки підключення для техніки.
              </li>
            </ul>

            <p className="text-gray-700">
              Своєчасна заміна та правильний монтаж розеток і вимикачів забезпечує безпеку, стабільну роботу електромережі та комфорт у повсякденному використанні електроприладів.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Встановлення розеток та вимикачів у старих будинках Кам’янського
            </h2>

            <p className="text-gray-700 mb-4">
              У старих будинках Кам’янського часто встановлені застарілі розетки та вимикачі, які не відповідають сучасним стандартам безпеки та можуть становити ризик для користувачів.
            </p>

            <p className="text-gray-700 mb-4">
              Під час виконання робіт спеціаліст:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                оцінює стан існуючої електрофурнітури та проводки;
              </li>
              <li className="text-gray-700">
                підбирає сучасні розетки та вимикачі відповідно до навантаження;
              </li>
              <li className="text-gray-700">
                встановлює розетки із заземленням і захисними механізмами;
              </li>
              <li className="text-gray-700">
                виконує заміну старих елементів без пошкодження стін;
              </li>
              <li className="text-gray-700">
                перевіряє правильність підключення та безпечну роботу;
              </li>
            </ul>

            <p className="text-gray-700">
              Своєчасна заміна розеток і вимикачів у старих будинках значно підвищує рівень безпеки, покращує зручність використання електроприладів і дозволяє уникнути аварійних ситуацій.
            </p>
          </div>
        </section>
        {/* PRICE INFO */}
        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Вартість встановлення розеток та вимикачів у Кам’янському
            </h2>

            <p className="text-gray-700 mb-4">
              Ціни на встановлення розеток і вимикачів формуються індивідуально, але орієнтовно по місту Кам’янське:
            </p>

            <ul className="marked-list">
              <li className="text-gray-700">
                встановлення розетки — від 150 до 300 грн/шт;
              </li>
              <li className="text-gray-700">
                встановлення вимикача — від 150 до 300 грн/шт;
              </li>
              <li className="text-gray-700">
                заміна розетки або вимикача — від 120 до 250 грн/шт;
              </li>
              <li className="text-gray-700">
                встановлення розетки з підключенням проводки — від 250 до 400 грн/шт;
              </li>
              <li className="text-gray-700">
                монтаж підрозетника — від 100 до 200 грн/шт;
              </li>
              <li className="text-gray-700">
                виїзд електрика по Кам’янському — від 200 грн (може входити у вартість робіт);
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              Перед початком робіт майстер оцінює обсяг задач, підбирає матеріали та погоджує остаточну вартість. Це гарантує прозорість і відсутність прихованих платежів.
            </p>
          </div>
        </section>
        <section className="pb-20 bg-gray-50">
          <div className="container mx-auto px-4 xl:px-24">
            <div className="flex flex-wrap -mx-3 items-center">
              
              <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4">
                  Чому обирають встановлення розеток і вимикачів у Кам’янському
                </h2>

                <p className="text-gray-700 mb-4">
                  Монтаж розеток та вимикачів у Кам’янському виконується досвідченими електриками з дотриманням усіх норм безпеки. Використовуються якісні комплектуючі та професійний інструмент, що гарантує надійну та довговічну роботу електрофурнітури.
                </p>

                <p className="text-gray-700 mb-16">
                  Клієнти отримують швидкий виїзд, чесну ціну та гарантію на виконані роботи. Кожне замовлення розраховується індивідуально з урахуванням особливостей приміщення та побажань замовника.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  Підключення розеток і вимикачів
                </h2>

                <p className="text-gray-700 mb-4">
                  Під час встановлення виконується правильне підключення розеток і вимикачів, перевірка контактів та безпечне з’єднання проводки.
                </p>

                <p className="text-gray-700 mb-16">
                  Грамотно виконаний монтаж забезпечує стабільну роботу електроприладів, запобігає перегріву та знижує ризик короткого замикання.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  Монтаж електрофурнітури та безпека
                </h2>

                <p className="text-gray-700">
                  Під час встановлення використовуються:
                </p>

                <ul className="marked-list">
                  <li className="text-gray-700">сучасні розетки та вимикачі;</li>
                  <li className="text-gray-700">розетки із заземленням та захистом;</li>
                  <li className="text-gray-700">механізми з підвищеною зносостійкістю;</li>
                  <li className="text-gray-700">якісні монтажні коробки та фіксатори.</li>
                </ul>

                <p className="text-gray-700">
                  Такий підхід забезпечує безпечну експлуатацію, естетичний вигляд і тривалий термін служби всієї електрофурнітури.
                </p>
              </div>

              <div className="w-full px-3 md:w-1/2">
                <Image
                  src="/vstanovlennia-rozetok.webp"
                  width={1024}
                  height={1024}
                  alt="Встановлення розеток і вимикачів Кам'янське"
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
                  Як проходить встановлення розеток та вимикачів у Кам’янському
                </h2>

                <ol className="numbered-list text-gray-700">
                  <li>Ви залишаєте заявку на сайті або телефонуєте нам.</li>
                  <li>Ми уточнюємо деталі та підбираємо оптимальне рішення.</li>
                  <li>Електрик виїжджає на об’єкт для огляду (за потреби).</li>
                  <li>Виконується встановлення або заміна розеток і вимикачів.</li>
                  <li>Перевіряється правильність підключення та безпека роботи.</li>
                  <li>Ви отримуєте готовий результат і рекомендації по експлуатації.</li>
                </ol>
              </div>

              <div className="w-full px-3 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">
                  Переваги встановлення розеток і вимикачів у професіоналів
                </h2>

                <p className="text-gray-700">
                  Замовляючи встановлення електрофурнітури у спеціалістів, ви отримуєте:
                </p>

                <ul className="marked-list text-gray-700">
                  <li>безпечне та правильне підключення;</li>
                  <li>використання якісних і сертифікованих матеріалів;</li>
                  <li>акуратний монтаж без пошкодження стін;</li>
                  <li>швидке виконання робіт;</li>
                  <li>гарантію на встановлені розетки та вимикачі;</li>
                  <li>консультації щодо вибору та експлуатації.</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  Більше послуг ви можете переглянути на сторінці{' '}
                  <a href="/kamianske/electryk" className="text-brand underline">
                    Послуги електрика в Кам’янському
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