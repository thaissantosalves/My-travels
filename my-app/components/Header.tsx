export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-2xl shadow-black/30 rounded-b-2xl p-6 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="flex">
                <h1 className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400 select-none transition-colors duration-300">
                FlySafe Manager
                </h1>
            </div>
        </header>
    )
}