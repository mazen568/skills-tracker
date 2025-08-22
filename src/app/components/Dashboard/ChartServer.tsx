import { fetchSkills } from '@/app/_services/fetchSkill'
import React from 'react'
import ProgressChart from './ProgressChart'
import { fetchProgress } from '@/app/_services/fetchProgress'
type ChartServerProps<T>={
    ChartComponent: React.ComponentType<{ data: T }>;
    fetchFunction: () => Promise<T>;
}
export default async function ChartServer<T>({fetchFunction,ChartComponent}:ChartServerProps<T>) {
    const data = await fetchFunction()
    
    return (

        <ChartComponent 
          data={data}
          />
    )
}
