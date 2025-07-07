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

export type steamApiUserResponse = {
    response: {
        players: User[]
    }
}