import Link from "next/link";
import Image from "next/image";
import {
  WrenchIcon,
  CubeIcon,
  HomeIcon,
  Bars3Icon,
  CheckBadgeIcon,
  TruckIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Збірка меблів Кам'янське — професійна послуга",
  description: "Професійна збірка меблів у Кам'янському: шафи, кухні, ліжка, столи, стільці. Виклик майстра додому чи офіс.",
  keywords: [
    "збірка меблів Кам'янське",
    "майстер з меблів Кам'янське",
    "збірка кухні Кам'янське",
    "збірка шафи Кам'янське",
    "меблі на замовлення Кам'янське"
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: { canonical: "https://ocheret.dp.ua/kamianske/furniture" },
  openGraph: {
    title: "Збірка меблів Кам'янське — професійна послуга",
    description: "Професійна збірка меблів у Кам'янському: шафи, кухні, ліжка, столи, стільці. Виклик майстра додому чи офіс.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/furniture",
    type: "website",
    images: [
      { url: "/furniture-kamianske-img.png", width: 1536, height: 1024, alt: "Майстер збирає меблі" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Збірка меблів Кам'янське — професійна послуга",
    description: "Професійна збірка меблів у Кам'янському: шафи, кухні, ліжка, столи, стільці. Виклик майстра додому чи офіс.",
    images: ["/furniture-kamianske-img.png"],
  },
};

export default function FurnitureKamianskePage() {
  const faqs = [
    { q: "Які меблі ви збираєте?", a: "Ми збираємо шафи, кухні, ліжка, столи, стільці та інші меблі будь-якої складності." },
    { q: "Чи приїжджає майстер додому?", a: "Так, майстер виїжджає за адресою клієнта у Кам'янському, з повним набором інструментів." },
    { q: "Скільки часу займає збірка?", a: "Час залежить від типу меблів та їх кількості. Наприклад, шафа збирається від 1 до 3 годин." },
    { q: "Чи надаєте гарантію?", a: "Так, ми надаємо гарантію на збірку меблів та встановлення фурнітури." },
    { q: "Чи працюєте з меблями з IKEA або інших магазинів?", a: "Так, збираємо меблі будь-яких виробників та магазинів." },
    { q: "Чи можна замовити тільки часткову збірку?", a: "Так, можлива часткова збірка окремих елементів меблів." },
    { q: "Які додаткові послуги ви надаєте?", a: "Майстер може виконати вирівнювання, монтаж фурнітури, збірку меблів під ключ." },
    { q: "Чи працюєте у вихідні та святкові дні?", a: "Так, збірка меблів можлива у вихідні та святкові дні за домовленістю." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ocheret.dp.ua/kamianske/furniture#service",
        "name": "Збірка меблів у Кам'янському",
        "description": "Професійна збірка меблів у Кам'янському: шафи, кухні, ліжка, столи, стільці. Виїзд майстра додому чи офіс.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ocheret",
          "url": "https://ocheret.dp.ua",
          "areaServed": { "@type": "Place", "name": "Кам'янське" },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Кам'янське",
            "addressRegion": "Дніпропетровська область",
            "addressCountry": "UA"
          }
        },
        "areaServed": { "@type": "Place", "name": "Кам'янське" },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": { "@type": "Place", "name": "Виїзд майстра у Кам'янському" }
        },
        "url": "https://ocheret.dp.ua/kamianske/furniture"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ocheret.dp.ua/kamianske/furniture#faq",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/furniture-kamianske-img.png')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Збірка меблів у Кам'янському — швидко та професійно
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Збірка шаф, кухонь, ліжок, столів і стільців будь-якої складності. Майстер виїжджає додому або в офіс, працює акуратно та гарантує якість.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/order" className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white">
                Замовити майстра
              </a>
              <a href="/masters" className="btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-50 hover:text-black">
                Стати майстром
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">Коли потрібна збірка меблів у Кам'янському</h2>
          <p className="text-gray-700 mb-4">
            Збірка меблів потрібна після покупки нових меблів, при переїзді або для модернізації інтер'єру. Майстер оцінює комплект, підбирає інструменти та збирає меблі швидко та безпечно.
          </p>
          <p className="text-gray-700">
            Професійна збірка забезпечує довговічність меблів, правильне кріплення та зручність використання.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">Які роботи виконує майстер</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Збірка шаф, комодів, ліжок та кухонних модулів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CubeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Монтаж та підгонка корпусних меблів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Встановлення меблів у квартирі, будинку чи офісі</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <Bars3Icon className="w-8 h-8 text-brand shrink-0" />
              <span>Регулювання дверцят, шухляд та механізмів</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <CheckBadgeIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Перевірка правильності кріплення та стійкості конструкцій</span>
            </li>
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <TruckIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Виїзд майстра з усім інструментом до клієнта</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section className="pb-20">
        <div className="container mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">Вартість послуг збірки меблів</h2>
          <p className="text-gray-700">
            Ціна на збірку меблів залежить від типу меблів, складності, кількості деталей та виїзду майстра. Перед початком робіт майстер оцінює ситуацію та погоджує вартість.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-3 mb-20 bg-brand text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Потрібен майстер вже сьогодні?</h2>
        <a
          href="/order"
          className="btn inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition no-underline hover:text-brand"
        >
          Замовити майстра
        </a>
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