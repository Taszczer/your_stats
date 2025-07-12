"use client"

import CustomPieChart from "@/components/PieChart"
import { userStatsResponse } from "@/lib/types"
import { weaponIdMap } from "@/lib/weaponIdMap"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"

export default function CsStats() {

    const searchParams = useSearchParams()

    const id = searchParams.get("id")

    const { data, isPending, isError, error } = useQuery<userStatsResponse>({
        queryKey: ['Stats'],
        queryFn: async () => {
            const res = await axios.get<userStatsResponse>(`/api/steam/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=297EF931003801AA8E111DF1E8FAC18B&steamid=${id}`)
            return res.data
        }
    })
    if (data) {

        const statsArray = data.playerstats.stats;
        const userData: any = {};

        for (const stat of statsArray) {
            userData[stat.name] = stat.value;
        }

        const favWeapon = userData['last_match_favweapon_id']
        const nameOfTheWeapon = weaponIdMap[favWeapon]
        
        const winrate = Math.floor(userData['total_matches_won'] / userData['total_matches_played'] * 100)
        const winRateColors = ['#CC9614', '#F8E4C7']
        const winRateData = [
            { value: winrate },
            { value: 100-winrate}
        ]
        const winRateTextColor = '#CC9614'

        const hittedShots = Math.floor(userData['total_shots_hit'] / userData['total_shots_fired'] * 100)
        const hittedShotsColors = ["#A7780C", "#E6BC74"]
        const hittedShotsData = [
            { value: hittedShots},
            { value: 100-hittedShots}
        ]
        const hittedShotsTextColor = '#A7780C'

        const headShotKills = Math.floor(userData['total_kills_headshot'] / userData['total_kills'] * 100)
        const headShotKillsColors = ['#202020', '#CC9614']
        const headShotKillsData = [
            { value: headShotKills },
            { value: 100-headShotKills}
        ]
        const headShotKillsTextColor = '#202020'

        const betterSideColors = ['#202020', '#CC9614']
        const betterSideData = [
            { value: userData['last_match_t_wins'] },
            { value: userData['last_match_ct_wins'] }
        ]

        return (
            <>
                <div className="flex flex-col items-center justify-center gap-8 px-4 pt-12 w-full">
                    <div className="flex flex-row items-center justify-center gap-8 w-full">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col bg-white min-w-[328px] max-w-[440px] h-[440px] p-6 gap-4 rounded-3xl border-b-4 border-r-4 border-t-[1px] border-l-[1px]">
                                <h1 className="w-full text-center text-xl font-['Angkor'] text-[#CC9614]">Total stats</h1>
                                <ol className="flex flex-col gap-4 text-xl font-medium ">
                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">dropper_eye</span></div>
                                        Kills: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_kills']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">skull</span></div>
                                        Deaths: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_deaths']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">point_scan</span></div>
                                        Damage dealt: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_damage_done']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">social_leaderboard</span></div>
                                        MVPs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_mvps']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">alarm</span></div>
                                        Time played: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{Math.floor(userData['total_time_played'] / 60 / 60)} h</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">bomb</span></div>
                                        Planted bombs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_planted_bombs']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">tools_pliers_wire_stripper</span></div>
                                        Defused bombs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_defused_bombs']}</span>
                                    </li>                                
                                </ol>
                            </div>

                            <div className="flex flex-col bg-white min-w-[328px] max-w-[440px] h-[388px] p-6 gap-4 rounded-3xl border-b-4 items-center border-r-4 border-t-[1px] border-l-[1px]">
                                <h1 className="w-[80%] text-center text-xl font-['Angkor'] text-[#CC9614]">Special Situational Stats</h1>
                                <ol className="flex flex-col gap-4 text-xl font-medium just">
                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">dropper_eye</span></div>
                                        Kills using knife: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_kills_knife']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">visibility_off</span></div>
                                        Blinded enemy killed: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_kills_enemy_blinded']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">cognition_2</span></div>
                                        Headshot kills: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_kills_headshot']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">border_all</span></div>
                                        Broken windows: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_broken_windows']}</span>
                                    </li>

                                    <li className="flex flex-row gap-3 justify-center ">
                                        <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">sword_rose</span></div>
                                        Kills using enemies weapon: <span className="flex items-center h-full text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['total_kills_enemy_weapon']}</span>
                                    </li>                               
                                </ol>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 h-full">
                            <div className="flex flex-row gap-9 bg-white w-[900px] h-[324px] py-4 rounded-3xl border-black border-t-[1px] border-r-4 border-b-4 border-l-[1px]">
                                
                                <div className="flex flex-col gap-4 w-full items-center">
                                    <h1 className="text-xl font-['Madimi_One'] text-black">Win Rate:</h1>
                                    <CustomPieChart percentage={winrate.toString() + ' %'} colors={winRateColors} data={winRateData} textColor={winRateTextColor} size={200} innerRadius={60} outerRadius={90} />
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
                                    <CustomPieChart percentage={hittedShots.toString() + ' %'} colors={hittedShotsColors} data={hittedShotsData} textColor={hittedShotsTextColor} size={200} innerRadius={60} outerRadius={90} />
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
                                    <CustomPieChart percentage={headShotKills.toString() + ' %'} colors={headShotKillsColors} data={headShotKillsData} textColor={headShotKillsTextColor} size={200} innerRadius={60} outerRadius={90} />
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

                            <div className="flex flex-col bg-white h-full max-w-[900px] rounded-3xl border-black border-t-[1px] border-r-4 border-b-4 border-l-[1px] p-6 gap-4">
                                <h1 className="w-full text-center text-xl font-['Angkor'] text-[#CC9614]">Last match stats: </h1>
                                <div className="flex flex-row px-10">
                                    <ol className="flex flex-col gap-4 text-xl font-medium w-full">
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">dropper_eye</span></div>
                                            Kills: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_kills']}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">payments</span></div>
                                            Money spent: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_money_spent']} $</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">crown</span></div>
                                            Match wins: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_wins']}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">social_leaderboard</span></div>
                                            MVPs: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_mvps']}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">humidity_low</span></div>
                                            Dealt damage: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_damage']}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">swords</span></div>
                                            Favorite weapon: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{nameOfTheWeapon}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">arrow_forward</span></div>
                                            {nameOfTheWeapon} kills: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_favweapon_kills']}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">arrow_forward</span></div>
                                            {nameOfTheWeapon} shots: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_favweapon_shots']}</span>
                                        </li>
                                        <li className="flex flex-row gap-3">
                                            <div className="h-full flex items-center"><span className="material-symbols-outlined text-xl scale-[1.1667]">arrow_forward</span></div>
                                            {nameOfTheWeapon} hits: <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">{userData['last_match_favweapon_hits']}</span>
                                        </li>
                                    </ol>

                                    <div className="flex flex-col gap-4 items-center justify-center w-full">
                                        <h1 className="text-xl font-['Madimi_One']">Best side for both teams:</h1>
                                        <CustomPieChart percentage={''} colors={betterSideColors} data={betterSideData} textColor={headShotKillsTextColor} size={250} innerRadius={85} outerRadius={120} />
                                        <div className="flex flex-row gap-3">
                                            <div className="flex flex-row items-center justify-center gap-1">
                                                <div className="w-4 h-4 bg-[#202020] rounded-full"></div>
                                                <p className="text-base font-medium">ct-wins({ userData['last_match_ct_wins']}) </p>
                                            </div>

                                            <div className="flex flex-row items-center justify-center gap-1">
                                                <div className="w-4 h-4 bg-[#CC9614] rounded-full"></div>
                                                <p className="text-base font-medium">t-wins({ userData['last_match_t_wins'] })</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>             
                </div>
            </>
        )   
    }

    return null
}