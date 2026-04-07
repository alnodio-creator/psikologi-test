'use client'

import { useState} from 'react'
import { Button } from '@/components/ui/button'
import { Card } from './ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const QUESTIONS = [
  {
    id: 1,
    text: 'Saya Bahagia',
    category: 'Burnout'
  },
  {
    id: 2,
    text: 'Saya sangat disibukkan oleh lebih dari satu korban/kasus',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 3,
    text: 'Saya merasa terhubung dengan orang lain',
    category: 'Burnout'
  },
  {
    id: 4,
    text: 'Saya kaget atau terkejut oleh suara-suara yang tidak terduga',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 5,
    text: 'Saya merasa sulit memisahkan kehidupan pribadi saya dari kehidupan saya sebagai tenaga layanan anak',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 6,
    text: 'Saya menjadi kurang produktif dalam bekerja karena kurang tidur akibat terlalu memikirkan pengalaman traumatis korban/kasus saya',
    category: 'Burnout'
  },
  {
    id: 7,
    text: 'Sepertinya saya telah terpengaruh oleh tekanan traumatis dari korban/kasus saya ',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 8,
    text: 'Saya merasa terperangkap dalam pekerjaan saya sebagai tenaga layanan anak',
    category: 'Burnout'
  },
  {
    id: 9,
    text: 'Pekerjaan saya dalam membantu korban membuat saya merasa tegang mengenai berbagai hal',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 10,
    text: 'Saya merasa sangat tertekan karena pengalaman traumatis korban-korban yang saya bantu',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 11,
    text: 'Saya merasa seolah-olah saya mengalami trauma seperti yang korban/kasus saya alami',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 12,
    text: 'Saya memiliki keyakinan atau nilai-nilai yang membuat saya bertahan dalam pekerjaan ini',
    category: 'Burnout'
  },
  {
    id: 13,
    text: 'Saya telah menjadi seseorang yang selalu saya inginkan',
    category: 'Burnout'
  },
  {
    id: 14,
    text: 'Saya merasa sangat lelah dengan pekerjaan saya sebagai tenaga layanan anak',
    category: 'Burnout'
  },
  {
    id: 15,
    text: 'Saya merasa kewalahan karena beban pekerjaan saya seperti tidak ada habisnya',
    category: 'Burnout'
  },
  {
    id: 16,
    text: 'Saya menghindari situasi tertentu karena hal itu  mengingatkan saya terhadap pengalaman korban/kasus saya',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 17,
    text: 'Sebagai akibat dari bantuan saya yang saya berikan, saya memiliki pikiran-pikiran yang mengganggu dan menakutkan',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 18,
    text: 'Saya merasa terperangkap oleh berbagai aspek administratif yang terkait dengan pekerjaan saya sebagai tenaga layanan anak',
    category: 'Burnout'
  },
  {
    id: 19,
    text: 'Saya tidak dapat mengingat bagian-bagian penting dari pekerjaan saya yang berhubungan dengan korban trauma',
    category: 'Secondary Traumatic Stress'
  },
  {
    id: 20,
    text: 'Saya orang yang sangat perhatian',
    category: 'Burnout'
  }
]

interface TestInterfaceProps {
  onComplete: (scores: number[]) => void
  initialScores: number[]
}


const valuepertanyaan = [
  {
    id : 1,
    value: "Tidak Pernah"
},
  {
    id : 2,
    value: "Jarang"
},
  {
    id : 3,
    value: "Kadang-kadang"
},
  {
    id : 4,
    value: "Sering"
},
  {
    id : 5,
    value: "Sangat Sering"
},

]

export function TestInterface({ onComplete, initialScores }: TestInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState(initialScores)
  // Score ini bentuknya [] jadi bisa score[1] artinya sudah dijawab 1 

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
          <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
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
            <h2 className="text-xs text-muted-foreground font-medium">
              {(progress)}% Complete
            </h2>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-10 shadow-lg border-0 bg-white rounded-xl animate-scaleIn">
          <div className="space-y-6">
            {/* Question Text */}
            <div>
              <p className="text-2xl font-semibold text-foreground text-balance leading-relaxed">
                {QUESTIONS[currentQuestion].text}
              </p>
            </div>

            {/* Likert Scale */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground text-center">
                Nilai jawaban Anda dalam skala 1 sampai 5
              </p>
              <div className="flex gap-10 justify-center">
                {valuepertanyaan.map((value,index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(value.id)}
                    className={`
                       w-20 h-15 rounded-lg font-bold text-sm transition-all duration-200
                      ${scores[currentQuestion] === value.id
                        ? 'bg-linear-to-br from-primary to-accent text-white shadow-lg scale-110'
                        : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                      }
                    `}
                  >
                    <p className='text-center'>{value.id}</p>
                    <span className='text-center'>{value.value}</span>

                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground px-1 mt-2">
                <span>Tidak Pernah</span>
                <span>Sangat Sering</span>
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
