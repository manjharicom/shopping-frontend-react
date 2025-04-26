// components/SidebarItem.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Importing icons from lucide-react

export default function SidebarItem({ item, index, openMenus, toggleMenu, isActive }) {
  const router = useRouter();

  // Use an icon based on whether the item is a regular link or a collapsible menu
  const getIcon = () => {
    if (item.children) {
      return openMenus[index] ? <ChevronUp className="inline-block ml-2" /> : <ChevronDown className="inline-block ml-2" />;
    }
    return null; // No icon for regular links
  };

  return (
    <li>
      {item.children ? (
        <>
          <button
            onClick={() => toggleMenu(index)}
            className={`w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${
              openMenus[index] ? 'font-semibold' : ''
            }`}
          >
            {item.label}
            {getIcon()}
          </button>
          {openMenus[index] && (
            <ul className="ml-4 mt-1 space-y-1">
              {item.children.map((child, cIdx) => (
                <li key={cIdx}>
                  <a
                    href={child.path}
                    className={`block px-3 py-1 rounded hover:bg-gray-700 ${
                      isActive(child.href) ? 'bg-blue-600 text-white' : 'text-gray-300'
                    }`}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <a
          href={item.href}
          className={`block px-3 py-2 rounded hover:bg-gray-700 ${
            isActive(item.href) ? 'bg-blue-600 text-white' : 'text-gray-300'
          }`}
        >
          {item.label}
        </a>
      )}
    </li>
  );
}
