import DashboardCard from "../components/Dashboard/DashboardCard"
import Completed from "../components/Dashboard/Completed"
import Achieved from "../components/Dashboard/Achieved"
import Progress from "../components/Dashboard/Progress"
import Status from "../components/Dashboard/Status"
import { HandRaisedIcon } from "@heroicons/react/24/solid"
import ChartWrapper from "../components/ChartWrapper"
import { fetchProgress } from "../_services/fetchProgress"
import ProgressChart from "../components/Dashboard/ProgressChart"
import { fetchStatus } from "../_services/fetchStatus"
import StatusChart from "../components/Dashboard/StatusChart"



const page = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-4xl flex items-center gap-2 font-semibold">
        <span>Welcome, Mazen</span>
        <HandRaisedIcon className="w-7 h-7 text-yellow-400 mt-2" />
      </h1>
      <div className="grid grid-cols-5 gap-4 ">
        <div className="col-span-3 ">
          <DashboardCard>
            <Completed />
          </DashboardCard>
        </div>
        <div className="col-span-2">
          <DashboardCard>
            <Achieved />
          </DashboardCard>
        </div>
        <div className="col-span-3 row-span-2">
          <DashboardCard >
            <ChartWrapper
              fetchFunction={fetchProgress}
              title="Progress Over Time"
              ChartComponent={ProgressChart}
            />
          </DashboardCard>
        </div>
        <div className="col-span-2">
          <DashboardCard>
            <ChartWrapper
              fetchFunction={fetchStatus}
              title="Completed Vs Pending"
              ChartComponent={StatusChart}
            />
          </DashboardCard>
        </div>
        <div className="col-span-5">
          <DashboardCard />
        </div>
      </div>
    </div>
  )
}

export default page
