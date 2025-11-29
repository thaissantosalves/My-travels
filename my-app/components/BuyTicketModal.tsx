export default function BuyTicketModal({ open, onClose, flight }: any) {
    if (!open || !flight) return null;
  
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl border border-gray-100 dark:border-slate-700 transition-colors duration-300">
  
          <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-3">Confirmar compra</h2>
  
          <p className="text-gray-600 dark:text-slate-300 mb-1">✈ Companhia: <strong className="text-gray-800 dark:text-slate-100">{flight.company}</strong></p>
          <p className="text-gray-600 dark:text-slate-300 mb-1">🛫 De: <strong className="text-gray-800 dark:text-slate-100">{flight.from}</strong></p>
          <p className="text-gray-600 dark:text-slate-300 mb-1">🛬 Para: <strong className="text-gray-800 dark:text-slate-100">{flight.to}</strong></p>
          <p className="text-gray-600 dark:text-slate-300 mb-1">⏰ Horário: {flight.departure} → {flight.arrival}</p>
          <p className="text-gray-900 dark:text-slate-100 font-bold text-xl mt-3">Valor: {flight.price}</p>
  
          <button
            onClick={onClose}
            className="mt-5 w-full py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 transition-all shadow-md dark:shadow-blue-900/30"
          >
            Finalizar compra
          </button>
  
          <button
            onClick={onClose}
            className="mt-3 w-full py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 transition-colors duration-300"
          >
            Cancelar
          </button>
  
        </div>
      </div>
    );
  }
  