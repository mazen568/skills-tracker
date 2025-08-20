import { Squares2X2Icon, CheckCircleIcon } from "@heroicons/react/24/solid"


export default function Completed() {
    return (
        <main className="flex justify-around items-center mt-4">
            <div className="flex gap-4 items-center">
                
                <div className=" bg-slate-700 w-8 h-8 rounded-md  flex items-center justify-center mb-5">
                    <Squares2X2Icon className="w-5 h-5" />
                </div>
                <div>
                <div className="font-semibold text-4xl flex flex-col items-start">
                  <span>4</span> 
                  <span className="text-xl">Skills Tracked</span>
                </div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className=" bg-slate-700 w-8 h-8 rounded-md  flex items-center justify-center mb-5">
                    <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-4xl flex flex-col items-start">
                    <span>12</span>
                     <span className="text-xl">Lessons Completed</span>
                </div>

            </div>
        </main>
    )
}
