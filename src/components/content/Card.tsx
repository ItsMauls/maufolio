
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface Card {
    pin? : string
    description :string
    title : string
    date : string
    image? : string | StaticImport | any
    link? : boolean | string | any
    w? : number
    h? : number
    linkTitle? : string
}

export const Card = ({
    pin,
    description,
    title,
    date,
    image,
    link,
    w,
    h,
    linkTitle
} : Card) => {
    return (
    <div className='hover:bg-gray-800 rounded-xl p-2 my-4'>
        <header className='flex items-center'>
            <Image
                src={'/images/foto_linkedin.png'}
                alt='Maulana-Ibrahim-Adiputra'
                className='rounded-full aspect-square'
                priority
                width={50}
                height={50}
            />
            <h1 className='px-2 font-semibold text-white'>Ibra<span className='text-gray-300 font-normal text-xs'> {date}</span></h1>
        </header>
        <h1 className='text-2xl font-bold text-white my-1'>{title}</h1>
        <article>
        <p className='text-white my-2'>{description}
        { link &&
            <a href={link} download>
                <span className='text-blue-500 cursor-pointer'> {linkTitle}</span>
            </a> }
        </p>
        </article>
        <Image 
            src={image}
            alt='Me'
            priority
            className='mx-auto rounded-lg'
            width={w || 500}
            height={h || 500}
        />
    </div>
    )
}