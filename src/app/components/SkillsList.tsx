import SkillItem from "./SkillItem";
import { fetchSkills } from "../_services/fetchSkill";
export default async function SkillsList() {

    const skills = await fetchSkills();
    return (
        <>
            {skills.map((skill) =>
            (
                <SkillItem key={skill.id} skill={skill} />
            )
            )}
        </>
    )
}
