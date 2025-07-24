"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GlobalNotFound() {
  const router = useRouter();

  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-10">
      <div className="relative w-full hidden md:block md:max-w-[500px] lg:max-w-[600px] aspect-[11/15]">
        <Image
          src="/404.png"
          alt="404_image"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-3xl text-center flex flex-col items-center gap-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-futura">
          <span className="text-[#A7780C]">KABOOM!</span> <br />
          You’ve just fired a blank :(
        </h1>

        <p className="font-medium text-base sm:text-lg md:text-xl xl:text-2xl max-w-[600px]">
          The page you’re looking for has misfired or was disarmed and
          decommissioned.
        </p>

        <p className="font-medium text-base sm:text-lg md:text-xl xl:text-2xl max-w-[600px]">
          Lock and load a new URL or retreat safely return to{" "}
          <span
            className="cursor-pointer underline text-[#A7780C]"
            onClick={() => router.push("/")}
          >
            HomePage
          </span>
        </p>

        <h1 className="font-futura text-6xl sm:text-7xl lg:text-8xl 2xl:text-[156px] mt-[-4px]">
          4<span className="text-[#A7780C]">0</span>4
        </h1>
      </div>
    </div>
  );
}
