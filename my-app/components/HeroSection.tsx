import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[70vh] flex items-center justify-center text-center px-6">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 opacity-30 dark:opacity-40 rounded-2xl transition-all duration-300"></div>

            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl font-extrabold text-blue-700 dark:text-blue-400 drop-shadow-sm transition-colors duration-300">
                    Encontre a sua próxima aventura!
                </h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-slate-300 transition-colors duration-300">
                    Destinos incríveis, preços acessíveis e experiências inesquecíveis.
                </p>

                <Link href='/my-travels'>
                    <button className="mt-6 px-8 py-3 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 transition-all shadow-lg dark:shadow-blue-900/30">
                        Explorar destinos
                    </button>
                </Link>

            </div>
        </section>
    );
}
