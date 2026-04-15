import Image from "next/image";
import Link from "next/link";
import {
  WindowIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Встановлення вікон Кам'янське — монтаж пластикових вікон під ключ",
  description: "Професійне встановлення пластикових вікон у Кам'янському. Монтаж, заміна старих вікон, балкони та лоджії. Доступні ціни, гарантія якості, швидкий виїзд майстра.",
  keywords: [
    "встановлення вікон Кам'янське",
    "монтаж пластикових вікон",
    "заміна вікон Кам'янське",
    "металопластикові вікна монтаж",
    "встановити вікна ціна",
    "майстер по вікнах Кам'янське",
    "вікна під ключ Кам'янське"
  ],
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/vstanovlennya-vikon",
  },
  openGraph: {
    title: "Встановлення вікон Кам'янське — монтаж пластикових вікон під ключ",
    description: "Послуги встановлення вікон у Кам'янському: монтаж, заміна старих вікон, утеплення, балкони та лоджії. Швидко, якісно та з гарантією.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/vstanovlennya-vikon",
    type: "website",
    images: [
      { 
        url: "https://ocheret.dp.ua/vstanovlennya-vikon-kamianske.webp", 
        width: 1536, 
        height: 1024, 
        alt: "Майстер встановлює пластикове вікно у Кам'янському" 
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Встановлення вікон Кам'янське — монтаж пластикових вікон під ключ",
    description: "Професійне встановлення вікон у Кам'янському. Монтаж, заміна, балкони, гарантія та доступні ціни.",
    images: ["https://ocheret.dp.ua/vstanovlennya-vikon-kamianske.webp"],
  },
};
export default function VstanovlennyaVikonKamianskePage() {
  const faqs = [
    {
      q: "Чи можна замовити встановлення вікон терміново у Кам'янському?",
      a: "Так, можливий терміновий виїзд майстра для встановлення або заміни вікон у Кам'янському. Це актуально у випадках пошкодження вікна, продування або під час ремонту."
    },
    {
      q: "Скільки часу займає встановлення пластикового вікна?",
      a: "У більшості випадків монтаж одного металопластикового вікна займає від 2 до 4 годин. Час залежить від складності робіт, типу стін та необхідності демонтажу старого вікна."
    },
    {
      q: "Чи входить демонтаж старих вікон у послугу?",
      a: "Так, демонтаж старих вікон може входити у комплекс робіт або виконуватися окремо. Майстер акуратно знімає стару конструкцію перед встановленням нової."
    },
    {
      q: "Чи надається гарантія на встановлення вікон?",
      a: "Так, на всі роботи з монтажу вікон у Кам'янському надається гарантія за умови дотримання рекомендацій з експлуатації."
    },
    {
      q: "Чи можна встановити вікна у квартирі, будинку або офісі?",
      a: "Так, виконується встановлення вікон у квартирах, приватних будинках, офісах, магазинах та інших приміщеннях у Кам'янському."
    },
    {
      q: "Чи встановлюєте вікна на балконах і лоджіях?",
      a: "Так, можливе встановлення та заміна вікон на балконах і лоджіях, включаючи скління та утеплення."
    },
    {
      q: "Від чого залежить ціна встановлення вікон?",
      a: "Вартість залежить від розміру вікна, типу профілю, складності монтажу, необхідності демонтажу старих конструкцій та додаткових робіт."
    },
    {
      q: "Чи можна встановити ролети або москітні сітки разом із вікнами?",
      a: "Так, разом із встановленням вікон можна одразу замовити монтаж ролетів, москітних сіток та інших додаткових елементів."
    },
    {
      q: "Чи працюєте у вихідні дні?",
      a: "Так, встановлення вікон у Кам'янському можливе у вихідні та святкові дні за попередньою домовленістю."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/vstanovlennya-vikon#service",
        "name": "Встановлення вікон у Кам'янському",
        "description":
          "Професійне встановлення пластикових вікон у Кам'янському: монтаж, заміна старих вікон, балкони та лоджії, утеплення та додаткові роботи.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "areaServed": {
            "@type": "Place",
            "name": "Кам'янське"
          },
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
            "name": "Виїзд майстра для встановлення вікон у Кам'янському"
          }
        },
        "url": "https://ocheret.dp.ua/kamianske/vstanovlennya-vikon"
      },

      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/vstanovlennya-vikon#faq",
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
            src="/vstanovlennya-vikon-kamianske.webp"
            alt="Встановлення пластикових вікон у Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Встановлення вікон Кам'янське — монтаж під ключ
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Професійне встановлення пластикових вікон у Кам'янському для квартир, будинків та офісів. Монтаж, заміна старих вікон, балкони та лоджії. Швидко, якісно та з гарантією.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white">
                Замовити встановлення
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
            Коли потрібне встановлення вікон у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Послуга встановлення вікон актуальна під час ремонту, будівництва або заміни старих конструкцій. Найчастіше клієнти замовляють монтаж нових металопластикових вікон, заміну старих дерев’яних рам, встановлення на балконах і лоджіях, а також додатково обирають ролети або москітні сітки.
          </p>
          <p className="text-gray-700">
            Правильний монтаж напряму впливає на теплоізоляцію, шумоізоляцію та довговічність вікон. Саме тому важливо не лише встановити конструкцію, а й дотриматися технології монтажу.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Встановлення вікон у Кам’янському для квартир, будинків і бізнесу
          </h2>
          <p className="text-gray-700 mb-4">
            Встановлення пластикових вікон у Кам’янському виконується для квартир, приватних будинків, офісів, магазинів та інших приміщень. У квартирах найчастіше проводиться заміна старих вікон на енергоефективні, монтаж балконних блоків або скління лоджій. У приватних будинках встановлюються великі віконні конструкції, панорамні рішення та додаткове утеплення.
          </p>
          <p className="text-gray-700 mb-4">
            Для комерційних об’єктів важлива не лише якість монтажу, а й зовнішній вигляд, теплоізоляція та довговічність конструкцій. Встановлення виконується з урахуванням навантажень, типу будівлі та умов експлуатації.
          </p>
          <p className="text-gray-700">
            Окрему увагу варто приділити вибору виробника вікон. Якісний профіль, надійна фурнітура та склопакет напряму впливають на комфорт у приміщенні. Майстер допоможе підібрати оптимальний варіант за ціною та характеристиками, щоб вікна служили довго без втрати своїх властивостей.
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
            Роботи зі встановлення вікон у Кам'янському
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WindowIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Встановлення металопластикових вікон</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Демонтаж та заміна старих вікон</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <BuildingOffice2Icon className="w-8 h-8 text-brand shrink-0" />
              <span>Скління балконів і лоджій</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ShieldCheckIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Герметизація та утеплення вікон</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <AdjustmentsHorizontalIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Регулювання фурнітури та обслуговування</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <Squares2X2Icon className="w-8 h-8 text-brand shrink-0" />
              <span>Встановлення ролетів і москітних сіток</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібно терміново замінити вікна у Кам’янському
          </h2>
          <p className="text-gray-700 mb-4">
            Термінове встановлення або заміна вікон необхідні у таких випадках:
          </p>
          <ul className="marked-list">
            <li className="text-gray-700">сильне продування і втрата тепла у приміщенні;</li>

            <li className="text-gray-700">поява конденсату або льоду на склопакеті;</li>

            <li className="text-gray-700">тріщини або пошкодження скла чи рами;</li>

            <li className="text-gray-700">погано закривається або не працює фурнітура;</li>

            <li className="text-gray-700">підвищений шум з вулиці через старі вікна.</li>
          </ul>
          <p className="text-gray-700">
            Своєчасна заміна вікон дозволяє зберегти тепло, підвищити комфорт у приміщенні та зменшити витрати на опалення.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Старі вікна у будинках Кам’янського — коли потрібна заміна
          </h2>
          <p className="text-gray-700 mb-4">
            У багатьох квартирах і будинках Кам’янського досі встановлені старі дерев’яні або перші металопластикові вікна, які втратили свої властивості. Вони пропускають холод, шум і вологу, що негативно впливає на комфорт проживання.
          </p>
          <p className="text-gray-700 mb-4">
            Професійний монтаж вікон включає:
          </p>
          <ul className="marked-list">
            <li className="text-gray-700">демонтаж старих віконних конструкцій;</li>

            <li className="text-gray-700">підготовку отвору до встановлення;</li>

            <li className="text-gray-700">монтаж нового вікна з дотриманням технології;</li>

            <li className="text-gray-700">герметизацію та утеплення;</li>

            <li className="text-gray-700">регулювання фурнітури.</li>
          </ul>
          <p className="text-gray-700">
            Якісне встановлення вікон забезпечує тепло, тишу та довговічність конструкції навіть у складних умовах експлуатації.
          </p>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Вартість встановлення вікон у Кам’янському
          </h2>
          <p className="text-gray-700">
            Ціна на встановлення вікон формується індивідуально та залежить від:
          </p>
          <ul className="marked-list">
            <li className="text-gray-700">типу конструкції (пластикові вікна, балконні блоки, панорамні);</li>

            <li className="text-gray-700">розмірів та кількості вікон;</li>

            <li className="text-gray-700">складності монтажу та демонтажу старих вікон;</li>

            <li className="text-gray-700">типу профілю та склопакету;</li>

            <li className="text-gray-700">додаткових робіт (утеплення, підвіконня, відливи, ролети).</li>
          </ul>
          <p className="text-gray-700">
            Перед початком робіт майстер оцінює обсяг задач, допомагає підібрати оптимальні вікна та погоджує кінцеву вартість. Це дозволяє уникнути прихованих витрат і забезпечує прозорий процес роботи.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3 items-center">
            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Чому обирають встановлення вікон у Кам'янському
              </h2>
              <p className="text-gray-700 mb-4">
                Встановлення вікон у Кам’янському виконують досвідчені майстри, які дотримуються сучасних стандартів монтажу. Використовуються якісні матеріали та професійний інструмент, що гарантує довговічність конструкцій.
              </p>
              <p className="text-gray-700 mb-16">
                Клієнти отримують швидкий виїзд, чесну вартість та гарантію на роботи. Підбирається оптимальне рішення під кожен об’єкт з урахуванням теплоізоляції та шумоізоляції.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Монтаж та встановлення вікон і підвіконь
              </h2>
              <p className="text-gray-700 mb-4">
                Професійне встановлення вікон включає точний демонтаж старих конструкцій, підготовку отвору та монтаж нових вікон із дотриманням усіх технологій.
              </p>
              <p className="text-gray-700 mb-16">
                Виконується герметизація швів, встановлення підвіконь, відливів та фурнітури. Це забезпечує відсутність протягів, вологи та втрат тепла.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Якісні матеріали та надійна фурнітура
              </h2>
              <p className="text-gray-700">
                Для монтажу використовуються перевірені матеріали та комплектуючі, що гарантують довгий термін служби:
              </p>
              <ul className="marked-list">
                <li className="text-gray-700">енергозберігаючі склопакети;</li>
                <li className="text-gray-700">надійна фурнітура від перевірених виробників;</li>
                <li className="text-gray-700">якісні герметики та монтажні матеріали;</li>
                <li className="text-gray-700">додаткові елементи захисту від шуму та холоду.</li>
              </ul>
              <p className="text-gray-700">
                Такий підхід дозволяє забезпечити комфорт у приміщенні та зменшити витрати на опалення.
              </p>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <Image
                src="/vikna-kamianske.webp"
                width="1024"
                height="1024"
                alt="Встановлення вікон Кам'янське"
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
                Як проходить встановлення вікон у Кам’янському
              </h2>
              <ol className="numbered-list text-gray-700">
                <li>Ви залишаєте заявку на сайті.</li>
                <li>Ми уточнюємо деталі: розміри, тип вікон та особливості об’єкта.</li>
                <li>Майстер виїжджає на заміри та узгоджує вартість робіт.</li>
                <li>Виготовляються або підбираються вікна та погоджується дата монтажу.</li>
                <li>Виконується професійне встановлення вікон з дотриманням технологій.</li>
                <li>Ви отримуєте готовий результат та рекомендації по догляду.</li>
              </ol>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Переваги встановлення вікон у Кам’янському
              </h2>
              <p className="text-gray-700">
                Звертаючись до професіоналів, ви отримуєте:
              </p>
              <ul className="marked-list text-gray-700">
                <li>якісний монтаж за стандартами;</li>
                <li>герметичність та теплоізоляцію;</li>
                <li>використання перевірених матеріалів;</li>
                <li>гарантію на роботи;</li>
                <li>консультацію щодо догляду та експлуатації.</li>
              </ul>
              <p className="text-gray-700">
                Монтаж вікон виконується безпосередньо на об’єкті в Кам’янському, без посередників і затримок.
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
