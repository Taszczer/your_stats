"use client"

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { userResponse, User } from "@/lib/types";
import Image from "next/image";
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import FriendList from "./friendList/page";
import SideBarSkeleton from "@/components/skeletons/SideBarSkeleton";

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

    if (isPending) {
        return (
            <SideBarSkeleton/>
        )
    }
    
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
        let lastLogOff = logOffDate.toLocaleDateString("en-GB", {
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

        lastLogOff == 'Invalid Date' && (
            lastLogOff = 'Hidden'
        )

        return (
            <div className=" flex flex-col items-center min-h-[320px] h-[320px] md:h-screen w-screen md:min-w-[220px] md:w-[260px] lg:min-w-[360px] lg:w-[400px] rounded-bl-3xl rounded-br-3xl md:rounded-bl-[0px] md:rounded-tr-[24px] md:rounded-br-[24px] border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#CC9614] relative overflow-hidden">
                <div className="flex flex-col gap-4 lg:gap-7 items-center h-full w-full p-3 pt-9 md:p-3 lg:p-6">
                    <div className="flex flex-row md:flex-col text-white text-center md:items-center gap-4 lg:gap-5">
                        <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[184px] lg:h-[184px]">
                        <Image
                            src={user.avatarfull}
                            alt="profile_pic"
                            fill
                            className="object-cover rounded-full border-r-4 border-b-4 border-[1px] lg:border-r-8 lg:border-b-8 lg:border-l-2 lg:border-t-2 border-black"
                        />
                        </div>  
                        <div className="flex flex-col justify-center">
                            <div className="text-start md:text-center">
                                <h1 className="text-xl lg:text-2xl font-['Angkor']">{user.personaname}</h1>
                                <p className="text-base lg:text-base">#{user.steamid}</p>
                            </div>

                            <h1 className="font-bold text-base text-center lg:text-xl">Status: <span className="text-black font-['Madimi_One'] ml-2">{personaStateLabel}</span></h1>
                        </div>
                    </div>

                    <div className="w-full bg-white h-[2px] md:h-[3px] rounded-full flex-shrink-0"></div>

                    <div className="flex flex-col gap-2 text-base text-white font-medium text-center">
                        <h1 className="text-xl lg:text-2xl font-['Angkor']">{user.realname}</h1>
                        <div className="flex flex-row items-center justify-center md:flex-col">
                            <div className="flex flex-col gap-2 md:gap-1 lg:gap-0 max-w-[40%] md:max-w-full">
                                <h2 className="text-base lg:text-xl md:font-semibold lg:font-medium">{countryName}</h2>
                                <p>Created in: <span className="text-black font-['Madimi_One'] ml-1">{dateOfCreation}</span></p>
                            </div>

                            <div className="flex flex-col-reverse gap-2 md:gap-1 lg:gap-0 lg:flex-col max-w-[40%] md:max-w-full">
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
                        </div>
                    </div>

                    <div className="w-full bg-white h-0 md:h-[3px] rounded-full flex-shrink-0"></div>

                    <div className="w-full hidden md:block flex-1 overflow-y-auto">
                        <FriendList userId={id} />
                    </div>
                    
                </div>
            </div>
        )
    }

    return null
}