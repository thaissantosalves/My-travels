"use client";

import { useState } from "react";
import FlightsSearch from "@/components/FlightsSearch";
import FlightCard from "@/components/FlightCard";
import BuyTicketModal from "@/components/BuyTicketModal";

const listaVoos = [
  {
    company: "LATAM",
    from: "Rio de Janeiro",
    to: "São Paulo",
    departure: "08:30",
    arrival: "09:35",
    price: "R$ 299",
  },
  {
    company: "GOL",
    from: "São Paulo",
    to: "Recife",
    departure: "14:10",
    arrival: "17:50",
    price: "R$ 689",
  },
  {
    company: "Azul",
    from: "Brasília",
    to: "Porto Alegre",
    departure: "19:20",
    arrival: "22:10",
    price: "R$ 520",
  },
];

export default function ConsultarPassagens() {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "1",
  });

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  function handleBuy(flight: any) {
    setSelected(flight);
    setOpen(true);
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 transition-colors duration-300">Consultar passagens</h1>

      <FlightsSearch filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {listaVoos.map((f) => (
          <FlightCard key={`${f.company}-${f.from}`} flight={f} onBuy={handleBuy} />
        ))}
      </div>

      <BuyTicketModal open={open} onClose={() => setOpen(false)} flight={selected} />
    </main>
  );
}
