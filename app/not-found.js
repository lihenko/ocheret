import Link from "next/link";

export const metadata = {
  title: "Сторінку не знайдено | ocheret.dp.ua",
  description: "Сторінка не існує або була переміщена. Поверніться на головну або замовте майстра."
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-xl text-center">
        {/* Код помилки */}
        <div className="text-8xl font-bold text-green-700 mb-4">404</div>

        {/* Заголовок */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Сторінку не знайдено
        </h1>

        {/* Опис */}
        <p className="text-gray-600 mb-8">
          Можливо, посилання застаріло або сторінку було видалено.
          Але майстри все ще працюють 😉
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            На головну
          </Link>

          <Link
            href="/order"
            className="btn inline-flex items-center justify-center text-lg px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
          >
            Замовити майстра
          </Link>
        </div>
      </div>
    </section>
  );
}