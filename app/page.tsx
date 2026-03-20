'use client'

import { useState } from 'react'
import { TestLanding } from '@/components/test-landing'
import { TestInterface } from '@/components/test-interface'
import { TestResults } from '@/components/test-result'
import DemografiForm from '@/components/DemografiForm'

export default function Page() {
  const [testState, setTestState] = useState<'landing' | 'Demografi' |'test' | 'results'>('landing')
  const [scores, setScores] = useState<number[]>([])

  const HandleDemografi = () => {
    setTestState('Demografi')
  }

  const handleStartTest = () => {
    setScores(new Array(20).fill(0))
    setTestState('test')
  }

  const handleTestComplete = (finalScores: number[]) => {
    setScores(finalScores)
    setTestState('results')
  }

  const handleRetakeTes = () => {
    setScores(new Array(10).fill(0))
    setTestState('test')
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      {testState === 'landing' && <TestLanding onStart={HandleDemografi} />}
      {testState === 'Demografi' && <DemografiForm onStart={handleStartTest}/>}
      {testState === 'test' && <TestInterface onComplete={handleTestComplete} initialScores={scores} />}
      {testState === 'results' && <TestResults scores={scores} onRetake={handleRetakeTes} />}
    </main>
  )
}
