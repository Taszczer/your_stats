export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const steamId = searchParams.get("id");

  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.SECRET_API_KEY}&steamids=${steamId}`;

  const response = await fetch(url);
  const data = await response.json();

  return Response.json(data);
}
