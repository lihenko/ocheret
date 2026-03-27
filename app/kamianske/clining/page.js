import Image from "next/image";
import {
  SparklesIcon,
  SwatchIcon,
  WindowIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "🧹 Прибирання квартир Кам'янське — клінінг, ціни та якість",
  description:
    "Професійне прибирання квартир у Кам'янському: генеральне, після ремонту, регулярне. Миття поверхонь, підлоги, санвузлів, кухні. Швидко, чисто та з гарантією якості.",
  keywords: [
    "прибирання квартир Кам'янське",
    "клінінг Кам'янське",
    "генеральне прибирання Кам'янське",
    "прибирання після ремонту Кам'янське",
    "клінінгові послуги Кам'янське"
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/clining"
  },
  openGraph: {
    title: "🧹 Прибирання квартир Кам'янське — професійний клінінг",
    description:
      "Якісне прибирання квартир у Кам'янському. Генеральне, після ремонту та регулярне прибирання з гарантією чистоти.",
    siteName: "Ocheret — клінінгові послуги",
    url: "https://ocheret.dp.ua/kamianske/clining",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/clining-kamianske-img.webp",
        width: 1536,
        height: 1024,
        alt: "Прибирання квартири у Кам'янському"
      }
    ]
  }
};

export default function CliningKamianskePage() {
  const faqs = [
  {
    q: "Чи можна замовити термінове прибирання квартири у Кам'янському?",
    a: "Так, доступне термінове прибирання квартир у Кам'янському у зручний для вас час, включаючи швидкий виїзд клінінгової команди."
  },
  {
    q: "Скільки часу займає прибирання квартири?",
    a: "Час залежить від площі квартири та типу прибирання. Зазвичай генеральне прибирання займає від кількох годин до повного робочого дня."
  },
  {
    q: "Які види прибирання ви виконуєте?",
    a: "Ми виконуємо генеральне прибирання, регулярне прибирання, прибирання після ремонту, а також комплексний клінінг квартир і будинків."
  },
  {
    q: "Чи надається гарантія на якість прибирання?",
    a: "Так, ми гарантуємо якість прибирання. У разі зауважень клієнта можливе оперативне виправлення недоліків."
  },
  {
    q: "Чи потрібно надавати власні засоби для прибирання?",
    a: "Ні, клінінгова команда використовує власні професійні засоби та інвентар. За бажанням можна узгодити використання ваших засобів."
  },
  {
    q: "Чи виконується прибирання після ремонту?",
    a: "Так, доступне прибирання після ремонту з видаленням будівельного пилу, залишків фарби та інших забруднень."
  },
  {
    q: "Чи можна замовити регулярне прибирання квартири?",
    a: "Так, доступне регулярне прибирання за графіком: щотижня, кілька разів на місяць або індивідуально за домовленістю."
  },
  {
    q: "Чи працюєте ви у вихідні та святкові дні?",
    a: "Так, прибирання можливе у вихідні та святкові дні за попередньою домовленістю."
  },
  {
    q: "Від чого залежить вартість прибирання?",
    a: "Вартість залежить від площі приміщення, ступеня забруднення, типу прибирання та додаткових послуг."
  },
  {
    q: "Чи прибираєте ви кухню та санвузли?",
    a: "Так, у стандартне та генеральне прибирання входить очищення кухні, ванної кімнати та санвузлів."
  },
  {
    q: "Чи можна замовити прибирання офісу або будинку?",
    a: "Так, ми надаємо клінінгові послуги не лише для квартир, а й для приватних будинків та комерційних приміщень."
  },
  {
    q: "Чи безпечно використовуються хімічні засоби?",
    a: "Так, використовуються безпечні професійні засоби, які ефективні для очищення та не шкодять здоров’ю при правильному використанні."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/cleaning#service",
      "name": "Клінінгові послуги у Кам'янському",
      "description":
        "Професійні клінінгові послуги у Кам'янському для дому та бізнесу: генеральне прибирання, регулярне прибирання, миття вікон, прибирання після ремонту, хімчистка та інші послуги.",
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
          "name": "Виїзд до клієнта у Кам'янському"
        }
      },
      "url": "https://ocheret.dp.ua/kamianske/cleaning"
    },

    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/cleaning#faq",
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
            src="/clining-kamianske-img.webp"
            alt="Прибирання Кам'янське"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Клінінг Кам'янське — професійне прибирання для дому та бізнесу
            </h1>

            <p className="mt-6 text-base md:text-lg text-white">
              Професійні клінінгові послуги у Кам'янському для квартир, будинків, офісів та комерційних приміщень. Генеральне та регулярне прибирання, миття вікон, прибирання після ремонту — швидко, якісно та з гарантією чистоти.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/order"
                className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              >
                Замовити прибирання
              </a>

              <a
                href="/masters"
                className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black"
              >
                Стати клінером
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SERVICE */}
      <section className="py-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібні клінінгові послуги у Кам'янському
          </h2>

          <p className="text-gray-700 mb-4">
            Клінінгові послуги необхідні для підтримання чистоти у квартирі, будинку чи офісі, під час генерального прибирання, після ремонту, перед святами або при регулярному догляді за приміщенням.
          </p>

          <p className="text-gray-700">
            Професійна клінінгова команда використовує сучасні засоби та техніку, щоб швидко й якісно прибрати приміщення, забезпечуючи комфорт, гігієну та приємну атмосферу.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Клінінг у Кам’янському для квартир, будинків і бізнесу
          </h2>

          <p className="text-gray-700 mb-4">
            Клінінгові послуги у Кам’янському актуальні як для регулярного прибирання, так і для генерального або післяремонтного клінінгу. У квартирах найчастіше замовляють підтримуюче прибирання, миття підлог, кухні та санвузлів, очищення меблів і поверхонь, а також миття вікон. У приватних будинках клінінг включає прибирання всіх приміщень, догляд за великими площами, терасами та додатковими зонами.
          </p>

          <p className="text-gray-700">
            Для комерційних об’єктів — офісів, магазинів, кафе — важливо підтримувати чистоту щодня або за графіком. Клінінгова команда виконує прибирання робочих зон, санвузлів, місць загального користування, а також забезпечує чистоту з урахуванням інтенсивності використання приміщень і вимог до гігієни.
          </p>
        </div>
      </section>
      <section className="py-20 mb-20 bg-brand text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Потрібне прибирання вже сьогодні?
        </h2>

        <a
          href="/order"
          className="w-[450px] max-w-full inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition no-underline hover:text-brand"
        >
          Замовити клінінг у Камʼянському
        </a>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Клінінгові послуги у Кам'янському
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <SparklesIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Генеральне прибирання приміщень</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <SwatchIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Прибирання після ремонту</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WindowIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Миття вікон та скляних поверхонь</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Прибирання квартир, будинків та офісів</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Хімчистка меблів та килимів</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Прибирання після аварійних ситуацій</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Ситуації, в яких допоможе професійне прибирання
          </h2>

          <p className="text-gray-700 mb-4">
            Клінінг варто замовляти у таких випадках:
          </p>

          <ul className="marked-list">
            <li className="text-gray-700">
              після тривалої відсутності або перед заселенням у житло;
            </li>

            <li className="text-gray-700">
              після ремонту або будівельних робіт;
            </li>

            <li className="text-gray-700">
              перед святами або важливими подіями;
            </li>

            <li className="text-gray-700">
              при необхідності глибокого генерального прибирання;
            </li>

            <li className="text-gray-700">
              для регулярного підтримання чистоти в квартирі чи офісі.
            </li>
          </ul>

          <p className="text-gray-700">
            Клінінгові роботи спрямовані на підтримання гігієни, комфорту та приємної атмосфери у приміщенні з використанням професійних засобів та техніки.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Прибирання у старих та занедбаних приміщеннях Кам’янського
          </h2>

          <p className="text-gray-700 mb-4">
            У багатьох квартирах і будинках Кам’янського накопичується бруд, пил та застарілі забруднення, які складно усунути самостійно. Також у приміщеннях після ремонту або тривалого простою залишаються будівельний пил, плями фарби та інші забруднення.
          </p>

          <p className="text-gray-700 mb-4">
            Професійна клінінгова команда:
          </p>

          <ul className="marked-list">
            <li className="text-gray-700">
              оцінює стан приміщення та рівень забруднення;
            </li>

            <li className="text-gray-700">
              підбирає відповідні засоби та методи очищення;
            </li>

            <li className="text-gray-700">
              виконує глибоке прибирання всіх поверхонь;
            </li>

            <li className="text-gray-700">
              очищає важкодоступні місця, меблі та техніку.
            </li>
          </ul>

          <p className="text-gray-700">
            Своєчасне та професійне прибирання допомагає підтримувати чистоту, покращує мікроклімат у приміщенні та створює комфортні умови для життя або роботи.
          </p>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Вартість клінінгових послуг у Кам'янському
          </h2>

          <p className="text-gray-700">
            Ціни на клінінг формуються індивідуально та залежать від:
          </p>

          <ul className="marked-list">
            <li className="text-gray-700">
              типу об’єкта (квартира, будинок, офіс або комерційне приміщення);
            </li>

            <li className="text-gray-700">
              площі та обсягу прибирання;
            </li>

            <li className="text-gray-700">
              рівня забруднення та складності робіт;
            </li>

            <li className="text-gray-700">
              виду послуг (генеральне, регулярне, післяремонтне прибирання);
            </li>
          </ul>

          <p className="text-gray-700">
            Перед початком робіт фахівці оцінюють стан приміщення, погоджують перелік послуг та орієнтовну вартість. Такий підхід дозволяє прозоро сформувати ціну без прихованих витрат для клієнта.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3 items-center">
            
            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Чому обирають клінінгові послуги у Кам'янському
              </h2>

              <p className="text-gray-700 mb-4">
                Клінінгові фахівці у Кам'янському мають досвід роботи з різними типами приміщень. Виконуються всі види прибирання з дотриманням сучасних стандартів якості та гігієни. Використовується професійна техніка та безпечні миючі засоби.
              </p>

              <p className="text-gray-700 mb-16">
                Гарантується акуратність, своєчасне виконання робіт, прозора вартість та індивідуальний підхід до кожного клієнта. Надається консультація щодо оптимального формату прибирання для конкретного об’єкта.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Генеральне та регулярне прибирання приміщень
              </h2>

              <p className="text-gray-700 mb-4">
                Клінінг у Кам’янському включає як регулярне підтримуюче прибирання, так і глибоке генеральне очищення приміщень. Виконується миття підлог, очищення поверхонь, кухні, санвузлів, меблів та інших зон з урахуванням особливостей приміщення.
              </p>

              <p className="text-gray-700 mb-16">
                Правильний підбір засобів та технологій прибирання дозволяє досягти ідеальної чистоти без пошкодження поверхонь і забезпечити тривалий результат.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Генеральне прибирання та глибоке очищення
              </h2>

              <p className="text-gray-700">
                Генеральне прибирання — це комплексна послуга для повного очищення приміщення. Клінери:
              </p>

              <ul className="marked-list">
                <li className="text-gray-700">
                  проводять глибоке очищення всіх поверхонь;
                </li>

                <li className="text-gray-700">
                  видаляють пил, бруд і складні забруднення;
                </li>

                <li className="text-gray-700">
                  миють кухні, санвузли та важкодоступні місця;
                </li>

                <li className="text-gray-700">
                  очищають меблі, техніку та елементи інтер’єру.
                </li>
              </ul>

              <p className="text-gray-700">
                Це дозволяє повністю оновити стан приміщення та створити чисте й комфортне середовище для життя або роботи.
              </p>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <Image
                src="/clining-kamianske.webp"
                width="1024"
                height="1024"
                alt="Клінінг Кам'янське"
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
                Як відбувається підбір клінінгової команди у Кам'янському
              </h2>

              <ol className="numbered-list text-gray-700">
                <li>Ви залишаєте заявку на сайті.</li>
                <li>Ми підбираємо відповідну клінінгову команду під ваш запит.</li>
                <li>Фахівець зв'язується з вами для уточнення деталей та обсягу робіт.</li>
                <li>Команда виконує прибирання на об’єкті відповідно до домовленостей.</li>
                <li>Ви отримуєте чисте приміщення та рекомендації щодо підтримки чистоти.</li>
              </ol>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Переваги замовлення клінінгу у Кам’янському
              </h2>

              <p className="text-gray-700">
                Звертаючись до професійного клінінгу, ви отримуєте:
              </p>

              <ul className="marked-list text-gray-700">
                <li>використання професійних засобів та обладнання;</li>
                <li>якісне та ретельне прибирання;</li>
                <li>акуратність і увагу до деталей;</li>
                <li>індивідуальний підхід до кожного об’єкта;</li>
                <li>консультації щодо догляду за приміщенням.</li>
              </ul>

              <p className="text-gray-700">
                Клінінг виконується безпосередньо на об’єкті в Кам’янському у зручний для вас час, без зайвих затримок.
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
