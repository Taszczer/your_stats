"use client"

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { userResponse, User } from "@/lib/types";
import Image from "next/image";
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import FriendList from "./friendList/page";

export default function SideBar() {

    const searchParams = useSearchParams()
    countries.registerLocale(en)

    const id = searchParams.get("id")

    const { data, isPending, isError, error } = useQuery<userResponse>({
        queryKey: ['YourStats'],
        queryFn: async () => {
            const res = await axios.get(`/api/steam/ISteamUser/GetPlayerSummaries/v0002/?key=297EF931003801AA8E111DF1E8FAC18B&steamids=${id}`);
            return res.data
        },
    })
    
    if (data) {
        const user: User = data.response.players[0];
        const countryName = countries.getName(user.loccountrycode, 'en');

        const date = new Date(user.timecreated * 1000);
        const dateOfCreation = date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })

        const logOffDate = new Date(user.lastlogoff * 1000)
        const lastLogOff = logOffDate.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        })

        let personaStateLabel;
        switch (user.personastate) {
            case 1:
                personaStateLabel = 'Online';
                break;
            case 2:
                personaStateLabel = 'Busy';
                break;
            case 3:
                personaStateLabel = 'Away';
                break;
            case 4:
                personaStateLabel = 'Snooze';
                break;
            case 5:
                personaStateLabel = 'Looking to trade';
                break;
            case 6:
                personaStateLabel = 'Looking to play';
                break;
            default:
                personaStateLabel = 'Offline';
        }

        return (
            <div className="flex flex-col items-center h-screen min-w-[360px] rounded-tr-[24px] rounded-br-[24px] border-r-4 border-black bg-[#CC9614] relative overflow-hidden">
                <div className="flex flex-col gap-7 items-center h-full w-full p-6">
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

                        <h1 className="font-bold text-xl">Status: <span className="text-black font-['Madimi_One'] ml-2">{personaStateLabel}</span></h1>
                    </div>

                    <div className="w-full bg-white h-[3px] rounded-full"></div>

                    <div className="flex flex-col gap-2 text-base text-white font-medium text-center">
                        <h1 className="text-2xl font-['Angkor']">{user.realname}</h1>
                        <h2 className="text-xl font-medium">{countryName}</h2>
                        <p>Created in: <span className="text-black font-['Madimi_One'] ml-1">{dateOfCreation}</span></p>
                        <p>Last log off: <span className="text-black font-['Madimi_One'] ml-1">{lastLogOff}</span></p>
                        {user.gameextrainfo ? (
                            <>
                                <p>Currently is playing: <span className="text-black ml-1 font-['Madimi_One']">{user.gameextrainfo}</span></p>
                            </>
                        ) : (
                            <>
                                <p>Currently is not playing</p>
                            </>
                        )}
                    </div>

                    <div className="w-full bg-white h-[3px] rounded-full"></div>

                    <div className="w-full">
                        <FriendList userId={id} />
                    </div>
                    
                </div>
            </div>
        )
    }

    return null
}