"use client";
import { TestResults } from "@/components/test-result";
import { useTestStore } from "@/store/setScore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PageResultTest = () => {
  const route = useRouter();
  const Scores = useTestStore((state) => state.scores);
  const ResetAll = useTestStore((state) => state.resetAll);
  useEffect(() => {
    if (!Scores || Scores.length === 0) {
      route.replace("/Percobaan");
    }
  }, [Scores, route]);

  if (!Scores || Scores.length === 0) return null;
  const handleRetakeTes = () => {
    ResetAll();
    route.push("/Percobaan");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      <TestResults scores={Scores} onRetake={handleRetakeTes} />
    </div>
  );
};

export default PageResultTest;
