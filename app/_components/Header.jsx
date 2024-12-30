"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

function Header() {
  const { data } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
      {/* Logo Section */}
      <div className='flex items-center gap-8'>
        <Link href='/' className='flex items-center'>
          <Image src='/image.png' alt='logo' width={180} height={100} />
        </Link>
      </div>

      {/* Desktop Navigation (Left-aligned) */}
      <div className='hidden md:flex items-center gap-6 ml-8'>
        <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-pointer'>Home</Link>
        <Link href={'/search/CCTV'} className='hover:scale-105 hover:text-primary cursor-pointer'>Services</Link>
        <Link href={'/about'} className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</Link>
      </div>

      {/* Profile Section (Right-aligned on desktop) */}
      <div className='hidden md:flex ml-auto items-center gap-4'>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image src={data?.user?.image} alt='user' width={40} height={40} className='rounded-full' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/mybooking'}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn('descope')} className='bg-blue-500 text-white'>
            Login / Sign Up
          </Button>
        )}
      </div>

      {/* Mobile Hamburger - right side */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-gray-700'>
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10'>
          <div className='flex justify-end p-5'>
            <button onClick={() => setIsMobileMenuOpen(false)} className='text-white'>
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          <div className='flex flex-col items-center bg-white py-10 space-y-6'>
            <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-pointer'>Home</Link>
            <Link href={'/search/CCTV'} className='hover:scale-105 hover:text-primary cursor-pointer'>Services</Link>
            <Link href={'/about'} className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</Link>
            {data?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image src={data?.user?.image} alt='user' width={40} height={40} className='rounded-full' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href={'/mybooking'}>My Booking</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => signIn('descope')} className='bg-blue-500 text-white'>
                Login / Sign Up
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
