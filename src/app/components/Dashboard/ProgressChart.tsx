"use client"
import { ProgressType } from '@/app/types/Progress';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

type ProgressChartProps={
  data:ProgressType[]
}
export default  function ProgressChart({data}:ProgressChartProps) {

    return (
        
            <ResponsiveContainer width="100%" height="100%" className="progress-chart ">
                <LineChart
                    data={data}
                    margin={{ top: 3, right: 5, bottom: 5, left: 5 }}
                    style={{ outline: 'none' }}
                >
                    <CartesianGrid stroke="#aaa" strokeWidth={0.5} vertical={false} opacity={0.3} />
                    <XAxis
                        dataKey="date"
                        stroke="white"          
                        axisLine={{ strokeWidth: 0.1 }}
                        tickLine={false}      
                        tick={{ fontSize: 12, fill: 'white' }} 
                    />
                    <Line
                        type="monotone"
                        dataKey="lessonsCompleted"
                        stroke="#4A90E2"
                        strokeWidth={3.5}
                        dot={false}
                        activeDot={false}
                    />
                </LineChart>
            </ResponsiveContainer>

    )
}
