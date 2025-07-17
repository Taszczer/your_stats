import FriendSkeleton from "./FriendSkeleton";

export default function SideBarSkeleton() {
    return (
        <>
            <div className="flex flex-col items-center h-screen min-w-[360px] bg-white rounded-tr-[24px] rounded-br-[24px] border-r-4 border-gray-200 relative overflow-hidden animate-pulse">
                <div className="flex flex-col gap-7 items-center h-full w-full p-6">
                    <div className="flex flex-col items-center w-full gap-5">
                        <div className="w-[184px] h-[184px] bg-gray-200 rounded-full"></div>
        
                        <div className="flex flex-col items-center gap-2 w-full">
                            <div className="flex items-center justify-center h-8 w-[60%]">
                                <div className="w-full h-full flex bg-gray-200 rounded-xl"></div>
                            </div>   
                            <div className="flex items-start bg-gray-200 h-6 w-[75%] rounded-xl"></div>
                        </div>
        
                        <div className="flex items-start bg-gray-200 h-6 w-[50%] rounded-xl"></div>
                    </div>
        
                    <div className="w-full bg-gray-200 h-[3px] rounded-full"></div>
        
                    <div className="flex flex-col gap-2 items-center text-white font-medium text-center w-full">
                        <div className="flex items-center justify-center h-8 w-[80%]">
                            <div className="w-full h-full flex bg-gray-200 rounded-xl"></div>
                        </div>  
                        <div className="flex items-start bg-gray-200 h-7 w-[45%] rounded-xl"></div>
                        <div className="flex items-start bg-gray-200 h-6 w-[75%] rounded-xl"></div>
                        <div className="flex items-start bg-gray-200 h-6 w-[85%] rounded-xl"></div>
                        <div className="flex items-start bg-gray-200 h-6 w-[55%] rounded-xl"></div>
                    </div>
        
                    <div className="w-full bg-gray-200 h-[3px] rounded-full"></div>
        
                    <div className="w-full">
                        <FriendSkeleton/>
                    </div>
                            
                </div>
            </div>
        </>
    )
}