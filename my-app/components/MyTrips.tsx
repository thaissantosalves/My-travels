"use client";

import { useState } from "react";
import TripsFilter from "@/components/TripsFilters";
import TripCard from "@/components/Trip.card";

const minhasViagens = [
  {
    destino: "Buenos Aires",
    data: "12/01/2025",
    status: "agendada",
    preco: "R$ 899",
    img: "/ba.jpg",
  },
  {
    destino: "Maceió",
    data: "02/11/2024",
    status: "concluída",
    preco: "R$ 749",
    img: "/maceio.jpg",
  },
  {
    destino: "Lisboa",
    data: "07/03/2026",
    status: "cancelada",
    preco: "R$ 3.200",
    img: "/lisboa.jpg",
  },
];

export default function MyTrips() {
  const [filter, setFilter] = useState({
    search: "",
    status: "",
    order: "recentes",
  });

  const viagensFiltradas = minhasViagens
    .filter((v) =>
      v.destino.toLowerCase().includes(filter.search.toLowerCase())
    )
    .filter((v) =>
      filter.status ? v.status === filter.status : true
    )
    .sort((a, b) =>
      filter.order === "recentes"
        ? new Date(b.data).valueOf() - new Date(a.data).valueOf()
        : new Date(a.data).valueOf() - new Date(b.data).valueOf()
    );

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 transition-colors duration-300">Minhas viagens</h1>

      <TripsFilter filter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {viagensFiltradas.map((v) => (
          <TripCard key={v.destino} trip={v} />
        ))}
      </div>
    </main>
  );
}
