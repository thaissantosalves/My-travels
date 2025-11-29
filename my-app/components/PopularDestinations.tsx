const destinos = [
    { nome: "Rio de Janeiro", img: "/riodejaneiro.jpg" },
    { nome: "Gramado", img: "/gramado.jpg" },   
    { nome: "Santiago", img: "/santiago.jpg" },
  ];
  
  export default function PopularDestinations() {
    return (
      <section className="px-6 py-12 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 transition-colors duration-300">Destinos populares</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {destinos.map((d) => (
            <div
              key={d.nome}
              className="rounded-xl overflow-hidden shadow-lg dark:shadow-slate-900/50 hover:shadow-xl dark:hover:shadow-slate-900 transition-all cursor-pointer bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700"
            >
              <img src={d.img} alt={d.nome} className="h-48 w-full object-cover" />
  
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100">{d.nome}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                  Aproveite viagens com até 30% OFF
                </p>
              </div>
            </div>
          ))}
  
        </div>
      </section>
    );
  }
  