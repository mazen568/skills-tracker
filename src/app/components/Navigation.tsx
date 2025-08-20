import React from 'react'
import { HomeIcon, FlagIcon, UserIcon,AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

export default function Navigation() {
  const Links=[
    {
        name: 'Dashboard',
        href: '/',
        icon:<HomeIcon className='w-5 h-5'/>
    },
    {
        name:'Skills',
        href: '/skills',
        icon:<AcademicCapIcon className='w-5 h-5'/>

    },
    {
        name: 'Goals',
        href: '/goals',
        icon:<FlagIcon className='w-5 h-5'/>

    },
    {
        name: 'Profile',
        href: '/profile',
        icon:<UserIcon className='w-5 h-5'/>

    },
    
    

  ]


  return (
    <nav className='border-r-[1px] border-gray-600 min-h-screen p-5  flex flex-col gap-10 items-center  '>
        <h1>Skill Tracker</h1>
      <ul className='flex flex-col gap-4 w-full'>
        {Links.map((link)=>
        
        <li  key={link.name} className='px-5 py-2 rounded-md hover:bg-slate-500 transition-colors'>
             
           <Link className='flex gap-4' href={link.href}>
           <span>{link.icon}</span>
           <span>{link.name}</span>
           </Link>
           

        </li>)}
      </ul>
    </nav>
  )
}
