"use client";

import { useState } from "react";
import TripModal from "./TripModal";

const ofertas = [
    { destino: "Buenos Aires", preco: "R$ 899", img: "/buenosaires.jpg" },
    { destino: "Maceió", preco: "R$ 749", img: "/maceio.jpg" },
    { destino: "Lisboa", preco: "R$ 3.200", img: "/lisboa.jpg" },
];

export default function DealsSection() {
    const [open, setOpen] = useState(false);
    const [tripSelected, setTripSelected] = useState<any>(null);

    function handleOpen(trip: any) {
        setTripSelected(trip);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setTripSelected(null);
    }

    return (
        <>
            <section className="px-6 py-12 bg-blue-50/40 dark:bg-slate-800/50 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 transition-colors duration-300">Ofertas da semana!</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {ofertas.map((o) => (
                        <div
                            key={o.destino}
                            className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-900/50 hover:shadow-xl dark:hover:shadow-slate-900 transition-all border border-gray-100 dark:border-slate-700"
                        >
                            <img src={o.img} alt={o.destino} className="h-48 w-full object-cover" />

                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100">{o.destino}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-1">Preço promocional: {o.preco}</p>

                                <button onClick={() => handleOpen(o)} className="mt-4 w-full py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 transition-all shadow-md dark:shadow-blue-900/30">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <TripModal 
                open={open} 
                onClose={handleClose} 
                trip={tripSelected}
            />
        </>
    );
}
