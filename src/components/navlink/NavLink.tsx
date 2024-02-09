'use client'

import Link from "next/link"
import { ReactNode } from "react"

interface NavLink {
    src : string
    children : ReactNode
    className? : string
}

export const NavLink = (
{
    src,
    children,
    ...props
} : NavLink ) => {
    return (
        <Link href={src} {...props}>
            {children}
        </Link>
    )
}