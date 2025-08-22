export type StatusType={
    totalSkillsTracked: number,
    totalLessonsCompleted: number,
    totalGoalsAchieved: number,
    totalStudyTimeHours: number,
    averageProgressPercentage: number,
    streakDays: number,
    completedVsPending: {
      completed: number,
      pending: number
    }
}