'use client'

import React, { useState, useCallback } from 'react'
import WelcomePage from './WelcomePage'
import QuizPage from './QuizPage'

type AppPage = 'welcome' | 'quiz'

const QuizApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('welcome')

  const startQuiz = useCallback(() => {
    setCurrentPage('quiz')
  }, [])

  const restartQuiz = useCallback(() => {
    setCurrentPage('welcome')
  }, [])

  return (
    <div className="font-sans min-h-screen">
      {currentPage === 'welcome' ? (
        <WelcomePage onStart={startQuiz} />
      ) : (
        <QuizPage onRestart={restartQuiz} />
      )}
    </div>
  )
}

export default QuizApp