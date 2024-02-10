
import { ReactNode } from "react"
import { Header } from "../header/Header"
import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"

interface Layout {
    children : ReactNode
}

export const Layout = ( 
{ 
    children
} : Layout ) => {
    return (
        <>
        <Navbar />
        <main className="max-w-3xl mx-auto">
            <Header />
            {children}
        </main>
        <Footer/>
        </>
    )
}