'use client'

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export default function Stats() {
    const searchParams = useSearchParams()

    const id = searchParams.get("id")
    console.log(id)

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['YourStats'],
        queryFn: async () => {
            const res = await axios.get(`/api/steam/ISteamUser/GetPlayerSummaries/v0002/?key=297EF931003801AA8E111DF1E8FAC18B&steamids=76561198968190802`);
            console.log(res.data)
            return res.data
        },
    })
    return (
        <>
            <p>Your id: { id }</p>
        </>
    )
}