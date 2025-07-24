"use client";

import CustomPieChart from "@/components/PieChart";
import { userStatsResponse } from "@/lib/types";
import { weaponIdMap } from "@/lib/weaponIdMap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import GunStats from "./gunsStats/page";
import Skeleton from "@/components/skeletons/Skeleton";
import { useState } from "react";
import Image from "next/image";

export default function CsStats() {
  const searchParams = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle1 = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsExpanded2((prev) => !prev);
  };

  const id = searchParams.get("id");

  const { data, isPending, isError, error } = useQuery<userStatsResponse>({
    queryKey: ["Stats"],
    queryFn: async () => {
      const res = await axios.get<userStatsResponse>(
        `/api/steam/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=297EF931003801AA8E111DF1E8FAC18B&steamid=${id}`
      );
      return res.data;
    },
    retry: false,
  });

  if (isPending) {
    return <Skeleton />;
  }

  if (isError) {
    console.log(error);
    return (
      <div className="w-full h-full flex flex-col justify-center items-center mt-6 md:mt-0 gap-5">
        <div className="relative w-[65%] 2xl:w-[700px] aspect-[3/3]">
          <Image
            src="/televisor.png"
            alt="Private_steam_profile"
            fill
            priority
          />
        </div>
        <h1 className="text-4xl max-w-[360px] md:max-w-[500px] lg:text-6xl xl:text-7xl font-dynamo lg:max-w-[60%] 2xl:max-w-[50%] text-center">
          Your Steam profile or game stats are private{" "}
        </h1>
      </div>
    );
  }

  if (data) {
    const statsArray = data.playerstats.stats;
    const userData: Record<string, any> = {};

    for (const stat of statsArray) {
      userData[stat.name] = stat.value;
    }

    const favWeapon = userData["last_match_favweapon_id"];
    const nameOfTheWeapon = weaponIdMap[favWeapon];

    const winrate = Math.floor(
      (userData["total_matches_won"] / userData["total_matches_played"]) * 100
    );
    const winRateColors = ["#CC9614", "#F8E4C7"];
    const winRateData = [{ value: winrate }, { value: 100 - winrate }];
    const winRateTextColor = "#CC9614";

    let totalWeaponHits = 0;
    let totalWeaponShots = 0;

    for (const stat of statsArray) {
      if (stat.name.startsWith("total_hits_")) {
        totalWeaponHits += stat.value;
      }
      if (
        stat.name.startsWith("total_shots_") &&
        !stat.name.includes("fired") &&
        !stat.name.includes("hit")
      ) {
        totalWeaponShots += stat.value;
      }
    }

    const hittedShots = Math.floor((totalWeaponHits / totalWeaponShots) * 100);
    const hittedShotsColors = ["#A7780C", "#E6BC74"];
    const hittedShotsData = [
      { value: hittedShots },
      { value: 100 - hittedShots },
    ];
    const hittedShotsTextColor = "#A7780C";

    const headShotKills = Math.floor(
      (userData["total_kills_headshot"] / userData["total_kills"]) * 100
    );
    const headShotKillsColors = ["#202020", "#CC9614"];
    const headShotKillsData = [
      { value: headShotKills },
      { value: 100 - headShotKills },
    ];
    const headShotKillsTextColor = "#202020";

    const betterSideColors = ["#202020", "#CC9614"];
    const betterSideData = [
      { value: userData["last_match_ct_wins"] },
      { value: userData["last_match_t_wins"] },
    ];

    return (
      <>
        <div className="flex flex-col items-center gap-6 lg:gap-8 px-4 pb-8 lg:py-12 w-full h-[880px] md:h-screen mt-6 md:mt-0 md:overflow-y-auto">
          <div className="w-full flex flex-col items-center-safe h-full">
            <div className="flex flex-col lg:flex-row md:items-start lg:items-center justify-center w-full xl:max-w-full gap-6 md:gap-4 lg:gap-8">
              <div className="flex flex-col md:flex-row lg:flex-col w-full h-full md:pt-4 lg:py-0 items-center md:items-start lg:w-full lg:max-w-[400px] gap-6 md:gap-4 lg:gap-8">
                <div
                  className={`flex flex-col bg-white w-full flex-1 max-w-[400px] lg:h-[558px] lg:max-h-[900px] lg:min-w-[200px] flex-wrap lg:max-w-[400px] px-6 py-4 lg:p-6 gap:3 md:gap-3 lg:gap-4 rounded-3xl border-b-4 border-r-4 border-t-[1px] border-l-[1px]`}
                >
                  <h1 className="w-full text-center text-base xl:text-xl font-['Angkor'] text-[#CC9614]">
                    Total stats
                  </h1>
                  <ol
                    className={`flex flex-col ${isExpanded ? "max-h-[391px]" : "max-h-[144px]"} md:max-h-full overflow-clip gap-3 xl:gap-4 text-base xl:text-xl font-medium`}
                  >
                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          dropper_eye
                        </span>
                      </div>
                      Kills:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_kills"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          skull
                        </span>
                      </div>
                      Deaths:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_deaths"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          point_scan
                        </span>
                      </div>
                      Damage dealt:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_damage_done"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          social_leaderboard
                        </span>
                      </div>
                      MVPs:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_mvps"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          alarm
                        </span>
                      </div>
                      Time played:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {Math.floor(userData["total_time_played"] / 60 / 60)} h
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          bomb
                        </span>
                      </div>
                      Planted bombs:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_planted_bombs"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                          tools_pliers_wire_stripper
                        </span>
                      </div>
                      Defused bombs:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_defused_bombs"]}
                      </span>
                    </li>
                  </ol>
                  <div className="block md:hidden w-full mt-3">
                    <div className="h-full flex justify-center">
                      <span
                        onClick={handleToggle1}
                        className="material-symbols-outlined text-xl scale-[1.3667] cursor-pointer"
                      >
                        {isExpanded
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white w-full flex-1 max-w-[400px] xl:min-w-[328px] xl:max-w-[400px] lg:h-[388px] px-6 py-4 lg:p-6 gap-3 lg:gap-4 rounded-3xl border-b-4 border-r-4 border-t-[1px] border-l-[1px]">
                  <h1 className="w-full text-center text-base xl:text-xl font-['Angkor'] text-[#CC9614]">
                    Special Situational Stats
                  </h1>
                  <ol className="flex flex-col gap-3 lg:gap-4 text-base xl:text-xl font-medium">
                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined xl:scale-[1.1667]">
                          dropper_eye
                        </span>
                      </div>
                      Kills using knife:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_kills_knife"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined xl:scale-[1.1667]">
                          visibility_off
                        </span>
                      </div>
                      Blinded enemy killed:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_kills_enemy_blinded"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined xl:scale-[1.1667]">
                          cognition_2
                        </span>
                      </div>
                      Headshot kills:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_kills_headshot"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined xl:scale-[1.1667]">
                          border_all
                        </span>
                      </div>
                      Broken windows:{" "}
                      <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_broken_windows"]}
                      </span>
                    </li>

                    <li className="flex items-center flex-row gap-3">
                      <div className="h-full flex items-center">
                        <span className="material-symbols-outlined xl:scale-[1.1667]">
                          sword_rose
                        </span>
                      </div>
                      <p className="max-w-[148px] xl:max-w-[200px]">
                        Kills using enemies weapon:
                      </p>{" "}
                      <span className="flex items-center h-full text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                        {userData["total_kills_enemy_weapon"]}
                      </span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-4 xl:gap-6 w-full items-center xl:items-start xl:max-w-[800px] h-full">
                <div
                  className="flex flex-row sm:gap-3 lg:gap-2 xl:gap-3 overflow-clip overflow-x-auto bg-white w-full h-[252px] max-w-[400px] md:max-w-full md:h-fit lg:w-full lg:max-w-full lg:min-w-[550px] p-4 xl:py-4 rounded-3xl border-black 
                                border-t-[1px] border-r-4 border-b-4 border-l-[1px]"
                >
                  <div className="flex flex-col gap-2 xl:gap-4 w-full h-full items-center">
                    <h1 className="text-base xl:text-xl font-['Madimi_One'] text-black">
                      Win Rate:
                    </h1>
                    <div className="w-[180px] h-[180px] md:w-full">
                      <CustomPieChart
                        percentage={winrate.toString() + " %"}
                        colors={winRateColors}
                        data={winRateData}
                        textColor={winRateTextColor}
                      />
                    </div>
                    <div className="flex flex-row gap-3 flex-wrap">
                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="w-4 h-4 bg-[#CC9614] rounded-full"></div>
                        <p className="text-base font-medium">win</p>
                      </div>

                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="w-4 h-4 bg-[#F8E4C7] rounded-full"></div>
                        <p className="text-base font-medium">lose</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 xl:gap-4 w-full h-full items-center">
                    <h1 className="text-base xl:text-xl font-['Madimi_One'] text-black">
                      Hitted shots:
                    </h1>
                    <div className="w-[180px] h-[180px] md:w-full">
                      <CustomPieChart
                        percentage={hittedShots.toString() + " %"}
                        colors={hittedShotsColors}
                        data={hittedShotsData}
                        textColor={hittedShotsTextColor}
                      />
                    </div>
                    <div className="flex flex-row gap-3 flex-wrap">
                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="w-4 h-4 bg-[#A7780C] rounded-full"></div>
                        <p className="text-base font-medium">hitted</p>
                      </div>

                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="w-4 h-4 bg-[#E6BC74] rounded-full"></div>
                        <p className="text-base font-medium">missed</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 xl:gap-4 w-full h-full items-center">
                    <h1 className="text-base xl:text-xl font-['Madimi_One'] text-black">
                      Headshot Kill:
                    </h1>
                    <div className="w-[180px] h-[180px] md:w-full">
                      <CustomPieChart
                        percentage={headShotKills.toString() + " %"}
                        colors={headShotKillsColors}
                        data={headShotKillsData}
                        textColor={headShotKillsTextColor}
                      />
                    </div>
                    <div className="flex flex-row gap-3 justify-center flex-wrap">
                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="w-4 h-4 bg-[#202020] rounded-full"></div>
                        <p className="text-base font-medium">headshot </p>
                      </div>

                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="w-4 h-4 bg-[#CC9614] rounded-full"></div>
                        <p className="text-base font-medium">normal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative flex flex-col bg-white w-full max-w-[400px] lg:w-full ${isExpanded2 ? "h-[672px] max-h-[672px]" : "h-[264px] max-h-[264px]"} md:w-full md:max-w-full md:h-fit md:max-h-full xl:h-[510px] xl:max-h-[510px] xl:max-w-[900px] rounded-3xl border-black border-t-[1px] border-r-4 border-b-4 border-l-[1px] px-6 py-4 lg:p-6 gap-3 lg:gap-4`}
                >
                  <h1 className="w-full text-center text-base xl:text-xl font-['Angkor'] text-[#CC9614]">
                    Last match stats:{" "}
                  </h1>
                  <div
                    className={`flex flex-col md:flex-row xl:px-2 2xl:px-10 ${isExpanded2 ? "h-[564px] max-h-[564px]" : "max-h-[156px]"} md:h-full md:max-h-full items-center overflow-clip`}
                  >
                    <ol
                      className={`flex flex-col gap-3 xl:gap-4 text-base xl:text-xl font-medium w-full overflow-clip`}
                    >
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            dropper_eye
                          </span>
                        </div>
                        Kills:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_kills"]}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            payments
                          </span>
                        </div>
                        Money spent:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_money_spent"]} $
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            crown
                          </span>
                        </div>
                        Match wins:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_wins"]}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            social_leaderboard
                          </span>
                        </div>
                        MVPs:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_mvps"]}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            humidity_low
                          </span>
                        </div>
                        Dealt damage:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_damage"]}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            swords
                          </span>
                        </div>
                        Favorite weapon:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {nameOfTheWeapon}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            arrow_forward
                          </span>
                        </div>
                        {nameOfTheWeapon} kills:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_favweapon_kills"]}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            arrow_forward
                          </span>
                        </div>
                        {nameOfTheWeapon} shots:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_favweapon_shots"]}
                        </span>
                      </li>
                      <li className="flex items-center flex-row gap-3">
                        <div className="h-full flex items-center">
                          <span className="material-symbols-outlined text-xl xl:scale-[1.1667]">
                            arrow_forward
                          </span>
                        </div>
                        {nameOfTheWeapon} hits:{" "}
                        <span className="text-[#CC9614] font-['Madimi_One'] mt-[2px]">
                          {userData["last_match_favweapon_hits"]}
                        </span>
                      </li>
                    </ol>
                    <div className="flex flex-col gap-2 lg:gap-4 w-full mt-4 xl:mt-0 h-full justify-center items-center">
                      <h1 className="text-base xl:text-xl font-['Madimi_One'] text-black">
                        Better Side:
                      </h1>
                      <div className="w-[145px] h-[145px] md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px]">
                        <CustomPieChart
                          percentage=""
                          colors={betterSideColors}
                          data={betterSideData}
                          textColor="#202020"
                        />
                      </div>
                      <div className="flex flex-row gap-3">
                        <div className="flex flex-row items-center justify-center gap-1">
                          <div className="w-4 h-4 bg-[#202020] rounded-full"></div>
                          <p className="text-base font-medium">
                            ct-wins({userData["last_match_ct_wins"]}){" "}
                          </p>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-1">
                          <div className="w-4 h-4 bg-[#CC9614] rounded-full"></div>
                          <p className="text-base font-medium">
                            t-wins({userData["last_match_t_wins"]})
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 md:hidden mt-3">
                      <div>
                        <span
                          onClick={handleToggle2}
                          className="material-symbols-outlined text-xl scale-[1.3667] cursor-pointer"
                        >
                          {isExpanded2
                            ? "keyboard_arrow_up"
                            : "keyboard_arrow_down"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center mt-8">
              <GunStats data={data} />
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
