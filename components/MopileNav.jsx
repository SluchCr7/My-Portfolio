import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Sheet, SheetTrigger , SheetContent} from './ui/sheet'
const MopileNav = () => {
    const links = [
        {name: "Home",path: "/"},
        {name: "About",path: "/About"},
        {name: "Contact",path: "/Contact"},
        {name: "resume",path: "/resume"},
        { name: "projects", path: "/projects" }
    ]
    const pathname = usePathname()
  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
                </svg>
            </SheetTrigger>
            <SheetContent position="right" size="content">
                <nav className='flex flex-col gap-4 mt-32 mb-40 text-center'>
                {
                    links.map((link, index) => {
                        return (
                            <Link href={link.path} className={`text-lg text-[#a8b2d1] ${link.path === pathname ? 'active' : ''}`} key={index}>
                                {link.name}
                            </Link>
                        )
                    })
                }
                </nav>  
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MopileNav