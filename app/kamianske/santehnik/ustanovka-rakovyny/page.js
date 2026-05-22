import Image from "next/image";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  BeakerIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Встановлення раковини Кам'янське — монтаж та підключення",
  description:
    "Встановлення раковини у Кам'янському: монтаж у ванній або на кухні, підключення змішувача та сифона, герметизація, перевірка на протікання. Виїзд майстра у день звернення.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-rakovyny",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Встановлення раковини Кам'янське — монтаж та підключення",
    description:
      "Професійне встановлення раковини у Кам'янському. Монтаж, підключення сифона і змішувача, герметизація та виїзд майстра.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-rakovyny",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/ustanovka-rakovyny-kamianske.webp",
        width: 1536,
        height: 1024,
        alt: "Встановлення раковини у Кам'янському",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Встановлення раковини Кам'янське — монтаж та підключення",
    description:
      "Термінове встановлення раковини у Кам'янському. Монтаж, підключення, герметизація, виїзд майстра.",
    images: ["https://ocheret.dp.ua/ustanovka-rakovyny-kamianske.webp"],
  },
};

export default function UstanovkaRakovynyPage() {
  const faqs = [
    {
      q: "Чи можна викликати майстра для встановлення раковини терміново у Камʼянському?",
      a: "Так, можливий терміновий виїзд сантехніка для встановлення раковини у Камʼянському, зокрема у випадках ремонту, заміни старої сантехніки або аварійних ситуацій.",
    },
    {
      q: "Що входить у послугу встановлення раковини?",
      a: "Послуга включає монтаж раковини, встановлення або підключення сифона, підключення змішувача, герметизацію зʼєднань, перевірку зливу та контроль на відсутність протікань.",
    },
    {
      q: "Чи можна встановити нову раковину в той самий день?",
      a: "Так, у багатьох випадках майстер може встановити раковину у день звернення, якщо не потрібні складні додаткові сантехнічні або монтажні роботи.",
    },
    {
      q: "Скільки коштує встановлення раковини у Камʼянському?",
      a: "Ціна залежить від типу раковини, складності монтажу, стану комунікацій, необхідності підключення змішувача, сифона чи додаткових матеріалів. Точна вартість визначається після уточнення деталей.",
    },
    {
      q: "Чи встановлюєте ви накладні, врізні та підвісні раковини?",
      a: "Так, виконуємо встановлення різних типів раковин: накладних, врізних, підвісних, з тумбою або без, у ванній кімнаті, санвузлі та на кухні.",
    },
    {
      q: "Чи можна замовити встановлення раковини у зручний час?",
      a: "Так, майстер може приїхати у погоджений час, включаючи вечір або вихідні за попередньою домовленістю.",
    },
    {
      q: "Чи потрібно самостійно купувати сифон, кріплення та герметик?",
      a: "За бажанням замовника майстер може працювати з вашими матеріалами або привезти необхідні комплектуючі: сифон, гнучкі шланги, кріплення, герметик та інші дрібні елементи для монтажу.",
    },
    {
      q: "Чи є гарантія на встановлення раковини?",
      a: "Так, на виконані роботи з монтажу та підключення раковини надається гарантія.",
    },
    {
      q: "Чи виконуєте встановлення раковини у квартирі, будинку або офісі?",
      a: "Так, виконуємо встановлення раковин у квартирах, приватних будинках, офісах, магазинах та інших комерційних приміщеннях у Камʼянському.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-rakovyny#service",
        name: "Встановлення раковини у Кам'янському",
        description:
          "Професійне встановлення раковини у Кам'янському: монтаж, підключення сифона та змішувача, герметизація, перевірка зливу та виїзд майстра.",
        provider: {
          "@type": "LocalBusiness",
          name: "Ocheret",
          url: "https://ocheret.dp.ua",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Кам'янське",
            addressRegion: "Дніпропетровська область",
            addressCountry: "UA",
          },
        },
        areaServed: {
          "@type": "Place",
          name: "Кам'янське",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "Виїзд майстра для встановлення раковини у Кам'янському",
          },
        },
        url: "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-rakovyny",
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://ocheret.dp.ua/kamianske/santehnik/ustanovka-rakovyny#faq",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ustanovka-rakovyny-kamianske.webp"
            alt="Встановлення раковини в Кам'янському"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Встановлення раковини в Кам&apos;янському — швидко і акуратно
            </h1>

            <p className="mt-6 text-lg text-white">
              Монтаж раковини у ванній, санвузлі або на кухні у Кам&apos;янському.
              Підключення сифона, змішувача, герметизація та перевірка на
              протікання. Виїзд майстра у день звернення.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white"
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

      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Професійне встановлення раковини в Кам&apos;янському
          </h2>

          <p className="text-gray-700 mb-4">
            Встановлення раковини в Кам&apos;янському виконується з урахуванням
            типу сантехніки, особливостей підключення води та зливу, стану
            кріплень і поверхні монтажу. Майстер акуратно монтує раковину,
            встановлює сифон, підключає змішувач та герметизує з&apos;єднання.
          </p>

          <p className="text-gray-700">
            Правильний монтаж раковини допомагає уникнути протікань,
            розхитування, неприємного запаху зі зливу та інших проблем у
            повсякденному користуванні. Послуга доступна для квартир, приватних
            будинків, офісів та комерційних приміщень у Кам&apos;янському.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Послуги зі встановлення раковини в Кам&apos;янському
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand" />
              <span>Монтаж нової раковини у ванній, санвузлі або на кухні</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <BeakerIcon className="w-8 h-8 text-brand" />
              <span>Підключення сифона, змішувача та зливу</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ShieldCheckIcon className="w-8 h-8 text-brand" />
              <span>Герметизація з&apos;єднань і перевірка на протікання</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ArrowPathIcon className="w-8 h-8 text-brand" />
              <span>Заміна старої раковини на нову з підгонкою підключень</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <ClockIcon className="w-8 h-8 text-brand" />
              <span>Терміновий виїзд майстра у день звернення</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg">
              <HomeIcon className="w-8 h-8 text-brand" />
              <span>Встановлення раковини в квартирах, будинках та офісах</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 mb-20 bg-brand text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Потрібен майстер вже сьогодні?</h2>
        <Link
          href="/order"
          className="w-[450px] max-w-full inline-block bg-white text-brand px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition no-underline hover:text-brand"
        >
          Замовити сантехніка в Кам&apos;янському
        </Link>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4">
              <h2 className="text-2xl font-semibold mb-4">
                Термінове встановлення раковини в Кам&apos;янському — без зайвих
                клопотів
              </h2>

              <p className="text-gray-700 mb-4">
                Потрібно встановити нову раковину після ремонту або замінити
                стару сантехніку? Виконуємо монтаж раковин різних типів з
                підключенням до водопостачання і каналізації, перевіркою зливу
                та акуратною герметизацією всіх з&apos;єднань.
              </p>

              <p className="text-gray-700 mb-4">
                Працюємо з підвісними, накладними, врізними раковинами, моделями
                з тумбою та без. За потреби майстер допоможе з підключенням
                змішувача, заміною сифона, гнучких шлангів та іншими супутніми
                сантехнічними роботами.
              </p>

              <p className="text-gray-700">
                Перегляньте всі послуги на сторінці{" "}
                <Link href="/kamianske/santehnik" className="text-brand underline">
                  послуги сантехніка в Кам&apos;янському
                </Link>
                .
              </p>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <Image
                src="/ustanovka-rakovyny.webp"
                width={1024}
                height={1024}
                alt="Встановлення раковини Кам'янське"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Коли потрібне встановлення раковини
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Після ремонту у ванній або на кухні</h3>
              <p className="text-gray-700">
                Після оздоблювальних робіт часто потрібно встановити нову раковину,
                змішувач і підключити злив. Важливо зробити це акуратно, щоб не
                пошкодити плитку, меблі чи нові підключення.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">При заміні старої сантехніки</h3>
              <p className="text-gray-700">
                Якщо стара раковина тріснула, хитається, протікає або втратила
                зовнішній вигляд, доцільно встановити нову модель із правильним
                підключенням до води та каналізації.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Під час переобладнання приміщення</h3>
              <p className="text-gray-700">
                Встановлення раковини часто потрібне при оновленні санвузла, кухні,
                комерційного приміщення або офісу, коли змінюється планування чи тип
                сантехніки.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Коли потрібен монтаж з нуля</h3>
              <p className="text-gray-700">
                Якщо раковина встановлюється у новому приміщенні або після капітального
                ремонту, важливо правильно виконати кріплення, підключення сифона,
                змішувача та перевірку герметичності всіх з&apos;єднань.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Від чого залежить ціна встановлення раковини
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-white border p-6">
              <h3 className="text-lg font-semibold mb-2">Тип раковини</h3>
              <p className="text-gray-700">
                Вартість залежить від конструкції: підвісна, врізна, накладна,
                раковина з тумбою або нестандартна модель можуть вимагати різного
                обсягу монтажних робіт.
              </p>
            </div>

            <div className="rounded-lg bg-white border p-6">
              <h3 className="text-lg font-semibold mb-2">Стан підключень</h3>
              <p className="text-gray-700">
                Якщо потрібно переробляти злив, міняти сифон, шланги, кріплення або
                підганяти існуючі комунікації, це впливає на підсумкову ціну робіт.
              </p>
            </div>

            <div className="rounded-lg bg-white border p-6">
              <h3 className="text-lg font-semibold mb-2">Додаткові сантехнічні роботи</h3>
              <p className="text-gray-700">
                Окремо може враховуватися встановлення змішувача, демонтаж старої
                раковини, заміна комплектуючих, герметизація або усунення супутніх
                проблем із підключенням.
              </p>
            </div>

            <div className="rounded-lg bg-white border p-6">
              <h3 className="text-lg font-semibold mb-2">Терміновість виїзду</h3>
              <p className="text-gray-700">
                Якщо потрібен терміновий виїзд сантехніка у день звернення або
                виконання роботи у вечірній час, це також може впливати на вартість.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            Точна ціна встановлення раковини у Кам&apos;янському визначається після
            уточнення типу сантехніки, обсягу робіт і стану підключень.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Які раковини ми встановлюємо
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Підвісні раковини</h3>
              <p className="text-gray-700">
                Монтуємо класичні підвісні раковини для ванних кімнат і санвузлів з
                надійним кріпленням до стіни.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Накладні раковини</h3>
              <p className="text-gray-700">
                Встановлюємо накладні моделі на стільницю у ванній або санвузлі з
                акуратним підключенням та герметизацією.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Врізні раковини</h3>
              <p className="text-gray-700">
                Виконуємо монтаж врізних раковин у стільницю або меблі з точним
                підганянням і підключенням зливу.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Раковини з тумбою</h3>
              <p className="text-gray-700">
                Підключаємо раковини, які встановлюються разом із меблями у ванній,
                з урахуванням розташування труб і сифона.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Кухонні мийки</h3>
              <p className="text-gray-700">
                Виконуємо встановлення кухонних мийок і раковин з підключенням
                змішувача, сифона та перевіркою зливної системи.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Нестандартні моделі</h3>
              <p className="text-gray-700">
                Працюємо з різними формами і розмірами раковин, якщо монтаж потребує
                індивідуального підходу або підгонки під наявні комунікації.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Питання та відповіді
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group rounded-lg border p-6 open:shadow-sm">
                <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-green-600 transition group-open:rotate-180">
                    {" "}
                    ▼{" "}
                  </span>
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
