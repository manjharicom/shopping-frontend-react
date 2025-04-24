"use client"
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
 import Link from 'next/link';
 import clsx from 'clsx';
 import NavItems from './_nav'
  
export function NavLinksOld(){
    const pathname = usePathname();
    return (
        <>
          {NavItems().map((link) => {
            //console.log(link);
            if(link.subItems) {
                link.subItems.map((child) => {
                    const ChildLinkIcon = child.icon;
                    console.log(child);
                    return (
                        <Link 
                            key={child.name}
                            href={child.href}
                            className={clsx(
                              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-100 md:flex-none md:justify-start md:p-2 md:px-3',
                              {
                                'bg-purple-100': pathname===child.href
                              }
                            )}
                        >
                            <ChildLinkIcon className="w-6" />
                            <p className="hidden md:block">{child.name}</p>
                        </Link>
                      );
                    });
            } else {
                const LinkIcon = link.icon;
                return (
                    <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-100 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                        'bg-purple-100': pathname===link.href
                        }
                    )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            }
         })}
    
        </>
      );
}

const navItems = [
  { name: 'Home', href: '/shopping-manager', icon: HomeIcon },
  {
    name: 'Search',
    href: '/shopping-manager/search',
    icon: DocumentDuplicateIcon,
  },
  { 
    name: 'Shopping List', 
    icon: UserGroupIcon,
    children: [
      { 
        name: 'Shopping List Items', 
        href: '/shopping-manager/items', 
        icon: UserGroupIcon },
    ]
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href!}
            className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
          )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
