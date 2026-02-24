import Link from "next/link";
import {
  PaintBrushIcon,
  WrenchIcon,
  HomeIcon,
  CubeIcon,
  LightBulbIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Малярні роботи — професійне фарбування квартир та будинків",
  description:
    "Професійні малярні роботи для квартир, будинків та комерційних приміщень: фарбування стін, стель, поклейка шпалер, декоративні ефекти. Замовлення майстра маляра.",
  alternates: {
    canonical: "https://ocheret.dp.ua/services/malyar",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Малярні роботи — професійне фарбування квартир та будинків",
    description:
      "Професійні малярні роботи для квартир, будинків та комерційних приміщень: фарбування стін, стель, поклейка шпалер, декоративні ефекти. Замовлення майстра маляра.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/services/malyar",
    type: "website",
    images: [
      {
        url: "https://ocheret.dp.ua/malyar-hero-img.png",
        width: 1536,
        height: 1024,
        alt: "Маляр фарбує стіни у квартирі"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Малярні роботи — професійне фарбування квартир та будинків",
    description:
      "Професійні малярні роботи для квартир, будинків та комерційних приміщень: фарбування стін, стель, поклейка шпалер, декоративні ефекти. Замовлення майстра маляра.",
    images: ["https://ocheret.dp.ua/malyar-hero-img.png"],
  },
};

export default function MalyarServicePage() {
  const faqs = [
    {
      q: "Чи можна замовити малярні роботи терміново?",
      a: "Так, можливий терміновий виїзд майстра для фарбування або усунення дефектів у приміщенні.",
    },
    {
      q: "Чи надається гарантія на малярні роботи?",
      a: "Так, на всі виконані малярні роботи надається гарантія, включаючи покриття та якість фарбування.",
    },
    {
      q: "Чи працюєте з комерційними об’єктами?",
      a: "Так, ми виконуємо малярні роботи для квартир, будинків, офісів, магазинів та інших комерційних приміщень.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/services/malyar#service",
        "name": "Малярні роботи",
        "description":
          "Професійні малярні роботи для квартир, будинків та комерційних приміщень: фарбування стін і стель, декоративні ефекти, шпаклювання, поклейка шпалер.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Дніпропетровська область"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "Україна"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Виїзд до клієнта"
          }
        },
        "url": "https://ocheret.dp.ua/services/malyar"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/services/malyar#faq",
        "mainEntity": faqs.map((item) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: "url('/malyar-hero-img.png')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Професійні малярні роботи — фарбування квартир та будинків
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Фарбування стін і стель, декоративні ефекти, шпаклювання, поклейка шпалер — швидко та якісно для квартир, будинків та комерційних приміщень.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 text-white">
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
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібні малярні роботи
          </h2>
          <p className="text-gray-700 mb-4">
            Малярні роботи актуальні при ремонті квартир, будинків, офісів: фарбування стін, стель, нанесення декоративних ефектів, шпаклювання поверхонь та поклейка шпалер.
          </p>
          <p className="text-gray-700">
            Кваліфікований майстер підбирає фарбу, матеріали та технології для досягнення якісного та довговічного результату.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">Роботи, які виконує маляр</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <PaintBrushIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Фарбування стін та стель</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Шпаклювання та підготовка поверхні</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <LightBulbIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Нанесення декоративних ефектів та фактур</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CubeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Поклейка шпалер та вінілових панелей</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Підготовка приміщення та захист меблів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ExclamationTriangleIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Усунення дефектів та фінішне вирівнювання поверхні</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">Вартість малярних робіт</h2>
          <p className="text-gray-700">
            Ціна на малярні роботи залежить від площі поверхні, типу фарби, складності роботи та стану поверхні. Майстер завжди погоджує вартість перед початком робіт.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">Питання та відповіді</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group rounded-lg border p-6 open:shadow-sm">
                <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-green-600 transition group-open:rotate-180">▼</span>
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