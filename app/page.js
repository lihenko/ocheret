export default function Home() {
  return (
    <main className="">
      <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home-hero-img.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Знайдіть <br></br> перевіреного майстра
            <span className="block text-green-600">
              для будь-яких робіт
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Електрика, сантехніка, ремонт квартир та інші роботи.
            Швидкий підбір майстра у вашому місті.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/order"
              className="btn inline-flex items-center justify-center rounded-lg
                         bg-brand px-6 py-3 text-lg font-semibold
                         text-white transition hover:bg-green-700
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Замовити майстра
            </a>

            <a
              href="/masters"
              className="btn inline-flex items-center justify-center rounded-lg
                         border border-gray-300 px-6 py-3 text-lg font-semibold
                         text-white transition hover:bg-gray-50 hover:text-black"
            >
              Стати майстром
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border px-4 py-2 text-sm text-gray-700">
              ⚡ Електрик
            </span>
            <span className="rounded-full border px-4 py-2 text-sm text-gray-700">
              🚿 Сантехнік
            </span>
            <span className="rounded-full border px-4 py-2 text-sm text-gray-700">
              🛠 Ремонт
            </span>
            <span className="rounded-full border px-4 py-2 text-sm text-gray-700">
              🎨 Малярні роботи
            </span>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}