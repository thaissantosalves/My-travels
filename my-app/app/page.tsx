import BackgroundTravel from '@/components/BackgroundTravel';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Link from 'next/link';

export default function Login() {
  return (

    <BackgroundTravel>
      <div className="flex min-h-screen items-center font-sans">
        <div className="m-12">
          <div className="shadow-2xl shadow-black/30 dark:shadow-slate-900/50 rounded-2xl p-6 bg-white dark:bg-slate-800 m-12 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <div className="flex items-center gap-2" suppressHydrationWarning>
              <h1 className="font-bold text-gray-800 dark:text-slate-100">Seja bem-vindo ao seu sitema de gestão de viagens!</h1>
              <AirplanemodeActiveOutlinedIcon className="text-gray-800 dark:text-slate-100" />
            </div>
            <p className="text-center text-gray-600 dark:text-slate-400">Já possui Login? Acesse ou cadastre-se abaixo</p>

            <div className='m-8 aling-center '>
              <div>
                <h1 className="text-gray-700 dark:text-slate-300">Entre com o seu email abaixo</h1>
                <div className='relative'>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500">
                    <EmailOutlinedIcon className="!text-xl " />
                  </span>
                  <input
                    type="text"
                    className='w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 pl-10 text-gray-900 dark:text-slate-100 outline-none transition focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 placeholder:text-gray-400 dark:placeholder:text-slate-500' 
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-gray-700 dark:text-slate-300">Digite sua senha</h1>
                <div className='relative'>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500">
                    <HttpsOutlinedIcon className="!text-xl" />
                  </span>
                  <input
                    type="password"
                    className='w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 pl-10 text-gray-900 dark:text-slate-100 outline-none transition focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 placeholder:text-gray-400 dark:placeholder:text-slate-500'
                    placeholder="Senha"
                  />
                </div>
              </div>

              <Link href='/home'>
                <button
                  className="w-full mt-6 bg-blue-600 dark:bg-blue-500 text-white font-semibold py-3 rounded-xl
                   hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 transition-all shadow-md dark:shadow-blue-900/30
                   hover:shadow-lg flex items-center justify-center gap-2">
                  Entrar
                </button>
              </Link>


            </div>

            <div className='flex justify-end'>
              <span className="text-gray-600 dark:text-slate-400">Não possui Login? <a href='/register' className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition">Cadastre-se</a></span>
            </div>
          </div>

        </div>

      </div>
    </BackgroundTravel>
  );
}
