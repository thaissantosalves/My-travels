'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: '/home',
      label: 'Home',
      icon: HomeIcon,
    },
    {
      href: '/my-travels',
      label: 'Minhas Viagens',
      icon: FlightIcon,
    },
    {
      href: '/check-tickets',
      label: 'Consultar Passagens',
      icon: LocalAtmOutlinedIcon,
    },
    {
      href: '/profile',
      label: 'Perfil',
      icon: PersonIcon,
    },
  ];

  return (
    <aside className="w-64 h-[calc(100vh-7rem)] rounded-2xl text-zinc-800 dark:text-gray-200 p-6 flex flex-col gap-6 m-6 bg-white dark:bg-gray-800 shadow-2xl shadow-black/30 sticky top-24 overflow-y-auto transition-colors duration-300">
      {/* Nav */}
      <nav className="flex flex-col gap-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href === '/home' && pathname === '/home');
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                  : 'text-zinc-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Icon className="!text-xl" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
