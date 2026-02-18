import ToTopButton from "./ToTopButton";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Очерет
            </div>
            <p className="text-sm text-gray-400">
              Сервіс підбору майстрів для ремонту,
              електрики та сантехніки.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Навігація
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Головна</a></li>
              <li><a href="/services" className="hover:text-white">Послуги</a></li>
              <li><a href="/masters" className="hover:text-white">Майстрам</a></li>
              <li><a href="/contact" className="hover:text-white">Контакти</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Послуги
            </h3>
            <ul className="space-y-2">
              <li><a href="/kamianske/elektryk" className="hover:text-white">Електрик</a></li>
              <li><a href="/kamianske/santekhnik" className="hover:text-white">Сантехнік</a></li>
              <li><a href="/kamianske/remont" className="hover:text-white">Ремонт квартир</a></li>
              <li><a href="/services" className="hover:text-white">Усі послуги</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Контакти
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@ocheret.dp.ua" className="hover:text-white">info@ocheret.dp.ua</a></li>
              <li>Місто: Камʼянське</li>
              <li>Пн–Нд: 9:00 – 20:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} Очерет
          </div>

          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="/privacy-policy" className="hover:text-white">
              Політика конфіденційності
            </a>
            <a href="/terms" className="hover:text-white">
              Умови користування
            </a>
          </div>
        </div>
      </div>
      <ToTopButton></ToTopButton>
    </footer>
    
  );
}
