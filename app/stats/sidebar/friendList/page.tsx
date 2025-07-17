'use client'

import FriendSkeleton from "@/components/skeletons/FriendSkeleton"
import { oneFriendResponse, User, UserFriends, userFriendsResponse, userResponse } from "@/lib/types"
import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function FriendList(userId: string | any) {
  
  const router = useRouter()
    
  const { data, isPending, isError, error } = useQuery<userFriendsResponse>({
    queryKey: ['FriendList'],
    queryFn: async () => {
        const res = await axios.get(`/api/steam/ISteamUser/GetFriendList/v0001/?key=297EF931003801AA8E111DF1E8FAC18B&steamid=${Object.values(userId)}&relationship=friend`)
        return res.data
    }
  })

  const friendSummaries = useQueries({
    queries: (data?.friendslist.friends || []).map((friend) => ({
      queryKey: ['friendSummary', friend.steamid],
      queryFn: async () => {
        const res = await axios.get<oneFriendResponse>(`/api/steam/ISteamUser/GetPlayerSummaries/v0002/?key=297EF931003801AA8E111DF1E8FAC18B&steamids=${friend.steamid}`)
        return res.data.response.players[0]
    },
    staleTime: 1000 * 60 * 5,
   })),
  })

  const allLoading = friendSummaries.some(q => q.isLoading)
   
  if (isPending || allLoading) {
    return (
      <FriendSkeleton/>
    )    
  }
  
  function findFriend(id?:string) {
    router.push(`/stats?id=${id}`)
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  
  if (data) {

    return (
      <div className="flex flex-col gap-4 w-full items-center">
        <h1 className="text-2xl text-white font-['Angkor']">Your Friend List:</h1>
        <div className="w-full flex flex-col gap-2 overflow-y-auto scrollbar-hide max-h-[560px]">
          {friendSummaries.map((friend, key) =>
          (
            <div
              key={friend.data?.steamid || key}
              onClick={() => findFriend(friend.data?.steamid)}
              className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-black w-full"
            >
              {friend.data?.avatar && (
                <Image
                  src={`${friend.data?.avatar}`}
                  alt="friend-profile-pic"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) }
              <h1 className="font-semibold text-xl">{friend.data?.personaname }</h1>
            </div>
          ))
          }
        </div>
      </div>
    )
  }

  return null
}