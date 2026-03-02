import Link from "next/link";

export const metadata = {

  title: "Послуги майстрів у Камʼянському — каталог спеціалістів",
  description:
    "Каталог послуг майстрів у Камʼянському: електрик, сантехнік та інші спеціалісти. Оберіть потрібний вид робіт та замовляйте майстра.",

  alternates: {
    canonical: "/kamianske",
  },
   robots: {
    index: true,
    follow: true
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/kamianske",
    siteName: "Послуги майстрів Камʼянське",
    title: "Каталог послуг майстрів у Камʼянському",
    description:
      "Електрик, сантехнік та інші послуги у Камʼянському. Зручний каталог майстрів з швидким переходом до потрібної послуги.",
    images: [
      {
        url: "/kamianske-services.png",
        width: 1200,
        height: 630,
        alt: "Каталог послуг майстрів у Камʼянському",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Каталог послуг майстрів у Камʼянському",
    description:
      "Оберіть електрика, сантехніка або іншого майстра у Камʼянському. Зручний каталог послуг.",
    images: ["/kamianske-services.png"],
  },
};

const services = [
  {
    title: "Електрик Камʼянське",
    href: "/kamianske/electryk",
    image: "/electryk-kamianske-img.png",
  },
  {
    title: "Сантехнік Камʼянське",
    href: "/kamianske/santehnik",
    image: "/santehnik-kamianske-img.png",
  },
  {
    title: "Ремонт квартир Камʼянське",
    href: "/kamianske/remont-kvartyr",
    image: "/remont-kvartyr-kamianske-img.png",
  },
  {
    title: "Утеплення фасадів Камʼянське",
    href: "/kamianske/uteplennia-fasadiv",
    image: "/uteplennia-fasadiv-kamianske-img.png",
  },
  {
    title: "Поклейка шпалер Камʼянське",
    href: "/kamianske/shpalery",
    image: "/pokleyka-shpaler-kamianske-img.png",
  },
  {
    title: "Збірка меблів Камʼянське",
    href: "/kamianske/zbirka-mebliv",
    image: "/furniture-kamianske-img.png",
  },
  // легко додавати нові
  // {
  //   title: "Майстер з ремонту Камʼянське",
  //   href: "/services/remont-kamianske",
  //   image: "/services/remont.jpg",
  // },
];

export default function KamianskePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Послуги майстрів у Камʼянському
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Оберіть потрібний вид робіт у Камʼянському. Перевірені спеціалісти,
        швидкий виїзд та прозорі ціни.
      </p>

      <section className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-xl overflow-hidden border hover:shadow-lg transition no-underline"
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
            <strong>Послуги майстрів у Камʼянському</strong> охоплюють найпопулярніші види робіт для квартир, приватних будинків і комерційних приміщень. У каталозі ви знайдете перевірених спеціалістів, які виконують електромонтажні та сантехнічні роботи з урахуванням усіх норм безпеки та сучасних стандартів. Це зручний спосіб швидко обрати потрібну послугу у вашому місті.
          </p>
          <p className="text-gray-700 mb-4">
            Якщо вам потрібен електрик у Камʼянському, ви можете замовити монтаж або ремонт електропроводки, встановлення розеток, освітлення чи автоматів захисту. Сантехнік у Камʼянському допоможе з усуненням протікань, засорів, заміною труб, встановленням сантехнічного обладнання та бойлерів. Кожен напрямок має окрему сторінку з детальним описом робіт.
          </p>
          <p className="text-gray-700">
            Каталог послуг створений для того, щоб мешканці Камʼянського могли швидко знайти майстра без зайвих дзвінків і пошуків. Оберіть потрібний вид робіт, перегляньте інформацію та замовляйте спеціаліста у зручний для вас час — якісно, надійно та з прозорими умовами.
          </p>
        </div>
      </section>
    </div>
  );
}