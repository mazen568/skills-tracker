import React from 'react'
import DashboardCard from './Dashboard/DashboardCard';
import { Skills } from '../types/Skills';
import Link from 'next/link';
type SkillsItemProps = {
    skill: Skills;
}
export default function SkillItem({skill}: SkillsItemProps) {
    return (
        <DashboardCard >
            <div className='space-y-3'>
                <p className='font-semibold text-2xl'>{skill.name}</p>
                <p className='text-gray-400'>{skill.category} . {skill.level}</p>
                <span className='bg-greenish px-2 py-1 rounded-md'>{skill.status}</span>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
                    <div
                        className="bg-blue-500 h-3 rounded-full w-[85%]"
                    >
                    </div>
                </div>
                <p>{skill.completedLessons} of {skill.totalLessons}</p>
                <p className='text-gray-400'>{skill.description}</p>
                <div className="flex justify-end">
                    <Link href={`skills/${skill.id}`} className='bg-gray-600 px-2 py-1 rounded-md hover:bg-gray-500 transition-colors'>Details</Link>
                </div>
            </div>
        </DashboardCard>
    )
}
