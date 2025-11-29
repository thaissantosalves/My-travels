"use client";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function TripModal({ open, onClose, trip }: any) {

  if (!open || !trip) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 w-96 p-6 rounded-xl shadow-xl relative border border-gray-100 dark:border-slate-700 transition-colors duration-300">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-slate-100 transition-colors duration-300"
        >
          <CloseOutlinedIcon />
        </button>

        <img src={trip.img} alt={trip.destino} className="w-full h-40 object-cover rounded-lg" />

        <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-slate-100">{trip.destino}</h2>

        <p className="text-gray-500 dark:text-slate-400 mt-1">Viagens selecionadas com preço especial, destinos imperdíveis e experiências que ficam pra vida inteira.</p>

        {trip.precoOriginal && (
          <p className="text-gray-500 dark:text-slate-500 line-through mt-1">{trip.precoOriginal}</p>
        )}
        <p className="text-blue-600 dark:text-blue-400 text-xl font-bold mt-1">{trip.preco || trip.precoPromo}</p>

        {trip.descricao && (
          <p className="text-gray-700 dark:text-slate-300 mt-4">{trip.descricao}</p>
        )}
      </div>
    </div>
  );
}
