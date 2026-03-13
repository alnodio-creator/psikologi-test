'use client'

import { useState} from 'react'
import { Button } from '@/components/ui/button'
import { Card } from './ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const QUESTIONS = [
  {
    id: 1,
    text: 'I often feel overwhelmed by daily responsibilities.',
    category: 'stress'
  },
  {
    id: 2,
    text: 'I have trouble concentrating on tasks for extended periods.',
    category: 'focus'
  },
  {
    id: 3,
    text: 'I feel confident in my ability to handle challenges.',
    category: 'resilience'
  },
  {
    id: 4,
    text: 'I experience mood swings throughout the day.',
    category: 'emotional'
  },
  {
    id: 5,
    text: 'I maintain healthy relationships with friends and family.',
    category: 'relationships'
  },
  {
    id: 6,
    text: 'I struggle with anxiety or worry frequently.',
    category: 'anxiety'
  },
  {
    id: 7,
    text: 'I feel satisfied with my personal achievements.',
    category: 'fulfillment'
  },
  {
    id: 8,
    text: 'I have difficulty managing my emotions in stressful situations.',
    category: 'emotional'
  },
  {
    id: 9,
    text: 'I find it easy to adapt to changes in my life.',
    category: 'adaptability'
  },
  {
    id: 10,
    text: 'I feel hopeful about my future.',
    category: 'outlook'
  }
]

interface TestInterfaceProps {
  onComplete: (scores: number[]) => void
  initialScores: number[]
}

export function TestInterface({ onComplete, initialScores }: TestInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState(initialScores)

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100
  const isAnswered = scores[currentQuestion] !== 0

  const handleAnswer = (value: number) => {
    const newScores = [...scores]
    newScores[currentQuestion] = value
    setScores(newScores)
  }

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleComplete = () => {
    if (scores.every(score => score !== 0)) {
      onComplete(scores)
    }
  }

  const allAnswered = scores.every(score => score !== 0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        {/* Progress Section */}
        <div className="space-y-3">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-primary to-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-muted-foreground">
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </h2>
            <span className="text-xs text-muted-foreground font-medium">
              {Math.round(progress)}% Complete
            </span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-lg border-0 bg-white rounded-xl animate-scaleIn">
          <div className="space-y-8">
            {/* Question Text */}
            <div>
              <p className="text-2xl font-semibold text-foreground text-balance leading-relaxed">
                {QUESTIONS[currentQuestion].text}
              </p>
            </div>

            {/* Likert Scale */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground text-center">
                Rate your response on a scale from 1 to 5
              </p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(value)}
                    className={`
                      w-12 h-12 rounded-lg font-bold text-sm transition-all duration-200
                      ${scores[currentQuestion] === value
                        ? 'bg-linear-to-br from-primary to-accent text-white shadow-lg scale-110'
                        : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                      }
                    `}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground px-1 mt-2">
                <span>Strongly Disagree</span>
                <span>Strongly Agree</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation Controls */}
        <div className="flex gap-3 justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentQuestion < QUESTIONS.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              size="lg"
              className="bg-linear-to-r from-primary to-accent hover:shadow-lg text-white gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleComplete}
              disabled={!allAnswered}
              size="lg"
              className="bg-linear-to-r from-primary to-accent hover:shadow-lg text-white"
            >
              Calculate Result
            </Button>
          )}
        </div>

        {/* Question Indicators */}
        <div className="flex flex-wrap gap-2 justify-center">
          {QUESTIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`
                w-8 h-8 rounded-full text-xs font-medium transition-all duration-200
                ${index === currentQuestion
                  ? 'bg-linear-to-br from-primary to-accent text-white shadow-lg'
                  : scores[index] !== 0
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
