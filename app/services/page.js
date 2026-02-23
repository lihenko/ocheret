import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://example.com"),

  title: "Послуги майстрів у Дніпропетровській області — каталог спеціалістів",
  description:
    "Каталог послуг майстрів у Дніпропетровській області: електрик, сантехнік та інші спеціалісти. Оберіть потрібний вид робіт та замовляйте майстра.",

  alternates: {
    canonical: "/services",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/services",
    siteName: "Послуги майстрів Дніпропетровська область",
    title: "Каталог послуг майстрів у Дніпропетровській області",
    description:
      "Електрик, сантехнік та інші послуги. Зручний каталог майстрів з швидким переходом до потрібної послуги в будь-якому місті області.",
    images: [
      {
        url: "/services-catalog.png",
        width: 1200,
        height: 630,
        alt: "Каталог послуг майстрів у Дніпропетровській області",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Каталог послуг майстрів у Дніпропетровській області",
    description:
      "Оберіть електрика, сантехніка або іншого майстра у вашому місті Дніпропетровської області. Зручний каталог послуг.",
    images: ["/services-catalog.png"],
  },
};

const services = [
  {
    title: "Електрик",
    href: "/services/electryk",
    image: "/electryk-hero-img.png",
  },
  {
    title: "Сантехнік",
    href: "/services/santehnik",
    image: "/santehnik-hero-img.png",
  },

];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Послуги майстрів у Дніпропетровській області
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Оберіть потрібний вид робіт у вашому місті області. Перевірені спеціалісти, швидкий виїзд та прозорі ціни.
      </p>

      <section className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-xl overflow-hidden border hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold group-hover:text-primary transition">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <p className="text-gray-700 mb-4">
            <strong>Послуги майстрів у Дніпропетровській області</strong> охоплюють найпопулярніші види робіт для квартир, приватних будинків і комерційних приміщень. У каталозі ви знайдете перевірених спеціалістів, які виконують електромонтажні та сантехнічні роботи, ремонти, фарбування та інші послуги з урахуванням усіх норм безпеки та сучасних стандартів.
          </p>
          <p className="text-gray-700 mb-4">
            Якщо вам потрібен електрик, сантехнік або майстер з ремонту, ви можете швидко знайти його у каталозі, переглянути інформацію про досвід, послуги та контактні дані. Кожен напрямок має окрему сторінку з детальним описом робіт.
          </p>
          <p className="text-gray-700">
            Каталог послуг створений для того, щоб мешканці будь-якого міста Дніпропетровської області могли швидко знайти майстра без зайвих дзвінків і пошуків. Оберіть потрібний вид робіт, перегляньте інформацію та замовляйте спеціаліста у зручний для вас час — якісно, надійно та з прозорими умовами.
          </p>
        </div>
      </section>
    </main>
  );
}