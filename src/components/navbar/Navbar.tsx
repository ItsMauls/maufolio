import { Raleway } from 'next/font/google'
const raleway = Raleway({
    subsets : ['latin'],
    weight : '400'
})

export const Navbar = () => {
    return (
        <nav className="flex justify-between z-10 bg-gray-950 sticky">
            <h1 className={`${raleway.className} text-white p-2 text-xl `}>MAUFOLIO</h1>
        </nav>
    )
}