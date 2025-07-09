'use client'

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { userResponse, User } from "@/lib/types";
import Image from "next/image";
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import FriendList from "./sidebar/friendList/page";
import SideBar from "./sidebar/page";

export default function Stats() {
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
                    <SideBar/>

                    <div>
                    </div>
                </div>
            </>
        )
    }

    return null
}