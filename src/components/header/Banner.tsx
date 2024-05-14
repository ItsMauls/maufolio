import Image from "next/image"

export const Banner = () => {
    return (
        <>
        <Image 
            src={'/images/METRO.gif'}
            alt="Banner"
            width={800}
            height={800}
            priority
        />
        </>
    )
}