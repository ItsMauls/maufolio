'use client'

import { usePathname } from "next/navigation"
import { NavLink } from "../navlink/NavLink"

export const NavTab = () => {
    const path = usePathname()
    const feed = path === '/'
    const about = path === '/about'
    const content = path === '/content'
    
    return (
        <div className="mt-24 my-4 w-5/6 text-lg grid grid-cols-3 cursor-pointer mx-auto text-center text-white font-semibold">
            <NavLink src="/">
                <h1 className={`${feed && 'border-b-4 border-blue-500'} hover:bg-gray-800 py-1`}>Feed</h1>
            </NavLink>
        
            <NavLink src='/about'>
                <h1 className={`${about && 'border-b-4 border-blue-500'} hover:bg-gray-800 py-1`}>About</h1>
            </NavLink>

            <NavLink src='/content'>
            <h1 className={`${content && 'border-b-4 border-blue-500'} hover:bg-gray-800 py-1`}>Projects</h1>
            </NavLink>
            
        </div>
    )
}