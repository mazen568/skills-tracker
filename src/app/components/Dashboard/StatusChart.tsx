"use client"
import { StatusType } from "@/app/types/Status"
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";

type StatusChartProps = {
    data: StatusType
}

export default function StatusChart({ data }: StatusChartProps) {
    console.log(data);
    const StatusData = [
        {
            name: "completed",
            value: data.completedVsPending.completed,
            color: "#6BB6FF" 

        },
        {
            name: "pending",
            value: data.completedVsPending.pending,
            color: "#2E5BBA" 

        }
    ]

    return (

        <ResponsiveContainer width="100%" height="100%" className="progress-chart">
           <PieChart width={600} height={300}>
              <Pie 
               data={StatusData} 
               dataKey="value" 
               cx="50%"    // Center horizontally
               cy="40%"    // Center vertically
               innerRadius={70}
               outerRadius={100}
               label={({name, value}) => `${name} ${value}%`}
               
               >
                {StatusData.map((entry)=><Cell key={entry.color} fill={entry.color}>hello</Cell>)}
                
              </Pie>
              <Tooltip/>
           </PieChart>
        </ResponsiveContainer>
    )
}
