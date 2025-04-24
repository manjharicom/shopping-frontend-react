"use client"
import React, { useState } from "react";
import { SidebarItem } from './sidebaritem';

import {navItems} from './nav-items';

import { Menu } from "lucide-react";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-800 shadow-sm p-4 transition-all duration-300 ease-in-out ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mb-4 p-2 text-gray-500 hover:text-black dark:hover:text-white"
          >
            <Menu />
          </button>
  
          <div className="space-y-2">
            {navItems.map((item, i) => (
              <SidebarItem key={i} item={item} collapsed={collapsed} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  