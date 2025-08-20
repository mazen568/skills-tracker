import React from 'react'
import axios from 'axios';
import { log } from 'console';
import DashboardCard from '../components/Dashboard/DashboardCard';
import { Skills } from '../types/Skills';
import { fetchSkills } from '../services/fetchSkill';
import SkillItem from '../components/SkillItem';
export default async function page() {

  const skills: Skills[] = await fetchSkills();
  return (
    <main className='flex flex-col gap-4'>
      <h1 className="text-4xl font-semibold">
        Your Skills
      </h1>
      <div className='grid grid-cols-3 gap-4'>
        {skills.map((skill) =>
        (
          <SkillItem key={skill.id} skill={skill} />
        )
        )}
      </div>
    </main>
  )
}
