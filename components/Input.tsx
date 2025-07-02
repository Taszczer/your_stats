'use client'

import { useState } from "react";
import { IoMdSearch  } from "react-icons/io";

export default function Input() {

    const [value, setValue] = useState<string>('')

    const getUserID = (event: { key: string }) => {
        if (event.key === "Enter") {
            console.log(value)
        }
    }

    return (
        <>
            <div className="relative flex min-w-[652px] h-[64px] bg-[#CC9614] border-2 border-r-8 border-b-8 border-black rounded-[28px] px-[24px] items-center">
                <IoMdSearch size="40" color="white" className="absolute pointer-events-none" />
                <input
                    type="number"
                    className="w-full text-white text-3xl pl-[60px] focus:outline-none focus:border-0"
                    placeholder="Enter your SteamID..."
                    maxLength={12}
                    size={12}
                    onKeyDown={getUserID}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
                </input>
            </div>
        </>
    )
}