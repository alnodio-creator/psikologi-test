"use client";

import DemografiForm from "@/components/DemografiForm";
import { TestInterface } from "@/components/test-interface";
import { useTestStore } from "@/store/setScore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [testState, setTestState] = useState<"Demografi" | "test">(
    "Demografi",
  );
  const setScores = useTestStore((state) => state.setScores)
  const [score, setScore] = useState<number[]>([])
  const route = useRouter()
  
  const HandleStartTest = ()=> {
    setScore(new Array(20).fill(0))
    setTestState('test')
  }

  const handleTestComplete = (finalScores: number[]) => {
    setScores(finalScores)
    route.push('/TestResult')
  }
  

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      {testState === "Demografi" && <DemografiForm onStart={HandleStartTest} />}
      {testState === 'test' && <TestInterface onComplete={handleTestComplete} initialScores={score}/>}
    </main>
  );
}
