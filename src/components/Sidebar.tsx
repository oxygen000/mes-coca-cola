'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname(); 

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '/dashboard-icon.svg', width: 24.19, height: 24.19 },
    { name: 'Machines', href: '/machines', icon: '/machine-icon.svg', width: 30.26, height: 30.26 },
    { name: 'Planning', href: '/planning', icon: '/planning-icon.svg', width: 33, height: 33 },
    { name: 'Reports', href: '/reports', icon: '/reports-icon.svg', width: 22.39, height: 28.4 }
  ];

  return (
    <div className='flex h-screen bg-[#F40009]'>
      <aside className="w-[261px] shadow-md p-4 hidden md:flex flex-col justify-between">
        <div>
        <div className='flex items-center justify-center'>
  <Image src="/factoryIcon.svg" alt="Factory Icon" width={27.9} height={20.35} />
  <h1 className="text-xl font-semibold text-white ml-5">MES</h1>
</div>


          <nav className="flex-1 flex items-center justify-center mt-8">
            <ul className="space-y-3 w-full font-montserrat font-semibold text-[16px] leading-[19px] tracking-[0px] text-white opacity-100 text-left">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={`flex items-center px-4 py-2 rounded-r-lg w-full
  ${pathname === item.href ? '"w-[243px] h-[45px] bg-[#00000029] opacity-100 font-bold' : 'hover:bg-[#ffffff1a]'}`}>
  <Image src={item.icon} alt={item.name} width={item.width} height={item.height} className="mr-2"/>
  {item.name}
</Link>

                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <nav className='mb-4 font-montserrat font-semibold text-[16px] leading-[19px] tracking-[0px] text-white opacity-100 text-left'>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/settings" className={`flex items-center px-4 py-2 rounded 
                  ${pathname === '/settings' ? '"w-[243px] h-[45px] bg-[#00000029] opacity-100 font-bold' : 'hover:bg-[#ffffff1a]'}`}>
                  <Image src="/setting-icon.svg" alt='Settings' width={29.5} height={29.5} className='mr-2'/> Settings
                </Link>
              </li>
              <li>
                <Link href="/login" className="flex items-center px-4 py-2 rounded hover:bg-[#ffffff1a]">
                  <Image src="/logout-icon.svg" alt='Logout' width={31} height={31} className='mr-2'/> Logout
                </Link>
              </li>
            </ul>
          </nav>

          <div className='w-full'>
            <Image src="/coca-cola-white.svg" alt='Coca Cola' width={262} height={151} className='w-full object-cover' />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
