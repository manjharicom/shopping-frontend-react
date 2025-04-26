import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export const SidebarItem = ({ item, collapsed }) => {
    const [open, setOpen] = useState(false);
    const hasChildren = item.children?.length;
  
    return (
      <div>
        <button
          onClick={() => hasChildren && setOpen(!open)}
          className={`flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <span className="flex items-center gap-2">
            {item.icon}
            {!collapsed && item.href &&
                <a href={item.href}>{item.label}</a>
            }
            {!collapsed && !item.href && item.label}
          </span>
          {hasChildren && !collapsed && (
            open ? <ChevronDown size={16} /> : <ChevronRight size={16} />
          )}
        </button>
  
        {hasChildren && open && !collapsed && (
          <div className="pl-8 space-y-1">
            {item.children.map((child, i) => (
              <span key={i} className="flex items-center gap-2">
                {child.icon}
                <a
                    key={i}
                    href={child.href}
                    className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded"
                >
                    {child.label}
                </a>
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };
  