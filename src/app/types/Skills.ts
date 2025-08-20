export enum SkillCategory {
    Frontend = "Frontend",
    Backend = "Backend",
    Fullstack = "Fullstack",
    DevOps = "DevOps",
}

export enum SkillLevel {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
}

export enum SkillStatus {
    Active = "active",
    Inactive = "inactive",
    Completed = "completed",
}

export type Skills = {
    id: number;
    name: string;
    category: SkillCategory;
    progress: number; 
    level: SkillLevel;
    status: SkillStatus;
    startDate: string; 
    lastActive: string; 
    totalLessons: number;
    completedLessons: number;
    description: string; 
};