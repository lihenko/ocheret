import Image from "next/image";
import {
  BoltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  Square3Stack3DIcon,
  HomeModernIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import Link from "next/link";

export const metadata = {
  title: "Заміна електропроводки в квартирі Кам'янське — професійно та безпечно",
  description:
    "Заміна електропроводки в квартирі Кам'янське під ключ. Безпечний монтаж, заміна старої проводки, гарантія якості. Виклик електрика на об'єкт.",
  keywords: [
    "заміна електропроводки",
    "заміна проводки в квартирі",
    "електрик Кам'янське",
    "електропроводка квартира",
    "заміна електрики Кам'янське",
    "електромонтаж квартири",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical:
      "https://ocheret.dp.ua/kamianske/zamina-elektroprovodky-v-kvartyri",
  },
  openGraph: {
    title:
      "Заміна електропроводки в квартирі Кам'янське — професійно та безпечно",
    description:
      "Заміна електропроводки в квартирі Кам'янське під ключ. Безпечний монтаж, заміна старої проводки, гарантія якості. Виклик електрика на об'єкт.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/zamina-elektroprovodky-v-kvartyri",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/electryk-kamianske-img.webp",
        width: 1536,
        height: 1024,
        alt: "Заміна електропроводки в квартирі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Заміна електропроводки в квартирі Кам'янське — професійно та безпечно",
    description:
      "Заміна електропроводки в квартирі Кам'янське під ключ. Безпечний монтаж, заміна старої проводки, гарантія якості.",
    images: ["https://ocheret.dp.ua/electryk-kamianske-img.webp"],
  },
};

export default function WiringReplacementPage() {
  const faqs = [
    {
      q: "Скільки коштує заміна електропроводки в квартирі?",
      a: "Вартість залежить від площі квартири, складності робіт, типу матеріалів та обсягу демонтажу старої проводки. Точна ціна розраховується після огляду об'єкта."
    },
    {
      q: "Скільки часу займає заміна проводки?",
      a: "У середньому заміна електропроводки в квартирі займає від 2 до 5 днів залежно від площі та складності робіт."
    },
    {
      q: "Чи потрібно повністю міняти проводку?",
      a: "У більшості випадків рекомендується повна заміна старої алюмінієвої проводки, щоб забезпечити безпеку та витримувати сучасні навантаження."
    },
    {
      q: "Чи можна замінити проводку частково?",
      a: "Так, але часткова заміна виконується лише після оцінки стану мережі електриком. Часто це тимчасове рішення."
    },
    {
      q: "Які матеріали використовуються?",
      a: "Використовуються сучасні мідні кабелі, автомати захисту, ПЗВ (УЗО) та якісна фурнітура відповідно до норм безпеки."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/zamina-elektroprovodky-v-kvartyri#service",
        "name": "Заміна електропроводки в квартирі",
        "description":
          "Професійна заміна електропроводки у квартирах Кам'янського: демонтаж старої проводки, монтаж нової, встановлення автоматів та ПЗВ.",
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
        "url": "https://ocheret.dp.ua/kamianske/zamina-elektroprovodky-v-kvartyri"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/zamina-elektroprovodky-v-kvartyri#faq",
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
                src="/zamina-provodky-v-kvartyri.webp"
                alt="Послуги елктрика в Кам'янському"
                fill
                className="object-cover object-center"
                priority
            />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 xl:px-24">
            <div className="max-w-3xl relative">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                Заміна електропроводки в квартирі Кам’янське
                </h1>
                <p className="mt-6 text-base md:text-lg text-white">
                Професійна заміна старої електропроводки під ключ у Кам’янському з гарантією безпеки та якості.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white">
                    Замовити заміну проводки
                </Link>
                <Link href="/masters" className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black">
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
                Коли потрібна заміна проводки в Кам'янському
                </h2>
                <p className="text-gray-700 mb-4">
                Заміна електропроводки необхідна у випадках зносу старої проводки, частих коротких замикань, перевантаження електромережі або під час ремонту житла чи комерційного приміщення. Це особливо актуально для старих будинків, де проводка не відповідає сучасним вимогам безпеки.
                </p>
                <p className="text-gray-700">
                Професійна заміна проводки дозволяє підвищити рівень безпеки, уникнути аварійних ситуацій та забезпечити стабільну роботу всіх електроприладів у вашому будинку чи офісі в Кам'янському.
                </p>
            </div>
        </section>

        <section className="pb-20">
            <div className="container relative mx-auto px-4 xl:px-24">
                <h2 className="text-2xl font-semibold mb-4">
                Заміна проводки в Кам’янському для квартир, будинків і бізнесу
                </h2>
                <p className="text-gray-700 mb-4">
                Послуга заміни електропроводки в Кам’янському актуальна як для старих квартир, так і для приватних будинків та комерційних об’єктів. У квартирах найчастіше проводиться повна або часткова заміна старої алюмінієвої проводки на сучасну мідну, встановлюються нові розетки, вимикачі та оновлюється електрощиток.
                </p>
                <p className="text-gray-700">
                У приватних будинках заміна проводки включає прокладання нових кабельних ліній, підключення потужних приладів, таких як котли, насоси чи генератори, а також монтаж систем захисту. Для бізнесу — офісів, магазинів і кафе — важливо виконати заміну проводки з урахуванням навантаження та норм безпеки, щоб забезпечити стабільну та безперебійну роботу всього обладнання.
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
            Роботи із заміни проводки в Кам’янському
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
                <BoltIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Повна та часткова заміна електропроводки</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
                <ShieldCheckIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Діагностика та перевірка електромережі</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
                <CpuChipIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Монтаж нових електроліній та кабелів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
                <Square3Stack3DIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Заміна та встановлення електрощитів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
                <HomeModernIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Прокладання проводки в квартирах і будинках</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
                <span>Аварійний ремонт та усунення несправностей</span>
            </li>
            </ul>
        </div>
        </section>

        <section className="pb-20">
            <div className="container relative mx-auto px-4 xl:px-24">
                <h2 className="text-2xl font-semibold mb-4">
                Коли терміново потрібна заміна проводки в Кам’янському
                </h2>
                <p className="text-gray-700 mb-4">
                Негайна заміна електропроводки необхідна у таких випадках:
                </p>
                <ul className="marked-list">
                <li className="text-gray-700">
                    часто вибиває автомат або спрацьовує захист;
                </li>
                <li className="text-gray-700">
                    іскрить або перегрівається проводка, розетки чи вимикачі;
                </li>
                <li className="text-gray-700">
                    з’явився запах гару від кабелів;
                </li>
                <li className="text-gray-700">
                    зникає електрика або є перебої у живленні;
                </li>
                <li className="text-gray-700">
                    дроти або електрощит сильно нагріваються.
                </li>
                </ul>
                <p className="text-gray-700">
                Своєчасна заміна проводки дозволяє уникнути аварій, пожеж та забезпечує безпечну роботу всієї електромережі у квартирі чи будинку.
                </p>
            </div>
            </section>

            <section className="pb-20">
            <div className="container relative mx-auto px-4 xl:px-24">
                <h2 className="text-2xl font-semibold mb-4">
                Заміна електропроводки у старих будинках Кам’янського
                </h2>
                <p className="text-gray-700 mb-4">
                У старих будинках Кам’янського часто використовується застаріла алюмінієва проводка, яка не розрахована на сучасні навантаження від побутової техніки, бойлерів, кондиціонерів та іншого обладнання.
                </p>
                <p className="text-gray-700 mb-4">
                Під час виконання робіт спеціаліст:
                </p>
                <ul className="marked-list">
                <li className="text-gray-700">
                    оцінює стан існуючої електропроводки;
                </li>
                <li className="text-gray-700">
                    виявляє проблемні та небезпечні ділянки;
                </li>
                <li className="text-gray-700">
                    підбирає оптимальну схему нової проводки;
                </li>
                <li className="text-gray-700">
                    встановлює сучасні автомати та захисні пристрої.
                </li>
                </ul>
                <p className="text-gray-700">
                Повна або часткова заміна проводки значно підвищує рівень безпеки та дозволяє уникнути перевантажень і коротких замикань у майбутньому.
                </p>
            </div>
            </section>
        {/* PRICE INFO */}
        <section className="pb-20">
            <div className="container relative mx-auto px-4 xl:px-24">
                <h2 className="text-2xl font-semibold mb-4">
                Вартість заміни проводки в Кам’янському
                </h2>
                <p className="text-gray-700">
                Ціни на заміну електропроводки формуються індивідуально та залежать від:
                </p>
                <ul className="marked-list">
                <li className="text-gray-700">
                    площі та типу об’єкта (квартира, будинок, комерційне приміщення);
                </li>
                <li className="text-gray-700">
                    обсягу робіт (повна або часткова заміна проводки);
                </li>
                <li className="text-gray-700">
                    стану існуючої електромережі;
                </li>
                <li className="text-gray-700">
                    складності монтажу та прокладання кабелів;
                </li>
                <li className="text-gray-700">
                    терміновості виконання робіт.
                </li>
                </ul>
                <p className="text-gray-700">
                Перед початком робіт спеціаліст проводить огляд об’єкта, узгоджує всі етапи та орієнтовну вартість. Це дозволяє уникнути прихованих витрат і гарантує прозорість співпраці.
                </p>
            </div>
        </section>
        <section className="pb-20 bg-gray-50">
            <div className="container mx-auto px-4 xl:px-24">
                <div className="flex flex-wrap -mx-3 items-center">
                <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">
                    Чому обирають заміну проводки в Кам’янському
                    </h2>
                    <p className="text-gray-700 mb-4">
                    Роботи із заміни електропроводки в Кам’янському виконуються досвідченими спеціалістами з дотриманням усіх норм безпеки. Використовуються сучасні матеріали та професійний інструмент, що гарантує надійність і довговічність нової електромережі.
                    </p>
                    <p className="text-gray-700 mb-16">
                    Клієнти отримують швидкий виїзд, прозору вартість та гарантію на виконані роботи. Кожен проєкт розраховується індивідуально з урахуванням особливостей об’єкта та побажань замовника.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                    Прокладання нової проводки та підключення
                    </h2>
                    <p className="text-gray-700 mb-4">
                    Під час заміни проводки виконується прокладання нових кабельних ліній, встановлення розеток, вимикачів та підключення освітлення. Усі роботи проводяться з урахуванням навантаження та безпечного розподілу електрики по приміщенню.
                    </p>
                    <p className="text-gray-700 mb-16">
                    Правильно спроєктована проводка дозволяє уникнути перевантажень, забезпечує стабільну роботу електроприладів та підвищує рівень безпеки у квартирі або будинку.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                    Монтаж щитів та систем захисту
                    </h2>
                    <p className="text-gray-700">
                    Електрощит — важлива частина нової електропроводки. Під час заміни встановлюються:
                    </p>
                    <ul className="marked-list">
                    <li className="text-gray-700">сучасні електрощити та модулі;</li>
                    <li className="text-gray-700">автомати захисту та ПЗВ (УЗО);</li>
                    <li className="text-gray-700">диференційні автомати;</li>
                    <li className="text-gray-700">маркування ліній для зручності обслуговування.</li>
                    </ul>
                    <p className="text-gray-700">
                    Така система захисту дозволяє уникнути аварій, локалізувати несправності та забезпечити безпечну експлуатацію всієї електромережі.
                    </p>
                </div>

                <div className="w-full px-3 md:w-1/2">
                    <Image
                    src="/electryk-kamianske.webp"
                    width={1024}
                    height={1024}
                    alt="Заміна проводки Кам'янське"
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
                    Як проходить заміна проводки в Кам’янському
                    </h2>
                    <ol className="numbered-list text-gray-700">
                    <li>Ви залишаєте заявку на сайті або телефонуєте нам.</li>
                    <li>Ми підбираємо спеціаліста під ваш об’єкт та завдання.</li>
                    <li>Майстер зв’язується з вами для уточнення деталей та обговорення обсягу робіт.</li>
                    <li>Проводиться заміна електропроводки відповідно до узгодженого плану.</li>
                    <li>Ви отримуєте готову, безпечну та сучасну електромережу з рекомендаціями по експлуатації.</li>
                    </ol>
                </div>

                <div className="w-full px-3 md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">
                    Переваги заміни проводки у професіоналів
                    </h2>
                    <p className="text-gray-700">
                    Замовляючи заміну електропроводки, ви отримуєте:
                    </p>
                    <ul className="marked-list text-gray-700">
                    <li>дотримання всіх норм електробезпеки;</li>
                    <li>використання якісних кабелів і матеріалів;</li>
                    <li>акуратний та професійний монтаж;</li>
                    <li>гарантію на виконані роботи;</li>
                    <li>консультації щодо безпечної експлуатації електромережі.</li>
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