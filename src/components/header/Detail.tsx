import { deets } from "@/data/detail"
import { ReactNode } from "react"
import { GenerateIcon } from "../icon/GenerateIcon"

export const Detail = () => {
    return (
        <div className="grid grid-cols-3 mt-5 text-gray-400">
                    {
                    deets.map((val) : ReactNode => 
                    {
                    return (
                    <>
                    <h1>
                        <span>
                            <GenerateIcon i={val.work.icon}/>
                        </span>
                        {val.work.text}
                    </h1>
                    <h1 className="text-blue-500">
                        <span className="text-white">
                            <GenerateIcon i={val.links.icon}/>
                        </span>
                        {val.links.text}
                    </h1>
                    <h1>
                        <span>
                            <GenerateIcon i={val.birthday.icon}/>
                        </span>
                        {val.birthday.text} 
                    </h1>
                    </>)
                    
                    }
                    )}
                </div>
    )
}