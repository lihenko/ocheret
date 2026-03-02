import Image from "next/image";
import {
  HomeModernIcon,
  SquaresPlusIcon,
  PaintBrushIcon,
  ArrowUpTrayIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/solid';

export const metadata = {
  title: "Утеплення фасадів Кам'янське — професійні фасадні роботи",
  description: "Послуги з утеплення фасадів у Кам'янському: пінопласт, мінеральна вата, декоративна штукатурка, висотні роботи. Якісне утеплення будинків та квартир під ключ.",
  keywords: [
    "утеплення фасадів Кам'янське",
    "утеплення будинку Кам'янське",
    "фасадні роботи Кам'янське",
    "утеплення пінопластом Кам'янське",
    "утеплення мінватою Кам'янське"
  ],
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: "Ocheret" }],
  publisher: "Ocheret",
  alternates: {
    canonical: "https://ocheret.dp.ua/kamianske/uteplennia-fasadiv",
  },
  openGraph: {
    title: "Утеплення фасадів Кам'янське — професійні фасадні роботи",
    description: "Професійне утеплення фасадів у Кам'янському: енергоефективність, економія на опаленні, гарантія якості. Виклик майстра для розрахунку вартості.",
    siteName: "Очерет — майстри на всі руки",
    url: "https://ocheret.dp.ua/kamianske/uteplennia-fasadiv",
    type: "website",
    images: [
      { url: "https://ocheret.dp.ua/uteplennia-fasadiv-kamianske-img.png", width: 1536, height: 1024, alt: "Утеплення фасаду будинку у Кам'янському" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Утеплення фасадів Кам'янське — професійні фасадні роботи",
    description: "Послуги з утеплення фасадів у Кам'янському: пінопласт, мінеральна вата, декоративна штукатурка. Якісні фасадні роботи під ключ.",
    images: ["https://ocheret.dp.ua/uteplennia-fasadiv-kamianske-img.png"],
  },
};
export default function UteplenniaFasadivKamianskePage() {
const faqs = [
  {
    q: "Скільки коштує утеплення фасаду у Кам'янському за м²?",
    a: "Вартість утеплення фасаду у Кам'янському за квадратний метр залежить від обраного матеріалу (пінопласт або мінеральна вата), товщини утеплювача, висоти будівлі та складності робіт. Точна ціна визначається після огляду об'єкта."
  },
  {
    q: "Яке утеплення фасаду краще: пінопласт чи мінеральна вата?",
    a: "Пінопласт частіше обирають через доступну ціну та хорошу теплоізоляцію. Мінеральна вата краще пропускає пару, має вищу звукоізоляцію та вогнестійкість. Вибір матеріалу для утеплення фасаду у Кам'янському залежить від типу будинку та бюджету."
  },
  {
    q: "Яка оптимальна товщина утеплювача для фасаду?",
    a: "Для кліматичних умов Кам'янського оптимальна товщина утеплення фасаду зазвичай становить 50–100 мм. Остаточний вибір залежить від матеріалу стін та вимог до енергоефективності."
  },
  {
    q: "Чи потрібно дозвіл на утеплення фасаду багатоповерхового будинку?",
    a: "Для утеплення фасаду квартири у багатоповерховому будинку у Кам'янському може знадобитися погодження з ОСББ або керуючою компанією, особливо якщо змінюється зовнішній вигляд будівлі."
  },
  {
    q: "Чи можна утеплювати фасад без риштувань?",
    a: "Так, утеплення фасадів у Кам'янському часто виконується з використанням промислового альпінізму, що дозволяє працювати без риштувань та зменшити вартість робіт."
  },
  {
    q: "Чи з'являється грибок після утеплення фасаду?",
    a: "За правильного монтажу утеплення фасаду та дотримання технології вентиляції ризик утворення грибка мінімальний. Важливо використовувати якісні матеріали та професійне виконання робіт."
  },
  {
    q: "Чи можна утеплити фасад старого будинку у Кам'янському?",
    a: "Так, утеплення фасаду старого будинку можливе після попередньої оцінки стану стін. Перед монтажем утеплювача проводиться підготовка поверхні та ремонт тріщин."
  },
  {
    q: "Чи впливає утеплення фасаду на вартість нерухомості?",
    a: "Так, утеплення фасаду підвищує енергоефективність будівлі, покращує зовнішній вигляд та може позитивно вплинути на ринкову вартість житла у Кам'янському."
  },
  {
    q: "Які роботи входять у комплексне утеплення фасаду?",
    a: "Комплексне утеплення фасаду включає підготовку поверхні, монтаж утеплювача, армування, нанесення декоративної штукатурки та фарбування."
  },
  {
    q: "Чи можна поєднати утеплення фасаду з оздобленням?",
    a: "Так, утеплення фасаду у Кам'янському часто поєднується з декоративною штукатуркою або фарбуванням, що дозволяє одночасно покращити теплоізоляцію та зовнішній вигляд будинку."
  },
  {
    q: "У яку пору року краще утеплювати фасад?",
    a: "Найкращий період для утеплення фасадів у Кам'янському — весна, літо та рання осінь, коли температура стабільна та немає підвищеної вологості."
  },
  {
    q: "Чи можна утеплити фасад частинами?",
    a: "Так, можливе поетапне утеплення фасаду — наприклад, окремих стін або поверхів. Це актуально для багатоквартирних будинків та обмеженого бюджету."
  },
  {
    q: "Скільки служить утеплення фасаду?",
    a: "За правильної технології монтажу утеплення фасаду служить у середньому 20–30 років без втрати теплоізоляційних властивостей."
  },
  {
    q: "Чи потрібен догляд за утепленим фасадом?",
    a: "Утеплений фасад не потребує складного догляду. Рекомендується періодично оглядати поверхню та за потреби виконувати косметичне оновлення."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ocheret.dp.ua/kamianske/uteplennia-fasadiv#service",
      "name": "Утеплення фасадів у Кам'янському",
      "description":
        "Професійні послуги з утеплення фасадів у Кам'янському: утеплення пінопластом та мінеральною ватою, фасадні роботи, декоративна штукатурка, утеплення квартир і будинків під ключ.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ocheret",
        "url": "https://ocheret.dp.ua",
        "areaServed": {
          "@type": "Place",
          "name": "Кам'янське"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Кам'янське",
          "addressRegion": "Дніпропетровська область",
          "addressCountry": "UA"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "Кам'янське"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceLocation": {
          "@type": "Place",
          "name": "Виїзд майстра для утеплення фасаду у Кам'янському"
        }
      },
      "url": "https://ocheret.dp.ua/kamianske/uteplennia-fasadiv"
    },

    {
      "@type": "FAQPage",
      "@id": "https://ocheret.dp.ua/kamianske/uteplennia-fasadiv#faq",
      "mainEntity": faqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    }
  ]
};


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section id="page-hero" className="relative flex items-center py-24 xl:py-36">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/uteplennia-fasadiv-kamianske-img.png')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 xl:px-24">
          <div className="max-w-3xl relative">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Утеплення фасадів Кам'янське — професійні фасадні роботи
            </h1>
            <p className="mt-6 text-base md:text-lg text-white">
              Професійні фасадні роботи з утеплення будинків та квартир у Кам'янському: пінопласт, мінеральна вата, декоративна штукатурка. Якісне утеплення під ключ.
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

      {/* ABOUT SERVICE */}
      <section className="py-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли потрібне утеплення фасаду у Кам'янському
          </h2>
          <p className="text-gray-700 mb-4">
            Утеплення фасаду у Кам'янському необхідне у випадках значних тепловтрат,
            появи сирості у приміщеннях, промерзання стін, високих витрат на опалення
            або застарілого зовнішнього вигляду будинку.
          </p>
          <p className="text-gray-700">
            Професійне утеплення фасадів дозволяє підвищити енергоефективність будівлі,
            покращити мікроклімат у квартирі чи будинку та продовжити термін служби
            стін завдяки захисту від вологи та перепадів температур.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Утеплення фасадів у Кам’янському для квартир, будинків і бізнесу
          </h2>
          <p className="text-gray-700 mb-4">
            Утеплення фасадів у Кам’янському актуальне як для житлових, так і для
            комерційних об’єктів. У квартирах найчастіше утеплюють зовнішні стіни
            для зменшення тепловтрат, усунення промерзання та появи конденсату.
            У багатоквартирних будинках утеплення фасаду дозволяє підвищити
            енергоефективність та комфорт проживання.
          </p>
          <p className="text-gray-700">
            Для приватних будинків утеплення фасаду допомагає значно знизити витрати
            на опалення та захистити стіни від вологи й температурних перепадів.
            Комерційні об’єкти — магазини, офіси, кафе — утеплюють фасади
            для створення комфортних умов, збереження тепла та покращення
            зовнішнього вигляду будівлі.
          </p>
        </div>
      </section>

      <section className="py-20 mb-20 bg-brand text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Потрібне утеплення фасаду вже сьогодні?
        </h2>
        <a
          href="/order"
          className="w-[450px] max-w-full inline-block bg-white text-brand
                    px-8 py-4 rounded-lg font-semibold
                    hover:bg-gray-100 transition no-underline hover:text-brand"
        >
          Замовити утеплення фасаду у Камʼянському
        </a>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-6">
            Роботи з утеплення фасадів у Кам’янському
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <HomeModernIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Утеплення фасадів квартир і багатоповерхових будинків</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <SquaresPlusIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Утеплення фасаду пінопластом та мінеральною ватою</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <PaintBrushIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Армування та декоративна штукатурка фасаду</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ArrowUpTrayIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Висотні фасадні роботи та промисловий альпінізм</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <ShieldCheckIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Захист фасаду від вологи, холоду та промерзання</span>
            </li>

            <li className="flex gap-4 p-5 border rounded-lg items-center">
              <WrenchScrewdriverIcon className="w-8 h-8 text-brand shrink-0" />
              <span>Комплексне утеплення фасаду під ключ</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Коли варто замовити утеплення фасаду у Кам’янському
          </h2>

          <p className="text-gray-700 mb-4">
            Утеплення фасаду рекомендується у таких випадках:
          </p>

          <ul className="marked-list">
            <li className="text-gray-700">
              стіни промерзають взимку або сильно нагріваються влітку;
            </li>

            <li className="text-gray-700">
              у квартирі з’являється волога, конденсат або грибок на стінах;
            </li>

            <li className="text-gray-700">
              витрати на опалення занадто високі;
            </li>

            <li className="text-gray-700">
              фасад будинку має тріщини або втратив охайний вигляд;
            </li>

            <li className="text-gray-700">
              планується оновлення або модернізація будівлі.
            </li>
          </ul>

          <p className="text-gray-700">
            Професійне утеплення фасадів у Кам’янському дозволяє зменшити тепловтрати,
            покращити мікроклімат у приміщенні та продовжити термін служби стін без
            необхідності капітального ремонту.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Утеплення старих будинків у Кам’янському
          </h2>

          <p className="text-gray-700 mb-4">
            Багато будинків у Кам’янському — панельні, цегляні та так звані
            «хрущовки» — мають низький рівень теплоізоляції. З часом шви
            розгерметизуються, стіни промерзають, а витрати на опалення
            значно зростають.
          </p>

          <p className="text-gray-700 mb-4">
            Професійне утеплення фасаду дозволяє:
          </p>

          <ul className="marked-list">
            <li className="text-gray-700">
              зменшити тепловтрати та рахунки за опалення;
            </li>

            <li className="text-gray-700">
              усунути промерзання та появу конденсату;
            </li>

            <li className="text-gray-700">
              покращити шумоізоляцію квартири;
            </li>

            <li className="text-gray-700">
              оновити зовнішній вигляд фасаду будинку.
            </li>
          </ul>

          <p className="text-gray-700">
            Утеплення панельних і цегляних будинків у Кам’янському виконується
            з урахуванням стану стін, поверховості та типу матеріалу,
            що гарантує довговічність і стабільний результат.
          </p>
        </div>
      </section>

      {/* PRICE INFO */}
      <section className="pb-20">
        <div className="container relative mx-auto px-4 xl:px-24">
          <h2 className="text-2xl font-semibold mb-4">
            Вартість утеплення фасаду у Кам’янському
          </h2>

          <p className="text-gray-700 mb-4">
            Ціни на утеплення фасаду формуються індивідуально та залежать від:
          </p>

          <ul className="marked-list">
            <li className="text-gray-700">
              типу будівлі (квартира, приватний будинок, багатоповерхівка, комерційний об’єкт);
            </li>

            <li className="text-gray-700">
              обраного матеріалу утеплювача (пінопласт, мінеральна вата, екструдований пінополістирол);
            </li>

            <li className="text-gray-700">
              товщини утеплювача та площі фасаду;
            </li>

            <li className="text-gray-700">
              складності робіт та стану стін (трішки тріщин, волога, нерівності).
            </li>
          </ul>

          <p className="text-gray-700">
            Перед початком робіт майстер оглядає фасад, узгоджує оптимальний матеріал,
            технологію утеплення та орієнтовну вартість. Такий підхід дозволяє уникнути
            непередбачених витрат і забезпечити довговічний результат.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3 items-center">
            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Чому обирають утеплення фасадів у Кам’янському
              </h2>

              <p className="text-gray-700 mb-4">
                Наші майстри мають багаторічний досвід у утепленні фасадів квартир, будинків і комерційних об’єктів. Виконуються роботи з дотриманням сучасних стандартів теплоізоляції та енергоефективності. Використовуються лише сертифіковані матеріали та професійний інструмент.
              </p>

              <p className="text-gray-700 mb-16">
                Гарантується якісний результат, прозора ціна та довговічність утеплення. Кожен клієнт отримує індивідуальну консультацію щодо оптимального матеріалу та технології, що дозволяє максимально підвищити комфорт у приміщенні та зменшити витрати на опалення.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Види робіт з утеплення фасаду
              </h2>

              <p className="text-gray-700 mb-4">
                Ми пропонуємо комплексні послуги утеплення фасаду, включно з підготовкою поверхні, монтажем утеплювача та декоративною обробкою. Підбирається матеріал з урахуванням типу стін, поверховості та кліматичних умов.
              </p>

              <p className="text-gray-700 mb-16">
                Роботи виконуються акуратно, із дотриманням технології та без шкоди для мешканців. Використання правильного утеплювача і методики монтажу гарантує тривалий ефект теплоізоляції.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Додаткові послуги та контроль якості
              </h2>

              <p className="text-gray-700">
                Професійне утеплення фасаду включає:
              </p>

              <ul className="marked-list">
                <li className="text-gray-700">підготовку стін та армування поверхні;</li>
                <li className="text-gray-700">монтаж пінопласту, мінеральної вати або екструдованого пінополістиролу;</li>
                <li className="text-gray-700">нанесення декоративної штукатурки або фарбування;</li>
                <li className="text-gray-700">контроль якості та перевірка герметичності швів.</li>
              </ul>

              <p className="text-gray-700">
                Такий підхід забезпечує ефективну теплоізоляцію, захист від вологи та тривалий термін служби фасаду.
              </p>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <Image src="/uteplennia-fasadiv-kamianske.png" width="1024" height="1024" alt="Утеплення фасаду Кам'янське"></Image>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="flex flex-wrap -mx-3">

            <div className="w-full px-3 md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Як замовити утеплення фасаду у Кам’янському
              </h2>
              <ol className="numbered-list text-gray-700">
                <li>Ви залишаєте заявку на сайті або телефонуєте нам.</li>
                <li>Ми підбираємо оптимальну команду майстрів для вашого об’єкта.</li>
                <li>Майстер зв’язується з вами для уточнення матеріалу, площі фасаду та узгодження вартості.</li>
                <li>Професійне утеплення фасаду виконується на об’єкті відповідно до домовленої технології.</li>
                <li>Після завершення робіт ви отримуєте рекомендації щодо догляду за фасадом та підтримки теплоізоляції.</li>
              </ol>
            </div>

            <div className="w-full px-3 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Переваги замовлення утеплення фасаду у Кам’янському
              </h2>
              <p className="text-gray-700 mb-4">
                Обираючи нашу компанію для утеплення фасаду, ви отримуєте:
              </p>
              <ul className="marked-list text-gray-700">
                <li>використання сертифікованих матеріалів для тривалого ефекту;</li>
                <li>дотримання технології монтажу та норм безпеки;</li>
                <li>акуратне виконання робіт без пошкоджень фасаду;</li>
                <li>гарантію на утеплення та декоративне покриття;</li>
                <li>консультації щодо енергозбереження та догляду за фасадом.</li>
              </ul>
              <p className="text-gray-700">
                Роботи виконуються безпосередньо нашими майстрами у Кам’янському, без посередників і непередбачених затримок.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="pb-40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center"> Питання та відповіді </h2>
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
