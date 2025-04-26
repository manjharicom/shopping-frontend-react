"use client"
// components/Sidebar.js
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {navItems} from './nav-items';
import SidebarItem from './sidebar-item2';

export default function Sidebar() {
  //const router = useRouter();
  const [openMenus, setOpenMenus] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true); // State for mobile view
  const pathname = usePathname();

  useEffect(() => {
    // Keep open any menu that contains the active route
    navItems.forEach((item, idx) => {
      if (item.children) {
        const isActive = item.children.some(child =>
          pathname.startsWith(child.href)
        );
        if (isActive) {
          setOpenMenus(prev => ({ ...prev, [idx]: true }));
        }
      }
    });
  }, []);

  const toggleMenu = (idx) => {
    setOpenMenus(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const isActive = (path) => pathname === path;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Hamburger icon on mobile */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
        <button onClick={toggleSidebar} className="text-2xl">
          {sidebarOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } lg:block w-64 bg-gray-800 text-white h-screen p-4 space-y-2 transition-all duration-300 ease-in-out`}
      >
        <ul>
          {navItems.map((item, idx) => (
            <SidebarItem
              key={idx}
              item={item}
              index={idx}
              openMenus={openMenus}
              toggleMenu={toggleMenu}
              isActive={isActive}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}
