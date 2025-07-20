'use client'

import { useSearchParams } from "next/navigation"
import SideBar from "./sidebar/page";
import CsStats from "./csStats/page";

export default function Stats() {
    const searchParams = useSearchParams()

    const id = searchParams.get("id")

     return (
        <div className="flex flex-col md:flex-row bg-[#FFF1E6] h-screen overflow-y-auto overflow-x-hidden md:overflow-y-hidden">
            <SideBar/>
            <div className="w-full">
                <CsStats/>
            </div>
        </div>
    )
}
