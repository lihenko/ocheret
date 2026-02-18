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
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/electryk",
  },
  openGraph: {
    title: "Електрик Кам'янське — професійні електромонтажні роботи",
    description: "Послуги електрика у Кам'янському: електропроводка, розетки, освітлення, щитки, аварійні роботи. Виклик професійного електрика на місці.",
    url: "https://ocheret.dp.ua/kamianske/electryk",
    type: "website",
    images: [
      { url: "https://ocheret.dp.ua/electryk-kamianske-img.png", width: 1536, height: 1024, alt: "Електрик монтує УЗО" }
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
    { q: "Чи можна викликати електрика терміново?", a: "Так, можливий терміновий виїзд у Кам'янському у разі аварійних ситуацій." },
    { q: "Чи надається гарантія на роботи?", a: "Так, на всі виконані роботи у Кам'янському надається гарантія." },
    { q: "Чи працюєте ви з комерційними об’єктами?", a: "Так, електрик виконує роботи як для приватних, так і для комерційних приміщень у Кам'янському." },
  ];

  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/electryk#service",
      "name": "Послуги електрика у Кам'янському",
      "description": "Професійні електромонтажні роботи для дому та бізнесу у Кам'янському: електропроводка, розетки, освітлення, електрощити, аварійні роботи.",
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
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Чи можна викликати електрика терміново?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Так, можливий терміновий виїзд у Кам'янському у разі аварійних ситуацій."
          }
        },
        {
          "@type": "Question",
          "name": "Чи надається гарантія на роботи?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Так, на всі виконані роботи у Кам'янському надається гарантія."
          }
        },
        {
          "@type": "Question",
          "name": "Чи працюєте ви з комерційними об’єктами?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Так, електрик виконує роботи як для приватних, так і для комерційних приміщень у Кам'янському."
          }
        }
      ]
    }
  ]
};


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-16 xl:py-24">
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

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6"> Роботи, які виконує електрик у Кам'янському </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center"><BoltIcon className="w-8 h-8 text-brand shrink-0" /><span>Монтаж та заміна електропроводки</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><WrenchIcon className="w-8 h-8 text-brand shrink-0" /><span>Встановлення розеток і вимикачів</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><LightBulbIcon className="w-8 h-8 text-brand shrink-0" /><span>Підключення люстр, світильників, LED-освітлення</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><CubeIcon className="w-8 h-8 text-brand shrink-0" /><span>Монтаж електрощитів, автоматів та УЗО</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><HomeIcon className="w-8 h-8 text-brand shrink-0" /><span>Підключення побутової техніки</span></li>
            <li className="flex gap-4 p-5 border rounded-lg items-center"><ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" /><span>Усунення несправностей та аварійні роботи</span></li>
          </ul>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4"> Вартість послуг електрика у Кам'янському </h2>
          <p className="text-gray-700">
            Ціна на послуги електрика залежить від складності робіт, обсягу завдання та стану електромережі. Майстер оцінює ситуацію та погоджує вартість із клієнтом.
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
              <p className="text-gray-700">
                Гарантується швидкий виїзд на об'єкт, прозора ціна та гарантія на виконані роботи. Кожен клієнт отримує індивідуальний підхід та консультацію щодо оптимальних рішень для електропостачання.
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
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Ви залишаєте заявку на сайті.</li>
                <li>Ми підбираємо відповідного електрика за вашим запитом.</li>
                <li>Майстер зв'язується з вами для уточнення деталей та погодження вартості робіт.</li>
                <li>Електрик виконує роботи на об'єкті відповідно до домовленостей.</li>
                <li>Ви отримуєте рекомендації від майстра щодо безпечної експлуатації електромережі та обладнання.</li>
              </ol>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Переваги послуг електрика у Кам'янському</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Швидкий виїзд на об'єкт</li>
                  <li>Професійне обладнання та матеріали</li>
                  <li>Гарантія на виконані роботи</li>
                  <li>Досвідчені майстри</li>
                  <li>Індивідуальний підхід до кожного клієнта</li>
                  <li>Консультації щодо економії електроенергії та безпеки</li>
                </ul>
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
