import axios from 'axios';
import { Skills } from '../types/Skills';

export async function fetchSkills(){
    try {
        const response= await axios.get<Skills[]>("http://localhost:3001/skills");
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch skills: ${error}`);
    }
}

export async function fetchSkill(skillId: number) {
    try {
        const response = await axios.get<Skills>(`http://localhost:3001/skills/${skillId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch skill with id ${skillId}: ${error}`);
    }
}


