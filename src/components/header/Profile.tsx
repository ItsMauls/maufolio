import Image from "next/image"
import Me from '@/public/images/foto_linkedin.png'
import { logoLinkedin } from 'ionicons/icons'


import { Button } from "../button/Button"
import { GenerateIcon } from "../icon/GenerateIcon"
import { NavLink } from "../navlink/NavLink"
import { LINKEDIN_PROFILE } from "@/constants/profile"

export const Profile = () => {
    return (
        <>
        <div className="px-14">
            <Image 
                src={Me}
                alt="Maulana-Ibrahim-Adiputra"
                className="absolute transform -translate-y-1/2 rounded-full aspect-square border-4 border-white"
                height={150}
            />
            <NavLink src={LINKEDIN_PROFILE}>
                <Button className="bg-blue-500 border-solid hover:border text-white px-4 py-2 my-4 rounded-2xl float-right">
                    Connect
                    <GenerateIcon i={logoLinkedin}/> 
                </Button>
            </NavLink>
        </div>
        </>
    )
}