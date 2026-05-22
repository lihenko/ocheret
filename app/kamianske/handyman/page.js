import Image from "next/image";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeIcon,
  CheckBadgeIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Хендімен Кам'янське — домашній майстер на всі руки",
  description: "Хендімен у Кам'янському: дрібний ремонт, збирання меблів, монтаж, сантехніка, електрика. Виклик майстра додому. Швидко, акуратно, з гарантією.",
  keywords: [
    "хендімен Кам'янське",
    "домашній майстер Кам'янське",
    "майстер на всі руки Кам'янське",
    "дрібний ремонт Кам'янське",
    "виклик майстра Кам'янське",
    "handyman Кам'янське"
  ],
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/handyman",
  },
  openGraph: {
    title: "Хендімен Кам'янське — домашній майстер на всі руки",
    description: "Хендімен у Кам'янському: дрібний ремонт, збирання меблів, монтаж, сантехніка, електрика. Виклик майстра додому.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/handyman",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/handyman-kamianske-img.webp",
        width: 1536,
        height: 1024,
        alt: "Хендімен у Кам'янському — домашній майстер"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Хендімен Кам'янське — домашній майстер на всі руки",
    description: "Виклик хендімена у Кам'янському. Дрібний ремонт, монтаж, сантехніка, електрика — швидко та акуратно.",
    images: ["https://ocheret.dp.ua/handyman-kamianske-img.webp"],
  },
};

