'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Clock, CheckCircle, XCircle } from 'lucide-react'
import { getRandomQuestion } from '@/data/questions'
import { useTimer } from '@/hooks/useTimer'
import GDGLogo from '@/assets/GDGLOGO.png'
import Image from 'next/image'
import type { Question, QuizPageProps } from '@/types/quiz'

interface OptionButtonProps {
  option: string
  index: number
  isSelected: boolean
  isCorrect: boolean
  showResult: boolean
  onSelect: (index: number) => void
}

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  showResult,
  onSelect
}) => {
  let buttonClass = "w-full p-4 text-left rounded-2xl border-2 transition-all duration-300 font-medium "
  
  if (showResult) {
    if (isCorrect) {
      buttonClass += "bg-green-100 border-green-500 text-green-800"
    } else if (isSelected && !isCorrect) {
      buttonClass += "bg-red-100 border-red-500 text-red-800"
    } else {
      buttonClass += "bg-gray-100 border-gray-300 text-gray-600"
    }
  } else {
    buttonClass += "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800 hover:scale-105 cursor-pointer focus:ring-2 focus:ring-blue-300 focus:outline-none"
  }

  return (
    <button
      onClick={() => onSelect(index)}
      className={buttonClass}
      disabled={showResult}
      type="button"
      aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}`}
    >
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
          {String.fromCharCode(65 + index)}
        </span>
        {option}
      </div>
    </button>
  )
}

const QuizPage: React.FC<QuizPageProps> = ({ onRestart }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [timeUp, setTimeUp] = useState<boolean>(false)

  const handleTimeUp = useCallback(() => {
    setTimeUp(true)
    setShowResult(true)
  }, [])

  const { timeLeft, getTimerColor } = useTimer({
    initialTime: 20,
    onTimeUp: handleTimeUp,
    autoStart: true
  })

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion())
  }, [])

  const handleAnswerSelect = useCallback((index: number) => {
    if (showResult || !currentQuestion) return
    
    setSelectedAnswer(index)
    setIsCorrect(index === currentQuestion.correctIndex)
    setShowResult(true)
  }, [showResult, currentQuestion])

  const handleRestart = useCallback(() => {
    onRestart()
  }, [onRestart])

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading question...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-green-500 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 glass rounded-2xl p-6 shadow-xl">
            <Image src={GDGLogo} alt="GDG Logo" className="h-10 w-10 object-contain" width={40} height={40} />
            {/* <Image src={GDGLogo} alt="GDG Logo" className="h-10 w-10 object-contain" /> */}
            <span className="text-xl font-bold text-gray-800">GDG NITJ Tech Quiz</span>
            <div className={`flex items-center gap-2 text-2xl font-bold ${getTimerColor()}`}>
              <Clock className="w-6 h-6" />
              <span aria-live="polite" aria-label={`${timeLeft} seconds remaining`}>
                {timeLeft}s
              </span>
            </div>
        </header>

        {/* Question Card */}
        <div className="glass rounded-3xl p-8 shadow-2xl animate-slide-up">
          {/* Category Badge */}
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            {currentQuestion.category}
          </div>

          {/* Question */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h1>

          {/* Options */}
          <div className="grid gap-4 mb-8" role="radiogroup" aria-label="Answer options">
            {currentQuestion.options.map((option, index) => (
              <OptionButton
                key={index}
                option={option}
                index={index}
                isSelected={selectedAnswer === index}
                isCorrect={index === currentQuestion.correctIndex}
                showResult={showResult}
                onSelect={handleAnswerSelect}
              />
            ))}
          </div>

          {/* Result Display */}
          {showResult && (
            <div className="text-center animate-fade-in">
              <div className={`inline-flex items-center gap-3 text-2xl font-bold mb-4 ${
                timeUp ? 'text-orange-600' : isCorrect ? 'text-green-600' : 'text-red-600'
              }`}>
                {timeUp ? (
                  <>
                    <Clock className="w-8 h-8" />
                    <span>Time&apos;s Up! ⏰</span>
                  </>
                ) : isCorrect ? (
                  <>
                    <CheckCircle className="w-8 h-8" />
                    <span>Correct! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-8 h-8" />
                    <span>Incorrect! 😅</span>
                  </>
                )}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <p className="text-gray-800 font-medium mb-2">
                  <strong>Explanation:</strong>
                </p>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleRestart}
                  className="btn-secondary px-8 py-3 rounded-full mr-4"
                  type="button"
                >
                  Try Another Question
                </button>
                
                <div className="text-center mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <p className="text-gray-700 font-medium mb-2">
                    Interested in more challenges like this?
                  </p>
                  <p className="text-blue-600 font-bold">
                    Join GDG NITJ and level up your skills! 🚀
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizPage