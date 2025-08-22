import React from 'react'
import { Skills } from '@/app/types/Skills';
import { fetchSkills } from '@/app/_services/fetchSkill';
import SkillItem from '@/app/components/SkillItem';
import SkillsList from '@/app/components/SkillsList';
import { Suspense } from 'react';
import Skeleton from '@/app/components/Skeleton';

export const revalidate=500;
export default function page() {


  return (
    <main className='flex flex-col gap-4'>
      <h1 className="text-4xl font-semibold">
        Your Skills
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Suspense fallback={<Skeleton/>}>
          <SkillsList />
        </Suspense>
      </div>
    </main>
  )
}
