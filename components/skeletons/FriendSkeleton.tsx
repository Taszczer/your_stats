export default function FriendSkeleton({friendSummaries}: {friendSummaries: any[]}) {
    return (
        <>
            <div className="flex flex-col gap-4 w-full items-center">
                <div className="flex items-center justify-center h-8 w-[80%]">
                    <div className="w-full h-full flex bg-gray-200 rounded-xl"></div>
                </div>   

                <div className="w-full flex flex-col gap-2 overflow-y-auto scrollbar-hide max-h-[560px]">
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center gap-6 px-4 py-3 bg-white rounded-xl border-[1px] border-r-4 border-b-4 border-gray-200 w-full">   
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        
                        <div className="flex items-start bg-gray-200 h-7 w-[65%] rounded-xl"></div>
                    </div>
                </div>
            </div>
        </>
    )
}