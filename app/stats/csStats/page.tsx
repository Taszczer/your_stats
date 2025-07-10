"use client"

import { userStats, userStatsResponse } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function CsStats() {

    const { data, isPending, isError, error } = useQuery<userStatsResponse>({
        queryKey: ['Stats'],
        queryFn: async () => {
            const res = await axios.get<userStatsResponse>('/api/steam/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=297EF931003801AA8E111DF1E8FAC18B&steamid=76561198968190802')
            console.log(res.data)
            return res.data
        }
    })
    if (data) {
        const user:userStats = data.playerstats
        return (
            <>
                <div className="flex flex-col gap-8 px-4 pt-12">
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col bg-white min-w-[328px] h-[440px] p-6 gap-4 rounded-3xl border-b-4 border-r-4 border-t-[1px] border-l-[1px]">
                                <h1 className="w-full text-center text-xl font-['Angkor'] text-[#CC9614]">Total stats</h1>
                                <ol className="flex flex-col gap-4 text-xl font-medium just">
                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">dropper_eye</span></div>
                                        Kills: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[0].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">skull</span></div>
                                        Deaths: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[1].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">point_scan</span></div>
                                        Damage dealt: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[6].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">social_leaderboard</span></div>
                                        MVPs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[97].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">alarm</span></div>
                                        Time played: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{Math.floor(user.stats[2].value / 60 / 60)} h</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">bomb</span></div>
                                        Planted bombs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[3].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">tools_pliers_wire_stripper</span></div>
                                        Defused bombs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[4].value}</span>
                                    </li>                                
                                </ol>
                            </div>

                            <div className="flex flex-col bg-white min-w-[328px] h-[388px] p-6 gap-4 rounded-3xl border-b-4 items-center border-r-4 border-t-[1px] border-l-[1px]">
                                <h1 className="w-[80%] text-center text-xl font-['Angkor'] text-[#CC9614]">Special Situational Stats</h1>
                                <ol className="flex flex-col gap-4 text-xl font-medium just">
                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">dropper_eye</span></div>
                                        Kills using knife: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[8].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">visibility_off</span></div>
                                        Blinded enemy killed: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[37].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">cognition_2</span></div>
                                        Headshot kills: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[24].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">border_all</span></div>
                                        Broken windows: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[36].value}</span>
                                    </li>

                                    <li className="flex flex-row gap-3 justify-center ">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">sword_rose</span></div>
                                        Kills using enemies weapon: <span className="flex items-center h-full text-[#CC9614] font-['Madimi_One'] mt-[2px]">{user.stats[25].value}</span>
                                    </li>                               
                                </ol>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div>
                            </div>

                            <div></div>
                        </div>
                    </div>             
                </div>
            </>
        )   
    }

    return null
}