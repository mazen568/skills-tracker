import { fetchSkill, fetchSkills } from '@/app/_services/fetchSkill';
import { notFound } from "next/navigation";

export async function generateStaticParams(){
  const skills=await fetchSkills();
  const skillsIds=skills.map((skill)=>({skillId:String(skill.id)}));
  return skillsIds;
}



export default async function Page({ params }: { params: {skillId:number} }) {
    const {skillId} =  params; 
    const skill=await fetchSkill(skillId);
  
    if(!skill){
      notFound();
    }
  
    return (
    <div>{skillId}</div>
  )
}