export default function HandymanKamianskePagee() {
  const faqs = [
    {
      q: "Що таке хендімен і чим він займається?",
      a: "Хендімен (домашній майстер) — це фахівець, який виконує широкий спектр дрібних і середніх ремонтних робіт вдома: від збирання меблів і монтажу карнизів до дрібної сантехніки та електрики."
    },
    {
      q: "Чи можна викликати хендімена терміново у Кам'янському?",
      a: "Так, можливий терміновий виїзд майстра у Кам'янському. Все залежить від обсягу робіт та наявності вільного часу у майстра."
    },
    {
      q: "Скільки часу займає робота хендімена?",
      a: "Більшість дрібних завдань виконується протягом 1–3 годин. Складніші роботи або великий перелік завдань може зайняти цілий день."
    },
    {
      q: "Чи надається гарантія на роботи хендімена?",
      a: "Так, на всі виконані роботи надається гарантія. Якщо щось пішло не так — майстер повернеться та виправить."
    },
    {
      q: "Які інструменти привозить майстер із собою?",
      a: "Хендімен приїжджає зі своїм інструментом: дриль, шурупокрут, рівень, болгарка та інше необхідне обладнання."
    },
    {
      q: "Чи може хендімен виконати одразу кілька різних завдань?",
      a: "Так, саме в цьому і полягає перевага хендімена — один виїзд, кілька завдань. Можна скласти список справ і майстер виконає їх за один візит."
    },
    {
      q: "З якими роботами звертаються до хендімена найчастіше?",
      a: "Найпоширеніші запити: збирання меблів IKEA та інших, монтаж карнизів та жалюзі, кріплення полиць та дзеркал, дрібний сантехнічний ремонт, заміна розеток та вимикачів."
    },
    {
      q: "Від чого залежить вартість послуг хендімена у Кам'янському?",
      a: "Ціна залежить від переліку робіт, їх складності та тривалості. Більшість майстрів працює погодинно або за фіксованою ціною за конкретне завдання."
    },
    {
      q: "Чи працює хендімен у вихідні дні?",
      a: "Так, виклик майстра у Кам'янському можливий у вихідні та святкові дні за попередньою домовленістю."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/handyman#service",
        "name": "Хендімен у Кам'янському",
        "description":
          "Послуги хендімена (домашнього майстра) у Кам'янському: дрібний ремонт, збирання меблів, монтаж, сантехніка, електрика та інші побутові роботи.",
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
            "name": "Виїзд хендімена у Кам'янському"
          }
        },
        "url": "https://ocheret.dp.ua/kamianske/handyman"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/handyman#faq",
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
            src="/handyman-kamianske-img.webp"
            alt="Хендімен Кам'янське — домашній майстер"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Хендімен Кам'янське — домашній майстер на всі руки
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Виклик хендімена у Кам'янському для дрібного ремонту, збирання меблів,
              монтажу, сантехніки та електрики. Один дзвінок — вирішуємо всі домашні
              завдання за один виїзд.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              >
                Викликати майстра
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
            Хендімен у Кам'янському — хто це і навіщо потрібен
          </h2>
          <p className="text-gray-700 mb-4">
            Хендімен (від англ. handyman — «умілець») або домашній майстер — це
            універсальний фахівець, який виконує широкий спектр побутових ремонтних
            робіт. На відміну від вузькоспеціалізованих майстрів, хендімен вирішує
            десятки різних завдань за один виїзд.
          </p>
          <p className="text-gray-700">
            Послуга особливо зручна, коли вдома накопичилось кілька дрібних справ:
            зібрати меблі, повісити полицю, замінити кран, поклеїти плитку або
            підключити побутову техніку. Замість виклику трьох різних майстрів —
            один хендімен вирішує все.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Хендімен у Кам'янському для квартир, будинків і офісів
          </h2>
          <p className="text-gray-700 mb-4">
            Послуги хендімена у Кам'янському затребувані як у звичайних квартирах,
            так і в приватних будинках та комерційних приміщеннях. У квартирах
            найчастіше звертаються для збирання нових меблів, дрібного ремонту після
            переїзду або усунення побутових неполадок.
          </p>
          <p className="text-gray-700">
            У приватних будинках хендімен допомагає з ремонтом огороджень, монтажем
            дверей, герметизацією та іншими господарськими роботами. В офісах та
            комерційних приміщеннях майстер виконує монтажні роботи, збирання офісних
            меблів та дрібний технічний ремонт.
          </p>
        </div>
      </section>

      <section className="py-20 mb-20 bg-brand text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Потрібен хендімен вже сьогодні?
        </h2>
        <a
          href="/order"
          className="w-[450px] max-w-full inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition no-underline hover:text-brand"
        >
          Викликати майстра у Камʼянському
        </a>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Що виконує хендімен у Кам'янському
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Збирання меблів IKEA та інших виробників</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Монтаж карнизів, жалюзі, полиць та дзеркал</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <BoltIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Заміна розеток, вимикачів, встановлення світильників</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Дрібна сантехніка: кран, змішувач, унітаз</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ClockIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Регулювання дверей, вікон, замків</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CheckBadgeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Підключення побутової техніки та дрібний ремонт</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли варто викликати хендімена у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Послуга хендімена стане у нагоді в таких ситуаціях:
          </p>
          <ul className="marked-list">
            <li className="text-gray-700">вдома накопичилось кілька дрібних справ, на які не вистачає часу;</li>
            <li className="text-gray-700">куплені нові меблі або техніка, яку потрібно зібрати чи підключити;</li>
            <li className="text-gray-700">після ремонту залишились монтажні роботи;</li>
            <li className="text-gray-700">переїхали в нову квартиру і треба облаштуватись;</li>
            <li className="text-gray-700">потрібно швидко усунути побутову несправність.</li>
          </ul>
          <p className="text-gray-700">
            Хендімен вирішує всі ці завдання за один виїзд, економлячи ваш час і
            кошти на виклик кількох різних фахівців.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Хендімен у старих будинках Кам'янського
          </h2>
          <p className="text-gray-700 mb-4">
            Старий житловий фонд Кам'янського має свою специфіку: застаріла
            проводка, зношена сантехніка, розбухлі двері та вікна. Досвідчений
            хендімен знає особливості таких будинків і підбирає правильний підхід.
          </p>
          <p className="text-gray-700 mb-4">
            Майстер:
          </p>
          <ul className="marked-list">
            <li className="text-gray-700">оцінює реальний стан конструкцій перед початком роботи;</li>
            <li className="text-gray-700">підбирає матеріали з урахуванням типу будинку;</li>
            <li className="text-gray-700">виконує роботи акуратно, без зайвих пошкоджень;</li>
            <li className="text-gray-700">дає рекомендації по подальшому обслуговуванню.</li>
          </ul>
          <p className="text-gray-700">
            Це дозволяє отримати якісний результат навіть у будинках з нестандартними
            умовами.
          </p>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Орієнтовна вартість послуг хендімена у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Ціни залежать від виду робіт та їх складності. Нижче наведено середні
            орієнтовні розцінки станом на 2026 рік:
          </p>
          <ul className="marked-list text-gray-700">
            <li>Погодинна оплата хендімена — від ~300 до ~500 грн/год;</li>
            <li>Збирання меблів (одиниця) — від ~200 до ~600 грн залежно від складності;</li>
            <li>Монтаж полиці, карниза, дзеркала — від ~150 до ~300 грн за одиницю;</li>
            <li>Заміна розетки або вимикача — від ~150 до ~250 грн;</li>
            <li>Дрібний сантехнічний ремонт (кран, змішувач) — від ~250 до ~500 грн.</li>
          </ul>
          <p className="text-gray-700">
            Точну ціну майстер назве після уточнення деталей. При великому переліку
            завдань можлива знижка на загальну суму.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3 items-center">
            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Чому обирають хендімена у Кам'янському
              </h2>
              <p className="text-gray-700 mb-4">
                Хендімен — це зручно: один спеціаліст замінює кількох вузькопрофільних
                майстрів. Не потрібно шукати окремо електрика, сантехніка та
                складальника меблів — достатньо одного дзвінка.
              </p>
              <p className="text-gray-700 mb-16">
                Майстер приїжджає з власним інструментом, виконує роботи акуратно та
                прибирає за собою. Ви отримуєте вирішені побутові завдання без зайвих
                клопотів.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Один виїзд — кілька завдань
              </h2>
              <p className="text-gray-700 mb-4">
                Головна перевага хендімена — комплексність. За один візит майстер може
                зібрати шафу, повісити карниз, замінити змішувач і підключити
                пральну машину.
              </p>
              <p className="text-gray-700 mb-16">
                Це економить ваш час і зазвичай обходиться дешевше, ніж виклик трьох
                окремих фахівців з мінімальним виїздом кожного.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Хендімен будь-якої складності
              </h2>
              <p className="text-gray-700">
                Майстер виконує:
              </p>
              <ul className="marked-list">
                <li className="text-gray-700">монтажні та кріпильні роботи будь-якої складності;</li>
                <li className="text-gray-700">дрібний ремонт сантехніки та електрики;</li>
                <li className="text-gray-700">збирання та розбирання меблів;</li>
                <li className="text-gray-700">регулювання та ремонт дверей і вікон.</li>
              </ul>
              <p className="text-gray-700">
                Це дозволяє вирішити всі накопичені побутові питання за мінімум часу.
              </p>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <Image
                src="/handyman-kamianske.webp"
                width="1024"
                height="1024"
                alt="Хендімен Кам'янське — домашній майстер"
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
                Як викликати хендімена у Кам'янському
              </h2>
              <ol className="numbered-list text-gray-700">
                <li>Ви залишаєте заявку або зв'язуєтесь з майстром.</li>
                <li>Фахівець уточнює перелік завдань та деталі.</li>
                <li>Погоджується зручний час виїзду.</li>
                <li>Майстер приїжджає з інструментом і виконує всі роботи.</li>
                <li>Ви приймаєте роботу та отримуєте рекомендації по обслуговуванню.</li>
              </ol>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Переваги виклику хендімена у Кам'янському
              </h2>
              <p className="text-gray-700">
                Замовляючи хендімена, ви отримуєте:
              </p>
              <ul className="marked-list text-gray-700">
                <li>вирішення кількох завдань за один виїзд;</li>
                <li>власний інструмент майстра — нічого не треба купувати;</li>
                <li>акуратність і чистоту під час роботи;</li>
                <li>гарантію на виконані роботи;</li>
                <li>економію часу та коштів порівняно з вузькими спеціалістами.</li>
              </ul>
              <p className="text-gray-700">
                Майстер працює безпосередньо на вашому об'єкті у зручний для вас час.
              </p>
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