'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdSearch  } from "react-icons/io";

export default function Input() {

    const [value, setValue] = useState<string>('')
    const router = useRouter()

    const getUserID = (event: { key: string }) => {
        if (event.key === "Enter") {
            if (value) {
                router.push(`/stats?id=${value}`)
            }
        }
    }

    return (
        <>
            <div className="relative flex w-[272px] h-8 md:w-[376px] md:h-11 lg:min-w-[652px] lg:h-[64px] bg-[#CC9614] border-[1px] border-r-4 border-b-4 lg:border-2 lg:border-r-8 lg:border-b-8 border-black rounded-xl md:rounded-[28px] lg:rounded-[28px] px-[24px] items-center">
                <IoMdSearch color="white" className="absolute pointer-events-none text-2xl left-6 md:text-[28px] lg:text-[40px]" />
                <input
                    type="text"
                    className="w-full text-white text-[15px] md:text-[20px] lg:text-3xl pl-[36px] md:pl-[48px] lg:pl-[64px] focus:outline-none focus:border-0"
                    placeholder="Enter your SteamID..."
                    onKeyDown={getUserID}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
                </input>
            </div>
        </>
    )
}