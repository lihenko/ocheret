export const metadata = {
  title: "Ремонт під ключ у Кам’янському | Очерет",
  description: "Професійні послуги ремонту квартир під ключ у Кам’янському.",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/remont-pid-kluch"
  }
};

export default function RemontPidKluchPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Ремонт під ключ у Кам’янському</h1>
      <p className="mb-4">
        Ми пропонуємо комплексний ремонт квартир та будинків під ключ у Кам’янському.
      </p>
      <ul className="list-disc ml-5">
        <li>Косметичний ремонт</li>
        <li>Капітальний ремонт</li>
        <li>Євроремонт під ключ</li>
        <li>Дизайн-проєкти квартир</li>
      </ul>
    </div>
  );
}
