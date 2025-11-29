export default function BackgroundTravel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-slate-900 overflow-hidden font-sans transition-colors duration-300">

      <div
        className="absolute w-[140%] h-8 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800
                   rotate-[10deg] top-1/2 left-[-20%] opacity-40 dark:opacity-30 transition-all duration-300"
      ></div>

      <img
        src="./aviao-decolando.png"
        alt="avião"
        className="absolute top-20 right-0 translate-x-1/3 w-[850px] opacity-30 dark:opacity-20
                   pointer-events-none select-none z-20 transition-opacity duration-300"
      />

      <div className="relative z-30">
        {children}
      </div>

    </div>
  );
}
