"use client";

import toast from "react-hot-toast";

export function showCustomToast() {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-[280px] md:max-w-[448px] w-full bg-white shadow-lg rounded-xl pointer-events-auto flex flex-col p-4 border-black border-[1px] border-r-4 border-b-4`}
      >
        <div className="flex items-start">
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-[#A7780C]">
              Get Started with Your Stats
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Enter your Steam ID to view your personalized CS2 statistics.
              <br />
              Make sure your Steam profile and game stats are set to{" "}
              <span className="text-md font-bold text-[#A7780C]">public!</span>
            </p>
          </div>
        </div>
      </div>
    ),
    {
      id: "cs2-info-toast",
      duration: 6000,
    }
  );
}

export function hideCustomToast() {
  toast.dismiss("cs2-info-toast");
}
