import Image from "next/image"
import BannerImg from '@/public/images/METRO.gif'

export const Banner = () => {
    return (
        <>
        <Image 
            src={BannerImg}
            alt="Banner"
        />
        </>
    )
}