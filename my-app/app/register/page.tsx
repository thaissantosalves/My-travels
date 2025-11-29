import BackgroundTravel from "@/components/BackgroundTravel";
import Link from "next/link";

export default function register() {

    return (
        <BackgroundTravel>
            <div className="flex min-h-screen justify-center items-center font-sans dark:bg-black">
                <div className="m-12">
                    <div className="shadow-2xl shadow-black/30 rounded-2xl p-6 bg-white m-12">
                        <span className="font-bold">Faça seu primeiro Cadastro abaixo</span>
                        <div className='m-8 aling-center'>
                            <div className="mt-4">
                                <h1>Como podemos te chamar?</h1>
                                <div className='relative'>
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    </span>
                                    <input
                                        type="text"
                                        className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200' />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h1>Digite seu email</h1>
                                <div className='relative'>
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    </span>
                                    <input
                                        type="text"
                                        className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200' />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h1>Digite sua senha</h1>
                                <div className='relative'>
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    </span>
                                    <input
                                        type="text"
                                        className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200' />
                                </div>
                            </div>
                            <Link href='/home'>
                                <button
                                    className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-xl
                                                hover:bg-blue-700 active:scale-95 transition-all shadow-md 
                                                hover:shadow-lg flex items-center justify-center gap-2">
                                    Entrar
                                </button>
                            </Link>
                        </div>

                        <div className='flex justify-end'>
                            <span>Já possui Login? <a href='/' className="text-blue-600 hover:text-blue-800 transition">Volte para acessar</a></span>
                        </div>

                    </div>
                </div>

            </div>
        </BackgroundTravel>
    )

}