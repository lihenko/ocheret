import Image from "next/image";
import {
  BoltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  Square3Stack3DIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import Link from "next/link";

export const metadata = {
  title: "Встановлення автоматів і щитків Кам'янське — монтаж та підключення",
  description:
    "Встановлення автоматів і електрощитків у Кам'янському під ключ. Підключення автоматів, заміна щитка, безпечний електромонтаж з гарантією якості.",
  keywords: [
    "встановлення автоматів",
    "електрощиток Кам'янське",
    "монтаж щитка",
    "заміна електрощитка",
    "підключення автоматів",
    "електрик Кам'янське",
    "збірка електрощита",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical:
      "https://ocheret.dp.ua/kamianske/electryk/vstanovlennia-avtomativ-i-schytkiv",
  },
  openGraph: {
    title:
      "Встановлення автоматів і щитків Кам'янське — монтаж та підключення",
    description:
      "Професійне встановлення автоматів і електрощитків у Кам'янському. Швидкий монтаж, безпека та гарантія якості.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/electryk/vstanovlennia-avtomativ-i-schytkiv",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/vstanovlennia-avtomativ-i-schytkiv.webp",
        width: 1536,
        height: 1024,
        alt: "Встановлення автоматів і електрощитка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Встановлення автоматів і щитків Кам'янське — монтаж та підключення",
    description:
      "Монтаж автоматів та електрощитків у Кам'янському під ключ. Надійно, безпечно, з гарантією.",
    images: ["https://ocheret.dp.ua/vstanovlennia-avtomativ-i-schytkiv.webp"],
  },
};

export default function WiringReplacementPage() {
  const faqs = [
  {
    q: "Скільки коштує встановлення автоматів і щитка?",
    a: "Вартість залежить від кількості автоматів, типу щитка, складності монтажу та необхідності додаткових робіт. Точна ціна визначається після огляду об'єкта."
  },
  {
    q: "Скільки часу займає монтаж електрощитка?",
    a: "У середньому встановлення та підключення електрощитка займає від 2 до 6 годин залежно від складності та кількості ліній."
  },
  {
    q: "Чи потрібно міняти старий щиток?",
    a: "Якщо щиток застарілий або не відповідає сучасним вимогам безпеки, рекомендується його повна заміна з встановленням нових автоматів та захисту."
  },
  {
    q: "Які автомати краще встановлювати?",
    a: "Використовуються сучасні автоматичні вимикачі, диференційні автомати та ПЗВ (УЗО), які забезпечують захист від перевантаження, короткого замикання та витоку струму."
  },
  {
    q: "Чи можна додати нові автомати в існуючий щиток?",
    a: "Так, якщо є місце та технічна можливість. Електрик оцінює стан щитка та виконує підключення з дотриманням норм безпеки."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/electryk/vstanovlennia-avtomativ-i-schytkiv#service",
      "name": "Встановлення автоматів і щитків",
      "description":
        "Професійне встановлення автоматів та електрощитків у Кам'янському: монтаж, підключення, заміна старих щитків та налаштування систем захисту.",
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
      "url": "https://ocheret.dp.ua/kamianske/electryk/vstanovlennia-avtomativ-i-schytkiv"
    },
    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/electryk/vstanovlennia-avtomativ-i-schytkiv#faq",
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
                src="/vstanovlennia-avtomativ-i-schytkiv.webp"
                alt="Встановлення автоматів в Кам'янському"
                fill
                className="object-cover object-center"
                priority
            />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 xl:px-24">
            <div className="max-w-3xl relative">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                Встановлення автоматів і щитків у Кам’янському
              </h1>
              <p className="mt-6 text-base md:text-lg text-white">
                Професійний монтаж та підключення електрощитків і автоматів у Кам’янському. Надійний захист електромережі та гарантія безпеки.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/order"
                  className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                >
                  Замовити монтаж щитка
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
              Коли потрібно встановлювати автомати та електрощиток у Кам'янському
            </h2>
            <p className="text-gray-700 mb-4">
              Встановлення або заміна електрощитка необхідні при модернізації електромережі, збільшенні навантаження, частих вибиваннях автоматів або під час ремонту житла чи комерційного приміщення. Це особливо важливо, якщо старий щиток не відповідає сучасним нормам безпеки або не забезпечує належного захисту.
            </p>
            <p className="text-gray-700">
              Професійний монтаж автоматів і щитка дозволяє правильно розподілити навантаження, захистити електроприлади від коротких замикань та перевантажень, а також забезпечити стабільну та безпечну роботу всієї електромережі у вашому домі чи офісі в Кам'янському.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Встановлення автоматів і щитків у Кам’янському для квартир, будинків і бізнесу
            </h2>
            <p className="text-gray-700 mb-4">
              Послуга встановлення електрощитків та автоматів у Кам’янському актуальна для квартир, приватних будинків і комерційних об’єктів. У квартирах зазвичай виконується заміна або модернізація щитка, встановлення нових автоматів, диференційного захисту та правильний розподіл навантаження між лініями.
            </p>
            <p className="text-gray-700">
              У приватних будинках монтаж щитка включає підключення потужних приладів, таких як котли, насоси чи генератори, а також встановлення сучасних систем захисту. Для бізнесу — офісів, магазинів і закладів — важливо правильно спроєктувати та зібрати електрощиток, щоб забезпечити стабільну, безпечну та безперебійну роботу всього обладнання.
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
              Роботи з встановлення автоматів і щитків у Кам’янському
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <BoltIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Встановлення автоматичних вимикачів</span>
              </li>
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <ShieldCheckIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Монтаж ПЗВ (УЗО) та диференційних автоматів</span>
              </li>
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <Square3Stack3DIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Збірка та встановлення електрощитків</span>
              </li>
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Модернізація та заміна старих щитків</span>
              </li>
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <CpuChipIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Розподіл навантаження та підключення ліній</span>
              </li>
              <li className="flex gap-4 p-5 border rounded-lg items-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Діагностика та усунення несправностей у щитку</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Коли терміново потрібно встановлювати автомати або щиток у Кам’янському
            </h2>
            <p className="text-gray-700 mb-4">
              Негайне встановлення або заміна автоматів і електрощитка необхідні у таких випадках:
            </p>
            <ul className="marked-list">
              <li className="text-gray-700">
                часто вибиває автомат або відсутній належний захист;
              </li>
              <li className="text-gray-700">
                електрощит перегрівається або чути тріск при навантаженні;
              </li>
              <li className="text-gray-700">
                з’явився запах гару з щитка або автоматів;
              </li>
              <li className="text-gray-700">
                відбуваються перебої в електропостачанні;
              </li>
              <li className="text-gray-700">
                щиток застарілий або не витримує сучасного навантаження.
              </li>
            </ul>
            <p className="text-gray-700">
              Своєчасне встановлення сучасних автоматів і щитка дозволяє уникнути аварійних ситуацій, захищає електромережу від перевантажень і забезпечує стабільну роботу всіх приладів.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container relative mx-auto px-4 xl:px-24">
            <h2 className="text-2xl font-semibold mb-4">
              Встановлення електрощитків у старих будинках Кам’янського
            </h2>
            <p className="text-gray-700 mb-4">
              У старих будинках Кам’янського часто використовуються застарілі електрощитки та автомати, які не відповідають сучасним вимогам безпеки та не витримують навантаження від побутової техніки.
            </p>
            <p className="text-gray-700 mb-4">
              Під час виконання робіт спеціаліст:
            </p>
            <ul className="marked-list">
              <li className="text-gray-700">
                оцінює стан існуючого електрощитка;
              </li>
              <li className="text-gray-700">
                визначає навантаження та кількість необхідних автоматів;
              </li>
              <li className="text-gray-700">
                підбирає оптимальну схему розподілу ліній;
              </li>
              <li className="text-gray-700">
                встановлює сучасні автомати, ПЗВ та інші захисні пристрої.
              </li>
            </ul>
            <p className="text-gray-700">
              Модернізація електрощитка значно підвищує рівень безпеки, забезпечує стабільну роботу електромережі та захищає техніку від пошкоджень.
            </p>
          </div>
        </section>
        {/* PRICE INFO */}
        <section className="pb-20">
            <div className="container relative mx-auto px-4 xl:px-24">
                <h2 className="text-2xl font-semibold mb-4">
                    Вартість встановлення автоматів і щитків у Кам’янському
                </h2>
                <p className="text-gray-700">
                    Ціни на встановлення електрощитків та автоматичних вимикачів формуються індивідуально та залежать від:
                </p>
                <ul className="marked-list">
                    <li className="text-gray-700">
                        типу об’єкта (квартира, будинок, комерційне приміщення);
                    </li>
                    <li className="text-gray-700">
                        кількості автоматів та електричних ліній;
                    </li>
                    <li className="text-gray-700">
                        типу та комплектації щитка;
                    </li>
                    <li className="text-gray-700">
                        стану існуючої електромережі;
                    </li>
                    <li className="text-gray-700">
                        складності монтажу та підключення;
                    </li>
                    <li className="text-gray-700">
                        терміновості виконання робіт.
                    </li>
                </ul>
                <p className="text-gray-700">
                    Перед початком робіт спеціаліст проводить огляд об’єкта, підбирає необхідне обладнання та узгоджує всі етапи і орієнтовну вартість. Це дозволяє уникнути прихованих витрат і гарантує прозорість співпраці.
                </p>
            </div>
        </section>
        <section className="pb-20 bg-gray-50">
            <div className="container mx-auto px-4 xl:px-24">
                <div className="flex flex-wrap -mx-3 items-center">
                <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">
                    Чому обирають встановлення автоматів і щитків у Кам’янському
                    </h2>
                    <p className="text-gray-700 mb-4">
                    Роботи із встановлення автоматичних вимикачів та електрощитків у Кам’янському виконуються досвідченими спеціалістами з дотриманням усіх норм безпеки. Використовуються сучасні комплектуючі та професійний інструмент, що гарантує надійність і довговічність електросистеми.
                    </p>
                    <p className="text-gray-700 mb-16">
                    Клієнти отримують швидкий виїзд, прозору вартість та гарантію на виконані роботи. Кожен проєкт розраховується індивідуально з урахуванням особливостей об’єкта та побажань замовника.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                    Підключення автоматів і розподіл навантаження
                    </h2>
                    <p className="text-gray-700 mb-4">
                    Під час встановлення виконується правильне підключення автоматичних вимикачів, розподіл електричних ліній та балансування навантаження. Це дозволяє забезпечити стабільну роботу всієї електромережі.
                    </p>
                    <p className="text-gray-700 mb-16">
                    Грамотно зібраний щиток допомагає уникнути перевантажень, коротких замикань і забезпечує безпечну експлуатацію електроприладів у будинку або квартирі.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                    Монтаж електрощитів та систем захисту
                    </h2>
                    <p className="text-gray-700">
                    Електрощит — ключовий елемент електромережі. Під час встановлення використовуються:
                    </p>
                    <ul className="marked-list">
                    <li className="text-gray-700">сучасні електрощити та модульні системи;</li>
                    <li className="text-gray-700">автоматичні вимикачі;</li>
                    <li className="text-gray-700">ПЗВ (УЗО) та диференційні автомати;</li>
                    <li className="text-gray-700">маркування ліній для зручного обслуговування.</li>
                    </ul>
                    <p className="text-gray-700">
                    Така система забезпечує надійний захист від перевантажень, аварійних ситуацій та робить електромережу безпечною і зручною в експлуатації.
                    </p>
                </div>

                <div className="w-full px-3 md:w-1/2">
                    <Image
                    src="/vstanovlennia-avtomativ.webp"
                    width={1024}
                    height={1024}
                    alt="Встановлення автоматів і щитків Кам'янське"
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
                    Як проходить встановлення автоматів і щитків у Кам’янському
                    </h2>
                    <ol className="numbered-list text-gray-700">
                    <li>Ви залишаєте заявку на сайті або телефонуєте нам.</li>
                    <li>Ми підбираємо спеціаліста під ваш об’єкт та завдання.</li>
                    <li>Майстер зв’язується з вами для уточнення деталей та обговорення обсягу робіт.</li>
                    <li>Проводиться встановлення та підключення автоматів і електрощитка відповідно до плану.</li>
                    <li>Ви отримуєте готову, безпечну та правильно налаштовану систему електрозахисту з рекомендаціями по експлуатації.</li>
                    </ol>
                </div>

                <div className="w-full px-3 md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">
                    Переваги встановлення автоматів і щитків у професіоналів
                    </h2>
                    <p className="text-gray-700">
                    Замовляючи встановлення електрощитка, ви отримуєте:
                    </p>
                    <ul className="marked-list text-gray-700">
                    <li>дотримання всіх норм електробезпеки;</li>
                    <li>використання якісних автоматів та комплектуючих;</li>
                    <li>акуратний та професійний монтаж;</li>
                    <li>гарантію на виконані роботи;</li>
                    <li>консультації щодо правильної експлуатації електросистеми.</li>
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