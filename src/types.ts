export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface User {
  username: string;
  password: string;
}

export interface QuizResult {
  username: string;
  score: number;
  timeSpent: number;
  completedAt: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  timeRemaining: number;
  isComplete: boolean;
}