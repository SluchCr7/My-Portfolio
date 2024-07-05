'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation'
import MopileNav from './MopileNav'
const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className='text-3xl font-bold'>Sluch<span className='text-accent text-4xl'>.</span></h1>
        </Link>

        {/* nav */}
        <div className='hidden xl:flex items-center gap-6'>
          <NavLinks />
          <Link href={"/contact"} className='btn ml-3'>
            <Button>Get Started</Button>
          </Link>
        </div>


        {/* mobile nav */}
        <div className="xl:hidden"><MopileNav /></div>
      </div>
    </header>
  )
}

export default Header