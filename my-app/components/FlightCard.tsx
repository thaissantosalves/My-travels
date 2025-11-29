export default function FlightCard({ flight, onBuy }: any) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md dark:shadow-slate-900/50 hover:shadow-xl dark:hover:shadow-slate-900 transition-all flex flex-col gap-3 border border-gray-100 dark:border-slate-700">
        
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">{flight.company}</h3>
          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{flight.price}</span>
        </div>
  
        <div className="flex justify-between text-gray-600 dark:text-slate-300">
          <p>🛫 {flight.from}</p>
          <p>🛬 {flight.to}</p>
        </div>
  
        <div className="flex justify-between text-sm text-gray-500 dark:text-slate-400 mb-2">
          <p>Saída: {flight.departure}</p>
          <p>Chegada: {flight.arrival}</p>
        </div>
  
        <button 
          onClick={() => onBuy(flight)}
          className="mt-auto w-full py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 active:scale-95 transition-all shadow-md dark:shadow-green-900/30"
        >
          Comprar
        </button>
      </div>
    );
  }
  