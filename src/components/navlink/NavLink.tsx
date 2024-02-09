'use client'

import Link from "next/link"
import { ReactNode } from "react"

interface NavLink {
    src : string
    children : ReactNode
}

export const NavLink = (
{
    src,
    children
} : NavLink ) => {
    return (
        <Link href={src}>
            {children}
        </Link>
    )
}