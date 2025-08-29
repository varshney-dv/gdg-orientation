export interface Question {
  id: number
  category: string
  question: string
  options: string[]
  correctIndex: number
  correctOption: string
  explanation: string
  timeLimitSec: number
}

export interface QuizState {
  currentQuestion: Question | null
  timeLeft: number
  selectedAnswer: number | null
  showResult: boolean
  isCorrect: boolean
  timeUp: boolean
}

export type QuizAction = 
  | { type: 'SET_QUESTION'; payload: Question }
  | { type: 'TICK_TIMER' }
  | { type: 'SELECT_ANSWER'; payload: number }
  | { type: 'SHOW_RESULT' }
  | { type: 'TIME_UP' }
  | { type: 'RESET' }

export interface WelcomePageProps {
  onStart: () => void
}

export interface QuizPageProps {
  onRestart: () => void
}

export type TimerStatus = 'active' | 'paused' | 'expired'