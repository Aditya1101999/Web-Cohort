import React  from "react"
export default function layout({children} : {children : React.ReactNode}){
    return <div>
        <div className="border-b text-center">
        20% off for 3 days
        </div>
    {children}
    </div>
}