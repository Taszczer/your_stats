export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const steamId = searchParams.get("id");

  const url = `https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.SECRET_API_KEY}&steamid=${steamId}&relationship=friend`;

  const response = await fetch(url);
  let data;

  try {
    data = await response.json();
  } catch {
    data = { friendslist: null };
  }

  if (!data.friendslist) {
    data.friendslist = { friends: [] };
  }

  return Response.json(data);
}
