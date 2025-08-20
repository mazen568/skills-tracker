"use client"
import React from 'react'
import { HomeIcon, FlagIcon, UserIcon, AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import { Classic } from "@theme-toggles/react"
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { themeActions } from '../store/themeSlice';
import { usePathname } from "next/navigation";
export default function Navigation() {

  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();


  const Links = [
    {
      name: 'Dashboard',
      href: '/',
      icon: <HomeIcon className='w-5 h-5' />
    },
    {
      name: 'Skills',
      href: '/skills',
      icon: <AcademicCapIcon className='w-5 h-5' />

    },
    {
      name: 'Goals',
      href: '/goals',
      icon: <FlagIcon className='w-5 h-5' />

    },
    {
      name: 'Profile',
      href: '/profile',
      icon: <UserIcon className='w-5 h-5' />

    },



  ]


  return (
    <nav className='min-h-screen p-5 flex flex-col justify-between items-start'>
      <div className='flex flex-col gap-10 items-center w-full'>
        <h1 className='mr-4 flex justify-center  items-center gap-4 text-xl font-bold'>
          <BookOpenIcon className='h-8 w-8' />
          <span>Skill Tracker</span>
        </h1>
        <ul className='flex flex-col gap-4 w-full'>
          {Links.map((link) =>
            <li key={link.name} className={`${link.href === pathname ? 'bg-slate-800' : ''} px-4 py-2 rounded-md hover:bg-slate-800 transition-colors`}>
              <Link className='flex gap-4' href={link.href}>
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>)}
        </ul>
      </div>
      <Classic
        toggled={theme === 'light'}
        toggle={() => {
          dispatch(themeActions.toggleTheme());
          localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
        }}
        className="text-2xl"
        {...({} as any)} // Type assertion to bypass the error
      />
    </nav>
  )
}
