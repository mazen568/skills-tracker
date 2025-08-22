import { StatusType } from "../types/Status";
import axios from "axios";
export async function fetchStatus() {
    try {
      const response = await axios.get<StatusType>("http://localhost:3001/stats");
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to fetch progress: ${error}`);
    }
  }
  
  export async function fetchStatusById(statusId: number) {
    try {
      const response = await axios.get<StatusType>(`http://localhost:3001/status/${statusId}`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null; // progress record not found
      }
      throw error;
    }
  }