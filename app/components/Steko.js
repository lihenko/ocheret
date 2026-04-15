export default function Steko() {
    return (
            <>
                <section className="pb-20">
                    <div className="container mx-auto px-4 xl:px-24">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">

                            {/* Текст */}
                            <div className="max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Вікна Steko — якість, перевірена часом
                            </h2>
                            <p className="text-gray-200 mb-6">
                                Обирайте металопластикові вікна Steko для квартири, будинку або офісу у Кам'янському. 
                                Надійний профіль, енергоефективність та доступна ціна. Ідеальне рішення для тепла і комфорту у вашому домі.
                            </p>

                            <ul className="mb-6 space-y-2 text-gray-300">
                                <li>✔️ Висока тепло- та шумоізоляція</li>
                                <li>✔️ Якісна фурнітура та довговічність</li>
                                <li>✔️ Оптимальне співвідношення ціни та якості</li>
                            </ul>

                            <Link
                                href="https://partners.steko.dp.ua/?partner_id=50dba673-6271-4329-a626-ec137b48a3de"
                                target="_blank"
                                rel="nofollow sponsored noopener noreferrer"
                                className="inline-flex items-center text-white no-underline justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold hover:bg-green-700 hover:text-white transition"
                            >
                                Замовити вікна Steko
                            </Link>
                            </div>

                            {/* Зображення */}
                            <div className="w-full md:w-1/2">
                            <Image
                                src="/steko-vikna.webp"
                                alt="Металопластикові вікна Steko"
                                width={600}
                                height={400}
                                className="rounded-xl object-cover"
                            />
                            </div>

                            {/* Декор */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </section>
            </>
    )
}