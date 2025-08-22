import { ProgressType } from "../types/Progress";
import axios from "axios";
export async function fetchProgress() {
    try {
      const response = await axios.get<ProgressType[]>("http://localhost:3001/progressData");
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to fetch progress: ${error}`);
    }
  }
  
  export async function fetchProgressById(progressId: number) {
    try {
      const response = await axios.get<ProgressType>(`http://localhost:3001/progressData/${progressId}`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null; // progress record not found
      }
      throw error;
    }
  }