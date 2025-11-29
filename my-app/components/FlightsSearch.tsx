"use client";

export default function FlightsSearch({ filters, setFilters }: any) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md dark:shadow-slate-900/50 mb-10 grid grid-cols-1 md:grid-cols-5 gap-4 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
    
      <input
        type="text"
        placeholder="Origem"
        className="px-4 py-2 border border-gray-200 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 transition-colors duration-300"
        value={filters.from}
        onChange={(e) => setFilters({ ...filters, from: e.target.value })}
      />

      <input
        type="text"
        placeholder="Destino"
        className="px-4 py-2 border border-gray-200 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 transition-colors duration-300"
        value={filters.to}
        onChange={(e) => setFilters({ ...filters, to: e.target.value })}
      />

      <input
        type="date"
        className="px-4 py-2 border border-gray-200 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-slate-100 transition-colors duration-300"
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
      />

      <button className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold shadow-md dark:shadow-blue-900/30">
        Buscar
      </button>

    </div>
  );
}
