"use client"
import React, { useState } from "react";
import {
    Home,
    Settings,
    ShoppingCart,
    Menu,
    Store,
    Search,
    List,
    ListCheck,
    ListEnd,
    ListPlus,
    BadgeDollarSign,
    Component,
    Type,
    DoorOpen,
    Shirt,
    Ruler,
    Trello,
    Cog,
    Merge,
    Wrench,
    HousePlus
} from "lucide-react";
import { SidebarItem } from './sidebaritem';

const navItems = [
    { 
      label: 'Home', 
      href: '/shopping-manager', 
      icon: <Home size={18} /> 
    },
    {
      label: 'Search',
      href: '/shopping-manager/search',
      icon: <Search size={18} />,
    },
    { 
        label: 'Shopping List', 
        icon: <ShoppingCart size={18} />,
        children: [
        {
            label: 'Shopping Lists', 
            href: '/shopping-manager/shopping-list/', 
            icon: <ListEnd size={18} /> 
        },
        {
          label: 'Shopping List Items', 
          href: '/shopping-manager/shopping-list/items', 
          icon: <ListCheck size={18} /> 
        },
        {
            label: 'New Shopping List', 
            href: '/shopping-manager/shopping-list/new', 
            icon: <ListPlus size={18} /> 
        },
        {
            label: 'Shopping List Prices', 
            href: '/shopping-manager/shopping-list/prices', 
            icon: <BadgeDollarSign size={18} /> 
        },
        ]
    },
    {
        label: 'Shops',
        icon: <Store size={18} />,
        children: [
            {
                label: 'Shop List', 
                href: '/shopping-manager/shops/list', 
                icon: <List size={18} /> 
            },
            {
                label: 'Set Shop', 
                href: '/shopping-manager/shops/set', 
                icon: <Wrench size={18} /> 
            },
            {
                label: 'Merge Category/Shop', 
                href: '/shopping-manager/shops/merge', 
                icon: <Merge size={18} /> 
            },
            {
                label: 'New Shop', 
                href: '/shopping-manager/shops/new', 
                icon: <HousePlus size={18} /> 
            },
            ]
    },
    {
        label: 'Items',
        icon: <Component size={18} />,
        children: [
        {
            label: 'Categories', 
            href: '/shopping-manager/items/categories', 
            icon: <Type size={18} /> 
        },
        {
            label: 'Storage Area', 
            href: '/shopping-manager/items/areas', 
            icon: <DoorOpen size={18} /> 
        },
        {
            label: 'Products', 
            href: '/shopping-manager/items/products', 
            icon: <Shirt size={18} /> 
        },
        {
            label: 'Units of Measure', 
            href: '/shopping-manager/items/uoms', 
            icon: <Ruler size={18} /> 
        },
        ]
    },
    {
        label: 'Settings',
        icon: <Settings size={18} />,
        children: [
            {
                label: 'Shop Setup', 
                href: '/shopping-manager/settings/setup', 
                icon: <Cog size={18} /> 
            },
            {
                label: 'Trello', 
                href: '/shopping-manager/settings/trello', 
                icon: <Trello size={18} /> 
            },
            ]
          },
    ];

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
  
        {/* Content placeholder */}
        <div className="flex-1 p-6">
          <h1 className="text-xl font-bold">Main Content</h1>
        </div>
      </div>
    );
  }
  