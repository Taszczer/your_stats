import FriendSkeleton from "./FriendSkeleton";

export default function SideBarSkeleton() {
    return (
        <>
            <div className="flex flex-col items-center min-h-[320px] h-[320px] md:h-screen w-screen md:min-w-[220px] md:w-[260px] lg:min-w-[260px] lg:w-[320px] xl:min-w-[300px] xl:w-[450px] rounded-bl-3xl rounded-br-3xl md:rounded-bl-[0px] md:rounded-tr-[24px] md:rounded-br-[24px] border-b-4 md:border-b-0 md:border-r-4 border-gray-200 bg-white relative overflow-hidden animate-pulse">
                <div className="flex flex-col gap-4 lg:gap-7 items-center h-full w-full p-3 pt-9 md:p-3 lg:p-6">
                    <div className="flex flex-row md:flex-col md:items-center gap-4 lg:gap-5 md:w-full">
                        <div className="min-w-[80px] min-h-[80px] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[152px] lg:h-[152px] xl:w-[184px] xl:h-[184px] bg-gray-200 rounded-full"></div>
        
                        <div className="flex flex-col md:items-center justify-center gap-2 w-full">
                            <div className="flex flex-col items-start md:items-center w-full gap-2">
                                <div className="flex items-center justify-center h-8 w-[160px] md:w-[65%]">
                                    <div className="w-full h-full flex bg-gray-200 rounded-xl"></div>
                                </div>   
                                <div className="flex items-start bg-gray-200 h-6 w-[200px] md:w-[80%] rounded-xl"></div>
                            </div>
                                               
                            <div className="flex items-start bg-gray-200 h-6 w-[60%] rounded-xl"></div>
                        </div>
                    </div>
        
                    <div className="w-full bg-gray-200 h-[2px] md:h-[3px] rounded-full flex-shrink-0"></div>
        
                    <div className="flex flex-col gap-2 w-full items-center">
                        <div className="flex items-center justify-center h-8 xl:h-9 w-[200px] md:w-[80%]">
                            <div className="w-full h-full flex bg-gray-200 rounded-xl"></div>
                        </div>

                        <div className="flex flex-row items-center gap-5 md:gap-0 md:mt-2 md:w-full justify-center md:flex-col">
                            <div className="flex flex-col md:items-center gap-2 w-full md:max-w-full">
                                <div className="flex items-start bg-gray-200 h-6 xl:h-8 w-[120px] md:w-[45%] rounded-xl"></div>
                                <div className="flex items-start bg-gray-200 h-6 xl:h-8 w-[120px] md:w-[75%] rounded-xl"></div>
                            </div>

                            <div className="flex flex-col-reverse items-center w-full md:mt-2 gap-2 xl:flex-col md:max-w-full">
                                <div className="flex items-start bg-gray-200 h-6 xl:h-8 w-[120px] md:w-[90%] rounded-xl"></div>
                                <div className="flex items-start bg-gray-200 h-6 xl:h-8 w-[120px] md:w-[75%] rounded-xl"></div>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-full bg-gray-200 h-0 md:h-[3px] rounded-full flex-shrink-0"></div>
        
                    <div className="w-full hidden md:block flex-1 overflow-y-auto">
                        <FriendSkeleton/>
                    </div>
                            
                </div>
            </div>
        </>
    )
}