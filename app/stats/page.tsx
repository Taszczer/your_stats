'use client'

import { useSearchParams } from "next/navigation"
import SideBar from "./sidebar/page";
import CsStats from "./csStats/page";

export default function Stats() {
    const searchParams = useSearchParams()

    const id = searchParams.get("id")

     return (
        <>
            <div className="flex flex-row bg-[#FFF1E6]">
                <SideBar/>

                 <div className="w-full">
                    <CsStats/>
                 </div>
            </div>
        </>
    )
}
