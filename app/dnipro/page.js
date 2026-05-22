import Link from "next/link";
import Image from "next/image";
export const metadata = {

  title: "Майстри у Дніпрі — усі послуги | Очерет",
  description:
    "Каталог послуг майстрів у Дніпрі: електрик, сантехнік та інші спеціалісти. Оберіть потрібний вид робіт та замовляйте майстра.",

  alternates: {
    canonical: "/dnipro",
  },
   robots: {
    index: true,
    follow: true
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/dnipro",
    siteName: "Послуги майстрів Дніпро",
    title: "Каталог послуг майстрів у Дніпрі",
    description:
      "Електрик, сантехнік та інші послуги у Дніпрі. Зручний каталог майстрів з швидким переходом до потрібної послуги.",
    images: [
      {
        url: "/dnipro-services.webp",
        width: 1200,
        height: 630,
        alt: "Каталог послуг майстрів у Дніпрі",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Каталог послуг майстрів у Дніпрі",
    description:
      "Оберіть електрика, сантехніка або іншого майстра у Дніпрі. Зручний каталог послуг.",
    images: ["/dnipro-services.webp"],
  },
};

const services = [
  {
    title: "Електрик Дніпро",
    href: "/dnipro/electryk",
    image: "/electryk-dnipro-img.webp",
  },
  {
    title: "Сантехнік Дніпро",
    href: "/dnipro/santehnik",
    image: "/santehnik-dnipro-img.webp",
  },
  {
    title: "Хендімен Дніпро",
    href: "/dnipro/handyman",
    image: "/handyman-dnipro-img.webp",
  },
];

export default function DniproPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Послуги майстрів у Дніпрі
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Оберіть необхідну послугу в Дніпрі — досвідчені майстри, оперативний виїзд і зрозумілі ціни без прихованих платежів.
      </p>

      <section className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-xl overflow-hidden border hover:shadow-lg transition no-underline"
          >
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
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
            <strong>Послуги майстрів у Дніпрі</strong> включають найзатребуваніші роботи для квартир, приватних будинків і бізнес-приміщень. У каталозі зібрані надійні фахівці, які виконують електромонтаж і сантехнічні роботи відповідно до сучасних стандартів і вимог безпеки. Це простий і швидкий спосіб знайти потрібного майстра у вашому місті без зайвих клопотів.
          </p>
          <p className="text-gray-700 mb-4">
            Потрібен електрик у Дніпрі? Замовляйте монтаж або ремонт проводки, встановлення розеток, освітлення чи захисної автоматики. Сантехнік у Дніпрі допоможе усунути протікання та засмічення, замінити труби, встановити сантехніку або бойлер. Для кожної послуги передбачені окремі сторінки з детальним описом і переліком робіт.
          </p>
          <p className="text-gray-700">
            Каталог створений, щоб мешканці Дніпра могли швидко й зручно знайти спеціаліста без довгих пошуків і дзвінків. Обирайте потрібну послугу, переглядайте інформацію та замовляйте майстра у зручний час — якісно, надійно й без зайвих витрат часу.
          </p>
        </div>
      </section>
    </div>
  );
}