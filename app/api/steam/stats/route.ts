export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const url = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=${process.env.SECRET_API_KEY}&steamid=${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return Response.json(data);
}
