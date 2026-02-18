import Link from "next/link";

export const metadata = {
  title: "Електрик у Кам’янському — виклик електрика з виїздом",
  description:
    "Електрик у Кам’янському: заміна проводки, розетки, освітлення, електрощитки, аварійні роботи. Швидкий виїзд майстра по місту.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/electryk",
  },
};

export default function ElectrikKamianskePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* H1 */}
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Електрик у Кам’янському
        </h1>
        <p className="text-lg text-gray-600">
          Професійні послуги електрика у Кам’янському з виїздом до квартири,
          приватного будинку або комерційного приміщення. Працюємо швидко,
          безпечно та з дотриманням усіх норм.
        </p>
      </section>

      {/* LOCAL INTRO */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Послуги електрика у Кам’янському
        </h2>
        <p className="text-gray-700 mb-4">
          Якщо вам потрібен електрик у Кам’янському, важливо звернутися до
          кваліфікованого спеціаліста. Ми виконуємо електромонтажні роботи
          будь-якої складності — від дрібного ремонту до повної заміни
          електропроводки.
        </p>
        <p className="text-gray-700">
          Майстер виїжджає по всіх районах Кам’янського, попередньо оцінює
          обсяг робіт та узгоджує вартість. Це гарантує прозорість ціни та
          якісний результат.
        </p>
      </section>

      {/* SERVICES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Які роботи виконує електрик
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          <li className="p-4 border rounded-lg">
            Повна та часткова заміна електропроводки
          </li>
          <li className="p-4 border rounded-lg">
            Встановлення розеток і вимикачів
          </li>
          <li className="p-4 border rounded-lg">
            Монтаж люстр, світильників та LED-освітлення
          </li>
          <li className="p-4 border rounded-lg">
            Встановлення електрощитів, автоматів, УЗО
          </li>
          <li className="p-4 border rounded-lg">
            Підключення побутової техніки
          </li>
          <li className="p-4 border rounded-lg">
            Аварійний виклик електрика
          </li>
        </ul>
      </section>

      {/* PRICE */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Вартість послуг електрика у Кам’янському
        </h2>
        <p className="text-gray-700">
          Ціна залежить від складності робіт, стану електромережі та обсягу
          завдання. Перед початком робіт електрик оцінює ситуацію на об’єкті
          та погоджує вартість із клієнтом.
        </p>
      </section>

      {/* LOCAL TRUST */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">
          Чому обирають нас
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Швидкий виїзд електрика по Кам’янському</li>
          <li>Досвід роботи з квартирами та приватними будинками</li>
          <li>Дотримання норм безпеки</li>
          <li>Прозора вартість без прихованих платежів</li>
          <li>Гарантія на виконані роботи</li>
        </ul>
      </section>

      {/* INTERNAL LINK */}
      <section className="mb-12">
        <p className="text-gray-700">
          Детальніше про всі електромонтажні роботи читайте на сторінці{" "}
          <Link
            href="/services/electryk"
            className="text-brand underline"
          >
            послуг електрика
          </Link>.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Питання та відповіді
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Чи можна терміново викликати електрика у Кам’янському?
            </h3>
            <p className="text-gray-700">
              Так, можливий терміновий виїзд електрика по місту.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Чи надається гарантія на роботи?
            </h3>
            <p className="text-gray-700">
              Так, на всі виконані електромонтажні роботи надається гарантія.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              У яких районах Кам’янського ви працюєте?
            </h3>
            <p className="text-gray-700">
              Ми працюємо по всіх районах Кам’янського без винятку.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
