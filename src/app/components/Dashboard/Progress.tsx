import { Suspense } from "react"
import ChartServer from "./ChartServer";
import Spinner from "../Spinner";


export default async function Progress() {

  return (
    <div className="w-full h-80  rounded-lg  pb-16 px-5 " >
      <h3 className="text-white text-lg font-medium mb-10">Progress Over Time</h3>
      <Suspense fallback= { <div className="flex justify-center h-full mt-20">
        <Spinner size={90}/>
      </div> }>
        <ChartServer />
      </Suspense>
    </div>
  )
}
