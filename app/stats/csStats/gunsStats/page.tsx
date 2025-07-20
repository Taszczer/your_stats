import { userStatsResponse } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GunStats(data:any) {
    console.log(data)

    const statsArray = data.data.playerstats.stats;
    const userData: any = {};

    for (const stat of statsArray) {
        userData[stat.name] = stat.value;
    }

    const gunInfo = {
      guns: {
        pistols: {
          glock: {
            name: "Glock",
            img: "/guns/Glock-18.webp",
            kills: `${userData['total_kills_glock']}`
          },
          deagle: {
            name: "Deagle",
            img: "/guns/Desert_Eagle.webp",
            kills: `${userData['total_kills_deagle']}`
          },
          elite: {
            name: "Dual Berettas",
            img: "/guns/Dual_Berettas.webp",
            kills: `${userData['total_kills_elite']}`
          },
          fiveseven: {
            name: "Fiveseven",
            img: "/guns/Five-SeveN.webp",
            kills: `${userData['total_kills_fiveseven']}`
          },
          p250: {
            name: "P250",
            img: "/guns/P250.webp",
            kills: `${userData['total_kills_p250']}`
          },
          tec9: {
            name: "Tec-9",
            img: "/guns/Tec-9.webp",
            kills: `${userData['total_kills_tec9']}`
          },
          hkp2000: {
            name: "Hkp2000 + usp",
            img: "/guns/P2000.webp",
            kills: `${userData['total_kills_hkp2000']}`
          }
        },
        rifles: {
          ak47: {
            name: "Ak47",
            img: "/guns/AK-47.webp",
            kills: `${userData['total_kills_ak47']}`
          },
          awp: {
            name: "AWP",
            img: "/guns/AWP.webp",
            kills: `${userData['total_kills_awp']}`
          },
          m4a1: {
            name: "M4a1",
            img: "/guns/M4A1-S.webp",
            kills: `${userData['total_kills_m4a1']}`
          },
          galilar: {
            name: "Galil",
            img: "/guns/Galil_AR.webp",
            kills: `${userData['total_kills_galilar']}`
          },
          famas: {
            name: "Famas",
            img: "/guns/FAMAS.webp",
            kills: `${userData['total_kills_famas']}`
          },
          aug: {
            name: "AUG",
            img: "/guns/AUG.webp",
            kills: `${userData['total_kills_aug']}`
          },
          sg556: {
            name: "Sg556",
            img: "/guns/SG_553.webp",
            kills: `${userData['total_kills_sg556']}`
          },
          g3sg1: {
            name: "G3sg1",
            img: "/guns/G3SG1.webp",
            kills: `${userData['total_kills_g3sg1']}`
          },
          scar20: {
            name: "Scar20",
            img: "/guns/SCAR-20.webp",
            kills: `${userData['total_kills_scar20']}`
          },
          ssg08: {
            name: "Ssg08",
            img: "/guns/SSG_08.webp",
            kills: `${userData['total_kills_ssg08']}`
          }
        },
        SMGs: {
          mac10: {
            name: "Mac10",
            img: "/guns/MAC-10.webp",
            kills: `${userData['total_kills_mac10']}`
          },
          mp7: {
            name: "Mp7",
            img: "/guns/MP7.webp",
            kills: `${userData['total_kills_mp7']}`
          },
          mp9: {
            name: "Mp9",
            img: "/guns/MP9.webp",
            kills: `${userData['total_kills_mp9']}`
          },
          bizon: {
            name: "Bizon",
            img: "/guns/PP-Bizon.webp",
            kills: `${userData['total_kills_bizon']}`
          },
          ump45: {
            name: "Ump45",
            img: "/guns/UMP-45.webp",
            kills: `${userData['total_kills_ump45']}`
          },
          p90: {
            name: "P90",
            img: "/guns/P90.webp",
            kills: `${userData['total_kills_p90']}`
          }
        },
        Heavy: {
          nova: {
            name: "Nova",
            img: "/guns/Nova.webp",
            kills: `${userData['total_kills_nova']}`
          },
          xm1014: {
            name: "Xm1014",
            img: "/guns/XM1014.webp",
            kills: `${userData['total_kills_xm1014']}`
          },
          mag7: {
            name: "Mag7",
            img: "/guns/MAG-7.webp",
            kills: `${userData['total_kills_mag7']}`
          },
          sawedoff: {
            name: "Sawedoff",
            img: "/guns/Sawed-Off.webp",
            kills: `${userData['total_kills_sawedoff']}`
          },
          m249: {
            name: "M249",
            img: "/guns/M249.webp",
            kills: `${userData['total_kills_m249']}`
          },
          negev: {
            name: "Negev",
            img: "/guns/Negev.webp",
            kills: `${userData['total_kills_negev']}`
          }
        },
        Other: {
          knife: {
            name: "Knife",
            img: "/guns/Knife.webp",
            kills: `${userData['total_kills_knife']}`
          },
          hegrenade: {
            name: "Hegrenade",
            img: "/guns/Hegrenade.webp",
            kills: `${userData['total_kills_hegrenade']}`
          },
          molotov: {
            name: "Molotov",
            img: "/guns/Molotov.webp",
            kills: `${userData['total_kills_molotov']}`
          },
          taser: {
            name: "Zeus",
            img: "/guns/Zeus_x27.webp",
            kills: `${userData['total_kills_taser']}`
          }
        }
      }
  };
  
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof gunInfo.guns>('pistols');
  const guns = gunInfo.guns[selectedCategory]

    return (
        <>
          <div className="flex flex-col w-full max-w-[400px] md:max-w-full lg:max-w-[1234px] bg-white border-t-[1px] border-r-4 border-b-4 border-l-[1px] rounded-3xl gap-3 xl:gap-4 px-6 py-4 xl:p-6 mb-8"> 
            <h1 className="w-full text-center text-base xl:text-xl font-['Angkor'] text-[#CC9614]">Gun Stats</h1>
            <div className="flex flex-row gap-3 xl:gap-4 items-center flex-wrap">
              <div onClick={() => setSelectedCategory('pistols')} className="cursor-pointer">
              {guns === gunInfo.guns.pistols ?
                <h1 className="text-xl xl:text-2xl font-semibold underline text-[#CC9614]">Pistols</h1>
                :
                <h1 className="text-base xl:text-xl font-semibold text-black">Pistols</h1>
              }
              </div>
            
              <div onClick={() => setSelectedCategory('rifles')} className="cursor-pointer">
              {guns == gunInfo.guns.rifles ? 
                <h1 className="text-xl xl:text-2xl font-semibold underline text-[#CC9614]">Rifles</h1>
                :
                <h1 className="text-base xl:text-xl font-semibold text-black">Rifles</h1>
              }
              </div>
            
              <div onClick={() => setSelectedCategory('SMGs')} className="cursor-pointer">
              {guns === gunInfo.guns.SMGs ?
                <h1 className="text-xl xl:text-2xl font-semibold underline text-[#CC9614]">SMGs</h1>
                :
                <h1 className="text-base xl:text-xl font-semibold text-black">SMGs</h1>                
              }
              </div>
              <div onClick={() => setSelectedCategory('Heavy')} className="cursor-pointer">
              {guns === gunInfo.guns.Heavy ?
                <h1 className="text-xl xl:text-2xl font-semibold underline text-[#CC9614]">Heavy</h1>
                :
                <h1 className="text-base xl:text-xl font-semibold text-black">Heavy</h1>                
              }
              </div>
            
              <div onClick={() => setSelectedCategory('Other')} className="cursor-pointer">
              {guns === gunInfo.guns.Other ?
                <h1 className="text-xl xl:text-2xl font-semibold underline text-[#CC9614]">Other</h1>
                :
                <h1 className="text-base xl:text-xl font-semibold text-black">Other</h1>                
              }
              </div>  
            </div>
            
            <div className="flex flex-wrap flex-row justify-center xl:justify-normal w-full">
            {Object.values(guns).map((gun, key) => (
              <div key={key} className="ml-2 mr-2 lg:ml-5 xl:ml-7 lg:mr-0 mt-3 xl:mt-4 flex flex-col items-center px-3 py-6 gap-3 bg-[#FFF1E6] rounded-3xl border-r-4 border-b-4 border-[1px] w-fit xl:min-w-[178px] xl:w-[178px] border-black">
                <h1 className="text-base xl:text-xl font-['Madimi_One']">{gun.name}</h1>
                <div className="w-[100px] h-[76px] lg:w-[125px] lg:h-[95px] xl:w-[150px] xl:h-[114px]">
                  <Image src={gun.img} alt="gun_image" width={150} height={114} />
                </div>
                <p className="text-base xl:text-xl font-medium">Kills: <span className="font-['Madimi_One'] text-[#CC9614]">{gun.kills}</span></p>
              </div>
            ))}
            </div>
          </div>
        </>
    )
}