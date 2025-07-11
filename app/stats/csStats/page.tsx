"use client"

import CustomPieChart from "@/components/PieChart"
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
        const user: userStats = data.playerstats
        
        const winrate = Math.floor(user.stats[105].value / user.stats[106].value * 100)
        const winRateColors = ['#CC9614', '#F8E4C7']
        const winRateData = [
            { value: winrate },
            { value: 100-winrate}
        ]
        const winRateTextColor = '#CC9614'

        const hittedShots = Math.floor(user.stats[43].value / user.stats[44].value * 100)
        const hittedShotsColors = ["#A7780C", "#E6BC74"]
        const hittedShotsData = [
            { value: hittedShots},
            { value: 100-hittedShots}
        ]
        const hittedShotsTextColor = '#A7780C'

        const headShotKills = Math.floor(user.stats[24].value / user.stats[0].value * 100)
        const headShotKillsColors = ['#202020', '#CC9614']
        const headShotKillsData = [
            { value: headShotKills },
            { value: 100-headShotKills}
        ]
        const headShotKillsTextColor = '#202020'

        return (
            <>
                <div className="flex flex-col items-center gap-8 px-4 pt-12 w-full">
                    <div className="flex flex-row gap-8 w-full">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col bg-white min-w-[328px] max-w-[440px] h-[440px] p-6 gap-4 rounded-3xl border-b-4 border-r-4 border-t-[1px] border-l-[1px]">
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

                        <div className="flex flex-col gap-8 w-full h-full">
                            <div className="flex flex-row gap-9 bg-white w-full min-w-[700px] max-w-[900px] h-[324px] py-4 rounded-3xl border-black border-t-[1px] border-r-4 border-b-4 border-l-[1px]">
                                
                                <div className="flex flex-col gap-4 w-full items-center">
                                    <h1 className="text-xl font-['Madimi_One'] text-black">Win Rate:</h1>
                                    <CustomPieChart percentage={winrate} colors={winRateColors} data={winRateData} textColor={winRateTextColor} />
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <div className="w-4 h-4 bg-[#CC9614] rounded-full"></div>
                                            <p className="text-base font-medium">win</p>
                                        </div>

                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <div className="w-4 h-4 bg-[#F8E4C7] rounded-full"></div>
                                            <p className="text-base font-medium">lose</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 w-full items-center">
                                    <h1 className="text-xl font-['Madimi_One'] text-black">Hitted shots:</h1>
                                    <CustomPieChart percentage={hittedShots} colors={hittedShotsColors} data={hittedShotsData} textColor={hittedShotsTextColor} />
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <div className="w-4 h-4 bg-[#A7780C] rounded-full"></div>
                                            <p className="text-base font-medium">hitted</p>
                                        </div>

                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <div className="w-4 h-4 bg-[#E6BC74] rounded-full"></div>
                                            <p className="text-base font-medium">missed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 w-full items-center">
                                    <h1 className="text-xl font-['Madimi_One'] text-black">Headshot Kill:</h1>
                                    <CustomPieChart percentage={headShotKills} colors={headShotKillsColors} data={headShotKillsData} textColor={headShotKillsTextColor} />
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <div className="w-4 h-4 bg-[#202020] rounded-full"></div>
                                            <p className="text-base font-medium">headshot </p>
                                        </div>

                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <div className="w-4 h-4 bg-[#CC9614] rounded-full"></div>
                                            <p className="text-base font-medium">normal</p>
                                        </div>
                                    </div>
                                </div>
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