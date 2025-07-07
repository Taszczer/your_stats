'use client'

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { steamApiUserResponse, User } from "@/lib/types";
import Image from "next/image";
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';

export default function Stats() {
    const searchParams = useSearchParams()
    countries.registerLocale(en)

    const id = searchParams.get("id")

    const { data, isPending, isError, error } = useQuery<steamApiUserResponse>({
        queryKey: ['YourStats'],
        queryFn: async () => {
            const res = await axios.get(`/api/steam/ISteamUser/GetPlayerSummaries/v0002/?key=297EF931003801AA8E111DF1E8FAC18B&steamids=76561198968190802`);
            return res.data
        },
    })

    if (data) {
        const user: User = data.response.players[0]; 
        console.log(user)
        const countryName = countries.getName(user.loccountrycode, 'en');

        switch (user.personaState) {
            case 1:
                user.personaState = 'Online';
                break;
            case 2:
                user.personaState = 'Busy';
                break;
            case 3:
                user.personaState = 'Away';
                break;
            case 4:
                user.personaState = 'Snooze';
                break;
            case 5:
                user.personaState = 'Looking to trade';
                break;
            case 6:
                user.personaState = 'Looking to play';
                break;
            default:
                user.personaState = 'Offline';
        }

        return (
            <>
                <div className="flex flex-row bg-[#FFF1E6]">
                    <div className="flex flex-col gap-7 items-center p-[24px] h-screen w-[360px] rounded-tr-[24px] rounded-br-[24px] border-r-4 border-black bg-[#CC9614]">
                        <div className="flex flex-col text-white text-center gap-5">
                            <Image
                                src={`${user.avatarfull}`}
                                alt="profile_pic"
                                width={184}
                                height={184}
                                className=" rounded-full border-r-8 border-b-8 border-l-2 border-t-2 border-black"
                            />

                            <div className="text-center">
                                <h1 className="text-2xl font-['Angkor']">{user.personaname}</h1>
                                <p className="text-base">#{user.steamid}</p>
                            </div>

                            <h1 className="font-bold text-xl">Status: <span className="text-black font-['Madimi_One'] ml-2">{user.personaState}</span></h1>
                        </div>

                        <div className="w-full bg-white h-[3px] rounded-full"></div>

                        <div className="flex flex-col gap-2 text-white text-center">
                            <h1 className="text-2xl font-['Angkor']">{user.realname}</h1>
                            <h2 className="text-xl">{countryName}</h2>
                            <p>Created in: {user.timecreated }</p>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </>
        )
    }

    return null
}