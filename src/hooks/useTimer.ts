import { useState, useEffect, useCallback } from 'react'
import type { TimerStatus } from '@/types/quiz'

interface UseTimerProps {
  initialTime: number
  onTimeUp: () => void
  autoStart?: boolean
}

interface UseTimerReturn {
  timeLeft: number
  status: TimerStatus
  start: () => void
  pause: () => void
  reset: () => void
  getTimerColor: () => string
}

export const useTimer = ({ 
  initialTime, 
  onTimeUp, 
  autoStart = true 
}: UseTimerProps): UseTimerReturn => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime)
  const [status, setStatus] = useState<TimerStatus>(autoStart ? 'active' : 'paused')

  const start = useCallback(() => {
    setStatus('active')
  }, [])

  const pause = useCallback(() => {
    setStatus('paused')
  }, [])

  const reset = useCallback(() => {
    setTimeLeft(initialTime)
    setStatus(autoStart ? 'active' : 'paused')
  }, [initialTime, autoStart])

  const getTimerColor = useCallback((): string => {
    if (timeLeft > 15) return 'text-green-500'
    if (timeLeft > 5) return 'text-yellow-500'
    return 'text-red-500'
  }, [timeLeft])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (status === 'active' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setStatus('expired')
            onTimeUp()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [status, timeLeft, onTimeUp])

  return {
    timeLeft,
    status,
    start,
    pause,
    reset,
    getTimerColor,
  }
}