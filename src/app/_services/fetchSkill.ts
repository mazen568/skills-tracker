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
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          return null; // signal that the skill was not found
        }
        throw error; // rethrow other errors
        }
}


