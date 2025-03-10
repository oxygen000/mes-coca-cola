'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '/dashboard-icon.svg', width: 24.19, height: 24.19 },
    { name: 'Machines', href: '/machines', icon: '/machine-icon.svg', width: 30.26, height: 30.26 },
    { name: 'Planning', href: '/planning', icon: '/planning-icon.svg', width: 33, height: 33 },
    { name: 'Reports', href: '/reports', icon: '/reports-icon.svg', width: 22.39, height: 28.4 }
  ];

  return (
    <div className={`flex h-screen bg-[#F40009] transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[261px]'}`}>
      <aside className="shadow-md p-4 hidden md:flex flex-col justify-between relative">
        <button 
          className="absolute top-5 right-[-15px] bg-white text-[#F40009] rounded-full p-1 shadow-md"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
        </button>
        
        <div>
          <div className='flex items-center justify-center'>
            <Image src="/factoryIcon.svg" alt="Factory Icon" width={27.9} height={20.35} />
            {!isCollapsed && <h1 className="text-xl font-semibold text-white ml-5">MES</h1>}
          </div>

          <nav className="flex-1 flex items-center justify-center mt-8">
            <ul className="space-y-3 w-full font-montserrat font-semibold  text-white text-left">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} 
                    className={`flex items-center px-4 py-2 rounded-r-lg w-full transition duration-300 
                      ${pathname === item.href ? 'bg-[#00000029] opacity-100 font-bold' : 'hover:bg-[#00000069]'}
                    `}>
                    <Image src={item.icon} alt={item.name} width={item.width} height={item.height} className="mr-2 flex-shrink-0 min-w-[24px] min-h-[24px]" />
                    {!isCollapsed && item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <nav className='mb-4 font-montserrat font-semibold  text-white text-left'>
            <ul className="space-y-3">
              <li>
                <Link href="/settings" 
                  className={`flex items-center px-4 py-2 rounded transition duration-300 
                    ${pathname === '/settings' ? 'bg-[#00000029] opacity-100 font-bold' : 'hover:bg-[#00000069]'}
                  `}>
                  <Image src="/setting-icon.svg" alt='Settings' width={29.5} height={29.5} className='mr-2 flex-shrink-0 min-w-[24px] min-h-[24px]' />
                  {!isCollapsed && 'Settings'}
                </Link>
              </li>
              <li>
                <Link href="/login" className="flex items-center px-4 py-2 rounded hover:bg-[#00000069]">
                  <Image src="/logout-icon.svg" alt='Logout' width={31} height={31} className='mr-2 flex-shrink-0 min-w-[24px] min-h-[24px]' />
                  {!isCollapsed && 'Logout'}
                </Link>
              </li>
            </ul>
          </nav>

          <div className='w-full'>
            {!isCollapsed && <Image src="/coca-cola-white.svg" alt='Coca Cola' width={262} height={151} className='w-full object-cover' />}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
