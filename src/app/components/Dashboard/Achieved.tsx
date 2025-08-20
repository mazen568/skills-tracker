import { CheckCircleIcon } from "@heroicons/react/24/solid"

export default function Achieved() {
    return (
        <div className="flex gap-4 justify-center mt-4 items-center">
            <div className=" bg-slate-700 w-8 h-8 rounded-md  flex items-center justify-center mb-5">
                    <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-4xl flex flex-col items-start">
                    <span>12</span>
                     <span className="text-xl">Lessons Completed</span>
                </div>

        </div>
    )
}
