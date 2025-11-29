"use client";

export default function TripsFilter({ filter, setFilter }: any) {
  return (
    <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row gap-6">
        
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
            Buscar destino
          </label>
          <input
            type="text"
            placeholder="Digite o nome do destino..."
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg outline-none 
                     focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30
                     transition-all duration-200 bg-gray-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600
                     placeholder:text-gray-400 dark:placeholder:text-slate-500 text-gray-700 dark:text-slate-100"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </div>

        <div className="lg:w-64">
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
            Status da viagem
          </label>
          <select
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg outline-none 
                     focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30
                     transition-all duration-200 bg-gray-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600
                     text-gray-700 dark:text-slate-100 cursor-pointer"
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="">Todos os status</option>
            <option value="agendada">Agendada</option>
            <option value="concluída">Concluída</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        <div className="lg:w-64">
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
            Ordenar por
          </label>
          <select
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg outline-none 
                     focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30
                     transition-all duration-200 bg-gray-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600
                     text-gray-700 dark:text-slate-100 cursor-pointer"
            value={filter.order}
            onChange={(e) => setFilter({ ...filter, order: e.target.value })}
          >
            <option value="recentes">Mais recentes</option>
            <option value="antigas">Mais antigas</option>
          </select>
        </div>

      </div>
    </div>
  );
}
