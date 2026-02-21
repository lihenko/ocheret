import Link from "next/link";
import Image from "next/image";
import {
  BoltIcon,
  WrenchIcon,
  HomeIcon,
  CubeIcon,
  LightBulbIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Електрик Кам'янське — професійні електромонтажні роботи",
  description: "Послуги електрика у Кам'янському: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика на місці.",
  keywords: [
    "електрик Кам'янське",
    "електромонтаж Кам'янське",
    "виклик електрика",
    "електропроводка Кам'янське",
    "розетки освітлення щитки"
  ],
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/electryk",
  },
  openGraph: {
    title: "Електрик Кам'янське — професійні електромонтажні роботи",
    description: "Послуги електрика у Кам'янському: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика на місці.",
    url: "https://ocheret.dp.ua/kamianske/electryk",
    type: "website",
    images: [
      { url: "https://ocheret.dp.ua/electryk-kamianske-img.png", width: 1536, height: 1024, alt: "Електрик монтує ПЗВ" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Електрик Кам'янське — професійні електромонтажні роботи",
    description: "Послуги електрика у Кам'янському: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика на місці.",
    images: ["https://ocheret.dp.ua/electryk-kamianske-img.png"],
  },
};

export default function ElectrikKamianskePage() {
  const faqs = [
  {
    q: "Чи можна викликати електрика терміново у Кам'янському?",
    a: "Так, можливий терміновий виїзд електрика у Кам'янському при аварійних ситуаціях, таких як відсутність світла, коротке замикання або спрацювання автоматики."
  },
  {
    q: "Скільки часу займає виїзд електрика по Кам'янському?",
    a: "Час виїзду залежить від району міста та завантаженості майстра. У більшості випадків електрик може прибути протягом короткого часу після підтвердження заявки."
  },
  {
    q: "Чи надається гарантія на електромонтажні роботи?",
    a: "Так, на всі електромонтажні роботи у Кам'янському надається гарантія за умови дотримання рекомендацій з експлуатації."
  },
  {
    q: "Чи працює електрик з квартирами, будинками та бізнесом?",
    a: "Електрик виконує роботи у квартирах, приватних будинках, офісах, магазинах та інших комерційних приміщеннях у Кам'янському."
  },
  {
    q: "Чи можна замінити лише частину електропроводки?",
    a: "Так, у деяких випадках можлива часткова заміна електропроводки. Електрик оцінює стан мережі та рекомендує безпечне рішення."
  },
  {
    q: "Чи безпечно користуватися старою алюмінієвою проводкою?",
    a: "Стара алюмінієва проводка часто не розрахована на сучасні навантаження. Рекомендується перевірка електрика та, за потреби, заміна для підвищення безпеки."
  },
  {
    q: "Які захисні пристрої встановлює електрик?",
    a: "Електрик встановлює автоматичні вимикачі, пристрої захисного вимкнення (ПЗВ) та диференційні автомати відповідно до норм електробезпеки."
  },
  {
    q: "Від чого залежить вартість послуг електрика у Кам'янському?",
    a: "Вартість залежить від обсягу робіт, складності завдання, стану електромережі та терміновості виконання."
  },
  {
    q: "Чи працює електрик у вихідні та святкові дні?",
    a: "Так, можливе виконання електромонтажних робіт у вихідні та святкові дні за попередньою домовленістю."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/electryk#service",
      "name": "Послуги електрика у Кам'янському",
      "description":
        "Професійні електромонтажні роботи для дому та бізнесу у Кам'янському: електропроводка, розетки, освітлення, електрощити, аварійні роботи.",
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
      "url": "https://ocheret.dp.ua/kamianske/electryk"
    },

    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/electryk#faq",
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/electryk-kamianske-img.png')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Електрик Кам'янське — професійні електромонтажні роботи
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Професійні електромонтажні роботи для квартир, будинків, офісів та комерційних приміщень у Кам'янському. Надійно, безпечно та з дотриманням усіх норм.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Замовити майстра
              </a>
              <a href="/masters" className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black">
                Стати майстром
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SERVICE */}
      <section className="py-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4"> Коли потрібні послуги електрика у Кам'янському </h2>
          <p className="text-gray-700 mb-4">
            Послуги електрика необхідні у випадках монтажу або заміни електропроводки, встановлення розеток і вимикачів, підключення освітлення, модернізації електромережі чи усунення аварійних ситуацій.
          </p>
          <p className="text-gray-700">
            Кваліфікований електрик оцінює стан мережі, підбирає оптимальні рішення та гарантує безпечну експлуатацію електрообладнання.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">Електрик у Кам’янському для квартир, будинків і бізнесу</h2>
          <p className="text-gray-700 mb-4">
            Послуги електрика у Кам’янському актуальні як для планових робіт, так і для аварійних ситуацій. У квартирах найчастіше виникає потреба у заміні старої електропроводки, встановленні додаткових розеток, підключенні побутової техніки або модернізації освітлення. У приватних будинках електрик виконує монтаж внутрішніх і зовнішніх електромереж, підключення електрокотлів, насосів, стабілізаторів напруги та генераторів.
          </p>
          <p className="text-gray-700">
            Для комерційних об’єктів — магазинів, офісів, кафе — важливо забезпечити стабільну та безпечну роботу електромережі з урахуванням навантажень. Електрик у Кам’янському проводить розрахунок потужності, встановлює автомати захисту, ПЗВ (УЗО) та виконує підключення обладнання відповідно до норм безпеки.
          </p>
        </div>
      </section>
      <section className="py-20 mb-20 bg-brand text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Потрібен майстер вже сьогодні?
        </h2>
        <a
          href="/order"
          className="w-[450px] max-w-full inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition"
        >
          Замовити електрика в Камʼянському
        </a>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6"> Роботи, які виконує електрик у Кам'янському </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center"><BoltIcon className="w-8 h-8 text-brand shrink-0" /><span>Монтаж та заміна електропроводки</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><WrenchIcon className="w-8 h-8 text-brand shrink-0" /><span>Встановлення розеток і вимикачів</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><LightBulbIcon className="w-8 h-8 text-brand shrink-0" /><span>Підключення люстр, світильників, LED-освітлення</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><CubeIcon className="w-8 h-8 text-brand shrink-0" /><span>Монтаж електрощитів, автоматів та ПЗВ</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><HomeIcon className="w-8 h-8 text-brand shrink-0" /><span>Підключення побутової техніки</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" /><span>Усунення несправностей та аварійні роботи</span></li>
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">Коли терміново потрібен електрик у Кам’янському</h2>
          <p className="text-gray-700 mb-4">
            Негайний виклик електрика необхідний у таких ситуаціях:
          </p>
          <ul className="marked-list">
              <li className="text-gray-700">вибиває автомат або постійно спрацьовує захист;</li>

              <li className="text-gray-700">іскрить розетка або вимикач;</li>

              <li className="text-gray-700">з’явився запах гару від проводки;</li>

              <li className="text-gray-700">зникло світло в частині квартири чи будинку;</li>

              <li className="text-gray-700">нагріваються дроти або електрощит.</li>
          </ul>
          <p className="text-gray-700">
            Аварійні роботи виконуються з дотриманням правил безпеки та спрямовані на швидке усунення несправності без ризику для мешканців.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">Електропроводка у старих будинках Кам’янського</h2>
          <p className="text-gray-700 mb-4">
            У багатьох будинках Кам’янського досі використовується стара алюмінієва проводка, яка не розрахована на сучасні навантаження. Велика кількість побутової техніки, бойлери, кондиціонери та електроплити створюють ризик перегріву проводів і коротких замикань.
          </p>
          <p className="text-gray-700 mb-4">
            Професійний електрик:
          </p>
          <ul className="marked-list">
              <li className="text-gray-700">перевіряє стан кабелів та з’єднань;</li>

              <li className="text-gray-700">визначає критичні ділянки;</li>

              <li className="text-gray-700">рекомендує часткову або повну заміну проводки;</li>

              <li className="text-gray-700">встановлює сучасні автомати та захисні пристрої.</li>

          </ul>
          <p className="text-gray-700">
            Своєчасна заміна електропроводки знижує ризик пожежі та забезпечує стабільну роботу електроприладів у квартирі або будинку.
          </p>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4"> Вартість послуг електрика у Кам'янському </h2>
          <p className="text-gray-700">Ціни на послуги електрика формуються індивідуально та залежать від:</p>
          <ul className="marked-list">
            <li className="text-gray-700">типу об’єкта (квартира, будинок, комерційне приміщення);</li>

            <li className="text-gray-700">складності та обсягу робіт;</li>

            <li className="text-gray-700">стану електромережі;</li>

            <li className="text-gray-700">терміновості виїзду.</li>
          </ul>
          <p className="text-gray-700">
           Перед початком робіт електрик оцінює ситуацію, погоджує перелік послуг та орієнтовну вартість. Такий підхід виключає несподівані витрати для клієнта.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3 items-center">
            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Чому обирають послуги електрика у Кам'янському</h2>
              <p className="text-gray-700 mb-4">
                Електрики у Кам'янському мають багаторічний досвід роботи. Виконуються всі види електромонтажних робіт із дотриманням сучасних стандартів безпеки. Майстри оснащені професійним інструментом і використовують лише якісні матеріали.
              </p>
              <p className="text-gray-700 mb-16">
                Гарантується швидкий виїзд на об'єкт, прозора ціна та гарантія на виконані роботи. Кожен клієнт отримує індивідуальний підхід та консультацію щодо оптимальних рішень для електропостачання.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Монтаж розеток, вимикачів та освітлення</h2>
              <p className="text-gray-700 mb-4">
                Електрик у Кам’янському виконує встановлення розеток і вимикачів у зручних та безпечних місцях з урахуванням навантаження та призначення приміщення. Проводиться монтаж люстр, точкових світильників, LED-стрічок, підсвітки кухні та санвузла.
              </p>
              <p className="text-gray-700 mb-16">
                Правильний підбір кабелю, автоматів і способу монтажу гарантує довготривалу та безпечну роботу освітлення без перевантажень.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Монтаж електрощитів та захисної автоматики</h2>
              <p className="text-gray-700">
                Електрощит — ключовий елемент безпеки всієї електромережі. Кваліфікований електрик:
              </p>
              <ul className="marked-list">
                <li className="text-gray-700">збирає та монтує електрощити;</li>

                <li className="text-gray-700">встановлює автомати, ПЗВ (УЗО), дифавтомати;</li>

                <li className="text-gray-700">підписує лінії для зручності обслуговування;</li>

                <li className="text-gray-700">перевіряє коректність роботи захисту.</li>
              </ul>
              <p className="text-gray-700">
                Це дозволяє локалізувати аварії та захистити техніку від перепадів напруги.
              </p>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <Image src="/electryk-kamianske.png" width="1024" height="1024" alt="Електрик Кам'янське"></Image>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Як працює підбір електрика у Кам'янському</h2>
              <ol className="numbered-list text-gray-700">
                <li>Ви залишаєте заявку на сайті.</li>
                <li>Ми підбираємо відповідного електрика за вашим запитом.</li>
                <li>Майстер зв'язується з вами для уточнення деталей та погодження вартості робіт.</li>
                <li>Електрик виконує роботи на об'єкті відповідно до домовленостей.</li>
                <li>Ви отримуєте рекомендації від майстра щодо безпечної експлуатації електромережі та обладнання.</li>
              </ol>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Переваги виклику електрика у Кам’янському</h2>
                <p className="text-gray-700">
                  Звертаючись до професійного електрика, ви отримуєте:
                </p>
                <ul className="marked-list text-gray-700">
                  <li>дотримання норм електробезпеки;</li>
                  <li>використання якісних матеріалів;</li>
                  <li>акуратне виконання робіт;</li>
                  <li>гарантію на виконані послуги;</li>
                  <li>консультації щодо подальшої експлуатації електромережі.</li>
                </ul>
                <p className="text-gray-700">
                  Електрик працює безпосередньо на об’єкті в Кам’янському, без посередників і затримок.
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
