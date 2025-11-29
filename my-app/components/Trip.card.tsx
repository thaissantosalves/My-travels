export default function TripCard({ trip }: any) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900 transition-all border border-gray-100 dark:border-slate-700">
        <img src={trip.img} alt={trip.destino} className="h-40 w-full object-cover" />
  
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100">{trip.destino}</h3>
  
            <span
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                trip.status === "agendada"
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  : trip.status === "concluída"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                  : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
              }`}
            >
              {trip.status}
            </span>
          </div>
  
          <p className="text-gray-600 dark:text-slate-400 text-sm">Data: {trip.data}</p>
          <p className="mt-1 text-blue-700 dark:text-blue-400 font-semibold">Pago: {trip.preco}</p>
  
          <button className="mt-4 w-full py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 transition-all shadow-md dark:shadow-blue-900/30">
            Ver detalhes
          </button>
        </div>
      </div>
    );
  }
  