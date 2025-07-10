export type User = {
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    personaname: string;
    profileurl: string;
    steamid: string;
    loccountrycode: string;
    lastlogoff: number;
    timecreated: number;
    locstatecode?: string;
    personaState: number | string;
    communityvisibilitystate: number;
    gameextrainfo?: string;
    realname?: string;
}

export type userStat = {
    name: string;
    value: number;
}

export type userStatsResponse = {
    playerstats: {
        achievements: any[]
        gameName: string;
        stats: userStat[]
    }
}

export type userResponse = {
    response: {
        players: User[]
    }
}

export type UserFriends = {
    steamid: string;
    relationship: "friend";
    friend_since: number;
}

export type userFriendsResponse = {
    friendslist: {
        friends: UserFriends[]
    }
}

export type oneFriendResponse = {
    response: {
        players: User[]
    }
}

export type userStats = userStatsResponse['playerstats'];