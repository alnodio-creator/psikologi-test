"use client";

import { useState } from "react";
import { TestLanding } from "@/components/test-landing";
import { TestInterface } from "@/components/test-interface";
import { TestResults } from "@/components/test-result";
import DemografiForm from "@/components/DemografiForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  const [scores, setScores] = useState<number[]>([]);

  const HandleDemografi = () => {
    router.push('/Demografi');
  };

  

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      <TestLanding onStart={HandleDemografi}/>
    </main>
  );
}
