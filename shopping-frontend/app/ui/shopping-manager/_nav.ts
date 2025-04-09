import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    EnvelopeIcon,
    BuildingOfficeIcon,
    ClipboardIcon
  } from '@heroicons/react/24/outline';

const navItems = [
    { 
        name: 'Home', 
        href: '/', 
        icon: HomeIcon 
    },
    {
      name: 'Search',
      href: '/search',
      icon: DocumentDuplicateIcon,
    },
    {
        name: 'Shops',
        href: '/shops',
        icon: BuildingOfficeIcon
    },
    {
        name: 'Shopping List',
        href: '/shops',
        icon: ClipboardIcon,
        subItems: [
            {
                name: "shopping Lists",
                href: "/shopping-list/list",
                icon: BuildingOfficeIcon
            }
        ]
    },
    { 
        name: 'About', 
        href: '/blog/about', 
        icon: UserGroupIcon }
        ,
    { 
        name: 'Contact', 
        href: '/blog/contact', 
        icon: EnvelopeIcon 
    },
  ];

  export default function NavItems(){
    return navItems;
  }