import Image from "next/image"
import { logoLinkedin } from 'ionicons/icons'
import { Button } from "../button/Button"
import { GenerateIcon } from "../icon/GenerateIcon"
import { NavLink } from "../navlink/NavLink"
import { LINKEDIN_PROFILE } from "@/constants/profile"
import { Detail } from "./Detail"
import { NavTab } from "../tab_nav/NavTab"

export const Profile = () => {  
    return (
        <>
        <div className="px-14">
            <div className="flex justify-between">
                <Image 
                    src={'/images/foto_linkedin.png'}
                    alt="Maulana-Ibrahim-Adiputra"
                    className="transform -translate-y-1/2 rounded-full aspect-square border-4 border-white"
                    height={150}
                    width={150}
                />
                <NavLink src={LINKEDIN_PROFILE}>
                    <Button className="bg-blue-500 border-solid hover:border text-white px-4 py-2 my-4 rounded-2xl float-right">
                        Connect
                        <GenerateIcon i={logoLinkedin}/> 
                    </Button>
                </NavLink>
            </div>
            <div className="absolute flex-wrap transform my-4 -translate-y-1/2 text-white">
                <h1 className="text-3xl font-semibold text-wrap">Maulana Ibrahim Adiputra</h1>
                <h2 className="py-2">bring ideas to live with code!</h2>
                <h3>Software Engineer. Frontend Developer. Backend Developer</h3>
                <Detail />
            </div>        
        </div>
        <NavTab />
        </>
    )
}