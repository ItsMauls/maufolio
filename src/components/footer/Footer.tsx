import { GenerateIcon } from "../icon/GenerateIcon"
import { Icon } from "@/data/logo"

export const Footer = () => {
    return (
        <footer className="bottom-0 mx-auto text-white text-center my-4">
            { Icon.map((i,idx) => {
                return <GenerateIcon
                    key={idx}
                    url={i.url}
                    className="text-3xl hover:bg-gray-500 cursor-pointer p-3 rounded-lg"
                    i={i.name}/>
            })}
            <div className="text-xs text-gray-300">
            ibra ©
            <span>2024</span>    
            </div>     
        </footer>
    )
}