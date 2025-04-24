import {
    Home,
    Settings,
    ShoppingCart,
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
    HousePlus,
    CookingPot,
    NotebookPen,
    Notebook
} from "lucide-react";

export const navItems = [
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
            href: '/shopping-manager/shopping-list/list', 
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
    label: 'Menu Planner',
    icon: <NotebookPen size={18} />,
    children: [
      {
        label: 'Menus',
        icon: <Notebook size={18} />,
        href: '/shopping-manager/menu-planner/menus'
      },
      {
        label: 'Recipes',
        icon: <CookingPot size={18} />,
        href: '/shopping-manager/menu-planner/recipes'
      }
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
