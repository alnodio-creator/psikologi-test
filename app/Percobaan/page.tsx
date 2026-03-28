"use client";

import { TestLanding } from "@/components/test-landing";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const HandleDemografi = () => {
    router.push("/Demografi");
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      <TestLanding onStart={HandleDemografi} />
    </main>
  );
}
