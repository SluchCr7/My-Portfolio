'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLinks = () => {
  const Links = [
    {name: "Home",path: "/"},
    {name: "Services",path: "/About"},
    {name: "resume",path: "/resume"},
    { name: "projects", path: "/projects" },
    {name: "Contact",path: "/Contact"}
  ]
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className='flex items-center gap-4'>
      {
        Links.map((link, index) => {
          return (
            <Link href={link.path} className={`${link.path === pathname ? 'active' : ''}`} key={index}>
              {link.name}
            </Link>
          )
      })}
    </nav>
  )
}

export default NavLinks