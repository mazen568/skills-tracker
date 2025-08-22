import { fetchSkill } from '@/app/_services/fetchSkill';
import React from 'react'

export default async function Page({ params }: { params: Promise<{skillId:number}> }) {
    const {skillId} = await params; 
    const skill=await fetchSkill(skillId);
  console.log(skill);
  
    return (
    <div>{skillId}</div>
  )
}
