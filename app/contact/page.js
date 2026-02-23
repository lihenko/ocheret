import ContactForm from "./ContactForm";

export const metadata = {
  title: "Контакти — Очерет | Зв'яжіться з нами в Кам'янському",
  description:
    "Зв'яжіться з компанією Очерет для замовлення послуг або консультації. Контактна інформація та форма зворотного зв'язку.",
  keywords: [
    "Очерет",
    "контакти Кам'янське",
    "зв'язок",
    "форма зворотного зв'язку",
    "послуги Кам'янське"
  ],
  authors: [{ name: "Очерет", url: "https://ocheret.dp.ua" }],
  creator: "Очерет",
  openGraph: {
    title: "Контакти — Очерет",
    description:
      "Зв'яжіться з компанією Очерет для замовлення послуг або консультації. Контактна інформація та форма зворотного зв'язку.",
    url: "https://ocheret.dp.ua/contact",
    siteName: "Очерет",
    locale: "uk_UA",
    type: "website",
  },
  alternates: {
    canonical: "https://ocheret.dp.ua/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Контакти</h1>
      <p className="mb-6 text-lg">
        Зв'яжіться з нами для замовлення послуг або отримання консультації. Ми завжди раді відповісти на ваші питання та допомогти у вирішенні задач.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Наша контактна інформація</h2>
        <ul className="text-lg list-disc list-inside space-y-2">
          <li>Телефон: <a href="tel:+380501234567">+38 050 123 45 67</a></li>
          <li>Email: <a href="mailto:info@ocheret.dp.ua">hello@ocheret.dp.ua</a></li>
          <li>Адреса: Кам'янське, Україна</li>
        </ul>
      </section>
      <ContactForm />
    </main>
  );
}